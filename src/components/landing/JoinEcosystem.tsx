import { Gavel, HandHeart, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { title: "Become a Judge", icon: Gavel, desc: "Bring expertise to the arena floor." },
  { title: "Volunteer", icon: HandHeart, desc: "Power the events on the ground." },
  { title: "Community Member", icon: Users, desc: "Stay close to the league pulse." },
];

export function JoinEcosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-background relative">
      <div className="container-page">
        <SectionHeader eyebrow="Get Involved" title="Join The Ecosystem" align="center" />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <form
              key={c.title}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-lg border border-border bg-surface p-6 hover:border-primary/40 transition group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-md bg-primary/10 border border-primary/30 text-primary grid place-items-center group-hover:glow-red transition">
                  <c.icon size={18} />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                  {c.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-5">{c.desc}</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
                <button
                  type="submit"
                  className="w-full font-display text-sm font-bold uppercase tracking-widest py-3 rounded-md bg-primary text-primary-foreground hover:glow-red transition"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}
