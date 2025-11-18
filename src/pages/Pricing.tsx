import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Core",
      description: "AI-powered scheduling and workflow intelligence for modern repair shops.",
      price: "$149",
      features: [
        "AI-Driven Smart Scheduling",
        "Dynamic Dispatch Optimization",
        "Waiter & Drop-Off Intelligence",
        "OptiLearn Engine",
        "Drag-and-Drop Dayboard",
        "Birdseye View Dashboard",
        "Multi-Bay & Rollover Support",
        "Live ETA & Job Timers",
        "CSV Import & Integration Ready",
        "Role-Based Access"
      ]
    },
    {
      name: "Catalyst",
      description: "Advanced coordination and optimization across bays, teams, and workloads.",
      price: "Coming Soon",
      features: []
    },
    {
      name: "Enterprise",
      description: "Built for MSOs, large chains, and corporate operations needing full integration.",
      price: "Custom",
      features: []
    }
  ];

  return (
    <Layout>
      <div className="relative py-20 sm:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for your shop. All plans include core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:scale-[1.02] transition-all duration-300 ${
                  plan.name === "Core" 
                    ? "border-2 border-primary/50 shadow-[var(--glow-primary)]" 
                    : "hover:border-primary/40"
                }`}
              >
                {plan.name === "Core" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-white">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className={`${feature.endsWith(':') ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {plan.name === "Core" && (
                  <CardFooter className="flex-col gap-2">
                    <Button asChild className="w-full">
                      <Link to="/beta">Start Free Trial</Link>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/features">Learn More</Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>

          <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto shadow-[var(--shadow-panel)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg"></div>
            <div className="relative">
              <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/50 border border-border/40">
                  <h3 className="font-semibold mb-2 text-foreground">When will pricing be available?</h3>
                  <p className="text-muted-foreground">
                    We're currently in beta and finalizing our pricing structure. Beta participants will receive special early-adopter pricing when we launch.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border/40">
                  <h3 className="font-semibold mb-2 text-foreground">Is there a free trial?</h3>
                  <p className="text-muted-foreground">
                    Yes! All plans will include a 14-day free trial with no credit card required.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-background/50 border border-border/40">
                  <h3 className="font-semibold mb-2 text-foreground">Can I change plans later?</h3>
                  <p className="text-muted-foreground">
                    Absolutely. You can upgrade or downgrade your plan at any time to match your shop's needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
