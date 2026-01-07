import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="fade-in container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Please fill out the form below, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-12">
            <ContactForm />
        </div>
      </div>
    </div>
  );
}
