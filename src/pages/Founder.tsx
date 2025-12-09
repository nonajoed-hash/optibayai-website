import { Layout } from "@/components/Layout";

const Founder = () => {
  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Who I Am
              </h1>
              <p className="text-muted-foreground text-lg">
                Founder · Technician · Problem Solver · 24 Years in the Automotive Industry
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12 animate-fade-in">
              {/* Introduction */}
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My name is Joe DeFreitas, and for nearly a quarter century, I've lived the same realities every technician and service team member knows well — long days, hard work, complicated diagnoses, and the constant battle between customer expectations, shop capacity, and the clock.
                </p>
              </section>

              <section>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I've worked in all kinds of shops — small independents, high-volume operations, family-owned businesses, and everything in between. And through all of those experiences, one truth became impossible to ignore:
                </p>
                <p className="text-xl text-foreground font-medium">
                  Shops don't struggle because of the people.<br />
                  They struggle because the systems haven't kept up.
                </p>
              </section>

              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  That realization is what eventually led me to build OptiBay AI.
                </p>
              </section>

              {/* What I Saw */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  What I Saw
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Across my career, I saw the same challenges appear everywhere:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">Stacked waiters and overloaded technicians</span><br />
                      Jobs piling up faster than they can be scheduled.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">The opposite — technicians standing around underscheduled</span><br />
                      Wondering if they'll make hours…<br />
                      Worrying about their paycheck or job security…<br />
                      Not because of lack of skill, but because of lack of clarity.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">Service writers drowning in decisions</span><br />
                      Trying to juggle tech availability, job difficulty, customer needs, bay constraints, and time — all at once.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <span className="text-foreground font-medium">A constant sense of chaos</span><br />
                      Not caused by people,<br />
                      but by tools that weren't built for the real complexity of modern automotive repair.
                    </div>
                  </li>
                </ul>
                <p className="text-lg text-foreground font-medium mt-6">
                  It became clear:<br />
                  the industry needed something better.
                </p>
              </section>

              {/* Where OptiBay AI Came From */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                  Where OptiBay AI Came From
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I didn't build this from a boardroom.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I built it after decades on the shop floor — covered in grease, solving problems the hard way.<br />
                  And I built it in the late hours of the night, on my back deck, after an 8, 9, sometimes 10-hour day in the shop.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Long nights. Early mornings.<br />
                  Learning, breaking things, fixing them…<br />
                  Because I knew shops deserved better tools — and better clarity.
                </p>
              </section>

              {/* The Belief */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  The Belief
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  OptiBay AI was born out of a simple belief:
                </p>
                <p className="text-xl text-foreground font-medium mb-6">
                  Real people doing real work deserve systems that actually support them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not systems that bog them down.<br />
                  Not systems that replace human judgment.<br />
                  Not systems that cause chaos.
                </p>
              </section>

              {/* What OptiBay AI Exists To Do */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                  What OptiBay AI Exists To Do
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  OptiBay AI exists to:
                </p>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Bring clarity where there's chaos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Protect every minute of the workday
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Match the right job to the right technician
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Help shops operate with balance and confidence
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Support human decisions — not override them
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Learn from every completed job so tomorrow runs smoother than today
                  </li>
                </ul>
              </section>

              {/* Who This Is Built For */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent text-center">
                  Who This Is Built For
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This platform is built for:
                </p>
                <ul className="space-y-3 text-muted-foreground text-lg">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Technicians who want fair, predictable workloads
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Service writers who need instant clarity
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Managers who want confidence in the day's plan
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    Owners who want smooth operations without micromanaging
                  </li>
                </ul>
                <p className="text-lg text-foreground font-medium mt-6">
                  At its core, OptiBay AI is about elevating people, not replacing them.
                </p>
              </section>

              {/* Core Values */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center">
                  What Drives Every Decision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  This is what drives every feature, every line of code, and every decision behind OptiBay AI:
                </p>
                <p className="text-xl text-foreground font-medium">
                  Balance.<br />
                  Clarity.<br />
                  Confidence.<br />
                  Less chaos.<br />
                  Better days.
                </p>
              </section>

              {/* Closing */}
              <section className="text-center pt-8 border-t border-border/40">
                <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                  This is scheduling…<br />
                  <span className="text-foreground font-semibold">the OptiBay way.</span>
                </p>
                <p className="text-lg text-primary font-medium">
                  And once you experience it, you won't want to go back.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Founder;
