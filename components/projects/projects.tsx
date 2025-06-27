import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Website Redesign",
      description: "Modern UI/UX redesign for e-commerce site.",
      tags: ["React", "Tailwind", "Figma"],
      bgColor: "bg-[#5F9EA0]",
      image: "/icons/project1.svg",
    },
    {
      title: "Mobile App",
      description: "A cross-platform shopping app.",
      tags: ["Flutter", "Firebase", "Dart"],
      bgColor: "bg-[#FF5733]",
      image: "/icons/project2.svg",
    },
    {
      title: "Dashboard Tool",
      description: "Internal analytics dashboard for teams.",
      tags: ["Next.js", "Supabase", "Chart.js"],
      bgColor: "bg-[#FFC600]",
      image: "/icons/project3.svg",
    },
  ];

  return (
    <section className="py-12 px-4 min-h-[470px] border-black border-t-2">
      <h2 className="text-4xl text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`border-2 border-black p-6 text-black ${project.bgColor}  hover:scale-[1.02] transition-transform`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={48} // equivalente a Tailwind h-12 (12 × 4 = 48px)
              height={48} // equivalente a Tailwind w-12
              className="h-12 w-12 mb-4"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
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
        ))}
      </div>
    </section>
  );
}
