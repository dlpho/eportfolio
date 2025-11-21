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
            Results from my previous personal assessments, including the Adolescent
            Personality Questionnaire (APQ) and Profiles Career Keys (PCK),
            which outline my personality traits, work values, abilities, interests
            and career alignment.
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
              {/* Career Type */}
              <div className="p-6 bg-red-50 border border-red-200">
                <h4 className="text-stone-900 mb-3 font-mono">Career Type</h4>
                <p className="text-red-700 mb-2">Conventional–Investigative</p>
                <p className="text-stone-600 text-sm">
                  This combination shows strong preference for structured work,
                  detailed tasks, and problem solving. It aligns well with careers
                  involving systems, analysis, databases and technical work.
                </p>
              </div>

              {/* Best Fit Careers */}
              <div className="p-6 bg-stone-100 border border-stone-300">
                <h4 className="text-stone-900 mb-3 font-mono">Best Fit Careers</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Clinical Data Manager
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Computer Programmer
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Database Architect or Data Warehousing Specialist
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Computer Network Support Specialist
                  </li>
                  <li className="flex items-center gap-2 text-stone-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-red-700 rounded-full"></span>
                    Web Administrator
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="p-6 bg-stone-50 border-l-4 border-red-700">
              <h4 className="text-stone-900 mb-3 font-mono flex items-center gap-2">
                <TrendingUp size={20} className="text-red-700" />
                Key Strengths Identified
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-red-700 mb-2 text-sm">Abilities</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Verbal reasoning (99th percentile)
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Spatial ability (98th percentile)
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Arithmetic reasoning (95th percentile)
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Form perception and clerical accuracy (90 to 93 percentile)
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-red-700 mb-2 text-sm">Work Values</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Strong drive for achievement
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Preference for supportive, structured environments
                    </li>
                    <li className="flex items-start gap-2 text-stone-600 text-sm">
                      <span className="text-red-700 mt-1">•</span>
                      Recognition and career progression opportunities
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
            <h3 className="text-stone-900 italic">Reflection on Assessment Results</h3>
          </div>

          <div className="bg-white border border-stone-300 p-8">
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p>
                The APQ and PCK assessments show a profile that blends technical
                strengths, structured work preferences, and strong analytical
                thinking. These results align closely with the direction I am
                pursuing in the field of computing and information systems.
              </p>

              {/* Alignment */}
              <div className="p-6 bg-red-50 border-l-4 border-red-700">
                <h4 className="text-stone-900 mb-3 italic">How This Aligns with My Goals</h4>
                <p className="text-stone-700 mb-4">
                 My strong profile in Conventional and Investigative interests 
                 matches roles involving systems, data, and problem solving. 
                 The Career Ability Profiler results confirm that I excel in 
                 structured tasks, verbal analysis and spatial reasoning, which 
                 are essential in fields like software development, data architecture, 
                 analytics, and system administration. These strengths also align with 
                 data science work because it requires analytical reasoning, pattern recognition,
                  and consistent attention to detail.
                </p>
                <p className="text-stone-700">
                  These findings support my long-term goal to work in software, data science, 
                  and data-focused environments where I can apply methodical thinking and a 
                  structured approach to complex technical problems.
                </p>
              </div>

              {/* Areas for Development */}
              <div className="p-6 bg-stone-50 border-l-4 border-stone-700">
                <h4 className="text-stone-900 mb-3 italic">Areas for Development</h4>
                <p className="text-stone-700 mb-4">
                  The APQ shows that I am introverted and prefer less visible roles.
                  This means I need to continue improving my communication,
                  confidence and collaborative presence to better support my
                  professional development.
                </p>
                <p className="text-stone-700">
                  I am working on developing assertiveness and social engagement
                  by joining student organizations, seeking mentorship and
                  practicing active participation in group work.
                </p>
              </div>

              {/* Key Takeaway */}
              <div className="p-6 bg-stone-100 border border-stone-400">
                <p className="text-stone-700 italic">
                  <strong className="text-red-700">Key Takeaway:</strong> My APQ and PCK
                  results highlight a strong fit for analytical, structured,
                  and technical career paths. These assessments give me a clear
                  direction for growth and reinforce my commitment to careers in
                  computing, data and technical problem solving.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
