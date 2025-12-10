import React from "react";

type SeoPillarVariant = "full" | "mini";

interface SeoPillarSectionProps {
  variant?: SeoPillarVariant;
}

export function SeoPillarSection({ variant = "full" }: SeoPillarSectionProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <section
      aria-labelledby="seo-pillar-heading"
      className="w-full max-w-4xl mx-auto my-12 px-4 py-8 border-t border-border/20 text-sm text-muted-foreground"
    >
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 id="seo-pillar-heading" className="text-lg font-semibold text-foreground/90">
            Smart Automotive Scheduling & Auto Shop Scheduling Software
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-xs px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 hover:bg-primary/20 text-foreground/80 hover:text-foreground transition-all duration-200"
          aria-expanded={open}
          aria-controls="seo-pillar-content"
        >
          {open ? "Hide details" : "Read details"}
        </button>
      </header>

      <div
        id="seo-pillar-content"
        className={`mt-6 space-y-6 transition-all duration-300 ${
          open ? "opacity-100 max-h-[2000px]" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {variant === "full" ? (
          <>
            <div>
              <h3 className="text-base font-semibold text-foreground/85 mb-2">
                Smart Automotive Scheduling for Modern Repair Shops
              </h3>
              <p className="leading-relaxed">
                OptiBay AI is smart automotive scheduling software built for modern auto repair shops.
                By combining real-time technician availability, bay management, and AI-powered job
                routing, the platform helps shops run smoother, faster, and more profitably from the
                first ticket to the last job closed.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground/85 mb-2">
                Auto Shop Scheduling Software That Reduces Chaos
              </h3>
              <p className="leading-relaxed">
                Unlike traditional auto repair shop software, OptiBay uses real operational data to
                prevent bottlenecks, stacked waiters, and unbalanced workloads. The system
                automatically adjusts for job duration, technician skill level, bay type, and workflow
                interruptions so the whole team can stay in sync.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground/85 mb-2">
                Built for High-Volume, General Repair, Euro, Diesel, and Specialty Shops
              </h3>
              <p className="leading-relaxed">
                Whether you're managing a general repair shop, dealer-level volume, or a specialty
                performance, Euro, or diesel operation, OptiBay adapts to your world. Smart
                automotive scheduling keeps workload balanced, helps hit billed-hour goals, and gives
                service writers clear visibility into technician capacity across every bay.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-foreground/85 mb-2">
                The Future of Shop Scheduling Software
              </h3>
              <p className="leading-relaxed">
                OptiBay AI brings clarity, control, and consistency to an industry that relies on
                precision. With AI-powered scheduling, technician scheduling intelligence, and bay
                optimization, shops can reduce chaos, protect technician time, and deliver a better
                experience for every customer.
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="leading-relaxed">
              OptiBay AI is smart automotive scheduling software built specifically for modern auto
              repair shops. It uses real technician availability, bay capacity, and job data to keep
              the day balanced instead of overbooked.
            </p>
            <p className="leading-relaxed">
              As auto shop scheduling software, OptiBay helps service writers see exactly how much
              work each technician can still take on, which bay types are open, and how new tickets
              will impact the rest of the day. That means fewer stacked waiters, more predictable
              hours for techs, and a smoother customer experience.
            </p>
            <p className="leading-relaxed">
              Whether you're running a high-volume general repair shop, Euro or diesel
              specialty, or a multi-location operation, OptiBay keeps technicians, bays, and
              timelines aligned so every minute on the schedule actually counts.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
