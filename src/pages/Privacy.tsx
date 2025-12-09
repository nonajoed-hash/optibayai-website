import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy - OptiBay AI"
        description="Learn how OptiBay AI collects, uses, and protects your personal information. Our commitment to data security and privacy."
        path="/legal/privacy"
      />
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              <em>Last updated: {new Date().toLocaleDateString()}</em>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including name, email address, phone number, 
                shop information, and other details you provide when using OptiBay services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, to communicate 
                with you, and to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with service providers 
                who assist us in operating our platform, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also have 
                additional rights depending on your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at joe@optibayai.com
              </p>
            </section>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> This is a placeholder privacy policy. A comprehensive privacy policy 
                should be drafted with legal counsel to ensure compliance with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
