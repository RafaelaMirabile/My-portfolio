'use client';
import LayeredButtonGetInTouch from "./LayerdButton";

export default function GetInTouch() {
  return (
    <section id='contact' className="mx-auto p-6 flex flex-col items-center scroll-mt-24">
      <h2 className="text-3xl  mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        I'm always open to discussing new projects and ideas. If you'd like to get in touch, feel free to reach out!
      </p>
      <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
        <LayeredButtonGetInTouch />
      </a>
    </section>
  );
}
