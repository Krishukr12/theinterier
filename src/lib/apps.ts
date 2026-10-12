export function getFutureAppLinks() {
  const firm = process.env.NEXT_PUBLIC_FIRM_APP_URL?.trim() || null;
  const customer = process.env.NEXT_PUBLIC_CUSTOMER_APP_URL?.trim() || null;
  return { firm, customer };
}
