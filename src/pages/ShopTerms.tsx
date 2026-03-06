import { LegalPage } from "@/components/LegalPage";
import { ShopTermsContent } from "@/legal/shopTermsContent";

export default function ShopTerms() {
  return (
    <LegalPage
      title="Repair Shop Terms of Service"
      description="Read the OptiBay AI Repair Shop Terms of Service. Understand the terms governing repair shops and businesses using the OptiBay scheduling platform."
      path="/legal/terms/shop"
      lastUpdated="March 1, 2026"
      keywords="repair shop terms of service, auto shop software terms, OptiBay terms, shop scheduling agreement"
    >
      <ShopTermsContent />
    </LegalPage>
  );
}
