# The Interier

Public marketing website for **The Interier** — an India-focused, technology-enabled platform for the interior industry.

Tagline: *The infrastructure behind better interiors.*

This repository is the public site only. It does not include a CRM, product dashboard, authentication, or marketplace application.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/for-interior-firms` | Professional value and early-access registration |
| `/for-customers` | Customer journey and project enquiry |
| `/how-it-works` | Live vs planned journeys |
| `/about` | Vision and principles |
| `/insights` | Editorial hub |
| `/insights/[slug]` | Article |
| `/contact` | Contact enquiry |
| `/privacy` | Starter privacy policy |
| `/terms` | Starter terms of use |

## Forms

`POST /api/enquiries` validates payloads and delivers them only when a backend is configured.

Configure **one** of:

1. `FORM_WEBHOOK_URL` — JSON webhook for a CRM or automation tool. Optional `FORM_WEBHOOK_TOKEN` is sent as a Bearer token.
2. `RESEND_API_KEY` + `ENQUIRY_FROM_EMAIL` + `ENQUIRY_TO_EMAIL` (or `NEXT_PUBLIC_CONTACT_EMAIL`).

If neither path is configured, the API returns **503** and the UI shows an error. It will not display a success state for an undelivered submission.

Webhook body shape:

```json
{
  "source": "theinterier-website",
  "submittedAt": "ISO-8601",
  "kind": "professional | customer | contact | early-access",
  "name": "",
  "email": "",
  "consent": true
}
```

Customer and professional fields are included when present.

## Environment

See [`.env.example`](.env.example).

| Variable | Required for launch | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production canonical origin. No domain was present in this repository; set the real one before launch. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Defaults to `contact@theinterieri.com`. |
| `NEXT_PUBLIC_CONTACT_PHONE` | Optional | Defaults to `+91 84314 16032`. |
| `NEXT_PUBLIC_CONTACT_ADDRESS` | Optional | Omitted if blank. |
| `FORM_WEBHOOK_URL` or Resend vars | Yes, for working forms | Otherwise enquiries cannot be delivered. |
| `NEXT_PUBLIC_ANALYTICS_WRITE_KEY` | Optional | Reserved. |
| `NEXT_PUBLIC_FIRM_APP_URL` | Optional | Future professional app. |
| `NEXT_PUBLIC_CUSTOMER_APP_URL` | Optional | Future customer app. |

## Branding

The official lockup lives at `public/brand/the-interier-logo.svg` and is used in the header, footer, and Open Graph image.

Photography is loaded from Unsplash with credits on key images. Replace with owned photography before a high-profile launch if required.

Legal pages are starters. Registered entity name, CIN, office address, and governing-court details need confirmation.

## Future product hooks

Keep these boundaries when the SaaS and marketplace land:

- Enquiry kinds in `src/lib/enquiry.ts`
- Delivery in `src/app/api/enquiries/route.ts`
- Editorial content in `src/content/articles.ts`
- Optional app URLs in environment variables
