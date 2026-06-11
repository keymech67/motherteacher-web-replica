import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Award, BookOpen, Users, Trophy, GraduationCap, Heart, ChevronRight, Bell, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-students.jpg";
import campusImg from "@/assets/campus.jpg";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mother Teacher School, Barnala — Home" },
      { name: "description", content: "Welcome to Mother Teacher School, Barnala. CBSE affiliated co-educational school nurturing students with care and academic excellence since 1999." },
      { property: "og:title", content: "Mother Teacher School, Barnala" },
      { property: "og:description", content: "Mother's Care, Teacher's Knowledge — Play Way to +2." },
    ],
  }),
  component: HomePage,
});

const news = [
  { date: "12 May 2026", title: "Date Sheet PT-1 Examination", tag: "Examination" },
  { date: "08 May 2026", title: "Updated School Timings for Summer", tag: "Notice" },
  { date: "01 May 2026", title: "Planner — May 2026 Released", tag: "Planner" },
  { date: "22 Apr 2026", title: "Annual Sports Day Highlights", tag: "Event" },
  { date: "15 Apr 2026", title: "Admissions Open for Session 2026-27", tag: "Admission" },
  { date: "02 Apr 2026", title: "Result Declaration — Class X & XII", tag: "Result" },
];

const achievements = [
  { num: "1999", label: "Established" },
  { num: "2500+", label: "Happy Students" },
  { num: "150+", label: "Qualified Teachers" },
  { num: "AIR 7", label: "NEET (UG) 2025" },
];

const facilities = [
  { img: labImg, title: "Science Labs", desc: "Well-equipped Physics, Chemistry & Biology labs encouraging hands-on learning." },
  { img: libraryImg, title: "Library", desc: "Over 10,000 books, periodicals and a quiet reading environment for all classes." },
  { img: sportsImg, title: "Sports Ground", desc: "Spacious playground for cricket, football, athletics and annual sports meets." },
  { img: campusImg, title: "Smart Campus", desc: "Smart classrooms, CCTV-monitored corridors and safe transport service." },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Welcome />
      <Stats />
      <MessageCards />
      <Facilities />
      <News />
      <Admission />
      <Quote />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Admissions Open · Session 2026-27
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl font-bold leading-[1.05] text-balance">
            Where <span className="text-gold">Mother's Care</span> meets <span className="italic">Teacher's Knowledge</span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
            A CBSE affiliated co-educational institution in Barnala, shaping confident learners from Play Way to Senior Secondary since 1999.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#admission" className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-gold-foreground shadow-card hover:shadow-glow transition">
              Apply for Admission <ArrowRight size={16}/>
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Explore Campus
            </a>
          </div>
        </div>

        <div className="relative animate-float-up [animation-delay:200ms]">
          <div className="relative rounded-2xl overflow-hidden shadow-glow border-4 border-gold/40">
            <img src={heroImg} alt="Mother Teacher School students celebrating academic achievements" width={1600} height={1024} className="w-full h-[420px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 to-transparent p-6">
              <div className="flex items-center gap-3">
                <div className="bg-gold-gradient rounded-full p-2.5"><Trophy size={20} className="text-gold-foreground"/></div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-80">Proud Achievement</div>
                  <div className="font-display text-lg font-bold">Keshav Mittal — NEET (UG) 2025 · AIR 7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["📢 Admissions open for 2026-27", "🏆 Keshav Mittal — Punjab Topper NEET UG 2025", "📅 PT-1 Date Sheet released", "🎓 100% CBSE results for X & XII", "🚌 Safe transport across Barnala"];
  return (
    <div className="bg-gold-gradient text-gold-foreground border-y border-gold/40 py-2.5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-medium text-sm">
        {[...items, ...items].map((t, i) => <span key={i} className="px-4">{t}</span>)}
      </div>
    </div>
  );
}

function Welcome() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About the School</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-balance">Welcome to Mother Teacher School</h2>
          <div className="mt-4 h-1 w-20 bg-gold-gradient rounded-full" />
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The Child Education Society was established in 1999 to preserve our rich culture and heritage and to pass our legacy to future generations. Education plays a vital role in building a sane society, and so we forayed into this field for the betterment of the nation and humanity at large.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The institution lies in the able hands of Mr. Kapil Mittal & Mrs. Nishi Mittal, President of the Society and visionaries. Their dedication and passion have driven the expansion from a humble Play Way to a full +2 institution today.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["CBSE Affiliated Curriculum","Play Way to Senior Secondary","Experienced Faculty","Holistic Development"].map(t => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary"/>{t}</li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={campusImg} alt="Mother Teacher School campus building" width={1200} height={800} loading="lazy" className="rounded-2xl shadow-card w-full" />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-card border border-border max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg text-primary"><GraduationCap size={22}/></div>
              <div>
                <div className="font-display text-2xl font-bold text-primary">25+</div>
                <div className="text-xs text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map(a => (
          <div key={a.label} className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-gold">{a.num}</div>
            <div className="mt-1 text-sm opacity-80 uppercase tracking-wider">{a.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MessageCards() {
  const cards = [
    { icon: Heart, title: "Mission & Vision", text: "We believe in continuous growth — accepting change and bringing about transformations that benefit our students.", link: "About us" },
    { icon: Users, title: "Message from Chairman", text: "Education's fundamental aim is to produce aware citizens, sensitive to society's needs and willing to contribute positively.", link: "Read more" },
    { icon: BookOpen, title: "From the Principal", text: "Aristotle said, 'Educating the mind without educating the heart is no education at all.' We teach the child how to think.", link: "Read more" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(c => (
          <div key={c.title} className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 transition-all">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 group-hover:bg-gold/20 transition" />
            <div className="relative">
              <div className="inline-flex p-3 rounded-xl bg-primary text-primary-foreground"><c.icon size={22}/></div>
              <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition">
                {c.link} <ChevronRight size={14}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Campus Life</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">World-Class Facilities</h2>
          <div className="mt-4 h-1 w-20 bg-gold-gradient rounded-full mx-auto" />
          <p className="mt-4 text-muted-foreground">Modern infrastructure to support every dimension of a child's growth.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(f => (
            <article key={f.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:-translate-y-1 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={f.img} alt={f.title} loading="lazy" width={1200} height={800} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Updates</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">News Board</h2>
          <div className="mt-4 h-1 w-20 bg-gold-gradient rounded-full" />
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold">View All <ChevronRight size={14}/></a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {news.map(n => (
          <article key={n.title} className="group bg-card rounded-xl border border-border p-5 hover:border-primary hover:shadow-card transition">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar size={12}/> {n.date}</span>
              <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-semibold">{n.tag}</span>
            </div>
            <h3 className="mt-3 font-display font-bold text-lg group-hover:text-primary transition">{n.title}</h3>
            <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
              Read more <ChevronRight size={14}/>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ student: "", className: "", dob: "", parent: "", email: "", phone: "", address: "", comment: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ student: "", className: "", dob: "", parent: "", email: "", phone: "", address: "", comment: "" });
  };

  return (
    <section id="admission" className="bg-hero-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Join MTS</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">New Admission Inquiry</h2>
          <div className="mt-4 h-1 w-20 bg-gold-gradient rounded-full" />
          <p className="mt-5 text-primary-foreground/85 leading-relaxed">
            Please fill in the details below and our admissions team will reach out within 2 working days. We welcome you to visit our campus at Near Flyover, College Road, Barnala.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Play Way to +2 admissions","Personalised counselling for parents","Transparent fee structure","Safe transport across Barnala"].map(t => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 size={18} className="text-gold"/>{t}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card text-foreground rounded-2xl p-6 sm:p-8 shadow-card grid sm:grid-cols-2 gap-4">
          <Field label="Student Name" value={form.student} onChange={v => setForm({...form, student: v})}/>
          <Field label="Class Applying For" value={form.className} onChange={v => setForm({...form, className: v})}/>
          <Field label="Date of Birth" type="date" value={form.dob} onChange={v => setForm({...form, dob: v})}/>
          <Field label="Parent / Guardian Name" value={form.parent} onChange={v => setForm({...form, parent: v})}/>
          <Field label="Email Address" type="email" value={form.email} onChange={v => setForm({...form, email: v})}/>
          <Field label="Contact Number" type="tel" value={form.phone} onChange={v => setForm({...form, phone: v})}/>
          <div className="sm:col-span-2">
            <Field label="Address / City / State" value={form.address} onChange={v => setForm({...form, address: v})}/>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold">Comments</label>
            <textarea required value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} rows={3}
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            {submitted ? (
              <div className="flex items-center gap-2 text-sm font-semibold text-primary"><CheckCircle2 size={18}/> Inquiry submitted! We'll be in touch.</div>
            ) : <span className="text-xs text-muted-foreground">By submitting you agree to be contacted by MTS.</span>}
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
              Submit Inquiry <ArrowRight size={16}/>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}<span className="text-destructive ml-0.5">*</span></label>
      <input required type={type} value={value} onChange={e => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
    </div>
  );
}

function Quote() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center">
      <Bell className="mx-auto text-gold" size={28}/>
      <blockquote className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-balance leading-snug">
        "Educating the mind without educating the heart is no education at all."
      </blockquote>
      <div className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">— Aristotle</div>
    </section>
  );
}
