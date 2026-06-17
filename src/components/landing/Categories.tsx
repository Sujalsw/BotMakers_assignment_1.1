import { Blocks, Lightbulb, HardHat, Brain, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cats = [
  { title: "Mini Makers", desc: "Where champions begin. Ages 8–11.", icon: Blocks, accent: "primary" },
  { title: "Junior Innovators", desc: "Engineering & strategy fundamentals.", icon: Lightbulb, accent: "secondary" },
  { title: "Young Engineers", desc: "Advanced wireless & autonomous control.", icon: HardHat, accent: "primary" },
  { title: "Robo Minds", desc: "Elite professional sports & robotics.", icon: Brain, accent: "secondary" },
];

export function Categories() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <SectionHeader eyebrow="Age Divisions" title="Categories" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-lg border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary hover:glow-red overflow-hidden"
            >
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 blur-3xl transition ${c.accent === "primary" ? "bg-primary/40" : "bg-secondary/40"}`} />
              <div className={`relative h-12 w-12 rounded-md grid place-items-center mb-5 ${c.accent === "primary" ? "bg-primary/10 text-primary border border-primary/30" : "bg-secondary/10 text-secondary border border-secondary/30"}`}>
                <c.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
