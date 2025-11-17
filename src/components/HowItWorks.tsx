import { Card } from "@/components/ui/card";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Copy */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              How OptiBay keeps every bay in motion.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold group-hover:scale-110 group-hover:shadow-[var(--glow-soft)] transition-all duration-300">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI predicts job times per tech</h3>
                  <p className="text-muted-foreground text-sm">Individual skill profiles ensure accurate time estimates</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold group-hover:scale-110 group-hover:shadow-[var(--glow-soft)] transition-all duration-300">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">OptiAssign fills bays without overlaps</h3>
                  <p className="text-muted-foreground text-sm">Smart scheduling prevents conflicts and maximizes throughput</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold group-hover:scale-110 group-hover:shadow-[var(--glow-soft)] transition-all duration-300">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telemetry keeps the board live</h3>
                  <p className="text-muted-foreground text-sm">Real-time updates ensure everyone sees the current state</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Mini Hologram Board */}
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 overflow-hidden">
              <div className="grid grid-cols-4 gap-3">
                {/* Bay columns with animated job blocks */}
                {[0, 1, 2, 3].map((bay) => (
                  <div key={bay} className="space-y-2">
                    <div className="text-xs text-center text-muted-foreground font-mono mb-3">
                      Bay {bay + 1}
                    </div>
                    <div className="space-y-2">
                      {/* Job blocks */}
                      {bay === 0 && (
                        <>
                          <div className="h-16 rounded bg-gradient-to-br from-primary/40 to-primary/20 border border-primary/50 shadow-[var(--glow-soft)] animate-fade-in"></div>
                          <div className="h-12 rounded bg-gradient-to-br from-accent/40 to-accent/20 border border-accent/50 animate-fade-in" style={{ animationDelay: '400ms' }}></div>
                        </>
                      )}
                      {bay === 1 && (
                        <>
                          <div className="h-20 rounded bg-gradient-to-br from-accent/40 to-accent/20 border border-accent/50 shadow-[var(--glow-soft)] animate-fade-in" style={{ animationDelay: '100ms' }}></div>
                          <div className="h-10 rounded bg-gradient-to-br from-primary/40 to-primary/20 border border-primary/50 animate-fade-in opacity-60" style={{ animationDelay: '600ms' }}></div>
                        </>
                      )}
                      {bay === 2 && (
                        <div className="h-16 rounded bg-gradient-to-br from-primary/40 to-primary/20 border border-primary/50 shadow-[var(--glow-soft)] animate-fade-in" style={{ animationDelay: '200ms' }}></div>
                      )}
                      {bay === 3 && (
                        <div className="h-14 rounded bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/40 border-dashed animate-fade-in" style={{ animationDelay: '800ms' }}>
                          <div className="h-full flex items-center justify-center text-xs text-accent">+</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Hologram glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
            </Card>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
