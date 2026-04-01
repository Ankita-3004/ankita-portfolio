// import hero from "../assets/images/hero.png"
import ankita_bg from '../assets/new.png'
import './hero.css'
import { TypeAnimation } from 'react-type-animation';

export default function Hero(){

return(

<section className="grid-bg min-h-screen flex items-center text-white pt-24" id="home">

<div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

{/* LEFT SIDE */}

<div>

<p className="text-gray-300 mb-4 text-lg">
Hi 👋 I'm 
<TypeAnimation
sequence={[
  'Ankita', 
  2000,
  'Software Developer',
  2000,
//   'React Developer',
//   2000,
]}
wrapper="span"
speed={50}
className="text-orange-400 ml-2"
repeat={Infinity}
/>
</p>

<h1 className="text-5xl font-bold leading-tight mb-6">
A Best Mordern <br/>
Web Developer
</h1>

<p className="text-gray-400 max-w-md mb-8">
I build responsive and modern web applications using clean code and intuitive design to create smooth and engaging user experiences.
</p>

<a
  href="/ankita-cv2.pdf"
  download
  className="inline-block bg-orange-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-orange-300 transition"
>
  Download CV
</a>

</div>

{/* RIGHT SIDE */}

<div className="flex justify-center relative hero-image-wrapper">
    <div className="dots-pattern"></div>

{/* <div className="absolute w-[460px] h-[460px] bg-green-400/20 rounded-full blur-3xl"></div> */}

<img
src={ankita_bg}
className="relative w-[420px] h-[420px] object-cover object-top rounded-full border border-gray-700 shadow-2xl"
/>

</div>

</div>

</section>

)

}