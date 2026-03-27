import { Github, ExternalLink } from "lucide-react"

export default function Projects() {

const projects = [
// {
// title: "Analytics Dashboard",
// desc: "Real-time analytics dashboard with charts, reports and team collaboration features.",
// image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
// tech: ["React", "Node.js", "MongoDB"],
// // github: "#",
// live: "#"
// },
{
title: "Task Management App",
desc: "A productivity task manager with drag and drop tasks, priorities and project tracking.",
image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
tech: ["React", "Express", "MongoDB"],
// github: "#",
live: "https://taskji.com/"
},
{
title: "E-Commerce Platform",
desc: "Full-stack ecommerce platform with payments, inventory management and analytics.",
image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
tech: ["React", "Redux", "Express"],
// github: "#",
live: "#"
}
]

return (

<section className="py-20 bg-[#f5efe7]" id="projects">

<div className="max-w-5xl mx-auto px-6">

{/* Title */}

<div className="text-center mb-14">

<h2 className="text-4xl font-bold text-gray-800">
Featured Projects
</h2>

<p className="text-gray-600 mt-3">
Some of my recent work and development projects
</p>

</div>

{/* Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{projects.map((project, index) => (

<div
key={index}
className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
>

{/* Image */}

<div className="overflow-hidden h-48">
  <img
    src={project.image}
    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

{/* Content */}

<div className="p-5">

<h3 className="text-xl font-semibold text-gray-800">
{project.title}
</h3>

<p className="text-gray-600 text-sm mt-2">
{project.desc}
</p>

{/* Tech Tags */}

<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map((tech,i)=>(
<span
key={i}
className="text-xs px-3 py-1 bg-orange-100 text-orange-600 rounded-full"
>
{tech}
</span>
))}

</div>

{/* Buttons */}

<div className="flex gap-4 mt-5">

{/* <a
href={project.github}
className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500"
>
<Github size={16}/>
Code
</a> */}

<a
href={project.live}
target="_blank"
className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500"
>
<ExternalLink size={16}/>
Live
</a>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}