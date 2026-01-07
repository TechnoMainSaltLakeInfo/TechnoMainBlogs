import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Users } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">TMSL</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Fostering the next generation of leaders and thinkers.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold">Developers Team</h3>
            <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <Users className="h-4 w-4" />
                    <span>Site Developers</span>
                  </Link>
                </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>123 University Ave, Learnington, State 12345</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@tmsl.edu" className="hover:text-primary">info@tmsl.edu</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TMSL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
