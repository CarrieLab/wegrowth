import Image from "next/image";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const siteBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

const navigation = [
  { label: "Company", href: "#company" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Business & Growth Consulting",
    description:
      "Clarify your growth strategy, optimize operations, and build a resilient business model tailored to your industry.",
  },
  {
    title: "AI Enablement for Enterprises",
    description:
      "Identify high‑value AI opportunities, design practical use cases, and implement solutions that improve decision‑making and efficiency.",
  },
  {
    title: "Digital Product Design",
    description:
      "Design modern, conversion‑focused websites and apps that express your brand and deliver a refined user experience.",
  },
  {
    title: "Custom Development & Integration",
    description:
      "Build robust web and mobile applications, integrate with existing systems, and ensure secure, scalable architecture.",
  },
];

const expertise = [
  "AI strategy, data products, and automation",
  "B2B & B2C growth strategy and experimentation",
  "End‑to‑end product discovery and UX/UI design",
  "Cloud‑native web and mobile development",
  "Analytics, dashboards, and performance measurement",
  "Enterprise‑grade security and reliability practices",
];

const steps = [
  {
    title: "Discover & Diagnose",
    description:
      "We start by understanding your business model, data, and current challenges to identify real growth levers.",
  },
  {
    title: "Design the Growth Blueprint",
    description:
      "Together we define a clear strategy, prioritized roadmap, and measurable outcomes across consulting, AI, and digital products.",
  },
  {
    title: "Build, Launch & Optimize",
    description:
      "Our team designs, develops, and iterates solutions with you, tracking impact and refining based on real business results.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 rounded-xl border border-black/5 bg-white p-1.5 shadow-sm">
              <Image
                src={`${siteBasePath}/wegrowth-logo-v2.png`}
                alt="WeGrowth logo"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-950">
              WeGrowth
            </span>
          </a>
          <nav className="hidden items-center gap-10 text-base font-medium text-neutral-600 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-neutral-950 hover:no-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#00C49E] px-6 py-3 text-base font-semibold shadow-sm transition hover:opacity-90 hover:no-underline md:inline-flex"
            style={{ color: "#ffffff" }}
          >
            Book A Consultation
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-28">
        {/* Hero — full-width bottom background */}
        <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden pb-24">
          {/* Full-width design background — covers entire hero */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-emerald-100/50"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_80%,rgba(0,196,158,0.12),transparent_60%)]" aria-hidden />
          {/* Subtle pattern overlay — dots + soft grid, stays in background */}
          <div
            className="absolute inset-0 opacity-[0.28]"
            aria-hidden
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,196,158,0.2) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.2]"
            aria-hidden
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,196,158,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,196,158,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "56px 56px",
            }}
          />
          {/* Soft organic wave accents */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80 Q40 40 80 80 T160 80' stroke='%2300C49E' fill='none' stroke-width='0.6'/%3E%3Cpath d='M0 100 Q50 60 100 100 T160 100' stroke='%2300C49E' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "160px 160px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
              STRATEGIC GROWTH & AI CONSULTING
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              We help enterprises turn{" "}
              <span className="text-[#00C49E]">
                technology
              </span>{" "}
              into measurable business growth.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              WeGrowth partners with forward‑thinking companies to design growth
              strategies, enable AI capabilities, and build digital products that
              accelerate business performance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="rounded-full bg-[#00C49E] px-8 py-4 text-base font-semibold shadow-md transition hover:opacity-90 hover:no-underline"
                style={{ color: "#ffffff" }}
              >
                Schedule A Strategy Call
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-neutral-300 px-8 py-4 text-base font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 hover:no-underline"
              >
                Explore Our Services
              </a>
            </div>
            <dl className="mt-14 grid gap-8 text-base text-neutral-700 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Focus
                </dt>
                <dd className="mt-2 text-lg font-semibold text-neutral-900">
                  Growth for enterprises
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Domains
                </dt>
                <dd className="mt-2 text-lg font-semibold text-neutral-900">
                  Consulting · AI · Digital
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  Engagements
                </dt>
                <dd className="mt-2 text-lg font-semibold text-neutral-900">
                  Strategy to implementation
                </dd>
              </div>
            </dl>
          </div>
          </div>
        </section>

        {/* Company philosophy */}
        <section
          id="company"
          className="border-y border-neutral-100 py-20 lg:py-28"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-12">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
                COMPANY PHILOSOPHY
              </h2>
              <p className="mt-6 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                Strategy first, technology with purpose, growth that lasts.
              </p>
              <div className="mt-10 space-y-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
                <p>
                  We believe real growth comes from clear strategy,
                  disciplined execution, and technology that is carefully aligned
                  with business value — not from isolated tools or trends.
                </p>
                <p>
                  Our consultants and technologists work as one team with your
                  leadership, translating your strategic objectives into practical
                  roadmaps, data‑driven decision making, and digital experiences
                  that your customers and teams actually love to use.
                </p>
                <p>
                  Every engagement is designed to be transparent, measurable, and
                  collaborative — so your internal organization becomes stronger and
                  more capable with every project we deliver together.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-950 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={`${siteBasePath}/AI_technology_photo.jpg`}
                  alt="Business and technology collaboration meeting"
                  width={960}
                  height={1280}
                  className="aspect-[5/6] h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-5 sm:py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5EEAD4]">
                  AI + Technology + Partnership
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-100">
                  Turning strategic collaboration into measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 lg:py-28">
          <div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
                SERVICES
              </h2>
              <p className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
                From strategy to fully delivered solutions.
              </p>
            </div>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
              We combine management consulting with hands‑on product, design,
              and engineering capability, so you can move from idea to launch
              with one trusted partner.
            </p>
          </div>
          <div className="mt-12 grid gap-x-6 gap-y-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-[#00C49E] opacity-0 transition group-hover:opacity-100" />
                <h3 className="text-lg font-bold text-neutral-950 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual growth banner */}
        <section className="pb-20 lg:pb-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-100 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 px-8 py-10 text-white shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(0,196,158,0.4),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,196,158,0.25),_transparent_55%)] opacity-80" />
            <div className="relative max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
                GROWTH INSIGHTS SNAPSHOT
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                A clear view of your pipeline, performance, and AI impact.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg">
                We design executive dashboards and analytics that connect strategy,
                digital channels, and operations into one coherent picture, so your
                leadership team can make confident, data‑driven decisions.
              </p>
              <dl className="mt-8 grid gap-6 text-sm text-neutral-100 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Revenue impact
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">+18–35%</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Decision speed
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">2–3x</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Time saved
                  </dt>
                  <dd className="mt-2 text-2xl font-bold text-white">-25–40%</dd>
                </div>
              </dl>
            </div>
            <div className="relative mt-8 grid max-w-md gap-4 lg:mt-0 lg:w-[360px]">
              <div className="overflow-hidden rounded-2xl bg-white/5 p-4 backdrop-blur ring-1 ring-white/15">
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span>Growth overview</span>
                  <span className="rounded-full bg-[#00C49E]/15 px-2 py-0.5 text-[10px] font-semibold text-[#00C49E]">
                    LIVE
                  </span>
                </div>
                <div className="mt-4 flex items-end gap-1.5">
                  {["h-10", "h-16", "h-12", "h-20", "h-14", "h-24", "h-18"].map(
                    (height, index) => (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        className={`flex-1 rounded-full bg-gradient-to-t from-[#00C49E] to-emerald-300 ${height}`}
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl bg-white/5 p-4 backdrop-blur ring-1 ring-white/15">
                  <p className="text-xs font-semibold text-neutral-200">
                    Top-performing channels
                  </p>
                  <div className="mt-3 space-y-2 text-[11px] text-neutral-300">
                    <div className="flex items-center justify-between">
                      <span>Inbound</span>
                      <span className="text-[#00C49E]">+42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Partnerships</span>
                      <span className="text-[#00C49E]">+31%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Product‑led</span>
                      <span className="text-[#00C49E]">+24%</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white/5 p-4 backdrop-blur ring-1 ring-white/15">
                  <p className="text-xs font-semibold text-neutral-200">
                    AI opportunity map
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-neutral-200">
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <p className="font-semibold text-[#00C49E]">Ops</p>
                      <p className="mt-1 text-[10px] text-neutral-300">
                        Automation & routing
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <p className="font-semibold text-[#00C49E]">Sales</p>
                      <p className="mt-1 text-[10px] text-neutral-300">
                        Next‑best actions
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <p className="font-semibold text-[#00C49E]">Service</p>
                      <p className="mt-1 text-[10px] text-neutral-300">
                        AI copilots
                      </p>
                    </div>
                    <div className="rounded-lg bg-white/5 px-2 py-1.5">
                      <p className="font-semibold text-[#00C49E]">Product</p>
                      <p className="mt-1 text-[10px] text-neutral-300">
                        Personalisation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section
          id="expertise"
          className="grid gap-12 rounded-[2rem] bg-neutral-950 px-8 py-14 text-white sm:px-12 sm:py-16 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
        >
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
              TECHNICAL & DOMAIN EXPERTISE
            </h2>
            <p className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Expert technologists with a consultant&apos;s mindset.
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-200 sm:text-lg">
              Our team blends experience from enterprise consulting, product
              companies, and high‑growth technology firms. We bring structured
              thinking and modern engineering practices to every project.
            </p>
          </div>
          <div className="grid gap-4 text-base text-neutral-100 sm:grid-cols-2 sm:text-lg">
            {expertise.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00C49E] text-sm font-bold text-neutral-950">
                  ✓
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="py-20 lg:py-28">
          <div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
                CONSULTING APPROACH
              </h2>
              <p className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
                A clear, collaborative path to measurable results.
              </p>
            </div>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
              We structure our work in focused phases so you always know what
              we&apos;re solving, how, and how success will be measured.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-3xl border border-neutral-100 bg-white p-8"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-bold text-neutral-950 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid gap-12 rounded-[2rem] border border-neutral-100 bg-neutral-50 px-8 py-14 sm:px-12 sm:py-16 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        >
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00C49E]">
              CONTACT
            </h2>
            <p className="mt-4 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
              Ready to explore how we can help your business grow?
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Share a brief overview of your company, current challenges, and
              what you would like to achieve. We&apos;ll respond with a tailored
              perspective and a proposal for a first working session.
            </p>
            <div className="mt-8 text-base text-neutral-700">
              <p className="font-semibold text-neutral-900">WeGrowth</p>
              <p className="mt-1 text-neutral-600">
                Enterprise growth consulting · AI enablement · Digital product
                design & development
              </p>
            </div>
          </div>
          <form className="space-y-5 text-base">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 shadow-sm outline-none transition focus:border-[#00C49E] focus:ring-2 focus:ring-[#00C49E]/20"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company name"
                className="mt-2 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 shadow-sm outline-none transition focus:border-[#00C49E] focus:ring-2 focus:ring-[#00C49E]/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600"
              >
                Work email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="mt-2 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 shadow-sm outline-none transition focus:border-[#00C49E] focus:ring-2 focus:ring-[#00C49E]/20"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600"
              >
                What would you like to achieve?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share a short summary of your goals, challenges, and timeline."
                className="mt-2 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 shadow-sm outline-none transition focus:border-[#00C49E] focus:ring-2 focus:ring-[#00C49E]/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#00C49E] px-8 py-4 text-base font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Send Inquiry
            </button>
            <p className="text-sm leading-relaxed text-neutral-500">
              By submitting this form you agree to be contacted by WeGrowth
              regarding consulting and technology services. We respect the
              confidentiality of your business information.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-neutral-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} Beijing Keep Growth Information
            Technology Co., Ltd. All rights reserved.
          </p>
          <p className="text-neutral-600">Enterprise consulting · AI enablement · Digital growth partner</p>
        </div>
      </footer>
    </div>
  );
}

