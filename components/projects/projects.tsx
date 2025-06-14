export default function Projects() {
  const projects = [
    {
      title: "Website Redesign",
      description: "Modern UI/UX redesign for e-commerce site.",
      tags: ["React", "Tailwind", "Figma"],
      bgColor: "bg-teal-500",
      image: "/icons/project1.svg",
    },
    {
      title: "Mobile App",
      description: "A cross-platform shopping app.",
      tags: ["Flutter", "Firebase", "Dart"],
      bgColor: "bg-red-500",
      image: "/icons/project2.svg",
    },
    {
      title: "Dashboard Tool",
      description: "Internal analytics dashboard for teams.",
      tags: ["Next.js", "Supabase", "Chart.js"],
      bgColor: "bg-yellow-400",
      image: "/icons/project3.svg",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 text-black ${project.bgColor} shadow-md hover:scale-[1.02] transition-transform`}
          >
            <img src={project.image} alt={project.title} className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white text-black text-sm px-3 py-1 rounded-full border border-black"
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
