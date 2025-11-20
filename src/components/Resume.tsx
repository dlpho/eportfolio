import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import cvPdf from "../assets/files/CV_HO_DENISELIANA.pdf";

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-white border-t-2 border-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-stone-900 mb-3 italic border-b-2 border-red-700 inline-block pb-1">
              Resume
            </h2>
            <p className="text-stone-600 mt-6 max-w-3xl">
              A comprehensive overview of my education, experience, skills, and achievements.
            </p>
          </div>
            <a
            href={cvPdf}
            download
            className="flex items-center gap-2 px-6 py-3 bg-red-700 text-white hover:bg-red-800 transition-colors border-2 border-stone-900 font-mono text-sm"
            >
            <Download size={18} />
            Download PDF
            </a>
        </div>

        {/* Resume Content */}
        <div className="w-full" style={{ minHeight: "80vh" }}>
          <object
            data={cvPdf}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ minHeight: "80vh" }}
          >
          </object>
        </div>
      </div>
    </section>
  );
}
