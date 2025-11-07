import Link from "next/link";
import {
  ArrowUpRight,
  Gauge,
  Globe2,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";

const highlights = [
  {
    title: "Adaptive Intelligence",
    description:
      "Blend curated workflows with autonomous exploration so every project reaches production-ready quality faster.",
    icon: Sparkles,
  },
  {
    title: "Operational Clarity",
    description:
      "Understand each decision with audit trails, annotated diffs, and instant rollbacks for total confidence.",
    icon: Shield,
  },
  {
    title: "Global Launches",
    description:
      "Ship high-impact experiences that scale across regions, time zones, and devices from day one.",
    icon: Globe2,
  },
];

const flow = [
  {
    title: "Ideate & Align",
    detail:
      "Convert abstract goals into concrete sprints with context-aware prompts and intelligent scaffolds.",
  },
  {
    title: "Prototype Rapidly",
    detail:
      "Visualize outcomes in minutes with AI-assisted components, thematic palettes, and responsive layouts.",
  },
  {
    title: "Refine & Validate",
    detail:
      "Stay in sync with automated reviews, test suggestions, and analytics stitched directly into your repo.",
  },
  {
    title: "Deploy with Confidence",
    detail:
      "Promote to production through orchestrated pipelines that keep quality, accessibility, and performance in check.",
  },
];

const metrics = [
  { label: "Delivery Acceleration", value: "3.7x" },
  { label: "Production Stability", value: "99.98%" },
  { label: "Teams Empowered", value: "120+" },
];

const resources = [
  {
    name: "Playbook",
    href: "#playbook",
    description: "Step-by-step guide to crafting agentic product teams.",
  },
  {
    name: "Live Workshop",
    href: "#workshop",
    description: "Interactive weekly lab covering applied AI delivery tactics.",
  },
  {
    name: "Partner Catalyst",
    href: "#partner",
    description: "Pair your org with a dedicated specialist for rollout.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_65%)]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-28 pt-28 sm:px-12 lg:px-16">
        <section className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Agentic delivery platform
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build remarkable web experiences with an assistant that ships
              alongside you.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg text-slate-200">
              Launch products faster than ever. Generate production-grade UI,
              choreograph workflows, and deploy confidently with telemetry built
              in. Your creative intent is now executable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#playbook"
                className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Explore the playbook
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Talk with a guide
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
              <span>Live mission control</span>
              <span>Active</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/5 bg-black/30 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                Flight path
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {flow.map((item, index) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-2xl border border-white/5 bg-black/30 p-4 transition hover:border-cyan-400/40 hover:bg-black/20"
                  >
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/80 transition group-hover:bg-cyan-400/80 group-hover:text-slate-950">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3" id="playbook">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                Learn more
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-cyan-400/30" />
            </article>
          ))}
        </section>

        <section
          id="workshop"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-[1.3fr_1fr]"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
              <Workflow className="h-3.5 w-3.5" />
              <span>Agentic Ops</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Bring structure to every autonomous build loop.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Shape resilient systems where human intention and AI execution move
              in lockstep. Codify your rituals, roll out guardrails, and iterate
              with clarity across the full product lifecycle.
            </p>
            <ul className="mt-6 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/40 p-4">
                <Gauge className="h-4 w-4 text-cyan-200" />
                Live delivery scoreboards
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/40 p-4">
                <Shield className="h-4 w-4 text-cyan-200" />
                Policy-aware automation
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/40 p-4">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                Curated experiment packs
              </li>
              <li className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/40 p-4">
                <Globe2 className="h-4 w-4 text-cyan-200" />
                Multiregion rollout orchestration
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/5 bg-black/40 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Weekly live session
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Catalyst Lab · Thursdays at 10am PT
              </p>
              <p className="mt-2 text-sm text-white/70">
                A working session led by senior strategists translating agentic
                delivery patterns into real commitments for your org.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Reserve a seat
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section
          id="partner"
          className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/20 via-cyan-400/10 to-transparent p-10 backdrop-blur lg:grid-cols-[1.1fr_1fr]"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Partner catalysts guide your team end-to-end.
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Deploy a bespoke squad that embeds with your engineers, designers,
              and operators. We orchestrate AI copilots, automation layers, and
              playbooks that honor your standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  href={resource.href}
                  className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:border-cyan-300/40 hover:bg-black/30"
                >
                  <span className="text-sm font-semibold text-white">
                    {resource.name}
                  </span>
                  <span className="text-xs text-white/60">
                    {resource.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Rapid alignment
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Launch readiness in under 14 days.
            </p>
            <div className="mt-6 space-y-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                Day 1–3 · Discovery sprints & value mapping
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                Day 4–9 · Pilot builds, instrumentation, & reviews
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                Day 10–14 · Rollout, training, and guardrail audits
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Start a mission
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Ready to create your next breakthrough?
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                Share a challenge, an idea, or a stubborn constraint. We will
                assemble the right blend of autonomous workflows and human
                expertise to deliver momentum fast.
              </p>
            </div>
            <Link
              href="mailto:launch@agentic.studio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              launch@agentic.studio
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <footer className="relative border-t border-white/10 bg-black/60 px-6 py-8 text-center text-xs text-white/50 sm:px-12">
        © {new Date().getFullYear()} Agentic Launchpad. Built for teams who
        move boldly.
      </footer>
    </div>
  );
}
