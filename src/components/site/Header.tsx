import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Mail, Facebook, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/facilities", label: "Facilities" },
  { to: "/student-area", label: "Student Area" },
  { to: "/cbse", label: "CBSE" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+911679230999" className="flex items-center gap-1.5 hover:text-gold transition"><Phone size={12}/> +91 1679-230999</a>
            <a href="mailto:info@motherteacherschool.in" className="flex items-center gap-1.5 hover:text-gold transition"><Mail size={12}/> info@motherteacherschool.in</a>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden md:inline opacity-80">Follow us:</span>
            <a href="#" aria-label="Facebook" className="hover:text-gold transition"><Facebook size={14}/></a>
            <a href="#" aria-label="Instagram" className="hover:text-gold transition"><Instagram size={14}/></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold transition"><Youtube size={14}/></a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Mother Teacher School logo" className="h-12 w-12 sm:h-14 sm:w-14 transition-transform group-hover:rotate-6" width={56} height={56}/>
          <div className="leading-tight">
            <div className="font-display text-xl sm:text-2xl font-bold text-primary tracking-tight">Mother Teacher School</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">Mother's Care · Teacher's Knowledge</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent transition"
            >
              {n.label}
            </Link>
          ))}
          <a href="#admission" className="ml-2 inline-flex items-center rounded-md bg-gold-gradient px-4 py-2 text-sm font-semibold text-gold-foreground shadow-card hover:shadow-glow transition">
            Apply Now
          </a>
        </nav>

        <button className="lg:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent">
                {n.label}
              </Link>
            ))}
            <a href="#admission" onClick={() => setOpen(false)} className="mt-2 text-center rounded-md bg-gold-gradient px-4 py-2 text-sm font-semibold text-gold-foreground">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
