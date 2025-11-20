import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-stone-900 hover:text-red-700 transition-colors"
          >
            <FileText size={20} />
            <span className="font-mono bold">Career E-Portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            <button
              onClick={() => scrollToSection("introduction")}
              className="text-stone-700 hover:text-red-700 transition-colors"
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection("assessment")}
              className="text-stone-700 hover:text-red-700 transition-colors"
            >
              Assessment
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="text-stone-700 hover:text-red-700 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection("work-samples")}
              className="text-stone-700 hover:text-red-700 transition-colors"
            >
              Work Samples
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-stone-300 font-mono">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("introduction")}
                className="text-stone-700 hover:text-red-700 transition-colors text-left"
              >
                Introduction
              </button>
              <button
                onClick={() => scrollToSection("assessment")}
                className="text-stone-700 hover:text-red-700 transition-colors text-left"
              >
                Assessment
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="text-stone-700 hover:text-red-700 transition-colors text-left"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("work-samples")}
                className="text-stone-700 hover:text-red-700 transition-colors text-left"
              >
                Work Samples
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
