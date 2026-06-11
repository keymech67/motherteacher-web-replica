import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mother Teacher School" },
      { name: "description", content: "Learn about Mother Teacher School Barnala — our history since 1999, mission, vision, and leadership." },
      { property: "og:title", content: "About Mother Teacher School" },
      { property: "og:description", content: "Our journey, mission, and vision since 1999." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader title="About Us" subtitle="A legacy of nurturing learners with care and knowledge since 1999." />
      <section className="mx-auto max-w-5xl px-4 py-16 prose-content space-y-6 text-muted-foreground leading-relaxed">
        <img src={campusImg} alt="MTS Campus" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-card w-full"/>
        <h2 className="font-display text-3xl font-bold text-foreground">Our Story</h2>
        <p>The establishment of the Child Education Society in 1999 was done with the purpose of preserving our rich culture and heritage and to pass on our legacy to the future generations. Considering that education plays a vital role in building a sane society, it was immensely crucial to foray into this field for the betterment of the nation and humanity at large.</p>
        <p>The institution lies in the able hands of Mr. Kapil Mittal & Mrs. Nishi Mittal, the President of the Society, and visionaries. Their dedication and passion have been the force behind the expansion of the organization from just Play Way to + 2 level today.</p>

        <h2 className="font-display text-3xl font-bold text-foreground">Mission & Vision</h2>
        <p>We strongly believe in continuous growth and thus accept change and bring necessary changes that prove beneficial for the growth of our students. At Mother Teacher things are never static — they are always changing, keeping us moving ever onward in our journey to success.</p>

        <h2 className="font-display text-3xl font-bold text-foreground">Mother Teacher Creche & Pre-School</h2>
        <p>Mother Teacher Creche & Pre-School is a branch of Mother Teacher School situated at Near Flyover, College Road, Barnala — providing a safe, joyful environment for our youngest learners.</p>
      </section>
    </SiteLayout>
  );
}
