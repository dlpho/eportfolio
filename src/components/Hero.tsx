import { Mail, Facebook, Instagram, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImg from "../assets/img/IMG_20250518_232349_537.jpg";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side - Text content */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-800 border border-red-700 font-mono text-sm mb-4">
                Career E-Portfolio
              </div>
              <h1 className="text-stone-900 mb-3 italic">
                Denise Liana P. Ho
              </h1>
              <p className="text-red-700 font-mono text-sm mb-2">
                BSCS-ST ID123
              </p>
              <p className="text-stone-600 italic">
                De La Salle University - Manila
              </p>
            </div>

            <div className="space-y-6 text-stone-700 leading-relaxed mb-8">
              <p>
                Welcome to my career e-portfolio! This comprehensive showcase demonstrates 
                my works as a software technology student, which aims to highlight my skills, achievements, 
                and aspirations in the field of technology and software development.
              </p>
              <p>
                Through academic excellence, hands-on projects, and constant learning, I am building a strong foundation for a career in software development, with a particular interest in data science, AI, and machine learning.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white border border-stone-300">
                <Mail className="text-red-700" size={20} />
                <div>
                  <p className="text-xs text-stone-500 font-mono">Email</p>
                  <p className="text-stone-800 text-sm">denise_liana_ho@dlsu.edu.ph</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-stone-300">
                <Phone className="text-red-700" size={20} />
                <div>
                  <p className="text-xs text-stone-500 font-mono">Phone</p>
                  <p className="text-stone-800 text-sm">0916 764 6283</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-stone-300">
                <MapPin className="text-red-700" size={20} />
                <div>
                  <p className="text-xs text-stone-500 font-mono">Location</p>
                  <p className="text-stone-800 text-sm">Bacoor, Cavite</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-stone-300">
                <Github className="text-red-700" size={20} />
                <div>
                  <p className="text-xs text-stone-500 font-mono">GitHub</p>
                  <p className="text-stone-800 text-sm">github.com/dlpho</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center pt-4 border-t border-stone-300">
              <span className="text-stone-500 font-mono text-sm">Connect with me:</span>
              <a
                href="https://www.facebook.com/lnnaho/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-red-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/llnnhh_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-red-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/dlpho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-red-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-red-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Image with artistic treatment */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-700/30"></div>
                <div className="relative bg-stone-200 p-2 border-2 border-stone-900">
                <ImageWithFallback
                  src={profileImg}
                  alt="Profile"
                  className="w-full aspect-[4/5] object-cover grayscale"
                />
                </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-20 pt-12 border-t-2 border-red-700">
          <p className="text-stone-600 italic text-center">
            "Day after day, we find the will to find our way/ Knowing that the darkest skies will someday see the sun."
          </p>
        </div>
      </div>
    </section>
  );
}
