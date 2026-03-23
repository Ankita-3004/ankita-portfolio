import { Mail, MapPin, Github, Linkedin, Mail as MailIcon } from "lucide-react";
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Contact() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-[#f5efe7]"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-gray-800"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            variants={item}
            className="text-sm sm:text-base text-gray-600 mt-3"
          >
            Have a project in mind? Let's create something amazing together
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT - FORM */}
          <motion.div
            variants={container}
            className="space-y-4 sm:space-y-5"
          >

            <motion.input
              variants={item}
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base bg-white focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <motion.input
              variants={item}
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base bg-white focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <motion.textarea
              variants={item}
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm sm:text-base bg-white focus:ring-2 focus:ring-orange-400 outline-none"
            />

            {/* Button */}
            <motion.button
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Send Message →
            </motion.button>

          </motion.div>

          {/* RIGHT - INFO */}
          <motion.div
            variants={container}
            className="space-y-5 sm:space-y-6"
          >

            {/* Info Card */}
            <motion.div
              variants={item}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md border border-orange-100"
            >

              <h4 className="font-semibold text-gray-800 mb-4">
                Get in Touch
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="text-orange-500" size={18} />
                  ankitadhall2001@gmail.com
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="text-orange-500" size={18} />
                  Cuttack, India
                </div>

              </div>

            </motion.div>

            {/* Social */}
            <motion.div variants={item}>

              <h4 className="font-semibold text-gray-800 mb-3">
                Connect With Me
              </h4>

              <div className="flex flex-wrap gap-3">

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white rounded-xl shadow hover:shadow-md cursor-pointer"
                >
                  <Github size={18}/>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white rounded-xl shadow hover:shadow-md cursor-pointer"
                >
                  <Linkedin size={18}/>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-white rounded-xl shadow hover:shadow-md cursor-pointer"
                >
                  <MailIcon size={18}/>
                </motion.div>

              </div>

            </motion.div>

            {/* Status Card */}
            <motion.div
              variants={item}
              className="bg-white p-4 rounded-xl border border-green-200 flex items-start sm:items-center gap-3"
            >

              <div className="w-3 h-3 bg-green-500 rounded-full"></div>

              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">
                  Available for new projects
                </span>
                <br/>
                Let's build something great together!
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}