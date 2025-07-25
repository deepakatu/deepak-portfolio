
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Wrench } from 'lucide-react';
import { skills } from '@/lib/data';

const skillIcons = {
  'Programming Languages': Code,
  'Machine Learning & AI': Database,
  'Cloud & Infrastructure': Cloud,
  'Data Tools & Frameworks': Wrench,
};

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const animated: Record<string, number> = {};
        Object.entries(skills).forEach(([category, skillsList]) => {
          skillsList.forEach((skill) => {
            animated[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(animated);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across the full data science stack, from programming 
              and machine learning to cloud infrastructure and deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillsList], categoryIndex) => {
              const IconComponent = skillIcons[category as keyof typeof skillIcons];
              
              return (
                <div
                  key={category}
                  className={`bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                    inView 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
                  </div>

                  <div className="space-y-4">
                    {skillsList.map((skill, skillIndex) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">
                            {animatedSkills[skill.name] || 0}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${animatedSkills[skill.name] || 0}%`,
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Certifications/Specializations */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Key Specializations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'MLOps & Model Deployment',
                'Utilities Domain Analytics', 
                'Generative AI & LLMs',
                'Computer Vision',
                'Time Series Forecasting',
                'Real-time Systems',
                'Cloud Architecture',
                'Data Engineering'
              ].map((specialization, index) => (
                <div
                  key={specialization}
                  className={`px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-medium transform transition-all duration-500 hover:scale-105 hover:bg-blue-200 ${
                    inView 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + (index * 100)}ms` }}
                >
                  {specialization}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
