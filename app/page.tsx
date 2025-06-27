'use client';
import Projects from "@/components/projects/projects";
import GetInTouch from '@/components/shared/GetInTouch';
import PageMetaHeads from "@/components/shared/PageMetaHeads";
import Tools from "@/components/tools/tools";
import './globals.css';
import Hero from "@/components/hero/hero";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Experience from "@/components/experience/experience";


export default function Home() {
  const searchParams = useSearchParams();

useEffect(() => {
  const scrollTo = searchParams.get('scrollTo');
  if (scrollTo) {
    const section = document.getElementById(scrollTo);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
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
        <Projects />
        <Tools />
        <Experience />
        <GetInTouch />
      </div>
    </>
  );
}
