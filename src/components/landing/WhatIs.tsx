import { Calendar, Fingerprint, BarChart3, Briefcase, Cpu, Cog, Bot, CircuitBoard } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const benefits = [
  { n: "01", title: "Structured Events", desc: "From one-off matches to year-round competitive seasons across India.", icon: Calendar },
  { n: "02", title: "Digital Identity", desc: "Your professional robotics profile, tracked and verified by BotLeague.", icon: Fingerprint },
  { n: "03", title: "National Ranking", desc: "Benchmark your skills against India's top robotics engineers.", icon: BarChart3 },
  { n: "04", title: "Career Pathway", desc: "Turn arena achievements into real-world industry opportunities.", icon: Briefcase },
];

export function WhatIs() {
  return (
    <section id="programs" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background via-surface to-background">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader eyebrow="The Platform" title="What Is BotLeague?" />
          <p className="mt-4 text-muted-foreground max-w-lg">
            An end-to-end competitive infrastructure for India's robotics talent — events, identity, ranking, and career, in one circuit.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="group rounded-lg border border-border bg-surface/60 p-5 hover:border-primary/40 transition">
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-display text-sm font-black text-primary">{b.n}</span>
                  <b.icon size={18} className="text-secondary mt-0.5" />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: line-art ecosystem */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <div className="absolute inset-0 rounded-full border border-secondary/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_22s_linear_infinite_reverse]" />
          <div className="absolute inset-20 rounded-full border border-border" />

          <div className="absolute inset-0 grid place-items-center">
            <div className="h-24 w-24 rounded-full bg-surface border-2 border-primary grid place-items-center glow-red">
              <Bot size={40} className="text-primary" />
            </div>
          </div>

          {[
            { icon: Cpu, top: "5%", left: "45%" },
            { icon: Cog, top: "45%", left: "5%" },
            { icon: CircuitBoard, top: "45%", left: "85%" },
            { icon: Briefcase, top: "85%", left: "45%" },
          ].map((node, i) => (
            <div
              key={i}
              className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-md border border-secondary/60 bg-surface grid place-items-center glow-blue"
              style={{ top: node.top, left: node.left }}
            >
              <node.icon size={22} className="text-secondary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
