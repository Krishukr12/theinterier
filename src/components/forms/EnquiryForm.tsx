"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  budgetRanges,
  indianCities,
  professionalRoles,
  projectTypes,
  propertyTypes,
  specializations,
  timelines,
} from "@/content/site";
import type { EnquiryKind } from "@/lib/enquiry";

type EnquiryFormProps = {
  kind: EnquiryKind;
  submitLabel: string;
  contactEmail?: string | null;
};

type Status = "idle" | "loading" | "success" | "error";

export function EnquiryForm({ kind, submitLabel, contactEmail }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    setErrors({});

    const form = new FormData(event.currentTarget);
    const payload: Record<string, unknown> = {
      kind,
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      city: form.get("city"),
      message: form.get("message"),
      consent: form.get("consent") === "on",
      companyWebsite: form.get("companyWebsite"),
      firmName: form.get("firmName"),
      role: form.get("role"),
      website: form.get("website"),
      specializations: form.getAll("specializations"),
      projectType: form.get("projectType"),
      propertyType: form.get("propertyType"),
      budget: form.get("budget"),
      timeline: form.get("timeline"),
      topic: form.get("topic"),
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        error?: string;
        errors?: Record<string, string>;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrors(data.errors ?? {});
        setMessage(
          data.error ??
            (contactEmail
              ? `We could not send this just now. Email ${contactEmail} instead.`
              : "We could not send this enquiry. Nothing was recorded as a successful submission."),
        );
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Thank you. We have received your enquiry and will follow up.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(
        contactEmail
          ? `The form could not reach the server. Email ${contactEmail} if this continues.`
          : "The form could not reach the server. Nothing was submitted.",
      );
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-sm border border-graphite/15 bg-white px-3 py-2.5 text-sm text-graphite outline-none transition focus:border-terracotta";
  const labelClass = "block text-sm font-medium text-graphite";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input
        type="text"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input id="name" name="name" required autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            className={fieldClass}
          />
        </Field>
        <Field label={kind === "customer" ? "City of the project" : "City"} error={errors.city}>
          <select id="city" name="city" className={fieldClass} defaultValue="" required={kind !== "contact"}>
            <option value="" disabled>
              Select a city
            </option>
            {indianCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {(kind === "professional" || kind === "early-access") && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Studio or firm name" error={errors.firmName}>
              <input id="firmName" name="firmName" required className={fieldClass} />
            </Field>
            <Field label="Your role" error={errors.role}>
              <select id="role" name="role" className={fieldClass} defaultValue="">
                <option value="">Select a role</option>
                {professionalRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Website or portfolio (optional)" error={errors.website}>
            <input id="website" name="website" type="url" placeholder="https://" className={fieldClass} />
          </Field>
          <fieldset>
            <legend className={labelClass}>Specialisations</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {specializations.map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm text-muted">
                  <input type="checkbox" name="specializations" value={item} className="accent-terracotta" />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      {kind === "customer" && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Project type" error={errors.projectType}>
              <select id="projectType" name="projectType" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Property type" error={errors.propertyType}>
              <select id="propertyType" name="propertyType" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select property type
                </option>
                {propertyTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Approximate budget (INR)" error={errors.budget}>
              <select id="budget" name="budget" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a range
                </option>
                {budgetRanges.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Expected start" error={errors.timeline}>
              <select id="timeline" name="timeline" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a timeline
                </option>
                {timelines.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </>
      )}

      {kind === "contact" && (
        <Field label="Topic" error={errors.topic}>
          <select id="topic" name="topic" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              What is this about?
            </option>
            <option>Professional registration</option>
            <option>Customer project</option>
            <option>Partnership</option>
            <option>Press</option>
            <option>Something else</option>
          </select>
        </Field>
      )}

      <Field
        label={kind === "customer" ? "Project description" : "Message"}
        error={errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          required={kind !== "professional" && kind !== "early-access"}
          className={fieldClass}
          placeholder={
            kind === "customer"
              ? "Rooms in scope, possession timeline, and anything a professional should know."
              : "Tell us briefly how we can help."
          }
        />
      </Field>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 accent-terracotta" />
        <span>
          I agree to be contacted by The Interier about this enquiry. I understand this is not a
          booking, match, or contract.
        </span>
      </label>
      {errors.consent ? <p className="text-sm text-terracotta">{errors.consent}</p> : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : submitLabel}
        </Button>
        {status === "success" ? (
          <p className="text-sm text-graphite" role="status">
            {message}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-terracotta" role="alert">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-graphite">
      {label}
      {children}
      {error ? <span className="mt-1 block text-sm font-normal text-terracotta">{error}</span> : null}
    </label>
  );
}
