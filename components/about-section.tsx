
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, MapPin, Users } from 'lucide-react';
import { personalInfo, education } from '@/lib/data';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-600">
                {personalInfo.aboutDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Career Highlights */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Career Highlights
                </h3>
                <ul className="space-y-3">
                  {personalInfo.careerHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education & Stats */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{edu.location} • {edu.year}</p>
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">ML Models Deployed</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-sm text-gray-600">Industry Domains</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1.7M+</div>
                  <div className="text-sm text-gray-600">Customers Served</div>
                </div>
              </div>

              {/* Open to Opportunities */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Open to Opportunities
                </h4>
                <p className="text-blue-700 text-sm mb-3">
                  Currently seeking senior data science roles in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['New Zealand', 'Australia'].map((location) => (
                    <span
                      key={location}
                      className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
