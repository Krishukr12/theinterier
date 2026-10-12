import assert from "node:assert/strict";
import test from "node:test";
import { parseEnquiry } from "./enquiry";

test("rejects an empty body", () => {
  const result = parseEnquiry({});
  assert.equal(result.ok, false);
});

test("accepts a complete customer enquiry", () => {
  const result = parseEnquiry({
    kind: "customer",
    name: "Asha Rao",
    email: "asha@example.com",
    city: "Bengaluru",
    projectType: "Apartment interior",
    propertyType: "Apartment",
    budget: "₹10–25 lakh",
    timeline: "1–3 months",
    message: "3BHK in Whitefield, kitchen and two bedrooms in the first phase.",
    consent: true,
  });
  assert.equal(result.ok, true);
});

test("does not accept a professional enquiry without a city", () => {
  const result = parseEnquiry({
    kind: "professional",
    name: "Studio Lead",
    email: "lead@example.com",
    firmName: "Independent practice",
    consent: true,
  });
  assert.equal(result.ok, false);
  if (!result.ok) assert.ok(result.errors.city);
});
