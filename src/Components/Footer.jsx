import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Top Section */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}

          <div className="text-center md:text-left">
           <h2 className="text-2xl font-semibold bg-[repeating-linear-gradient(45deg,#f5c89b,#f5c89b_10px,#f3a45c_10px,#f3a45c_20px)] bg-clip-text text-transparent">
  Ankita.dev
</h2>
            <p className="text-sm mt-2 text-gray-500">
              Building modern web experiences with clean code.
            </p>
          </div>


          {/* Navigation */}

          <ul className="flex gap-8 text-sm">

            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-orange-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>

          </ul>


          {/* Social */}

          <div className="flex gap-4">

            <a
              href="https://github.com/Ankita-3004"
              target="_blank"
              className="p-2 border border-gray-700 rounded-lg hover:border-orange-400 hover:text-orange-400 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/ankita-dhall-ba41a52a0/"
              target="_blank"
              className="p-2 border border-gray-700 rounded-lg hover:border-orange-400 hover:text-orange-400 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&to=ankitadhall2001@gmail.com"
              className="p-2 border border-gray-700 rounded-lg hover:border-orange-400 hover:text-orange-400 transition"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>


        {/* Divider */}

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Ankita. All rights reserved.

        </div>

      </div>

    </footer>
  );
}