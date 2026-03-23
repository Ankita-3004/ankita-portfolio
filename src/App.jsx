import { useState,useEffect } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/AboutSection/About"
import StatsSection from "./Components/StatusSection/StatsSection"
import Experience from "./Components/ExperienceSection/Experience"
import Skills from "./Components/SkillsSection/Skills"
import Projects from "./Components/ProjectSection/Projects"
import Contact from "./Components/ContactSection/Contact"
import Footer from "./Components/Footer"
import Loader from "./Components/LoaderSection/Loader"
function App(){
const [loading,setLoading] = useState(true);

useEffect(()=>{

setTimeout(()=>{
setLoading(false);
},2000);

},[]);
return(

<>
{loading && <Loader/>}
<Navbar/>
<Hero/>
<About/>
<StatsSection/>
<Experience/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
</>

)

}

export default App