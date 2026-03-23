import {
  Code2,
  Atom,
  FileCode,
  Palette,
  Globe,
  Server,
  Database,
  Plug,
  Wrench,
  Github,
  GitBranch,
  TerminalSquare
} from "lucide-react";
import { motion } from "framer-motion";

// animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Skills() {

const frontend = [
{ name: "React", icon: <Atom size={30} /> },
{ name: "JavaScript", icon: <FileCode size={30} /> },
{ name: "Tailwind CSS", icon: <Palette size={30} /> },
{ name: "HTML5", icon: <Globe size={30} /> },
{ name: "CSS3", icon: <Code2 size={30} /> }
];

const backend = [
{ name: "Node.js", icon: <Server size={30} /> },
{ name: "Express", icon: <Plug size={30} /> },
{ name: "REST APIs", icon: <FileCode size={30} /> },
{ name: "MongoDB", icon: <Database size={30} /> }
];

const tools = [
{ name: "Git", icon: <GitBranch size={30} /> },
{ name: "GitHub", icon: <Github size={30} /> },
{ name: "VS Code", icon: <TerminalSquare size={30} /> },
{ name: "Postman", icon: <Wrench size={30} /> }
];

return (

<motion.section
className="bg-[#f6f2ec] py-24 px-6"
id="skills"
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.2 }}
variants={container}
>

{/* Heading */}

<div className="text-center mb-16">

<motion.h2
variants={item}
className="text-4xl font-bold text-[#1f1f1f] mb-4"
>
Tech Stack
</motion.h2>

<motion.p
variants={item}
className="text-gray-600"
>
Technologies I use to build modern applications
</motion.p>

</div>

<div className="max-w-5xl mx-auto space-y-16">

{/* FRONTEND */}

<motion.div variants={container}>

<motion.h3
variants={item}
className="flex items-center gap-2 text-xl font-semibold mb-6 text-[#1f1f1f]"
>
<Code2 size={22} className="text-[#d8b48c]" />
Frontend
</motion.h3>

<motion.div
variants={container}
className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
>

{frontend.map((skill, index) => (

<motion.div
key={index}
variants={item}
whileHover={{ scale: 1.08 }}
className="bg-white border border-[#e5ddd3] rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
>

<div className="text-[#d8b48c]">
{skill.icon}
</div>

<p className="font-medium text-gray-700">
{skill.name}
</p>

</motion.div>

))}

</motion.div>

</motion.div>


{/* BACKEND */}

<motion.div variants={container}>

<motion.h3
variants={item}
className="flex items-center gap-2 text-xl font-semibold mb-6 text-[#1f1f1f]"
>
<Server size={22} className="text-[#d8b48c]" />
Backend
</motion.h3>

<motion.div
variants={container}
className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>

{backend.map((skill, index) => (

<motion.div
key={index}
variants={item}
whileHover={{ scale: 1.08 }}
className="bg-white border border-[#e5ddd3] rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
>

<div className="text-[#d8b48c]">
{skill.icon}
</div>

<p className="font-medium text-gray-700">
{skill.name}
</p>

</motion.div>

))}

</motion.div>

</motion.div>


{/* TOOLS */}

<motion.div variants={container}>

<motion.h3
variants={item}
className="flex items-center gap-2 text-xl font-semibold mb-6 text-[#1f1f1f]"
>
<Wrench size={22} className="text-[#d8b48c]" />
Tools
</motion.h3>

<motion.div
variants={container}
className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>

{tools.map((skill, index) => (

<motion.div
key={index}
variants={item}
whileHover={{ scale: 1.08 }}
className="bg-white border border-[#e5ddd3] rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
>

<div className="text-[#d8b48c]">
{skill.icon}
</div>

<p className="font-medium text-gray-700">
{skill.name}
</p>

</motion.div>

))}

</motion.div>

</motion.div>

</div>

</motion.section>

);
}