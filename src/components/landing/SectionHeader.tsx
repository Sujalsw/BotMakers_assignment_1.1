export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <div className="text-xs font-display uppercase tracking-[0.3em] text-primary mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
