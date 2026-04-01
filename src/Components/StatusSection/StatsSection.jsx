
import CountUpModule from "react-countup";

const CountUp = CountUpModule.default;

import './statusSection.css'
export default function StatsSection() {

  // console.log(CountUp);
 
  return (
    <section className="py-16 bg-gradient-to-r from-[#1f1f1f] via-[#1a1a1a] to-[#141414] grid-bg">

      <div className="max-w-5xl mx-auto text-center text-white px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Ankita Dhall <br />
          Frontend Developer
        </h2>

        <div className="grid grid-cols-3 gap-10 justify-center">

          <div>
            <h3 className="text-3xl font-bold"><CountUp end={5} duration={2}  enableScrollSpy scrollSpyDelay={600} />+</h3>
            <p className="text-gray-400 mt-2 text-sm">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold"><CountUp end={1} duration={2}  enableScrollSpy scrollSpyDelay={600} />+</h3>
            <p className="text-gray-400 mt-2 text-sm">Years Learning Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold"><CountUp end={10} duration={2}  enableScrollSpy scrollSpyDelay={600} />+</h3>
            <p className="text-gray-400 mt-2 text-sm">Skills Mastered</p>
          </div>

        </div>

       <a
  href="/ankita-cv3.pdf"
  download
  className="inline-block mt-8 bg-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transition"
>
  Download CV
</a>

      </div>

    </section>
  );
}