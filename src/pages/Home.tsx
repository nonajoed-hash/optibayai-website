import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Wrench, BarChart3, Clock, Zap, Bot, Grid3x3, RefreshCw } from "lucide-react";
import bayGridHero from "@/assets/bay-grid-hero.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hologram-grid bg-grid animate-grid-move py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text & CTAs */}
            <div className="text-left animate-fade-in">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-foreground">End the chaos.</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Optimize every bay.
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-xl">
                AI-powered scheduling and dispatch for high-velocity auto shops.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/beta">Start Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <a href="https://app.optibayai.com/auth" target="_blank" rel="noopener noreferrer">
                    See Live Demo
                  </a>
                </Button>
              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                  <Bot className="h-4 w-4 text-primary" />
                  <span className="text-foreground">OptiAssign AI</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                  <Grid3x3 className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Multi-Bay Logic</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
                  <RefreshCw className="h-4 w-4 text-primary" />
                  <span className="text-foreground">Real-Time Sync</span>
                </div>
              </div>
            </div>

            {/* Right side - Bay-Grid Visualization */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-[var(--glow-primary)] hover:shadow-[var(--glow-secondary)] transition-all duration-500">
                <img 
                  src={bayGridHero} 
                  alt="Bay-Grid Hologram - OptiBay Scheduler Visualization" 
                  className="w-full h-auto"
                />
                {/* Overlay glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none"></div>
              </div>
              {/* Decorative glow orbs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
              Everything you need to run your shop
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed specifically for auto repair businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Scheduling</h3>
                <p className="text-muted-foreground">
                  Intelligent calendar system that optimizes bay utilization and prevents conflicts
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Portal</h3>
                <p className="text-muted-foreground">
                  Let customers book appointments, track progress, and communicate seamlessly
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Technician Tools</h3>
                <p className="text-muted-foreground">
                  Streamlined workflows for techs to update job status and track parts
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Real-time insights into shop performance, technician efficiency, and revenue
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Time Tracking</h3>
                <p className="text-muted-foreground">
                  Accurate time logging for labor estimates and job completion tracking
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Integrations</h3>
                <p className="text-muted-foreground">
                  Connect with your existing shop management software and tools
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hologram-grid bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background/80 to-card/50"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Ready to optimize your shop?
              </h2>
              <div className="absolute -inset-4 bg-primary/10 blur-2xl -z-10 rounded-full"></div>
            </div>
            <p className="mb-8 text-lg text-muted-foreground">
              Join the beta program and get early access to the future of auto repair scheduling.
            </p>
            <Button asChild size="lg" className="text-lg px-12">
              <Link to="/beta">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
