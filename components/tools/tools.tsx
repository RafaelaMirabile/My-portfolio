const tools = [
  "React", "Next.js", "Typescript", "Node.js", "MongoDB", "Python", "Linux", "HTML",
  "CSS", "TailwindCSS", "WordPress", "Magento", "Ghost", "Google Workspace",
  "Microsoft365", "Jira", "Adobe Photoshop", "Adobe Premiere", "Obsidian", "Notion",
  "cPanel/WHM", "Enhance", "Zendesk", "DNS", "Domain Names"
];

export default function Tools() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-4">The tools I use to get the job done</h2>
      <p className="text-gray-600 mb-6">
        I'm always curious about the latest tech and love pushing myself to learn new things.
        Here are some of the tools and skills I use.
      </p>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="hover:bg-[#FFB6C1] bg-teal-300 text-black font-semibold px-4 py-2 rounded-full shadow-sm cursor-default"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
