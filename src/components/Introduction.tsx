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
                  I am a third year Software Technology student who enjoys working with ideas,
                  structured systems, and detailed problem solving. I gravitate toward tasks 
                  that involve analysis, accuracy, and clear processes. This has shaped the 
                  way I approach both academics and real-world work, especially in areas 
                  like data-driven problem solving and technical design.

                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  Outside of academics, I enjoy reading books, drawing digitally, playing online games, and playing musical instruments, which help me 
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
                   My immediate goal is to gain industry experience through internships in
                  software engineering, data science, or technical research. I want to work 
                  with projects that require analytical depth, structured thinking, and the 
                  ability to design reliable, efficient systems.

                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                   Long-term, I plan to build a career in software development and data science oriented fields 
                  where I can combine technical skills, critical reasoning, and thoughtful 
                  decision-making. I aim to maintain a sustainable work-life balance through 
                  intentional planning, continuous learning, and active personal development.

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
                <p className="text-stone-700">
                  <strong>Technical Excellence:</strong> Delivering accurate, organized, and reliable work through careful analysis and attention to detail
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">
                  <strong>Critical Thinking:</strong> Evaluating information objectively and making decisions based on evidence and clear reasoning
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">
                  <strong>Innovation:</strong> Applying creative methods and technology to design solutions that meet emerging needs
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">
                  <strong>Collaboration:</strong> Working effectively with peers while staying open to different viewpoints and shared learning
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">
                  <strong>Integrity:</strong> Acting with honesty, accountability, and respect across academic and professional settings
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">
                  <strong>Cultural Awareness:</strong> Engaging with people from diverse backgrounds and valuing traditions and perspectives that enrich my personal and professional identity
                </p>
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
                <p className="text-stone-700">Solving complex problems through structured analysis and clear reasoning</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Working on data-driven tasks that require accuracy, detail, and focus</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Developing solutions that are reliable, practical, and meaningful</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Gaining new skills through continuous learning and hands-on experience</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Working in environments that are organized, supportive, and growth-oriented</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></span>
                <p className="text-stone-700">Using creative thinking and technology to design solutions for future needs</p>
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
