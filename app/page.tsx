import { GradientText } from "./components/gradient-text";

const experience = [
  {
    role: "Tech Lead",
    company: "P-Secure",
    href: "https://www.p-secure.com",
    period: "2025 --",
  },
  {
    role: "Design Engineer",
    company: "P-Secure",
    href: "https://www.p-secure.com",
    period: "2024 -- 2025",
  },
  {
    role: "Product Designer",
    company: "Maybe Tomorrow",
    href: "",
    period: "2023 -- 2024",
  },
  {
    role: "Digital Designer",
    company: "VENZO",
    href: "https://venzo.com",
    period: "2022 -- 2023",
  },
  {
    role: "Digital Designer",
    company: "Telenor",
    href: "https://telenor.dk",
    period: "2021 -- 2022",
  },
  {
    role: "UX Design Student",
    company: "Telenor",
    href: "https://telenor.dk",
    period: "2020 -- 2021",
  },
];

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-medium tracking-tight">Joachim Demuth</h1>

      <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
        <p>
          Tech Lead, based in Copenhagen. Currently at{" "}
          <a
            href="https://p-secure.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-muted/50 underline-offset-[3px] transition-colors hover:decoration-foreground"
          >
            P-Secure
          </a>
          , where I lead product and engineering for automated background checks
          in critical infrastructure.
        </p>
        <p>
          I started in UX and digital design admiring modern products that pushed the boundaries of design and user experience, spent years shaping interfaces at
          Telenor and smaller studios, and eventually moved into engineering and
          technical leadership. These days I spend most of my time writing code,
          defining product direction, and experimenting with the agentic side of
          AI.
        </p>
        <p>
          Outside of work I build my ideas to learn new things, shoot film and spend a bunch of time discovering and listening to new music.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-sm font-medium text-muted">Experience</h2>
        <ul className="mt-6 space-y-4">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="flex items-baseline justify-between gap-4">
              <span className="text-[15px]">
                {item.role},{" "}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline decoration-muted/50 underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {item.company}
                </a>
              </span>
              <span className="shrink-0 text-sm tabular-nums text-muted">
                {item.period}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 flex gap-6 text-sm text-muted">
        <a
          href="https://github.com/joachimdemuth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientText>github</GradientText>
        </a>
        <a
          href="https://x.com/joachimdemuth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientText>x</GradientText>
        </a>
        <a
          href="https://linkedin.com/in/joachimdemuth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientText>linkedin</GradientText>
        </a>
        <a href="mailto:jdemuth18@gmail.com">
          <GradientText>email</GradientText>
        </a>
      </div>
    </main>
  );
}
