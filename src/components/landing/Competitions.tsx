import { Calendar, MapPin, Tag, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

function Bracket() {
  return (
    <svg viewBox="0 0 260 220" className="w-full h-auto">
      {/* Round 1 */}
      {[20, 70, 130, 180].map((y, i) => (
        <rect key={i} x="6" y={y} width="70" height="22" rx="3"
          fill="oklch(0.22 0 0)" stroke={i === 0 ? "oklch(0.65 0.24 25)" : "oklch(0.3 0 0)"} strokeWidth="1" />
      ))}
      {/* connectors r1 -> r2 */}
      <path d="M76 31 L100 31 L100 56 L120 56" fill="none" stroke="oklch(0.65 0.24 25)" strokeWidth="1.5" />
      <path d="M76 81 L100 81 L100 56 L120 56" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="1" />
      <path d="M76 141 L100 141 L100 166 L120 166" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="1" />
      <path d="M76 191 L100 191 L100 166 L120 166" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="1" />
      {/* Round 2 */}
      <rect x="120" y="45" width="70" height="22" rx="3" fill="oklch(0.22 0 0)" stroke="oklch(0.65 0.24 25)" />
      <rect x="120" y="155" width="70" height="22" rx="3" fill="oklch(0.22 0 0)" stroke="oklch(0.3 0 0)" />
      {/* connectors r2 -> final */}
      <path d="M190 56 L215 56 L215 111 L235 111" fill="none" stroke="oklch(0.65 0.24 25)" strokeWidth="1.5" />
      <path d="M190 166 L215 166 L215 111 L235 111" fill="none" stroke="oklch(0.3 0 0)" strokeWidth="1" />
      {/* Final */}
      <rect x="180" y="100" width="70" height="22" rx="3" fill="oklch(0.22 0 0)" stroke="oklch(0.65 0.24 25)" />
      {/* dots */}
      {[31, 81, 141, 191].map((y) => (
        <circle key={y} cx="14" cy={y} r="2.5" fill="oklch(0.4 0 0)" />
      ))}
    </svg>
  );
}

const upcoming = [
  { title: "Mumbai Mech Open", date: "12 . 11 . 2026", loc: "BKC, Mumbai", cat: "Junior" },
  { title: "Delhi Drone Cup", date: "26 . 11 . 2026", loc: "IGI Stadium", cat: "Open" },
];

const past = [
  { title: "Bengaluru Regionals", date: "Oct 2026", score: "W: Team Volt-9" },
  { title: "Hyderabad Qualifier", date: "Sep 2026", score: "W: NeoCircuit" },
  { title: "Chennai Showdown", date: "Aug 2026", score: "W: Iron Surge" },
  { title: "Pune Open", date: "Jul 2026", score: "W: Mech Mavericks" },
];

export function Competitions() {
  return (
    <section id="events" className="py-20 md:py-28 bg-background relative">
      <div className="container-page">
        <SectionHeader eyebrow="Season 02" title="Competitions & Events" />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* LIVE */}
          <div className="rounded-lg border border-border bg-surface p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-primary">Live Now</span>
              </div>
              <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">QF · Match 03</span>
            </div>
            <div className="text-sm font-display uppercase tracking-widest text-foreground">Bengaluru Regionals</div>
            <div className="text-xs text-muted-foreground mt-1">Quarterfinals · Bracket B</div>
            <div className="mt-6">
              <Bracket />
            </div>
            <button className="mt-4 w-full font-display text-xs uppercase tracking-widest py-2.5 rounded-md border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition">
              Watch Live Stream
            </button>
          </div>

          {/* UPCOMING */}
          <div className="rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-xs uppercase tracking-[0.25em] text-secondary">Upcoming</span>
              <span className="text-[10px] font-display uppercase tracking-widest text-muted-foreground">Next 30 days</span>
            </div>
            <div className="space-y-4">
              {upcoming.map((e) => (
                <div key={e.title} className="rounded-md border border-border bg-surface-elevated p-4 hover:border-primary/40 transition group">
                  <div className="font-display text-base font-semibold text-foreground group-hover:text-primary transition">
                    {e.title}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5"><Calendar size={12} className="text-secondary" />{e.date}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary" />{e.loc}</div>
                    <div className="flex items-center gap-1.5"><Tag size={12} className="text-secondary" />{e.cat}</div>
                  </div>
                  <button className="mt-4 w-full font-display text-xs font-bold uppercase tracking-widest py-2.5 rounded-md bg-primary text-primary-foreground hover:glow-red transition">
                    Register
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* PAST */}
          <div className="rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">Past Results</span>
              <a href="#" className="text-[10px] font-display uppercase tracking-widest text-secondary hover:text-foreground">All</a>
            </div>
            <ul className="divide-y divide-border">
              {past.map((p) => (
                <li key={p.title} className="py-3.5 flex items-center justify-between gap-3 group">
                  <div className="min-w-0">
                    <div className="font-display text-sm font-semibold text-foreground truncate group-hover:text-primary transition">{p.title}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{p.date} · {p.score}</div>
                  </div>
                  <ChevronRight size={14} className="text-muted-foreground shrink-0 group-hover:text-primary transition" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
