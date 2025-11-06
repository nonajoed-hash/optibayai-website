import { Layout } from "@/components/Layout";

export default function BetaAgreement() {
  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Beta Tester Agreement</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              <em>Last updated: {new Date().toLocaleDateString()}</em>
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Beta Program Overview</h2>
              <p>
                Thank you for participating in the OptiBay Beta Program. As a beta tester, you will have 
                early access to new features and functionality that may not be available to the general public.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Pre-Release Software</h2>
              <p>
                You acknowledge that the beta software is pre-release, may contain bugs or errors, and may 
                not function as intended. The software is provided "as is" without warranty of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Feedback and Testing</h2>
              <p>
                As a beta tester, you agree to provide feedback, report bugs, and participate in testing 
                activities. Your input is valuable in helping us improve OptiBay before general release.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Confidentiality</h2>
              <p>
                You agree to keep confidential any non-public information about the beta software, including 
                features, functionality, and performance, until such information is made publicly available.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Backup</h2>
              <p>
                You are responsible for backing up your data. While we take precautions to protect your 
                information, beta software may be unstable and data loss could occur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. No Service Level Agreement</h2>
              <p>
                The beta program does not include service level agreements (SLAs). We will make reasonable 
                efforts to maintain service availability but cannot guarantee uptime during the beta period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Termination</h2>
              <p>
                Either party may terminate your participation in the beta program at any time. Upon termination, 
                you must cease using the beta software and may be required to delete any beta-related materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Special Pricing</h2>
              <p>
                Beta participants may be eligible for special pricing when OptiBay launches commercially. 
                Details of any such pricing will be communicated separately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Contact</h2>
              <p>
                Questions about the Beta Program should be sent to beta@optibayai.com
              </p>
            </section>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> This is a placeholder Beta Agreement. A comprehensive agreement should 
                be drafted with legal counsel to ensure all necessary protections and obligations are included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
