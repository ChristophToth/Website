import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

const Resume = () => {
  const experiences: Experience[] = [
    {
      title: "Senior Marketing Strategist",
      company: "Example Corp",
      period: "2020 - Present",
      description: [
        "Led cross-functional teams in developing and executing marketing strategies",
        "Increased customer engagement by 45% through data-driven campaigns",
        "Managed budgets exceeding $1M and achieved 130% ROI",
      ],
    },
    {
      title: "Marketing Analyst",
      company: "Innovation Inc",
      period: "2018 - 2020",
      description: [
        "Conducted market research and competitor analysis",
        "Developed consumer insight reports for key stakeholders",
        "Optimized marketing campaigns based on performance metrics",
      ],
    },
  ];

  const education: Education[] = [
    {
      degree: "Master of Business Administration",
      school: "Example University",
      year: "2018",
    },
    {
      degree: "Bachelor of Marketing",
      school: "Business College",
      year: "2016",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {/* Experience Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-gray-500">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
