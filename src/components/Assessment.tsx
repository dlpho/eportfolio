import { ClipboardList, TrendingUp, Star, Layers } from "lucide-react";

export function Assessment() {
  return (
    <section id="assessment" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="text-red-700" size={28} />
            <h2 className="text-stone-900 italic">APQ & PCK Assessment Results</h2>
          </div>
          <p className="text-stone-600 mt-6 max-w-3xl">
            Results from my SAS2000 assessments, including the Academic Personality 
            Questionnaire (APQ) and Profile Career Keys (PCK), which help identify my 
            strengths, skills, and career alignment.
          </p>
        </div>

        {/* PCK Results */}
        <div className="mb-16">
          <div className="bg-white border-2 border-stone-900 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-700 border-2 border-stone-900 flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-stone-900">Profile Career Keys (PCK) Results</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-red-50 border border-red-200">
                <h4 className="text-stone-900 mb-3 font-mono">Career Type</h4>
                <p className="text-red-700 mb-2">[Your Career Type - e.g., Investigative/Realistic]</p>
                <p className="text-stone-600 text-sm">
                  This career type aligns with my analytical nature and interest in 
                  problem-solving through technology and hands-on work.
                </p>
              </div>

              <div className="p-6 bg-stone-100 border border-stone-300">
                <h4 className="text-stone-900 mb-3 font-mono">Best Fit Careers</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Software Developer/Engineer
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Data Analyst/Scientist
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Systems Analyst
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Web Developer
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-stone-50 border-l-4 border-red-700">
              <h4 className="text-stone-900 mb-3 font-mono flex items-center gap-2">
                <TrendingUp size={20} className="text-red-700" />
                Key Strengths Identified
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-red-700 mb-2 text-sm">Technical Skills</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Problem-solving and analytical thinking
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Programming and software development
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Logical and systematic approach
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-700 mb-2 text-sm">Soft Skills</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Attention to detail
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Independent learning ability
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Persistence in solving complex problems
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-red-700" size={24} />
            <h3 className="text-stone-900 italic">Reflection on PCK Results</h3>
          </div>

          <div className="bg-white border border-stone-300 p-8">
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                The Profile Career Keys assessment has provided valuable insights into my 
                career alignment and natural aptitudes. The results confirm that my choice 
                to pursue computer science is well-suited to my personality type and strengths.
              </p>
              
              <div className="p-6 bg-red-50 border-l-4 border-red-700">
                <h4 className="text-stone-900 mb-3 italic">How This Aligns with My Goals</h4>
                <p className="text-stone-700 mb-4">
                  The assessment identified that I excel in roles requiring analytical thinking, 
                  problem-solving, and technical expertise—all core competencies in software 
                  development. This validation reinforces my commitment to pursuing a career 
                  in this field.
                </p>
                <p className="text-stone-700">
                  Understanding my strengths in [specific strength] and [specific strength] 
                  has helped me focus my learning on areas where I can make the most impact, 
                  such as [specific area] and [specific area].
                </p>
              </div>

              <div className="p-6 bg-stone-50 border-l-4 border-stone-700">
                <h4 className="text-stone-900 mb-3 italic">Areas for Development</h4>
                <p className="text-stone-700 mb-4">
                  While the assessment highlighted my technical strengths, it also revealed 
                  areas where I can grow, particularly in [area to develop]. I am actively 
                  working on these skills through [specific actions you're taking].
                </p>
                <p className="text-stone-700">
                  I recognize that becoming a well-rounded professional requires both 
                  technical excellence and strong interpersonal skills. I am committed to 
                  developing my communication, teamwork, and leadership abilities alongside 
                  my technical expertise.
                </p>
              </div>

              <div className="p-6 bg-stone-100 border border-stone-400">
                <p className="text-stone-700 italic">
                  <strong className="text-red-700">Key Takeaway:</strong> The PCK assessment 
                  has given me confidence that I am on the right career path while also 
                  highlighting specific areas for growth. This self-awareness will guide my 
                  professional development as I work toward becoming a skilled and adaptable 
                  computer science professional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
