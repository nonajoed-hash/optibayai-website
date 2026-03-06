import { LegalPage } from "@/components/LegalPage";
import { BetaAgreementContent } from "@/legal/betaAgreementContent";

export default function BetaAgreement() {
  return (
    <LegalPage
      title="Beta Testing Agreement"
      description="Review the OptiBay AI Beta Testing Agreement. Understand the terms for participating in our private beta program for repair shops."
      path="/legal/beta-agreement"
      lastUpdated="March 1, 2026"
      keywords="beta testing agreement, beta program terms, OptiBay beta, repair shop beta test"
    >
      <BetaAgreementContent />
    </LegalPage>
  );
}
