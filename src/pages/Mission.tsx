import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    label: "People First",
    description: "AI should elevate human capability — not replace it."
  },
  {
    label: "Technician Respect",
    description: "Skill, time, and craftsmanship deserve tools that honor them."
  },
  {
    label: "Clarity Over Chaos",
    description: "A shop runs at its best when everyone knows the plan."
  },
  {
    label: "The Right Work for the Right Technician",
    description: "Balanced shops aren't created by equal workloads — they're created by smart workload matching. OptiBay AI ensures each technician receives the jobs that fit their skills, strengths, and available time, leading to better outcomes and happier teams."
  },
  {
    label: "Learning Every Day",
    description: "Every completed ticket is data that helps tomorrow run smoother."
  },
  {
    label: "Accountability with Empathy",
    description: "People make mistakes. Systems fail. Shops get busy. OptiBay AI exists to support teams, reduce human error, and provide structure. We design tools that lift people up and help them succeed."
  },
  {
    label: "Real-Time Reality",
    description: "Shops live minute-by-minute, so our tools must adapt the same way."
  },
  {
    label: "Enhanced, Not Automated",
    description: "AI should support human judgment, not override it."
  }
];

const Mission = () => {
  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Mission
              </h1>
              <p className="text-muted-foreground text-lg">
                Why OptiBay AI exists and what we stand for.
              </p>
            </div>

            {/* Hero Statement */}
            <Card className="mb-16 bg-card/60 border-primary/20 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-8 sm:p-10">
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed text-center">
                  "OptiBay AI stands to empower shops with clarity, protect valuable time, honor technician skill, and transform daily operations through intelligent, real-time decision-making that supports human judgment rather than overriding it."
                </p>
              </CardContent>
            </Card>

            {/* Medium Body */}
            <div className="mb-16 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                OptiBay AI brings order, intelligence, and fairness to automotive repair operations by enhancing—not replacing—the people who make shops run. We use real-time decision-making and adaptive learning to reduce chaos, protect technicians' time, and support smarter scheduling that respects human judgment. Our goal is to help every shop operate with clarity, confidence, and balance.
              </p>
            </div>

            {/* Full Mission Narrative */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent">
                Full Mission Narrative
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  OptiBay AI exists to reduce chaos in automotive repair shops by giving every technician, service writer, and shop owner a smarter, fairer, and more efficient way to schedule and complete work.
                </p>
                <p>
                  With 24 years in the industry, we've seen that even the best teams face the same challenges — not because of the people, but because the tools haven't kept pace with modern shop demands.
                </p>
                <p>
                  We believe the automotive workforce should never be replaced by AI.<br />
                  Instead, AI should enhance their abilities — supporting the people who diagnose, repair, communicate, and make real results happen every day.
                </p>
                <p className="text-foreground font-medium">
                  OptiBay AI stands to empower shops with clarity, protect valuable time, honor technician skill, and transform daily operations through intelligent, real-time decision-making that supports human judgment rather than overriding it.
                </p>
                <p>
                  OptiBay AI is built for the people who keep the world moving — the techs, the writers, the advisors, and the owners who show up every day.<br />
                  Our goal is simple:<br />
                  Help them do their best work with less stress and better outcomes — through AI that lifts people up, not replaces them.
                </p>
              </div>
            </div>

            {/* Values List */}
            <div className="mb-16 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What OptiBay AI Believes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <Card key={index} className="bg-card/40 border-border/40 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{value.label}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why We Exist */}
            <div className="animate-fade-in">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-soft-orange to-destructive bg-clip-text text-transparent">
                Why We Exist
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                OptiBay AI exists because automotive shops deserve tools that match the speed, complexity, and reality of the work they perform. For decades, technicians and service writers have been asked to operate in chaos with systems that weren't built for the way modern shops actually function. We're here to fix that — with intelligence that adapts to your workflow, respects your expertise, and supports your team every minute of the day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;
