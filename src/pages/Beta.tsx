import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { BetaSignupForm } from "@/components/BetaSignupForm";

export default function Beta() {
  return (
    <Layout>
      <SEO
        title="Join the Beta Program - OptiBay AI Early Access"
        description="Apply for OptiBay AI's private beta program. Get early access, founding pricing, hands-on setup support, and shape the future of auto shop scheduling."
        path="/beta"
        keywords="optibay beta, auto shop software beta, early access scheduling software, founding member pricing"
      />
      <div className="relative py-20 sm:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Join the OptiBay Private Beta
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              We're onboarding a limited number of shops to help us refine OptiBay before launch.
            </p>
            <p className="text-base text-accent mb-8">
              Tell us about your shop and we'll follow up with next steps.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[var(--glow-soft)] hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  Early Access
                </div>
                <p className="text-sm text-muted-foreground">
                  Get priority access to new features before anyone else
                </p>
              </div>
              <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[var(--glow-soft)] hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  Founding Pricing
                </div>
                <p className="text-sm text-muted-foreground">
                  Lock in exclusive discounts as a founding customer
                </p>
              </div>
              <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:shadow-[var(--glow-soft)] hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  Shape the Product
                </div>
                <p className="text-sm text-muted-foreground">
                  Your feedback directly influences our development
                </p>
              </div>
            </div>

            {/* Beta Process Steps */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative">
                {/* Connection line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>
                
                <div className="relative grid grid-cols-3 gap-4">
                  <div className="text-center animate-fade-in">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-xl mb-3 shadow-[var(--glow-primary)]">
                      1
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Apply</h3>
                    <p className="text-xs text-muted-foreground">Tell us about your shop</p>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: '150ms' }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-xl mb-3 shadow-[var(--glow-primary)]">
                      2
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Onboard</h3>
                    <p className="text-xs text-muted-foreground">Quick setup call</p>
                  </div>
                  <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-xl mb-3 shadow-[var(--glow-primary)]">
                      3
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Go Live</h3>
                    <p className="text-xs text-muted-foreground">Start optimizing bays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Beta Benefits */}
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                Exclusive Beta Tester Benefits
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                If your shop is accepted into the private beta, you'll receive:
              </p>

              <div className="grid gap-6 md:grid-cols-2 text-sm text-muted-foreground text-left">
                <ul className="space-y-2">
                  <li>• First 2 months free and the next 10 months at 50% off.</li>
                  <li>• Your rate is locked in for life and will never increase.</li>
                  <li>• Complete done-for-you setup of bays, technicians, hours, job types, and skill levels, if you so choose.</li>
                  <li>• Hands-on help getting your board fully operational before Day One.</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Direct access to the founder for feedback and support.</li>
                  <li>• Early access to Core improvements throughout beta.</li>
                  <li>• Priority access to Catalyst and Enterprise tiers if your shop chooses to upgrade later.</li>
                </ul>
              </div>

              <p className="mt-4 text-xs text-muted-foreground/80">
                Beta spots are limited. Every application is manually reviewed to ensure a good mutual fit.
              </p>
            </div>

          <BetaSignupForm />
        </div>
      </div>
    </Layout>
  );
}
