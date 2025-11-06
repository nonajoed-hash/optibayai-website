import { Layout } from "@/components/Layout";
import { BetaSignupForm } from "@/components/BetaSignupForm";

export default function Beta() {
  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Join the OptiBay Beta Program
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Be among the first to experience OptiBay and help shape the future of auto shop scheduling. Beta participants get early access, special pricing, and direct input on features.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-accent/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">Early Access</div>
                <p className="text-sm text-muted-foreground">
                  Get priority access to new features before anyone else
                </p>
              </div>
              <div className="bg-accent/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">Special Pricing</div>
                <p className="text-sm text-muted-foreground">
                  Lock in exclusive discounts as a founding customer
                </p>
              </div>
              <div className="bg-accent/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">Shape the Product</div>
                <p className="text-sm text-muted-foreground">
                  Your feedback directly influences our development
                </p>
              </div>
            </div>
          </div>

          <BetaSignupForm />
        </div>
      </div>
    </Layout>
  );
}
