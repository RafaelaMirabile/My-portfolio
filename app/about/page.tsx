import Projects from "@/components/projects/projects";
import GetInTouch from "@/components/shared/GetInTouch";
import Tools from "@/components/tools/tools";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <HeroSection />
    </>
  );
}



function HeroSection() {
  return (
    <div>
      <section className="relative flex flex-col-reverse md:flex-row justify-between items-center px-6 py-16 bg-pink-400 overflow-hidden">
        <div className="max-w-xl text-black z-10">
          <p className="text-xl md:text-2xl font-medium">
            “I launched MaxPacks as an experimental side gig; but within 2 years
            those Procreate brushes were earning more than my 6-figure salary in CG.
            Leaving in favor of Gumroad enabled me to explore other aspects of my art,
            develop new hobbies, and finally prioritize my personal life.”
          </p>
          <p className="mt-4 font-bold text-sm">
            <HeroName />
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/profile__pic.png"
            alt="Your portrait"
            width={400}
            height={400} />
        </div>
      </section>
      <Projects />
      <Tools />
      <GetInTouch />
    </div>
  );
}


function HeroName() {
  return (
    <Link
      href="https://instagram.com/seuusuario"
      target="_blank"
      className="inline-block bg-white text-black px-3 py-1 rounded-full shadow hover:underline transition"
    >
      Rafaela vende Brush Packs para Procreate
    </Link>
  );
}

