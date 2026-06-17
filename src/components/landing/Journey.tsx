import { Wrench, Map, Trophy, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: Wrench, label: "Build Your Team" },
  { icon: Map, label: "Compete Across India" },
  { icon: Trophy, label: "Earn National Ranking" },
  { icon: Users, label: "Join The League" },
];

export function Journey() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <SectionHeader
            eyebrow="User Journey"
            title="Your Path To The League"
            subtitle="Four stages. One unbroken track from prototype to podium."
            align="center"
          />
        </div>

        <div className="mt-16 relative">
          {/* desktop line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

          <div className="grid gap-12 md:gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-secondary/30 blur-xl group-hover:bg-secondary/50 transition" />
                  <div className="relative h-24 w-24 rounded-full bg-background border-2 border-secondary/60 grid place-items-center group-hover:border-secondary group-hover:glow-blue transition-all">
                    <s.icon size={32} className="text-foreground" />
                  </div>
                </div>
                <div className="mt-5 font-display text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Step {i + 1}
                </div>
                <div className="mt-1.5 font-display text-sm md:text-base font-semibold uppercase text-foreground max-w-[160px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
