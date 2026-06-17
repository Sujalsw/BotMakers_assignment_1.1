import { Award, Scale, Briefcase, Zap, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Award, title: "National Recognition", desc: "Be on the only verified national robotics leaderboard in India." },
  { icon: Scale, title: "Fair Judging", desc: "Competitions confidence with standardized, expert-led evaluation." },
  { icon: Briefcase, title: "Career Ops", desc: "Students gain exposure to top universities and industry placements." },
  { icon: Zap, title: "High-Energy Eco", desc: "Join a nationwide community of elite innovators and robotics athletes." },
];

const board = [
  { rank: 1, name: "Volt-9 Mumbai", score: "508,754", trend: "+12%" },
  { rank: 2, name: "NeoCircuit", score: "498,210", trend: "+8%" },
  { rank: 3, name: "Iron Surge", score: "476,003", trend: "+6%" },
  { rank: 4, name: "Mech Mavericks", score: "461,221", trend: "+4%" },
  { rank: 5, name: "Quantum Bots", score: "452,778", trend: "+3%" },
];

export function WhyRegister() {
  return (
    <section id="why" className="py-20 md:py-28 bg-background relative">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeader eyebrow="Why Register?" title="The League Advantage" />
          <div className="mt-10 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 group">
                <div className="shrink-0 h-11 w-11 rounded-md bg-primary/10 border border-primary/30 grid place-items-center text-primary group-hover:glow-red transition">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="relative">
          <div className="absolute -inset-4 bg-secondary/10 blur-2xl rounded-2xl" />
          <div className="relative rounded-xl border border-secondary/40 bg-surface p-6 glow-blue">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-secondary" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-foreground">Leaderboard</span>
              </div>
              <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Season 02</span>
            </div>

            <div className="text-center py-4 mb-4 border border-secondary/30 rounded-md bg-secondary/5 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
              <div className="text-[10px] font-display uppercase tracking-[0.3em] text-secondary">Top Score</div>
              <div className="font-display text-4xl font-black text-foreground mt-1 text-glow-blue">508,754</div>
              <div className="text-xs text-muted-foreground mt-1">Volt-9 · Mumbai</div>
            </div>

            <ul className="space-y-2">
              {board.map((b) => (
                <li key={b.rank} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-md bg-surface-elevated border border-border hover:border-secondary/40 transition">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 h-7 w-7 rounded-sm grid place-items-center font-display text-xs font-black ${b.rank === 1 ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border"}`}>
                      {b.rank.toString().padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground truncate">{b.name}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-display text-xs text-muted-foreground tabular-nums">{b.score}</span>
                    <span className="text-[10px] font-display text-secondary">{b.trend}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
