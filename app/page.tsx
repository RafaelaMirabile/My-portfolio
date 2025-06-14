'use client';
import './globals.css';
import Image from "next/image";
import PageMetaHeads from "@/components/shared/PageMetaHeads";
import Projects from "@/components/projects/projects";
import Tools from "@/components/tools/tools";
import GetInTouch from '@/components/shared/GetInTouch';

export default function Home() {
  return (
    <>
      <PageMetaHeads title="Home | My Portfolio" />
      <div>
        <section className="min-h-[100dvh] w-full px-4 flex flex-col md:flex-row gap-4 items-center border border-red-500">
          <div className="border-purple-500 border-solid border-2">
            <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
            <p className="mt-4 text-lg">This is a simple Next.js application.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">cv</button>
          </div>
          <div className='max-w-sm'>
            <Image
              src="/images/nextjs.png"
              alt="Next.js Logo"
              width={0} 
              height={0}
              className="w-full h-auto border-2 border-orange-500"
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
