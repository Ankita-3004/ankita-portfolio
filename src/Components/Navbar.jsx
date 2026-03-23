import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {

const handleScroll = () => {
  if(window.scrollY > 50){
    setScrolled(true);
  }else{
    setScrolled(false);
  }
};

window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);

},[]);


return(

<nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
${scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}
`}>

<div className="max-w-5xl mx-auto px-8 h-20 flex justify-between items-center">

<h1 className="text-xl font-semibold tracking-wide">
Ankita.Dev
</h1>

{/* Desktop Menu */}

<ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">

<li>
<a href="#home" className={`${scrolled ? "text-orange-500" : "text-orange-400"} cursor-pointer`}>
HOME
</a>
</li>

<li>
<a href="#about" className="hover:text-orange-500 transition">ABOUT</a>
</li>

<li>
<a href="#experience" className="hover:text-orange-500 transition">EXPERIENCE</a>
</li>

<li>
<a href="#skills" className="hover:text-orange-500 transition">SKILLS</a>
</li>

<li>
<a href="#projects" className="hover:text-orange-500 transition">PROJECTS</a>
</li>

<li>
<a href="#contact" className="hover:text-orange-500 transition">CONTACT</a>
</li>

</ul>

{/* Hamburger Button */}

<button
onClick={() => setMenuOpen(!menuOpen)}
className="md:hidden w-11 h-11 flex flex-col justify-center items-center 
bg-[#0f1218] rounded-xl gap-1.5 shadow-lg hover:shadow-orange-500/20 transition"
>

<span
className={`block h-[2px] w-5 bg-orange-400 transition-all duration-300 
${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
></span>

<span
className={`block h-[2px] w-3 bg-white transition-all duration-300 
${menuOpen ? "opacity-0" : ""}`}
></span>

<span
className={`block h-[2px] w-5 bg-orange-400 transition-all duration-300 
${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
></span>

</button>

</div>

{/* Mobile Sidebar */}

{menuOpen && (

<div className="fixed inset-0 z-40 md:hidden">

{/* Overlay */}

<div
className="absolute inset-0 bg-black/40"
onClick={() => setMenuOpen(false)}
></div>

{/* Sidebar */}

<div className="absolute right-0 top-0 h-full w-72 bg-[#0b0f19] text-white shadow-2xl overflow-hidden">

{/* Background Pattern */}

<div className="absolute inset-0 opacity-[0.07] 
bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),
linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
bg-[size:28px_28px]"></div>

{/* Close Button */}

<button
onClick={() => setMenuOpen(false)}
className="absolute top-6 right-6 bg-[#1a1a1a] p-2 rounded-lg hover:bg-orange-500 transition"
>
<X size={18}/>
</button>

{/* Menu Items */}

<div className="relative flex flex-col items-center mt-24 gap-10 text-lg tracking-wide font-medium">

<div className="w-12 h-[2px] bg-orange-500 mb-6"></div>

<a href="#home" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">HOME</a>

<a href="#about" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">ABOUT</a>

<a href="#experience" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">EXPERIENCE</a>

<a href="#skills" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">SKILLS</a>

<a href="#projects" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">PROJECTS</a>

<a href="#contact" onClick={()=>setMenuOpen(false)} className="hover:text-orange-400 transition">CONTACT</a>

</div>

</div>

</div>

)}

</nav>

)

}