import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import CurrentWork from "@/components/work/CurrentWork";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import ContactForm from "@/components/contact/ContactForm";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anus Butt",
  jobTitle: "Full-stack Developer and AI Engineer",
  address: { "@type": "PostalAddress", addressCountry: "Pakistan" },
  worksFor: {
    "@type": "Organization",
    name: "Omniveer",
    url: "https://www.omniveer.com/",
  },
  sameAs: [
    "https://github.com/anusbutt",
    "https://x.com/iamanusbutt",
    "https://www.linkedin.com/in/anus-yousuf/",
    "https://www.omniveer.com/",
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <CurrentWork />
      <Projects />
      <Skills />
      <Education />
      <ContactForm />

      {/* Footer */}
      <footer className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs uppercase tracking-[0.12em] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Anus Butt</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
