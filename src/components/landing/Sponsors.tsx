import { SectionHeader } from "./SectionHeader";

const sponsors = [
  "NIT Delhi", "Indian BIT", "NIT Silchar",
  "Robo Company", "IIT Bombay", "Career Robotix",
];

export function Sponsors() {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border">
      <div className="container-page">
        <SectionHeader eyebrow="Backed By" title="Sponsors & Partners" align="center" />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-lg overflow-hidden">
          {sponsors.map((s, i) => (
            <div
              key={s}
              className="bg-background hover:bg-surface transition px-6 py-10 flex flex-col items-center justify-center gap-3 group"
            >
              <div className="h-10 w-10 rounded-full border-2 border-muted-foreground/60 grid place-items-center group-hover:border-primary transition">
                <div className="font-display text-xs font-black text-muted-foreground/80 group-hover:text-primary transition">
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <div className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition text-center">
                {s}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
