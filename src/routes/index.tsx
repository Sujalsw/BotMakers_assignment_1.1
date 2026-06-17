import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Competitions } from "@/components/landing/Competitions";
import { Journey } from "@/components/landing/Journey";
import { WhatIs } from "@/components/landing/WhatIs";
import { Categories } from "@/components/landing/Categories";
import { Disciplines } from "@/components/landing/Disciplines";
import { WhyRegister } from "@/components/landing/WhyRegister";
import { JoinEcosystem } from "@/components/landing/JoinEcosystem";
import { Sponsors } from "@/components/landing/Sponsors";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BotLeague — India's Ultimate Robotics Arena" },
      { name: "description", content: "Build. Compete. Rank. Join India's national robotics arena: events, rankings, and career pathways for the country's top engineers." },
      { property: "og:title", content: "BotLeague — India's Ultimate Robotics Arena" },
      { property: "og:description", content: "Build. Compete. Rank. Join India's national robotics arena: events, rankings, and career pathways for the country's top engineers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Competitions />
        <Journey />
        <WhatIs />
        <Categories />
        <Disciplines />
        <WhyRegister />
        <JoinEcosystem />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
