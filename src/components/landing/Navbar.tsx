import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Events", href: "#events" },
  { label: "Programs", href: "#programs" },
  { label: "Community", href: "#ecosystem" },
  { label: "Career", href: "#why" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[70px] transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="container-page flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-black tracking-wider">
            BOT<span className="text-primary text-glow-red">LEAGUE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="font-display text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-md border border-border text-foreground hover:border-primary hover:text-primary transition-all">
            Login
          </button>
          <button className="font-display text-sm font-semibold uppercase tracking-wider px-5 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:glow-red">
            Register Now
          </button>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-[70px] border-b border-border bg-background/95 backdrop-blur-md">
          <div className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm uppercase tracking-widest py-2 text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button className="flex-1 font-display text-sm uppercase tracking-wider px-4 py-2 rounded-md border border-border">
                Login
              </button>
              <button className="flex-1 font-display text-sm uppercase tracking-wider px-4 py-2 rounded-md bg-primary text-primary-foreground">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
