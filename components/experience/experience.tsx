import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const experienceData = [
  {
    title: "Gumroad April Recap: What We've Shipped",
    date: "May 1, 2025",
    details: [
      "Launched new dashboard feature.",
      "Improved user onboarding flow.",
      "Fixed bugs reported by users.",
    ],
  },
  {
    title: "LifeMathMoney: How I launched my product and grew a following",
    date: "April 23, 2025",
    details: [
      "Built community engagement.",
      "Launched marketing campaigns.",
      "Received 500+ new subscribers.",
    ],
  },
  {
    title: "Small Bets is joining Gumroad 🎉",
    date: "April 22, 2025",
    details: [
      "Announced acquisition publicly.",
      "Merged product roadmaps.",
      "Onboarded Small Bets team.",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto space-y-6">
        {experienceData.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="border-b pb-4 flex flex-col">
              <button
                onClick={() => toggleCard(index)}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>

                <div
                  className="border rounded-lg p-2 hover:bg-gray-100 transition"
                  aria-expanded={isExpanded}
                >
                  <FiArrowRight
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : "rotate-0"
                    }`}
                  />
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
