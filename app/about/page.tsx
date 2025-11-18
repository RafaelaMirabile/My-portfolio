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
      <section className="relative border-t border-b border-black flex flex-col-reverse md:flex-row justify-between items-center px-26 py-6 bg-pink-400 overflow-hidden">
        <div className="max-w-xl text-black relative">
          <p className="text-xl md:text-2xl font-medium">
            “I&apos;m a Content Editor and Web Developer with experience maintaining and optimizing websites, creating new pages, configuring site features, and leveraging CMS and analytics to deliver high-quality digital experiences.”
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


