import { ArrowUpRight, Check, Code2, Layers3, Rocket, Boxes, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A10] text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#070A10]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Vepotra home">
            <VMark />
            <span className="text-[15px] font-semibold tracking-[0.22em]">VEPOTRA</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#capabilities" className="transition hover:text-white">Capabilities</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </nav>

      <section className="relative isolate min-h-[760px] pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10 hero-grid" />
        <div className="absolute left-1/2 top-10 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-[30%] -z-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              Software engineering studio
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[78px]">
              Engineering{" "}
              <span className="gradient-text">scalable systems</span>{" "}
              for modern startups.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
              Vepotra designs and builds production-grade software, platforms,
              and developer tools that turn ambitious ideas into reliable
              products.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="button-primary">
                Explore our work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#capabilities" className="button-secondary">
                What we build
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/40">
              {["Full-stack engineering", "Scalable architecture", "Developer-first products"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <SystemVisual />
        </div>
      </section>

      <section id="capabilities" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          <Stat label="Architecture" value="Production-grade" />
          <Stat label="Focus" value="Developer-first" />
          <Stat label="Approach" value="Product-minded" />
          <Stat label="Reach" value="Global by design" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8" id="about">
        <SectionIntro
          eyebrow="Capabilities"
          title="From product idea to dependable system."
          copy="Vepotra combines product thinking with full-stack engineering. The goal is not simply to ship features, but to create foundations that can evolve as the product grows."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Capability
            icon={<Layers3 />}
            number="01"
            title="Systems & infrastructure"
            copy="APIs, data models, authentication, integrations, queues, and architecture designed for real-world scale."
          />
          <Capability
            icon={<Code2 />}
            number="02"
            title="Full-stack applications"
            copy="Fast, accessible interfaces backed by robust services, clean domain boundaries, and maintainable code."
          />
          <Capability
            icon={<Boxes />}
            number="03"
            title="Developer tools"
            copy="Internal platforms, automation, SDKs, dashboards, and tools that make engineering teams faster."
          />
          <Capability
            icon={<Rocket />}
            number="04"
            title="0 → 1 products"
            copy="Rapid validation and thoughtful engineering for founders turning a strong idea into a real product."
          />
        </div>
      </section>

      <section id="work" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
          <SectionIntro
            eyebrow="Selected work"
            title="Builds that demonstrate the engineering."
            copy="Replace these cards with Vepotra's real products as they launch. The layout is intentionally product-led rather than résumé-led."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <ProjectCard
              index="01"
              title="Ride platform"
              description="A production-oriented mobility platform with rider, driver, payments, subscriptions, realtime state, and operational tooling."
              tags={["Flutter", "PostgreSQL", "Drizzle", "Realtime"]}
              large
            />
            <ProjectCard
              index="02"
              title="Developer platform"
              description="A developer-facing product concept focused on workflows, APIs, observability, and automation."
              tags={["Next.js", "TypeScript", "APIs", "Cloud"]}
            />
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow">Engineering stack</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Modern tools. Boringly reliable foundations.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/45">
                The stack evolves with the product. Architecture decisions are
                made around reliability, developer experience, and long-term
                maintainability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Next.js", "TypeScript", "Flutter", "PostgreSQL", "Drizzle ORM", "Node.js", "Tailwind CSS", "REST / GraphQL", "Cloud infrastructure"].map((tech) => (
                <div key={tech} className="rounded-2xl border border-white/[0.07] bg-[#0A0E16] px-4 py-5 text-sm text-white/70 transition hover:-translate-y-0.5 hover:border-cyan-300/20 hover:text-white">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <p className="eyebrow">Build with Vepotra</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
            Have a hard problem worth solving?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">
            Tell us what you're building, where it needs to go, and what makes
            the problem difficult. Let's turn it into a system.
          </p>
          <a href="mailto:hello@vepotra.com" className="button-primary mt-9">
            hello@vepotra.com <Mail className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <VMark small />
            <div>
              <div className="text-xs font-semibold tracking-[0.2em]">VEPOTRA</div>
              <div className="mt-1 text-xs text-white/30">Engineering scalable systems.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/35">
            <a href="#" aria-label="GitHub" className="transition hover:text-white"><Github className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-white"><Linkedin className="h-4 w-4" /></a>
            <span className="text-xs">© {new Date().getFullYear()} Vepotra</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function VMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`relative block ${small ? "h-7 w-7" : "h-8 w-8"}`}>
      <svg viewBox="0 0 40 40" fill="none" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="vg" x1="7" y1="7" x2="34" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset=".55" stopColor="#2563EB" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path d="M6 7h8l9.5 18L33 7h7L24 34h-7L6 7Z" fill="url(#vg)" />
        <path d="m24 25 8-4-3.2 6.1-7.2 3.4L24 25Z" fill="#8B5CF6" />
        <path d="m27 17 8-4-3.1 5.8-7.2 3.4L27 17Z" fill="#22D3EE" />
      </svg>
    </span>
  );
}

function SystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative rounded-[28px] border border-white/10 bg-[#0B1019]/90 p-4 shadow-2xl shadow-blue-950/30">
        <div className="rounded-[20px] border border-white/[0.07] bg-[#080C13] p-5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <VMark small />
              <span className="text-xs font-medium text-white/65">vepotra / systems</span>
            </div>
            <span className="rounded-full border border-emerald-300/10 bg-emerald-300/5 px-2.5 py-1 text-[10px] text-emerald-300">
              operational
            </span>
          </div>

          <div className="relative mt-5 grid min-h-[330px] place-items-center overflow-hidden rounded-2xl border border-white/[0.05] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,.12),transparent_55%)]">
            <div className="absolute inset-0 system-grid" />
            <div className="relative h-40 w-40 rounded-full border border-cyan-300/20 bg-cyan-300/[0.03] shadow-[0_0_100px_rgba(37,99,235,.14)]">
              <div className="absolute inset-8 rounded-full border border-blue-400/20" />
              <div className="absolute inset-[52px] grid place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                <VMark />
              </div>
              {[
                "left-[-58px] top-[28px]",
                "right-[-58px] top-[28px]",
                "left-[-52px] bottom-[28px]",
                "right-[-52px] bottom-[28px]",
              ].map((pos, i) => (
                <span key={i} className={`absolute ${pos} h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)]`} />
              ))}
            </div>
            <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.2em] text-white/20">architecture</span>
            <span className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.2em] text-white/20">v1.0</span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["99.99%", "availability"],
              ["24ms", "latency"],
              ["∞", "scale"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-3">
                <div className="text-sm font-semibold text-white/80">{value}</div>
                <div className="mt-1 text-[10px] text-white/30">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-7 sm:px-8">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/25">{label}</div>
      <div className="mt-2 text-sm text-white/70">{value}</div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/45">{copy}</p>
    </div>
  );
}

function Capability({ icon, number, title, copy }: { icon: React.ReactNode; number: string; title: string; copy: string }) {
  return (
    <article className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04]">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-cyan-300">
          {icon}
        </div>
        <span className="text-xs text-white/20">{number}</span>
      </div>
      <h3 className="mt-12 text-xl font-medium">{title}</h3>
      <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">{copy}</p>
    </article>
  );
}

function ProjectCard({
  index,
  title,
  description,
  tags,
  large = false,
}: {
  index: string;
  title: string;
  description: string;
  tags: string[];
  large?: boolean;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#0A0E16] p-7 ${large ? "min-h-[390px]" : "min-h-[340px]"}`}>
      <div className="absolute right-[-15%] top-[-30%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/15" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/25">{index}</span>
          <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
        </div>
        <div className="mt-auto max-w-xl">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/40">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-white/45">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}