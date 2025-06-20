'use client';
import Projects from "@/components/projects/projects";
import GetInTouch from '@/components/shared/GetInTouch';
import PageMetaHeads from "@/components/shared/PageMetaHeads";
import Tools from "@/components/tools/tools";
import Image from "next/image";
import './globals.css';
import Hero from "@/components/hero/hero";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Experience from "@/components/experience/experience";
import About from "./about/page";

export default function Home() {
  const searchParams = useSearchParams();

useEffect(() => {
  const scrollTo = searchParams.get('scrollTo');
  if (scrollTo) {
    const section = document.getElementById(scrollTo);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
        // Opcional: remove ?scrollTo da URL após scroll
        window.history.replaceState({}, '', window.location.pathname);
      }, 100);
    }
  }
}, [searchParams]);

  return (
    <>
      <PageMetaHeads title="Home | My Portfolio" />
      <div>
        <Hero/>
<section className="w-full min-h-screen flex items-center justify-between px-8 py-16 bg-orange-500 text-white">
  <div className="max-w-xl space-y-6">
    <h1 className="text-5xl font-extrabold leading-tight">
      get to know me,<br />lo
    </h1>
    <p className="text-lg">
      Explore meus projetos.
    </p>
    <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded hover:bg-gray-100 transition">
      Ver Projetos
    </button>
  </div>
  <div className="hidden md:block w-[400px] h-[600px] rounded-lg overflow-hidden">
          <Image
            src="/images/profile__pic.png"
            alt="Your portrait"
            width={400}
            height={400} />
  </div>
</section>
        <Projects />
        <Tools />
        <Experience />
        <GetInTouch />
      </div>
    </>
  );
}
