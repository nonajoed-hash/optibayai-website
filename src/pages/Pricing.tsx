import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Core",
      description: "Perfect for single-location shops",
      price: "Coming Soon",
      features: [
        "Up to 5 service bays",
        "Smart scheduling & calendar",
        "Customer portal",
        "Basic reporting",
        "Email support",
        "Mobile access"
      ]
    },
    {
      name: "Dispatch",
      description: "For growing multi-bay operations",
      price: "Coming Soon",
      popular: true,
      features: [
        "Up to 20 service bays",
        "Everything in Core, plus:",
        "Advanced analytics",
        "Technician time tracking",
        "Parts inventory tracking",
        "SMS notifications",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      description: "For large shops and chains",
      price: "Custom",
      features: [
        "Unlimited bays & locations",
        "Everything in Dispatch, plus:",
        "Custom integrations",
        "Dedicated account manager",
        "Custom training",
        "SLA guarantees",
        "Advanced security",
        "White-label options"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for your shop. All plans include core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className={feature.endsWith(':') ? 'font-semibold' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link to="/beta">Join Beta</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">When will pricing be available?</h3>
                <p className="text-muted-foreground">
                  We're currently in beta and finalizing our pricing structure. Beta participants will receive special early-adopter pricing when we launch.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes! All plans will include a 14-day free trial with no credit card required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-muted-foreground">
                  Absolutely. You can upgrade or downgrade your plan at any time to match your shop's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
