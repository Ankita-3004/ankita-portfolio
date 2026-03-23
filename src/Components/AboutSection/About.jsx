import { Code, Database, Layout, Cpu } from "lucide-react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

// animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  return (
    <motion.section
      className="bg-[#f5f2ee] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16"
        >
          About <span className="text-orange-500">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div variants={item}>

            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base ">
              I am a passionate web developer focused on building modern,
              responsive and user-friendly web applications using
              JavaScript, React and modern web technologies.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              I enjoy transforming ideas into real products with clean
              code, intuitive design and high performance.
            </p>

            {/* Info */}
            <div className="space-y-3 text-gray-700">

              <div className="flex flex-wrap">
                <span className="w-24 sm:w-32 font-semibold">Name :</span>
                <span>Ankita Dhall</span>
              </div>

              <div className="flex flex-wrap">
                <span className="w-24 sm:w-32 font-semibold">Role :</span>
                <span>Frontend Developer</span>
              </div>

              <div className="flex flex-wrap">
                <span className="w-24 sm:w-32 font-semibold">Location :</span>
                <span>India</span>
              </div>

              <div className="flex flex-wrap">
                <span className="w-24 sm:w-32 font-semibold">Email :</span>
                <span>ankitadhall2001@gmail.com</span>
              </div>

              <div className="flex flex-wrap">
                <span className="w-24 sm:w-32 font-semibold">Language :</span>
                <span>Odia,Hindi,English</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE - SKILLS */}
          <motion.div
            className="relative grid grid-cols-2 gap-3 sm:gap-6 mt-8 md:mt-0"
            variants={container}
          >

            <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-400/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
              <SkillCard
                icon={<Layout size={28} />}
                title="HTML / CSS"
                percent="90%"
              />
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
              <SkillCard
                icon={<Code size={28} />}
                title="JavaScript"
                percent="85%"
              />
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
              <SkillCard
                icon={<Cpu size={28} />}
                title="React"
                percent="80%"
              />
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }}>
              <SkillCard
                icon={<Database size={28} />}
                title="API / Backend"
                percent="75%"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}