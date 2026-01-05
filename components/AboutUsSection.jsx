'use client';

import React, { useState, useEffect, useRef } from 'react';

const AboutUsSection = () => {
  const [experience, setExperience] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [vessels, setVessels] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(setExperience, 8, 1500);
          animateCount(setEmployee, 70, 2000);
          animateCount(setVessels, 665, 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (setter, target, duration) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  return (
    <section ref={sectionRef} className="py-16 px-4">
      <h2 className="text-orange-600 text-3xl font-bold mb-8 text-center tracking-wider">
        ABOUT US
      </h2>

      <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="relative h-[400px]">
          <img 
            src="/images/about-us.png" 
            alt="Maritime Industrial Scene" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Statistics */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-8">
          <div className="flex justify-around items-center max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">
                {experience}+
              </div>
              <div className="text-gray-700 mt-2 italic">Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">
                {employee}+
              </div>
              <div className="text-gray-700 mt-2 italic">Employee</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600">
                {vessels}+
              </div>
              <div className="text-gray-700 mt-2 italic">Complete Vessels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;