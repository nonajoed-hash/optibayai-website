import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Users, Layout as LayoutIcon, Clock, TrendingUp, Database, Lock } from "lucide-react";

export default function Features() {
  const featureSections = [
    {
      title: "AI Intelligence & Automation",
      subtitle: "Where OptiBay does the thinking for you.",
      features: [
        {
          icon: Brain,
          title: "AI-Driven Smart Scheduling",
          description: "Automatically assigns jobs to the best-fit technician using skill profiles, bay access, and current availability. Adjusts dynamically when priorities change."
        },
        {
          icon: Zap,
          title: "Dynamic Dispatch Optimization",
          description: "Continuously balances workloads, reshuffles jobs to prevent conflicts, and ensures techs stay productive throughout the day."
        },
        {
          icon: TrendingUp,
          title: "BaySense AI Learning Engine",
          description: "OptiBay learns from every completed job, adapting to your shop's rhythms and performance to predict smarter job times over time."
        }
      ]
    },
    {
      title: "Technician & Shop Operations",
      subtitle: "Give your team clarity, not chaos.",
      features: [
        {
          icon: Users,
          title: "Technician Profiles & Availability",
          description: "Define each tech's skills, shift hours, and bays — OptiBay automatically routes jobs where they'll succeed fastest."
        },
        {
          icon: LayoutIcon,
          title: "Multi-Bay & Rollover Scheduling",
          description: "Handle multiple bays per technician, manage flat and lift assignments, and carry unfinished work to the next day."
        },
        {
          icon: LayoutIcon,
          title: "Birdseye View Dashboard",
          description: "Monitor every active job, technician, and vehicle in real time — see the entire shop at a glance."
        }
      ]
    },
    {
      title: "Time, Tracking & Flow",
      subtitle: "Stay on time, every time.",
      features: [
        {
          icon: Clock,
          title: "Live ETA & Job Timers",
          description: "Track start, pause, and finish events for every job — ETAs update automatically as progress changes.",
          fullWidth: false
        },
        {
          icon: Users,
          title: "Waiter & Drop-Off Intelligence",
          description: "OptiBay understands appointment urgency — protecting end-of-day cutoffs and optimizing waiting customers first.",
          fullWidth: false
        },
        {
          icon: TrendingUp,
          title: "Smart Rollover Scheduling",
          description: "Automatically carries unfinished work into the next day — preserving time logs, bay assignments, and technician context so nothing slips through cracks.",
          fullWidth: false
        },
        {
          icon: TrendingUp,
          title: "OptiBay Load Index (OBLI)",
          description: "OBLI gives every day a 0–100 load score by blending technician availability, bay capacity, waiters, and specialty work. Instead of guessing how \"busy\" a day feels, you see it instantly — green for light days, yellow for normal, red for overloaded. OBLI helps writers choose the best days for new work, protect your techs from burnout, and keep your calendar balanced instead of slammed.",
          fullWidth: true
        }
      ]
    },
    {
      title: "Control & Connectivity",
      subtitle: "Keep everything connected and secure.",
      features: [
        {
          icon: Database,
          title: "CSV Import & Integration Ready",
          description: "Feed jobs directly from spreadsheets or management systems — import, validate, and stage with one click."
        },
        {
          icon: Lock,
          title: "Role-Based Access & Quiet-Hour Communication",
          description: "Secure, role-based permissions for Managers, Writers, and Techs — with notifications that respect shop hours and time zones."
        },
        {
          icon: Zap,
          title: "Real-Time Sync & Echo-Guard",
          description: "Stay perfectly aligned across devices and users — OptiBay's live synchronization prevents duplicate actions and keeps every board instantly up to date."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="relative py-20 sm:py-28">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                OptiBay Core Features
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              AI-powered scheduling and workflow intelligence for modern repair shops
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {featureSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="relative">
                {/* Section background panel */}
                <div className="absolute inset-0 bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl -z-10"></div>
                <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                    sectionIndex % 2 === 0 
                      ? 'from-primary to-primary' 
                      : 'from-destructive to-destructive'
                  } bg-clip-text text-transparent`}>
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">{section.subtitle}</p>
                </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.features.map((feature, featureIndex) => (
                      <Card 
                        key={featureIndex} 
                        className={`hover:border-primary/50 hover:scale-[1.02] hover:shadow-[var(--glow-soft)] transition-all duration-300 ${feature.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
                      >
                        {feature.fullWidth ? (
                          <>
                            <CardHeader className="flex flex-row items-center justify-center gap-4 pb-3">
                              <div className="inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                                <feature.icon className="h-8 w-8 text-primary" />
                              </div>
                              <CardTitle className="text-xl text-foreground mb-0">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground leading-relaxed text-center">{feature.description}</p>
                            </CardContent>
                          </>
                        ) : (
                          <>
                            <CardHeader>
                              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                                <feature.icon className="h-8 w-8 text-primary" />
                              </div>
                              <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </CardContent>
                          </>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
