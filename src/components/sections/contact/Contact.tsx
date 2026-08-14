import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/content/socials";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Looking for an AI or full-stack engineer?"
          description="I am open to AI Engineer and Full-stack Engineer opportunities, as well as thoughtful open-source and technical collaborations."
        />

        <div className="mt-14 grid border-t border-white/[0.09] pt-10 md:grid-cols-[0.65fr_1.35fr] md:gap-16 lg:mt-20 lg:gap-24 lg:pt-14">
          <div>
            <p className="max-w-sm text-lg leading-8 text-stone-300">
              Share the role, team, or engineering problem you would like to discuss.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Find me online</p>
            <div className="mt-4 flex flex-col items-start gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-10 items-center gap-3 text-sm text-stone-400 transition-colors hover:text-stone-100"
                >
                  <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}