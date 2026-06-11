import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import labImg from "@/assets/lab.jpg";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities — Mother Teacher School" },
      { name: "description", content: "Explore the facilities at Mother Teacher School: science labs, library, sports ground, smart classrooms, transport and more." },
      { property: "og:title", content: "Facilities — MTS" },
      { property: "og:description", content: "Modern infrastructure for holistic learning." },
    ],
  }),
  component: FacilitiesPage,
});

const items = [
  { img: labImg, title: "Science Laboratories", desc: "Dedicated Physics, Chemistry and Biology labs with modern apparatus, encouraging inquiry and experimentation." },
  { img: libraryImg, title: "Library", desc: "A rich collection of over 10,000 books, journals and digital resources within a quiet, focused reading environment." },
  { img: sportsImg, title: "Sports & Athletics", desc: "Spacious playgrounds for cricket, football, basketball, athletics and annual sports meets." },
  { img: campusImg, title: "Smart Campus", desc: "Smart classrooms, CCTV-monitored corridors, safe transport service and well-ventilated learning spaces." },
];

function FacilitiesPage() {
  return (
    <SiteLayout>
      <PageHeader title="Our Facilities" subtitle="Modern infrastructure designed for the holistic development of every child." />
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-16">
        {items.map((f, i) => (
          <div key={f.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={f.img} alt={f.title} loading="lazy" width={1200} height={800} className="rounded-2xl shadow-card w-full"/>
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">{f.title}</h2>
              <div className="mt-4 h-1 w-16 bg-gold-gradient rounded-full"/>
              <p className="mt-5 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
