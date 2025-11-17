import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, Grid3x3 } from "lucide-react";

export default function LiveTelemetry() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            See your day at a glance.
          </h2>
          <p className="text-muted-foreground">Live metrics from your shop floor</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Utilization % */}
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:shadow-[var(--glow-primary)] transition-all duration-300 animate-fade-in">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">87%</div>
                  <div className="text-xs text-muted-foreground mt-1">+12% vs. last week</div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Utilization</h3>
              {/* Mini sparkline */}
              <div className="h-8 flex items-end gap-1">
                {[65, 70, 68, 75, 80, 82, 85, 87].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-sm animate-fade-in"
                    style={{ 
                      height: `${val}%`,
                      animationDelay: `${i * 50}ms`
                    }}
                  ></div>
                ))}
              </div>
            </CardContent>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </Card>

          {/* Average Wait Time */}
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-accent/30 hover:border-accent/60 hover:shadow-[var(--glow-secondary)] transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-all duration-300">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">18m</div>
                  <div className="text-xs text-muted-foreground mt-1">-5m vs. last week</div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Avg Wait Time</h3>
              {/* Mini sparkline */}
              <div className="h-8 flex items-end gap-1">
                {[85, 78, 72, 68, 65, 62, 58, 55].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-accent/60 to-accent/20 rounded-sm animate-fade-in"
                    style={{ 
                      height: `${val}%`,
                      animationDelay: `${i * 50}ms`
                    }}
                  ></div>
                ))}
              </div>
            </CardContent>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </Card>

          {/* Bays Free */}
          <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:shadow-[var(--glow-primary)] transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Grid3x3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">2/8</div>
                  <div className="text-xs text-muted-foreground mt-1">6 bays active</div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Bays Available</h3>
              {/* Mini bay grid */}
              <div className="grid grid-cols-4 gap-1 h-8">
                {[true, true, true, true, true, true, false, false].map((active, i) => (
                  <div
                    key={i}
                    className={`rounded-sm animate-fade-in ${
                      active 
                        ? 'bg-gradient-to-br from-primary/60 to-primary/30 border border-primary/40' 
                        : 'bg-muted/20 border border-muted/40'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  ></div>
                ))}
              </div>
            </CardContent>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}
