import { User, Target, Heart, Lightbulb } from "lucide-react";

export function Introduction() {
  return (
    <section id="introduction" className="py-20 bg-white border-y-2 border-stone-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-stone-900 mb-3 italic border-b-2 border-red-700 inline-block pb-1">
            Self-Introduction
          </h2>
          <p className="text-stone-600 mt-6 max-w-3xl">
            Getting to know me: my background, aspirations, and what drives me forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-stone-900 bg-red-700 flex items-center justify-center flex-shrink-0">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-stone-900 mb-3">About Me</h3>
                <p className="text-stone-600 leading-relaxed">
                  I am a [year] year computer science student at [University Name], 
                  passionate about leveraging technology to solve real-world problems. 
                  My journey in computer science began with [your story], and has 
                  evolved into a deep commitment to continuous learning and innovation.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  Outside of academics, I enjoy [your hobbies/interests], which help me 
                  maintain a balanced perspective and bring creativity to my technical work.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-stone-900 bg-red-700 flex items-center justify-center flex-shrink-0">
                <Target className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-stone-900 mb-3">Career Goals</h3>
                <p className="text-stone-600 leading-relaxed">
                  My immediate goal is to secure an internship or entry-level position 
                  in software engineering where I can apply my academic knowledge and 
                  contribute to meaningful projects. I aim to work with innovative 
                  companies that value creativity, collaboration, and continuous improvement.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  Long-term, I aspire to become a [your career aspiration] and contribute 
                  to advancing technology in [specific field or industry].
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-red-50 border-l-4 border-red-700">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-red-700" size={24} />
              <h4 className="text-stone-900 font-mono">Core Values</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700"><strong>Excellence:</strong> Striving for quality in every project and assignment</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700"><strong>Innovation:</strong> Seeking creative solutions to complex problems</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700"><strong>Collaboration:</strong> Working effectively in teams and learning from others</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700"><strong>Integrity:</strong> Maintaining ethical standards in all endeavors</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-stone-100 border-l-4 border-stone-700">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-red-700" size={24} />
              <h4 className="text-stone-900 font-mono">What Motivates Me</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">The challenge of solving complex technical problems</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Creating technology that positively impacts people's lives</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Continuous learning and professional growth</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Being part of a collaborative, innovative team</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-white border-2 border-red-700">
          <h4 className="text-stone-900 mb-4 italic">Personal Statement</h4>
          <p className="text-stone-700 leading-relaxed italic">
            "As I pursue my degree in computer science, I am constantly reminded that 
            technology is not just about code—it's about creating solutions that matter. 
            I am committed to developing both my technical expertise and my ability to 
            work collaboratively, communicate effectively, and think critically about the 
            broader impact of the systems I help build."
          </p>
        </div>
      </div>
    </section>
  );
}
