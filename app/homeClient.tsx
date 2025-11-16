'use client';
import Projects from "@/components/projects/projects";
import GetInTouch from '@/components/shared/GetInTouch';
import Tools from "@/components/tools/tools";
import './globals.css';
import Hero from "@/components/hero/hero";
import Experience from "@/components/experience/experience";


export default function HomeClient() {
  return ( 
    <>
      <div>
        <Hero />
        <Projects />
        <Tools />
        <Experience />
        <GetInTouch />
      </div>
    </>
  );
}
