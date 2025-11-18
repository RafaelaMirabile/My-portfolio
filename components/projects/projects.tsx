import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "R.WebSig",
      description: "R.WebSig is a website that makes it easy to explore demographic data from the 2021 Census. It uses the Google Maps API to display interactive district polygons, showing Portugal's population density, district names, county numbers, and their geographical boundaries in a clear and visual way.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      bgColor: "bg-[#5F9EA0]",
      image: "/images/R.Websig.png",
      href: "https://densidade-populacional-portugual-2021.vercel.app/",
    },
    {
      title: "My Wallet",
      description: "MyWallet is mobile view a full-stack app that makes it easy to track your finances. Add, edit, or delete transactions with descriptions and amounts, all in a simple and interactive interface built with React.",
      tags: ["React", "Node.js", "Figma", "MongoDB", "Bcrypt"],
      bgColor: "bg-[#FF5733]",
      image: "/images/myWallet.png",
      href: "https://mywallet-iota.vercel.app/",
    },
    {
      title: "Rafaela C. Mirabile",
      description: "My personal website in NextJS, Typescript and TailwindCSS using MagicUI components, with highly customized design, theme and animations.",
      tags: ["Next.js", "Typescript", "TailwindCSS"],
      bgColor: "bg-[#FFC600]",
      image: "/images/FlowerPortf.png",
      href: "https://my-portfolio-i8k0uhytz-rafaelamirabiles-projects.vercel.app/",
    },
  ];

  return (
    <section className="py-12 px-4 min-h-[470px] border-black border-t-2" id="projects">
      <h2 className="text-4xl text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
         <Link
  key={index}
  href={project.href}
  target="_blank"
  className={`block border-2 border-black p-6 text-black ${project.bgColor} hover:scale-[1.02] transition-transform h-full`}
>
  <div className="flex flex-col h-full">
    <Image
      src={project.image}
      alt={project.title}
      width={79}
      height={79}
      className="rounded-full mb-4 h-18 w-18"
    />
    <h3 className="text-2xl font-semibold">{project.title}</h3>
    <p className="mt-2 mb-4">{project.description}</p>

    {/* Add mt-auto to push tags to the bottom */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag, i) => (
        <span
          key={i}
          className="text-black bg-white text-sm px-3 py-1 rounded-full border border-black"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</Link>

        ))}
      </div>
    </section>
  );
}
