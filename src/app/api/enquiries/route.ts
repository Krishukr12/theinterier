import { NextResponse } from "next/server";
import { parseEnquiry } from "@/lib/enquiry";
import { getContactDetails } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "The request was not valid JSON. Nothing was submitted." },
      { status: 400 },
    );
  }

  const parsed = parseEnquiry(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { error: "Please correct the highlighted fields.", errors: parsed.errors },
      { status: 400 },
    );
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json(
      { error: "Unable to submit this enquiry." },
      { status: 400 },
    );
  }

  const webhook = process.env.FORM_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const contact = getContactDetails();
  const toEmail =
    process.env.ENQUIRY_TO_EMAIL?.trim() || contact.email || undefined;

  if (!webhook && !(resendKey && toEmail)) {
    return NextResponse.json(
      {
        error: toEmail
          ? `Enquiry delivery is not configured yet. Please email ${toEmail} instead. Nothing was recorded as submitted.`
          : "Enquiry delivery is not configured yet (set FORM_WEBHOOK_URL or RESEND_API_KEY). Nothing was recorded as submitted.",
        code: "NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const payload = {
    source: "theinterier-website",
    submittedAt: new Date().toISOString(),
    ...parsed.data,
  };

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.FORM_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.FORM_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        return NextResponse.json(
          {
            error:
              "The enquiry could not be delivered to the configured inbox. Please try again, or use the contact email if one is published.",
          },
          { status: 502 },
        );
      }
    } else if (resendKey && toEmail) {
      const from = process.env.ENQUIRY_FROM_EMAIL?.trim();
      if (!from) {
        return NextResponse.json(
          {
            error:
              "RESEND_API_KEY is set but ENQUIRY_FROM_EMAIL is missing. Nothing was sent.",
            code: "NOT_CONFIGURED",
          },
          { status: 503 },
        );
      }
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [toEmail],
          subject: `[The Interier] ${parsed.data.kind} enquiry from ${parsed.data.name}`,
          text: JSON.stringify(payload, null, 2),
        }),
      });
      if (!response.ok) {
        return NextResponse.json(
          {
            error:
              "The enquiry email could not be sent. Please try again, or use the published contact email.",
          },
          { status: 502 },
        );
      }
    }
  } catch {
    return NextResponse.json(
      { error: "A network error stopped the enquiry from being sent. Nothing was confirmed as received." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. Your enquiry was delivered and we will follow up.",
  });
}
