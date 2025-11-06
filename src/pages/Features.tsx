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
          description: "Track start, pause, and finish events for every job — ETAs update automatically as progress changes."
        },
        {
          icon: Users,
          title: "Waiter & Drop-Off Intelligence",
          description: "OptiBay understands appointment urgency — protecting end-of-day cutoffs and optimizing waiting customers first."
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
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              OptiBay Core Features
            </h1>
            <p className="text-lg text-muted-foreground">
              AI-powered scheduling and workflow intelligence for modern repair shops
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {featureSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                  <p className="text-muted-foreground text-lg">{section.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="border-2 hover:border-primary/50 transition-all duration-300">
                      <CardHeader>
                        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 w-fit">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
