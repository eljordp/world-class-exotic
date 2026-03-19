import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Exotic Car Rental Questions Answered | World Class Exotic",
  description:
    "Common questions about booking, insurance, delivery, pricing, and requirements for World Class Exotic luxury car rentals in Los Angeles and Bay Area.",
};

export default function FAQPage() {
  return <FAQContent />;
}
