import { LegalPage } from "@/components/LegalPage";
import { PrivacyContent } from "@/legal/privacyContent";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Learn how OptiBay AI collects, uses, and protects your personal information. Our commitment to data security and privacy for repair shops and technicians."
      path="/legal/privacy"
      lastUpdated="March 1, 2026"
      keywords="privacy policy, data protection, personal information, auto shop privacy, OptiBay privacy"
    >
      <PrivacyContent />
    </LegalPage>
  );
}
