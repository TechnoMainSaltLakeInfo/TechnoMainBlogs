import ContactForm from "@/components/contact-form";
import DeveloperContactForm from "@/components/developer-contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="fade-in container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 space-y-12">
            <div>
                <h2 className="text-2xl font-headline font-bold text-center mb-4">Contact The College</h2>
                 <Card>
                    <CardContent className="p-6">
                        <div className="space-y-4 text-muted-foreground">
                            <p className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 shrink-0 mt-1 text-primary" />
                                <span>123 University Ave, Learnington, State 12345</span>
                            </p>
                            <p className="flex items-center gap-4">
                                <Phone className="h-5 w-5 text-primary" />
                                <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a>
                            </p>
                            <p className="flex items-center gap-4">
                                <Mail className="h-5 w-5 text-primary" />
                                <a href="mailto:info@tmsl.edu" className="hover:text-primary">info@tmsl.edu</a>
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <div className="mt-8">
                  <p className="text-center text-muted-foreground mb-4">For general inquiries, please use the form below.</p>
                  <ContactForm />
                </div>
            </div>

            <div>
                 <h2 className="text-2xl font-headline font-bold text-center mb-4">Contact The Developers</h2>
                 <p className="text-center text-muted-foreground mb-4">For technical issues or feedback about the website, please contact the developers.</p>
                <DeveloperContactForm />
            </div>
        </div>
      </div>
    </div>
  );
}
