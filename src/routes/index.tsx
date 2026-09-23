import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  CheckCircle2,
  Handshake,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  PenTool,
  Phone,
  Quote,
  Sparkles,
  Twitter,
  Youtube,
} from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import grid1 from "@/assets/grid-1.jpg";
import grid2 from "@/assets/grid-2.jpg";
import grid3 from "@/assets/grid-3.jpg";
import grid4 from "@/assets/grid-4.jpg";
import grid5 from "@/assets/grid-5.jpg";
import grid6 from "@/assets/grid-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaavna Digital — Elevating Women Influencers & Brands" },
      {
        name: "description",
        content:
          "Kaavna Digital connects women influencers with the right brands — influencer matchmaking, campaign management, content strategy, analytics and personal branding.",
      },
      { property: "og:title", content: "Kaavna Digital — Elevating Women Influencers & Brands" },
      {
        property: "og:description",
        content:
          "A marketing agency connecting women influencers with brands through matchmaking, campaigns, content strategy and personal branding.",
      },
    ],
  }),
  component: Index,
};

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <TestimonialBanner />
        <HowItWorks />
        <Results />
        <Gallery />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Header --------------------------------- */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
];

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-script text-4xl leading-none text-primary">Kaavna</span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-foreground">
            Digital
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#newsletter"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
        >
          Get Started
          <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-40 size-[34rem] rounded-full bg-blush blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-40 size-[26rem] rounded-full bg-blush-deep/70 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" />
            Influencer Marketing, Reimagined
          </p>
          <h1 className="font-script text-6xl leading-[1.1] text-primary sm:text-7xl">
            Kaavna Digital
          </h1>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            Elevating Women{" "}
            <span className="font-display font-semibold italic text-primary">Influencers</span> &{" "}
            <span className="font-display font-semibold italic text-primary">Brands</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            We hand-match ambitious women creators with brands they believe in — then build
            campaigns that turn audiences into communities, and communities into growth.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Get Started
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-secondary"
            >
              Explore Services
            </a>
          </div>
          <dl className="mt-12 flex gap-10 border-t border-border pt-8">
            {[
              ["250+", "Creators matched"],
              ["90+", "Brands partnered"],
              ["12M", "Audiences reached"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-black text-foreground">{value}</dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute inset-x-8 -top-6 bottom-16 rounded-t-[999px] rounded-b-[3rem] bg-blush-deep"
          />
          <img
            src={heroPortrait}
            alt="A confident woman content creator in a blush pink blazer"
            width={1056}
            height={1408}
            className="relative aspect-[3/4] w-full rounded-t-[999px] rounded-b-[3rem] object-cover shadow-card"
          />
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-card">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
              <HeartHandshake className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-foreground">Perfect matches, made daily</p>
              <p className="text-xs text-muted-foreground">Creator–brand pairings that last</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Services -------------------------------- */

const services = [
  {
    icon: HeartHandshake,
    title: "Influencer Matchmaking",
    body: "We pair brands with creators whose voice, values and audience genuinely align — no awkward fits, only chemistry.",
  },
  {
    icon: CalendarRange,
    title: "Campaign Management",
    body: "From brief to launch day, we run every campaign detail — timelines, deliverables, approvals and creator care.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    body: "Editorial calendars, hooks and storytelling frameworks designed around what your audience actually saves and shares.",
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    body: "Long-term ambassadorships and collabs negotiated with fair rates, clear usage rights and real relationship-building.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    body: "Reach, saves, sentiment and sales — distilled into honest reports that show exactly what your investment returned.",
  },
  {
    icon: Megaphone,
    title: "Personal Branding",
    body: "Positioning, visual identity and voice coaching for creators ready to grow from influencer to founder-level brand.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-3xl text-primary">what we do</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Services built around women creators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Six ways we take a partnership from first hello to measurable growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-4xl border border-border bg-card p-8 shadow-card transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex size-13 items-center justify-center rounded-2xl bg-blush transition-colors group-hover:bg-primary">
                <service.icon className="size-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Testimonial ------------------------------- */

function TestimonialBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div
        aria-hidden
        className="absolute -top-24 right-16 font-script text-[26rem] leading-none text-white/5 select-none"
      >
        K
      </div>
      <figure className="relative mx-auto max-w-3xl px-6 text-center">
        <Quote className="mx-auto size-10 opacity-60" fill="currentColor" />
        <blockquote className="mt-8 font-display text-3xl font-semibold leading-snug italic sm:text-4xl">
          "Kaavna didn't just find us an influencer — they found us a co-founder for our brand
          story. Six months in, she's family."
        </blockquote>
        <figcaption className="mt-8">
          <p className="font-script text-3xl">Ritika Malhotra</p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Founder, Bloom Beauty
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

/* -------------------------------- How it works ------------------------------ */

const steps = [
  {
    number: "01",
    title: "Discover",
    body: "A deep-dive into your goals, audience and aesthetic. We map what success looks like before anyone posts a single story.",
  },
  {
    number: "02",
    title: "Connect",
    body: "We introduce you to hand-picked creators or brands, negotiate fair terms and set the creative direction together.",
  },
  {
    number: "03",
    title: "Grow",
    body: "Campaigns go live, we track everything in real time, and each report sharpens the next round of partnerships.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-3xl text-primary">the journey</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps from first conversation to compounding growth.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-primary/30 md:block"
          />
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 mx-auto flex size-20 items-center justify-center rounded-full bg-primary font-display text-2xl font-black text-primary-foreground shadow-soft">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Results --------------------------------- */

const caseStudies = [
  {
    tag: "Beauty · Skincare Launch",
    image: grid4,
    client: "Glow Rituals × Aisha Verma",
    headline: "A launch that sold out in 72 hours",
    stats: [
      { value: "+212%", label: "Engagement" },
      { value: "4.8M", label: "Impressions" },
    ],
  },
  {
    tag: "Fashion · Festive Drop",
    image: grid5,
    client: "Saffron Street × Meher Kapadia",
    headline: "38k new followers, one sold-out drop",
    stats: [
      { value: "38k", label: "New followers" },
      { value: "100%", label: "Drop sold out" },
    ],
  },
  {
    tag: "Wellness · Ambassador Program",
    image: grid6,
    client: "Lumière Wellness × Tara Iyer",
    headline: "From one-off post to year-long ambassador",
    stats: [
      { value: "3.2×", label: "Return on spend" },
      { value: "120+", label: "Content pieces" },
    ],
  },
];

function Results() {
  return (
    <section id="results" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-script text-3xl text-primary">proof, not promises</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Campaign highlights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real pairings, real numbers. A few favourites from the last year.
            </p>
          </div>
          <a
            href="#newsletter"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Start your story
            <ArrowUpRight className="size-5" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="group overflow-hidden rounded-4xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.client}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold tracking-wide text-primary backdrop-blur">
                  {study.tag}
                </span>
              </div>
              <div className="p-7">
                <p className="text-sm font-bold text-primary">{study.client}</p>
                <h3 className="mt-2 font-display text-xl leading-snug font-bold text-foreground">
                  {study.headline}
                </h3>
                <dl className="mt-5 flex gap-8 border-t border-border pt-5">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="font-display text-2xl font-black text-primary">
                        {stat.value}
                      </dd>
                      <dd className="text-xs font-semibold tracking-wide text-muted-foreground">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Gallery --------------------------------- */

const galleryImages = [
  { src: grid1, alt: "Creator enjoying coffee at a pastel café" },
  { src: grid2, alt: "Elegant flat lay of beauty products on pink silk" },
  { src: grid3, alt: "Creator filming a makeup tutorial with a ring light" },
  { src: grid4, alt: "Creator posing with shopping bags by a pink storefront" },
  { src: grid5, alt: "Two hosts laughing while recording a podcast" },
  { src: grid6, alt: "Feminine workspace with laptop, coffee and peonies" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-3xl text-primary">life at kaavna</p>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            From our community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Behind the campaigns — creators, shoots and the moments in between.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((image, i) => (
            <a
              key={i}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-3xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/50 group-hover:opacity-100">
                <Instagram className="size-8 text-white" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary"
          >
            <Instagram className="size-4" />
            Follow @kaavnadigital
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Newsletter -------------------------------- */

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="px-6 pb-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-4xl bg-blush px-8 py-16 text-center sm:px-16">
        <div
          aria-hidden
          className="absolute -top-16 -left-16 size-56 rounded-full bg-blush-deep/70 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -right-16 -bottom-16 size-56 rounded-full bg-primary/10 blur-2xl"
        />
        <div className="relative">
          <p className="font-script text-3xl text-primary">stay in the loop</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            The Kaavna Letter
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Creator spotlights, campaign inspiration and trends worth your time — once a month,
            no noise.
          </p>

          {submitted ? (
            <p className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-card px-6 py-4 font-bold text-primary shadow-card">
              <CheckCircle2 className="size-5" />
              You're on the list — welcome to Kaavna!
            </p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="h-14 flex-1 rounded-full border border-border bg-card px-6 text-sm text-foreground shadow-card outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
              >
                Subscribe
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Footer ---------------------------------- */

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: Twitter, label: "Twitter", href: "https://www.twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
];

function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <p className="font-script text-4xl text-rose">Kaavna</p>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Digital</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A women-first marketing agency connecting influential creators with brands that
              deserve their voice.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-rose hover:bg-rose hover:text-white"
                >
                  <social.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-rose">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4.5 shrink-0 text-rose" />
                <a href="mailto:hello@kaavnadigital.com" className="hover:text-rose">
                  hello@kaavnadigital.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4.5 shrink-0 text-rose" />
                <a href="tel:+919820012345" className="hover:text-rose">
                  +91 98200 12345
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4.5 shrink-0 text-rose" />
                <span>
                  Kaavna Digital, Linking Road,
                  <br />
                  Bandra West, Mumbai 400050
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-rose">Find us</h3>
            <div className="mt-5 overflow-hidden rounded-3xl border border-white/15">
              <iframe
                title="Kaavna Digital office location in Bandra West, Mumbai"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8230%2C19.0460%2C72.8510%2C19.0640&layer=mapnik&marker=19.0550%2C72.8370"
                className="h-48 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Kaavna Digital. All rights reserved.</p>
          <p>
            Made with <span className="text-rose">♥</span> for women creators
          </p>
        </div>
      </div>
    </footer>
  );
}
