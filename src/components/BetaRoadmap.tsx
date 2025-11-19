export default function BetaRoadmap() {
  const roadmapItems = [
    { label: "Beta Onboarding", description: "Get your shop set up" },
    { label: "Core Scheduling", description: "Start scheduling jobs" },
    { label: "Multi-Bay Optimizations", description: "AI-powered bay assignment" },
    { label: "Full Public Launch", description: "General availability" }
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-destructive to-destructive bg-clip-text text-transparent">
            Where we're going during beta.
          </h2>
          <p className="text-muted-foreground">Your journey from signup to full optimization</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-accent/60"></div>
            
            <div className="grid grid-cols-4 gap-4">
              {roadmapItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative text-center animate-fade-in group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Node */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--glow-primary)] group-hover:scale-110 group-hover:shadow-[var(--glow-secondary)] transition-all duration-300 flex items-center justify-center">
                      <div className="text-white font-bold text-xl">{index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <h3 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden space-y-8">
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className="relative flex gap-4 animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Node */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-lg"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--glow-primary)] group-hover:scale-110 group-hover:shadow-[var(--glow-secondary)] transition-all duration-300 flex items-center justify-center">
                      <div className="text-white font-bold text-xl">{index + 1}</div>
                    </div>
                  </div>
                  {/* Vertical line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 to-accent/60 -mb-8"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-3">
                  <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
