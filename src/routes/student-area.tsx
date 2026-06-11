import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { FileText, Download, Calendar, BookOpen } from "lucide-react";

export const Route = createFileRoute("/student-area")({
  head: () => ({
    meta: [
      { title: "Student Area — Mother Teacher School" },
      { name: "description", content: "Student resources at Mother Teacher School: timetable, syllabus, results, transfer certificates and more." },
      { property: "og:title", content: "Student Area" },
      { property: "og:description", content: "Resources for MTS students." },
    ],
  }),
  component: StudentArea,
});

const tiles = [
  { icon: Calendar, title: "Time Table", desc: "Class-wise schedule for all sections." },
  { icon: BookOpen, title: "Syllabus", desc: "Curriculum and chapter-wise breakup." },
  { icon: FileText, title: "Results", desc: "Latest examination results." },
  { icon: Download, title: "Download TC", desc: "Request a transfer certificate." },
];

function StudentArea() {
  return (
    <SiteLayout>
      <PageHeader title="Student Area" subtitle="Quick access to academic resources for students and parents." />
      <section className="mx-auto max-w-7xl px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map(t => (
          <a href="#" key={t.title} className="group rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 hover:border-primary transition">
            <div className="inline-flex p-3 rounded-xl bg-primary text-primary-foreground group-hover:bg-gold-gradient group-hover:text-gold-foreground transition"><t.icon size={22}/></div>
            <h3 className="mt-4 font-display text-xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
          </a>
        ))}
      </section>
    </SiteLayout>
  );
}
