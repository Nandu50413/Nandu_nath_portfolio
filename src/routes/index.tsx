import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  CERTIFICATIONS,
  CONTACT,
  CORE_SKILLS,
  EDUCATION,
  EXPERIENCE,
  HERO_STATS,
  MARQUEE_ITEMS,
  PROJECTS,
  SKILL_GROUPS,
  SUMMARY,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nandu Nath — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Nandu Nath, a Bangalore-based software engineer with experience across web development, data operations, and technical problem-solving.",
      },
      {
        property: "og:title",
        content: "Nandu Nath — Software Engineer",
      },
      {
        property: "og:description",
        content:
          "Bangalore-based software engineer with experience across web development, data operations, and technical problem-solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Nandu Nath — Software Engineer",
      },
      {
        name: "twitter:description",
        content:
          "Bangalore-based software engineer with experience across web development, data operations, and technical problem-solving.",
      },
    ],
  }),
  component: Index,
});

/* ---------------------------------- hooks --------------------------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------------------------- shared --------------------------------- */

function SectionHeading({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="reveal mb-10 md:mb-14">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase">
        {index}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

function MonoLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-md border border-input bg-background/60 px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      {children}
    </a>
  );
}

/* ----------------------------------- nav ----------------------------------- */

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-widest text-foreground"
        >
          <span className="text-primary">NN</span> / NANDU.NATH
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={CONTACT.resumePath}
          download="Nandu_Nath_Resume.pdf"
          className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold tracking-wider text-primary-foreground uppercase transition-opacity hover:opacity-85"
        >
          Resume ↓
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------- hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-primary" />
              Open to Software &amp; IT roles
            </p>
            <h1 className="reveal mt-6 text-5xl leading-[1.02] font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Nandu
              <br />
              <span className="text-primary">Nath</span>
              <span className="text-muted-foreground">.</span>
            </h1>
            <p className="reveal mt-5 font-mono text-sm tracking-wide text-muted-foreground md:text-base">
              {CONTACT.role} — {CONTACT.location}
            </p>
            <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {SUMMARY}
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CONTACT.resumePath}
                download="Nandu_Nath_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
              >
                Download Resume
              </a>
              <MonoLink href={CONTACT.linkedin}>LinkedIn ↗</MonoLink>
              <MonoLink href={CONTACT.github}>GitHub ↗</MonoLink>
              <MonoLink href="https://nandu-folio-showcase.lovable.app/">Portfolio ↗</MonoLink>
            </div>
          </div>

          {/* analytics readout card */}
          <div className="reveal rounded-xl border border-border bg-card/70 p-1.5 shadow-2xl shadow-black/40">
            <div className="rounded-lg border border-border bg-background/70 p-6">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Career // Stats
                </p>
                <span className="font-mono text-[10px] text-primary">
                  ● REC
                </span>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-mono text-[11px] leading-snug text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="text-primary">$</span> whoami → bca-2025 ·
                bangalore · software engineering → full-stack
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills ticker */}
      <div className="border-y border-border bg-card/40 py-3.5">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 font-mono text-xs tracking-widest text-muted-foreground uppercase"
              >
                {item}
                <span className="text-primary">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- experience -------------------------------- */

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="01 — Experience"
        title="Where I've worked"
        sub="Sports data operations at scale, frontend engineering internships, and mentorship — each role sharpened a different edge."
      />
      <div className="relative">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[9px]"
        />
        <ol className="space-y-10">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="reveal relative pl-8 md:pl-12">
              <span className="absolute top-2 left-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40 md:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground md:text-xl">
                    {job.role}
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-primary">{job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.period}
                    {job.location ? ` — ${job.location}` : ""}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------- projects --------------------------------- */

function Projects() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);

  return (
    <section id="projects" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02 — Projects"
          title="Featured builds"
          sub="Click a project to open its full breakdown — what it does, the numbers behind it, and the stack."
        />
        <div className="space-y-5">
          {PROJECTS.map((project) => {
            const open = openId === project.id;
            return (
              <article
                key={project.id}
                className="reveal overflow-hidden rounded-xl border border-border bg-card/70 transition-colors hover:border-primary/40 data-[open=true]:border-primary/60"
                data-open={open}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : project.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-8"
                >
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
                      {project.tagline}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-mono text-primary transition-transform data-[open=true]:rotate-45"
                    data-open={open}
                  >
                    +
                  </span>
                </button>

                {open ? (
                  <div className="border-t border-border bg-background/40 p-6 md:p-8">
                    {/* metrics */}
                    <div className="grid gap-4 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-lg border border-border bg-card/70 p-4"
                        >
                          <p className="text-2xl font-bold tracking-tight text-primary">
                            {metric.value}
                          </p>
                          <p className="mt-1 text-xs leading-snug text-muted-foreground">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* features */}
                    <ul className="mt-6 space-y-2.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {/* stack */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                        Stack:
                      </span>
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] text-accent-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- skills ---------------------------------- */

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="03 — Skills"
        title="Core toolkit"
        sub="The six skills I build with every day, plus the supporting stack underneath."
      />
      <div className="reveal mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {CORE_SKILLS.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-primary/25 bg-primary/5 px-4 py-5 text-center"
          >
            <p className="text-sm font-semibold text-foreground">{skill}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="reveal rounded-xl border border-border bg-card/60 p-6"
          >
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              {group.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* education + certifications */}
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="reveal rounded-xl border border-border bg-card/60 p-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Education
          </p>
          <h3 className="mt-3 text-base font-semibold text-foreground">
            {EDUCATION.degree}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {EDUCATION.university} — {EDUCATION.college}
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Batch</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{EDUCATION.batch}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">CGPA</dt>
              <dd className="mt-1 text-sm font-semibold text-primary">{EDUCATION.cgpa}</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Overall aggregate</dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{EDUCATION.aggregate}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Coursework: {EDUCATION.coursework}
          </p>
        </div>
        <div className="reveal rounded-xl border border-border bg-card/60 p-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Certifications
          </p>
          <ul className="mt-3 space-y-2.5">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-primary" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- contact --------------------------------- */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hi Nandu,\n\n${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full rounded-md border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="04 — Contact"
          title="Let's build something"
          sub="Have a role, project, or a dataset that needs a story? Drop a note — I reply fast."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* direct channels */}
          <div className="reveal space-y-4">
            {[
              {
                label: "Email",
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                label: "Phone",
                value: CONTACT.phone,
                href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
              },
              { label: "LinkedIn", value: "in/nandu-nath", href: CONTACT.linkedin },
              { label: "GitHub", value: "github.com", href: CONTACT.github },
            ].map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border bg-card/60 px-5 py-4 transition-colors hover:border-primary/50"
              >
                <div>
                  <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                    {channel.label}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground">
                    {channel.value}
                  </p>
                </div>
                <span className="font-mono text-primary">↗</span>
              </a>
            ))}
            <a
              href={CONTACT.resumePath}
              download="Nandu_Nath_Resume.pdf"
              className="flex items-center justify-between rounded-lg border border-primary/40 bg-primary/10 px-5 py-4 transition-opacity hover:opacity-85"
            >
              <div>
                <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
                  Resume
                </p>
                <p className="mt-0.5 text-sm text-foreground">
                  Nandu_Nath_Resume.pdf
                </p>
              </div>
              <span className="font-mono text-primary">↓</span>
            </a>
          </div>

          {/* inquiry form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="reveal rounded-xl border border-border bg-card/70 p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                maxLength={1000}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Tell me about the role or project…"
                className={`${inputClass} resize-none`}
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
            >
              Send Inquiry
            </button>
            {sent ? (
              <p className="mt-3 text-center font-mono text-xs text-primary">
                ✓ Opening your email client — hit send and it's on its way.
              </p>
            ) : (
              <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
                Submissions open in your email app, addressed to{" "}
                {CONTACT.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- footer ---------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {CONTACT.name} — {CONTACT.location}
        </p>
        <p>
          <span className="text-primary">nn</span> · Software Engineering Portfolio
        </p>
      </div>
    </footer>
  );
}

/* ----------------------------------- page ----------------------------------- */

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
