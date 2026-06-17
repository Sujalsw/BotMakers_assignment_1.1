import { SectionHeader } from "./SectionHeader";
import race from "@/assets/disc-roborace.jpg";
import line from "@/assets/disc-linefollower.jpg";
import rc from "@/assets/disc-rcracing.jpg";
import drone from "@/assets/disc-drone.jpg";
import hockey from "@/assets/disc-hockey.jpg";
import war from "@/assets/disc-robowar.jpg";

const items = [
  { title: "Robo Race", img: race },
  { title: "Line Follower", img: line },
  { title: "RC Racing", img: rc },
  { title: "FPV Drone Racing", img: drone, sub: "& Aeromodelling" },
  { title: "Robo Hockey", img: hockey },
  { title: "Robo War", img: war },
];

export function Disciplines() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container-page">
        <SectionHeader eyebrow="Sports" title="Competition Disciplines" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-lg overflow-hidden border border-border aspect-[4/3] cursor-pointer"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 transition" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] font-display uppercase tracking-[0.3em] text-primary mb-1">Discipline</div>
                <h3 className="font-display text-xl md:text-2xl font-black uppercase text-foreground">
                  {it.title}
                </h3>
                {it.sub && <div className="text-xs text-muted-foreground">{it.sub}</div>}
              </div>
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
