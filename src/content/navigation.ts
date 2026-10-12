export const primaryNav = [
  { href: "/for-interior-firms", label: "For firms" },
  { href: "/for-customers", label: "For customers" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
] as const;

export const footerNav = {
  platform: [
    { href: "/for-interior-firms", label: "Interior firms" },
    { href: "/for-customers", label: "Customers" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About us" },
  ],
  resources: [
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
    { href: "/#faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
} as const;
