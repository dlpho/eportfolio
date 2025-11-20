import { FileText, ExternalLink, Github, Image as ImageIcon, Link } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import chaiMetImg from "../assets/img/chai-met.png";
import labmateImg from "../assets/img/labmate.png";
import clutterhuckImg from "../assets/img/clutterhuck.jpg";
import queueAutomataImg from "../assets/img/queue-automata.png";
import statsImg from "../assets/img/stats.png";

const workSamples = [
  {
    title: "CHAI-MET (CHAI - Management and Events Tracker)",
    type: "Course Project",
    course: "CSSWENG - Software Engineering",
    description: "Comprehensive mobile-fronting web app that streamlines, digitalizes, and centralizes project monitoring, beneficiary interaction, and event coordination for the non-profit organization CHAI Taguig. Includes live app of the project (link found in GitHub repository).",
    image: chaiMetImg,
    technologies: ["React", "Typescript", "Tailwind CCS", "Firebase"],
    grade: "4.0",
    link: "https://github.com/Parum-Lucis/csswengS16chai"
  },
  {
    title: "LabMate: Web-based Lab Reservation Application",
    type: "Course Project",
    course: "CCAPDEV - Web Application Development",
    description: "Interactive web database app that that allows students to easily book and reserve computer seats across laboratory rooms in DLSU. Includes live web demo of the project (link found in GitHub repository).",
    image: labmateImg,
    technologies: ["Javascript", "Node.js", "HTML", "CSS", "MongoDB"],
    grade: "4.0",
    link: "https://github.com/dlpho/CCAPDEV-LabMate"
  },
  {
    title: "ClutterHuck (App Prototype)",
    type: "Course Project",
    course: "STHCIUX - Human Computer Interactions",
    description: "A mobile app prototype that helps users sort, categorize, and donate their unused items through AI-assisted inventorying and a centralized hub of verified organizations and peer-to-peer options. It streamlines the decluttering process by making donation decisions faster, clearer, and more convenient. Includes a live functional Figma prototype (see Figma link).",
    image: clutterhuckImg,
    technologies: ["Figma"],
    grade: "4.0",
    link: "https://www.figma.com/proto/Du8KlAeGrsZSz2f35nGWLk/STHCIUX-S17-Prototyping?node-id=609-4609&starting-point-node-id=609%3A4609&t=OfjgeDgA9pA6Tndn-1",
  },
  {
    title: "Computational Power of Queue Automata",
    type: "Research Paper",
    course: "STALGCM - Advanced Algorithms and Complexities",
    description: "Study of Queue Automata as a Turing-equivalent computational model, including its operational rules, language recognition capability, and potential applications in bioinformatics.",
    image: queueAutomataImg,
    technologies: ["JFLAP", "OverLeaf"],
    grade: "4.0",
    link: "/eportfolio/files/STALGCM_S13_DeGuzmanHo.pdf"
  },
  {
    title: "Significance of Anxiety Levels and Gaming Playstyles in the Reliance on Gaming as a Coping Mechanism",
    type: "Research Paper",
    course: "STT101A - Foundation Course in Statistics",
    description: "This paper examines how gaming playstyles and motivations relate to anxiety levels using SPIN and GAD measures. Results show that gamers who play for enjoyment report lower anxiety than those who use gaming mainly for relaxation, and that social anxiety moderately aligns with overall anxiety. The study highlights how structured gaming habits may support mental health.",
    image: statsImg,
    technologies: ["PHStat", "Excel"],
    grade: "4.0",
    link: "/eportfolio/files/STT101A_Group5_FinalManuscript.pdf"
  },
];

const additionalWork = [
  {
    title: "Capstone Project Proposal",
    description: "Detailed proposal for senior capstone project on AI-powered code review assistant",
    type: "Document"
  },
  {
    title: "Code Portfolio",
    description: "Collection of well-documented code samples demonstrating various programming concepts",
    type: "GitHub Repository"
  },
  {
    title: "Technical Presentation",
    description: "Presentation on REST API design best practices delivered at CS student symposium",
    type: "Slides"
  },
  {
    title: "Hackathon Project",
    description: "Award-winning project from University Tech Challenge 2024",
    type: "Project"
  }
];

export function WorkSamples() {
  return (
    <section id="work-samples" className="py-20 bg-stone-50 border-t-2 border-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-stone-900 mb-3 italic border-b-2 border-red-700 inline-block pb-1">
            Academic Work Samples
          </h2>
          <p className="text-stone-600 mt-6 max-w-3xl">
            A showcase of my best academic work, demonstrating technical skills, 
            problem-solving abilities, and commitment to quality.
          </p>
        </div>

        {/* Featured Work Samples */}
        <div className="mb-20">
          <h3 className="text-stone-900 mb-8 font-mono">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {workSamples.map((sample, index) => (
              <div
                key={index}
                className="bg-white border-2 border-stone-300 hover:border-red-700 transition-colors overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-700 text-white text-xs font-mono border border-stone-900">
                    {sample.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-stone-900 flex-1">{sample.title}</h4>
                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-mono border border-red-200">
                      Grade: {sample.grade}
                    </span>
                  </div>
                  
                  <p className="text-red-700 text-sm mb-3 font-mono">{sample.course}</p>
                  
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    {sample.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-stone-500 text-xs font-mono mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {sample.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-stone-100 text-stone-700 text-xs border border-stone-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {sample.link && (
                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-red-700 hover:text-red-800 transition-colors text-sm font-mono border-b border-red-700 inline-flex pb-1"
                    >
                      <Link size={16} />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Note */}
        <div className="p-8 bg-white border-2 border-red-700">
          <div className="flex items-start gap-4">
            <ImageIcon className="text-red-700 flex-shrink-0" size={28} />
            <div>
              <h4 className="text-stone-900 mb-3 italic">About These Work Samples</h4>
              <p className="text-stone-700 leading-relaxed mb-4">
                These samples represent my strongest academic work and demonstrate my 
                technical capabilities, attention to detail, and ability to complete 
                complex projects. Each piece has been selected to showcase different 
                aspects of my skill set relevant to a career in software development.
              </p>
              <p className="text-stone-600 text-sm italic">
                Additional code samples, project documentation, and work artifacts are 
                available upon request. All academic work is presented in accordance with 
                my university's academic integrity policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
