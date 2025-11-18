'use client';
import { LayeredButtonGetInTouch } from "./LayerdButton";

export default function GetInTouch() {
  return (
    <section id='contact' className="border-black border-t-2 mx-auto p-14 flex flex-col items-center scroll-mt-24 bg-pink-400 mb-24">
      <h2 className="text-3xl  mb-4">Get in Touch</h2>
      <p className="text-600 mb-4">
        I&apos;m always open to discussing new projects and ideas. If you&apos;d like to get in touch, feel free to reach out!
      </p>
      <a href="mailto:rafaelamirabile8@gmail.com" style={{marginBottom: '3rem'}}>
        <LayeredButtonGetInTouch />
      </a>
    </section>
  );
}
