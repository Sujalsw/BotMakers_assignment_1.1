import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

const quick = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
const community = ["Join The Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-page py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="font-display text-2xl font-black tracking-wider">
            BOT<span className="text-primary text-glow-red">LEAGUE</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            India's national robotics ecosystem. Build. Compete. Rank.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-foreground mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quick.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-foreground mb-5">
            Community
          </h4>
          <ul className="space-y-3">
            {community.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-foreground mb-5">
            Social Media
          </h4>
          <div className="flex gap-3">
            {[Youtube, Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-10 w-10 rounded-md border border-border grid place-items-center text-muted-foreground hover:text-primary hover:border-primary hover:glow-red transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BotLeague. All rights reserved.
          </div>
          <div className="text-[10px] font-display uppercase tracking-[0.3em] text-muted-foreground">
            Engineered for the Arena
          </div>
        </div>
      </div>
    </footer>
  );
}
