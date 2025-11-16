'use client';

import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Tools from '@/components/tools/tools';
import Experience from '@/components/experience/experience';
import GetInTouch from '@/components/shared/GetInTouch';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function HomeClient() {
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
    <div>
      <Hero />
      <Projects />
      <Tools />
      <Experience />
      <GetInTouch />
    </div>
  );
}
