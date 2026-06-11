import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/Layout";

export const Route = createFileRoute("/cbse")({
  head: () => ({
    meta: [
      { title: "CBSE Information — Mother Teacher School" },
      { name: "description", content: "CBSE affiliation, mandatory public disclosure and statutory information for Mother Teacher School." },
      { property: "og:title", content: "CBSE — Mother Teacher School" },
      { property: "og:description", content: "Mandatory disclosure and CBSE details." },
    ],
  }),
  component: CbsePage,
});

const rows: [string, string][] = [
  ["Name of School", "Mother Teacher School"],
  ["Affiliation No.", "1630498"],
  ["School Code", "20438"],
  ["Affiliation Status", "Affiliated up to Senior Secondary (10+2)"],
  ["Society Name", "Child Education Society (Regd.)"],
  ["Year of Establishment", "1999"],
  ["Address", "Near Flyover, College Road, Barnala, Punjab — 148101"],
  ["Email", "info@motherteacherschool.in"],
  ["Phone", "+91 1679-230999"],
];

const documents = ["Affiliation Certificate","Trust / Society Registration","No Objection Certificate","Building Safety Certificate","Fire Safety Certificate","Mandatory Public Disclosure"];

function CbsePage() {
  return (
    <SiteLayout>
      <PageHeader title="CBSE Information" subtitle="Mandatory public disclosure as per CBSE norms." />
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-2xl overflow-hidden border border-border shadow-card">
          <table className="w-full text-sm">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                  <td className="px-5 py-3 font-semibold w-1/3">{k}</td>
                  <td className="px-5 py-3 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">Documents & Information</h2>
        <div className="mt-4 h-1 w-16 bg-gold-gradient rounded-full"/>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {documents.map(d => (
            <li key={d}>
              <a href="#" className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                {d}<span className="text-xs uppercase tracking-wider text-muted-foreground">View</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
