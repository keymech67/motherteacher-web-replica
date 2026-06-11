import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 bg-white rounded-full p-1" width={48} height={48}/>
            <div>
              <div className="font-display text-lg font-bold">Mother Teacher School</div>
              <div className="text-xs opacity-75">Estd. 1999 · CBSE Affiliated</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Nurturing young minds with care and knowledge — from Play Way to Senior Secondary, Barnala.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Facebook size={16}/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Instagram size={16}/></a>
            <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition"><Youtube size={16}/></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link to="/facilities" className="hover:text-gold transition">Facilities</Link></li>
            <li><Link to="/student-area" className="hover:text-gold transition">Student Area</Link></li>
            <li><Link to="/cbse" className="hover:text-gold transition">CBSE Information</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Resources</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:text-gold transition">Download TC</a></li>
            <li><a href="#news" className="hover:text-gold transition">News Updates</a></li>
            <li><a href="#" className="hover:text-gold transition">Photo Gallery</a></li>
            <li><a href="#" className="hover:text-gold transition">Video Gallery</a></li>
            <li><a href="#" className="hover:text-gold transition">Online Fee Payment</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base mb-4 text-gold">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2"><MapPin size={16} className="shrink-0 mt-0.5"/> Near Flyover, College Road, Barnala, Punjab — 148101</li>
            <li className="flex gap-2"><Phone size={16} className="shrink-0 mt-0.5"/> +91 1679-230999</li>
            <li className="flex gap-2"><Mail size={16} className="shrink-0 mt-0.5"/> info@motherteacherschool.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs opacity-75 flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Mother Teacher School. All rights reserved.</div>
          <div>Designed with care for the MTS family.</div>
        </div>
      </div>
    </footer>
  );
}
