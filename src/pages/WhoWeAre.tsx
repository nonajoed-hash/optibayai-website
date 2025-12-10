import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { SeoPillarSection } from "@/components/SeoPillarSection";
import { Link } from "react-router-dom";
const audiences = [
  {
    title: "Technicians",
    description: "who deserve fair workloads, clear expectations, and tools that respect their time and skill."
  },
  {
    title: "Service Writers",
    description: "who need clarity in seconds, not hours — and systems that actually support their decision-making."
  },
  {
    title: "Owners & Managers",
    description: "who want smoother days, fewer surprises, and confidence in every minute of the schedule."
  },
  {
    title: "Customers",
    description: "who deserve honesty, transparency, and a shop that isn't operating in chaos."
  }
];

const capabilities = [
  "Real-time scheduling intelligence",
  "Technician skill matching",
  "Minute-by-minute operations visibility",
  "Predictive learning from every completed job",
  "Rules that mirror real shop behavior",
  "Tools that empower the people, not override them"
];

const WhoWeAre = () => {
  return (
    <Layout>
      <SEO
        title="About OptiBay AI | The Future of Smart Automotive Scheduling"
        description="Discover how OptiBay AI was created by a career technician to solve real-world auto shop scheduling challenges through intelligent, adaptive software."
        path="/about/company"
        keywords="about optibay, auto shop technology company, automotive AI company, shop management startup"
      />
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Who We Are
              </h1>
              <p className="text-muted-foreground text-lg">
                A mission-driven company built for the people who keep the world moving.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-16 animate-fade-in">
              {/* Who We Are */}
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  OptiBay AI is a shop-first, technician-first intelligence platform created to restore clarity, balance, and confidence to automotive repair operations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that when teams have the right tools, they don't just work better —<br />
                  they thrive.
                </p>
              </section>

              {/* What We Stand For */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  What We Stand For
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  OptiBay AI exists at the intersection of:
                </p>
                <ul className="space-y-2 text-lg text-foreground font-medium mb-6">
                  <li>Human Expertise</li>
                  <li>Intelligent Automation</li>
                  <li>Real-Shop Realities</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We're not here to replace people or remove the human element.<br />
                  We're here to enhance the people who diagnose, repair, communicate, and deliver results every day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our work is driven by one core belief:
                </p>
                <Card className="bg-card/60 border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-lg text-foreground font-medium">
                      The problem is rarely the people… it's the systems they've been given.<br />
                      And the right system can change everything.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Who We Serve */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                  Who We Serve
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {audiences.map((audience, index) => (
                    <Card key={index} className="bg-card/40 border-border/40 hover:border-primary/30 transition-colors">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-2">{audience.title}</h3>
                        <p className="text-sm text-muted-foreground">{audience.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We serve real shops with real people — not theoretical workflows.
                </p>
              </section>

              {/* Why We Exist */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  Why We Exist
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  For decades, automotive repair has been powered by incredible people using tools that lag behind the realities of the modern shop.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Shops today face:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    unpredictable bay availability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    wildly varying job types
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    fluctuating technician skill sets
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    customer pressure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    waiters, drop-offs, walk-ins, and emergencies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    end-of-day time crushes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    understaffing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    overstaffing
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  And through all of that…<br />
                  They're expected to run perfectly.
                </p>
                <p className="text-lg text-foreground font-medium mb-6">
                  We exist to finally give shops a system that can keep up.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A system that thinks ahead.<br />
                  A system that learns.<br />
                  A system that adapts.<br />
                  A system that supports, not replaces.<br />
                  A system that brings calm to the chaos.
                </p>
                <p className="text-lg text-foreground font-medium mt-6">
                  That's what OptiBay AI was built for.
                </p>
              </section>

              {/* How We Do It */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                  How We Do It
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We bring together:
                </p>
                <ul className="space-y-3 text-muted-foreground text-lg mb-6">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-primary">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OptiBay AI doesn't just drop tickets into empty slots.<br />
                  It understands the flow of a day.<br />
                  It understands people.<br />
                  And it respects the decisions that only humans can make.
                </p>
              </section>

              {/* Our Commitment */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  Our Commitment
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We promise to build tools that:
                </p>
                <ul className="space-y-2 text-lg text-muted-foreground mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    reduce chaos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    protect technicians' time
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    support service writers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    empower owners
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    and move the entire industry forward
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not by replacing expertise —<br />
                  but by amplifying it.
                </p>
              </section>

              {/* The OptiBay Way */}
              <section className="text-center pt-8 border-t border-border/40">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  The OptiBay Way
                </h2>
                <p className="text-xl text-foreground font-medium mb-6">
                  Balance.<br />
                  Clarity.<br />
                  Confidence.<br />
                  People first.<br />
                  Chaos last.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  This is scheduling…<br />
                  <span className="text-foreground font-semibold">the OptiBay way.</span>
                </p>

                <p className="mt-8 text-sm text-slate-300/80">
                  To see how this story turns into real tooling, explore{" "}
                  <Link to="/features" className="underline underline-offset-2">
                    what OptiBay AI can do
                  </Link>
                  , review{" "}
                  <Link to="/pricing" className="underline underline-offset-2">
                    plans for different shop types
                  </Link>
                  , or learn more in the{" "}
                  <Link to="/founder" className="underline underline-offset-2">
                    founder story
                  </Link>
                  .
                </p>

                <SeoPillarSection variant="mini" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
