import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-arena.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[700px] w-full overflow-hidden pt-[70px]">
      <img
        src={heroImg}
        alt="Two combat robots facing off inside the BotLeague arena"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
            }}
            animate={{ y: [-10, 12, -10], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute right-5 top-24 md:right-10 md:top-28 z-10"
      >
        <div className="flex items-center gap-3 bg-background/70 backdrop-blur-md border border-primary/40 rounded-md px-3 py-2 glow-red">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <div className="text-xs font-display uppercase tracking-widest">
            <span className="text-primary font-bold">Live Episode</span>
            <span className="text-muted-foreground mx-1.5">|</span>
            <span className="text-foreground">Bengaluru Regionals</span>
          </div>
          <a href="#events" className="flex items-center gap-1 text-xs font-display uppercase tracking-widest text-secondary hover:text-foreground transition">
            <Play size={12} fill="currentColor" /> Watch
          </a>
        </div>
      </motion.div>

      <div className="container-page relative z-10 flex min-h-[700px] flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-sm border border-secondary/40 bg-secondary/10 px-3 py-1 text-[11px] font-display uppercase tracking-[0.25em] text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> National Robotics League
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.95] tracking-tight">
            India's <span className="text-glow-red text-primary">Ultimate</span>
            <br />
            Robotics <span className="text-glow-blue text-secondary">Arena</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Build. Compete. Rank. The national ecosystem for robotics arena —
            from school-level matchups to championship glory.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-md bg-primary text-primary-foreground transition-all hover:glow-red hover:scale-[1.02]">
              Create Account <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-md border border-border bg-background/40 backdrop-blur text-foreground hover:border-secondary hover:text-secondary transition-all">
              Explore Arena <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6 border-t border-border/50 pt-6">
            {[
              { k: "12+", v: "Cities" },
              { k: "500K", v: "Athletes" },
              { k: "60", v: "Events / Yr" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl md:text-3xl font-black text-foreground">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
