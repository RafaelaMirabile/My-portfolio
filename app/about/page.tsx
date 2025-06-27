import Image from "next/image";
import { FiGithub } from "react-icons/fi";

export default function AboutMe() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <>
      <section className="relative border-t border-b border-black flex flex-col-reverse md:flex-row justify-between items-center px-26 py-10 bg-pink-400 overflow-hidden">
        <div className="max-w-xl text-black relative">
          <p className="text-xl md:text-2xl font-medium">
            “I launched MaxPacks as an experimental side gig; but within 2 years
            those Procreate brushes were earning more than my 6-figure salary in CG.
            Leaving in favor of Gumroad enabled me to explore other aspects of my art,
            develop new hobbies, and finally prioritize my personal life.”
          </p>
        </div>
        <div className="relative">
          <Image
            src="/images/profile__pic.png"
            alt="Your portrait"
            width={400}
            height={400} />
          <a
            href="https://github.com/RafaelaMirabile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white px-3 py-2 rounded-full border-black gap-2 rigth-[100px]"
            style={{ borderWidth: '1.5px', marginLeft:'70%'}}
          >
            <FiGithub className="text-xl" />
            RafaelaMirabile
          </a>

        </div>
      </section>
    </>
  );
}


