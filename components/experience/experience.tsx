import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const experienceData = [
  {
    title: "Website Content Editor",
    date: "January 2024 - Current",
    details: [
      "Ligth front-end coding (HTML, CSS, JavaScript).",
      "Activation and configuration of website features using CMS-Magento2 extensions.",
      "Maintance of content across multiple markets.",
      "Quality assurance checks (fixing broken links, implementing redirects, adding ALT tags and metadata).",
    ],
    bgColor: "bg-[#FFC600]",
    company: "Nestlé Business Services Lisbon"
  },
  {
    title: "Wordpress Freelancer",
    date: "January 2022 - June 2023",
    details: [
      "Customizing and creating themes.",
      "Responsive and mobile-friendly layouts.",
      "Updating and formatting content.",
      "Managing menus, pages, widgets and plugins."
    ],
    bgColor: "bg-[#5F9EA0]",
    company: "Self-employed"
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="px-6 py-16 h-[30rem] flex items-center justify-center">
      <div className="max-w-3xl mx-auto space-y-6">
        {experienceData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index}>
              <button
                onClick={() => toggleCard(index)}
                className="flex items-center justify-between w-[50rem]"
              >
                <div className="flex w-full flex-col items-start">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>

                {/* Seta com camada atrás */}
                <div className="relative inline-block">
                  {/* Camada de fundo atrás da seta */}
                  <div
                    className={`absolute inset-0 ${item.bgColor} rounded border-2 border-black translate-x-1 translate-y-1 z-0`}
                  />
                  {/* Botão com ícone */}
                  <div
                    className="relative z-10 border-2 border-black p-2 bg-white rounded transition"
                    aria-expanded={isExpanded}
                  >
                    <FiArrowRight
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isExpanded ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
              </button>

              {isExpanded && (
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
