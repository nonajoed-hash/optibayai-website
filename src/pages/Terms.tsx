import { Layout } from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              <em>Last updated: {new Date().toLocaleDateString()}</em>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using OptiBay's services, you accept and agree to be bound by the terms 
                and provisions of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Use License</h2>
              <p>
                OptiBay grants you a limited, non-exclusive, non-transferable license to use the platform 
                for your business operations in accordance with these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for 
                all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Service Availability</h2>
              <p>
                While we strive for high availability, we do not guarantee that the service will be 
                uninterrupted or error-free. We reserve the right to modify or discontinue services 
                with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                OptiBay shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to the service at 
                our sole discretion, without notice, for conduct that we believe violates these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at joe@optibayai.com
              </p>
            </section>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> This is a placeholder Terms of Service. Comprehensive terms should be 
                drafted with legal counsel to ensure proper protection and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
