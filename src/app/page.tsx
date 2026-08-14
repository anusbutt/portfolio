import { profile } from "@/content/profile";
import { siteUrl } from "@/content/site";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects";
import Highlights from "@/components/sections/highlights/Highlights";
import Skills from "@/components/sections/skills/Skills";
import Education from "@/components/sections/education/Education";
import Contact from "@/components/sections/contact/Contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  address: { "@type": "PostalAddress", addressCountry: "Pakistan" },
  sameAs: profile.sameAs,
  url: siteUrl.toString(),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <Projects />
      <Highlights />
      <About />
      <Skills />
      <Education />
      <Contact />
      <footer className="px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs uppercase tracking-[0.12em] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}