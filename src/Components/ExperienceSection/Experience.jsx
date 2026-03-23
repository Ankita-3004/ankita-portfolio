import { motion } from "framer-motion";
import { Code, Database, Rocket, BookOpen } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "2026",
      title: "Database",
      desc: "Started Learning Structural Quary Language(SQL Basics)",
      icon:  Database,
    },
    {
      year: "2025",
      title: "MERN Stack Development",
      desc: "Learned REST APIs, authentication, database management and server logic.",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Frontend Excellence",
      desc: "Focused on HTML,CSS,JS,React, responsive UI design and reusable components.",
      icon: Code,
    },
    {
      year: "2023",
      title: "Journey Begins",
      desc: "Started learning Python Full-stack Development.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="bg-[#f6f2ec] py-24 px-6" id="experience">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#1f1f1f] mb-4">
          My Learning Journey
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Turning curiosity into real world applications through consistent
          learning and building.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* center line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-[#e5ddd3]" />

        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
             className={`mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
}`}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 pl-16 md:px-6">
                <div className="bg-white shadow-md rounded-xl p-6 hover:-translate-y-1 transition">

                  <h3 className="text-lg font-semibold mb-2 text-[#1f1f1f]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>

              {/* center icon */}
              <div className="absolute left-0 md:relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#d8b48c] text-white shadow-lg z-10">
                <Icon size={20} />
              </div>

              {/* year */}
              <div className="pl-16 md:w-1/2 md:px-6 text-sm text-gray-500 font-semibold mt-2 md:mt-0">
                {item.year}
              </div>
            </motion.div>
          );
        })}
      </div>

     
      
    </section>
  );
}