import { LegalPage } from "@/components/LegalPage";
import { PassportTermsContent } from "@/legal/passportTermsContent";

export default function PassportTerms() {
  return (
    <LegalPage
      title="Passport User Terms of Service"
      description="Read the OptiBay AI Passport User Terms of Service. Understand the terms for individual technicians and users of the OptiBay Passport platform."
      path="/legal/terms/passport"
      lastUpdated="March 1, 2026"
      keywords="passport terms of service, technician terms, OptiBay passport, automotive technician agreement"
    >
      <PassportTermsContent />
    </LegalPage>
  );
}
