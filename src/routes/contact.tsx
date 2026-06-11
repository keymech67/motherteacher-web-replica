import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mother Teacher School" },
      { name: "description", content: "Reach Mother Teacher School at Near Flyover, College Road, Barnala. Call, email or send a message." },
      { property: "og:title", content: "Contact — MTS" },
      { property: "og:description", content: "Get in touch with Mother Teacher School, Barnala." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from parents, alumni and the community." />
      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: MapPin, title: "Address", text: "Near Flyover, College Road, Barnala, Punjab — 148101" },
            { icon: Phone, title: "Phone", text: "+91 1679-230999" },
            { icon: Mail, title: "Email", text: "info@motherteacherschool.in" },
            { icon: Clock, title: "Office Hours", text: "Mon–Sat · 8:00 AM – 3:00 PM" },
          ].map(c => (
            <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="p-3 rounded-lg bg-primary text-primary-foreground h-fit"><c.icon size={20}/></div>
              <div>
                <div className="font-display text-lg font-bold">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.text}</div>
              </div>
            </div>
          ))}
          <div className="rounded-xl overflow-hidden border border-border shadow-card aspect-[16/10]">
            <iframe
              title="MTS location"
              src="https://www.google.com/maps?q=Mother+Teacher+School+Barnala&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
          className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-card space-y-4 h-fit">
          <h2 className="font-display text-2xl font-bold">Send us a Message</h2>
          <input required placeholder="Your Name" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
          <input required type="email" placeholder="Email Address" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
          <input required placeholder="Subject" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
          <textarea required rows={5} placeholder="Your Message" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"/>
          <div className="flex items-center justify-between gap-4">
            {sent ? <span className="text-sm font-semibold text-primary inline-flex items-center gap-2"><CheckCircle2 size={16}/> Message sent!</span> : <span className="text-xs text-muted-foreground">We respond within 1–2 working days.</span>}
            <button className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Send Message</button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
