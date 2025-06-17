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

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
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
      Construa com cor,<br /> destaque com estilo.
    </h1>
    <p className="text-lg">
      Um portfólio com impacto visual e personalidade forte. Explore meus projetos.
    </p>
    <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded hover:bg-gray-100 transition">
      Ver Projetos
    </button>
  </div>
  <div className="hidden md:block w-[400px] h-[600px] bg-purple-600 rounded-lg overflow-hidden border-8 border-white">
    <Image
      src="/images/banner_pic-removebg-preview.png"
      alt="Minha foto"
      width={400}
      height={600}
      className="object-cover w-full h-full border-8 border-white"
    />
  </div>
</section>

        <Projects />
        <Tools />
        <GetInTouch />
      </div>
    </>
  );
}
