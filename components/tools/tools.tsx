const tools = [
  "React", "Next.js", "Typescript", "Node.js", "MongoDB", "Python", "Linux", "HTML",
  "CSS", "TailwindCSS", "WordPress", "Magento", "Ghost", "Google Workspace",
  "Microsoft365", "Jira", "Adobe Photoshop", "Adobe Premiere", "Obsidian", "Notion",
  "cPanel/WHM", "Enhance", "Zendesk", "DNS", "Domain Names"
];

export default function Tools() {
  return (
    <div className=" mx-auto p-6 bg-[#FFD700]" id="tools">
      <h2 className="text-3xl mb-4 text-center">The tools I use to get the job done</h2>
      <p className="text-black-600 mb-6">
        I'm always curious about the latest tech and love pushing myself to learn new things.
        Here are some of the tools and skills I use.
      </p>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="bg-[#FFB6C1] hover:bg-green-500 text-black  px-4 py-2  shadow-sm cursor-pointer border border-black"
           >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
