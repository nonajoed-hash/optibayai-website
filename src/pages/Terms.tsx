import { Link } from "react-router-dom";
import { LegalPage } from "@/components/LegalPage";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const termsCards = [
  {
    title: "OptiBay for Repair Shops",
    description: "Terms governing repair shops and businesses using the OptiBay platform.",
    href: "/legal/terms/shop",
  },
  {
    title: "OptiBay Passport",
    description: "Terms governing individual technicians and users of the OptiBay Passport platform.",
    href: "/legal/terms/passport",
  },
  {
    title: "Beta Program",
    description: "Terms governing participation in the OptiBay Beta Program.",
    href: "/legal/beta-agreement",
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="Review OptiBay AI's Terms of Service. Select the agreement that applies to your use of the OptiBay platform."
      path="/legal/terms"
      keywords="terms of service, OptiBay terms, repair shop agreement, passport terms, beta agreement"
    >
      <p>
        OptiBay provides multiple products and services. The Terms of Service that apply to you depend on the product you are using. Please select the agreement that applies to your use of OptiBay.
      </p>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 mt-8 not-prose">
        {termsCards.map((card) => (
          <Link key={card.href} to={card.href} className="no-underline">
            <Card className="h-full hover:border-primary/40 transition-colors cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {card.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <p className="mt-8">
        For questions about these agreements, please <Link to="/contact">contact us through the contact page</Link>.
      </p>
    </LegalPage>
  );
}
