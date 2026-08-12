import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from '../assets/about/profile.jpg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center pt-28 pb-16 md:pt-32 md:pb-24">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Subtle Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ff2a2a_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Hero Text & Information (7 Columns) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <div 
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff4d4d] text-xs md:text-sm font-bold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,42,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping"></span>
            🏆 1st Place Winner — AQVH 2025
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6"
          >
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#ff2a2a]">
              Jagadeesh Sappa
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-base md:text-xl font-medium mb-8 max-w-2xl leading-relaxed"
          >
            Electronics &amp; Communication Engineer &amp; Quantum Computing Developer. 
            I build quantum state visualizers, power electronics, and high-performance full-stack applications.
          </p>

          {/* CTA Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* View Projects */}
            <a 
              href="#services"
              aria-label="View Jagadeesh Sappa's featured projects"
              className="px-6 py-3 text-sm md:text-base rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.4)] transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            
            {/* Contact Me */}
            <a 
              href="#contact"
              aria-label="Contact Jagadeesh Sappa"
              className="px-6 py-3 text-sm md:text-base rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>

            {/* Download Resume */}
            <a 
              href="/resume.pdf" 
              download="Jagadeesh_Sappa_Resume.pdf" 
              aria-label="Download Jagadeesh Sappa's official resume PDF"
              className="px-6 py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Resume
            </a>
          </div>

          {/* Quick Metrics */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10 w-full max-w-lg"
          >
            <div>
              <p className="text-2xl md:text-3xl font-black text-white">1st Place</p>
              <p className="text-xs text-gray-400 font-medium">Amaravathi Quantum Valley Hackathon 2025</p>
            </div>
          </div>

        </div>

        {/* Right Side: Profile Showcase Card (5 Columns) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glassmorphic Glowing Outer Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            
            {/* Glowing Accent Border Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff2a2a] via-red-500 to-blue-600 rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            {/* Profile Card */}
            <div className="relative bg-[#141414] border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Profile Image */}
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-900 relative">
                <img 
                  src={profileImage} 
                  alt="Jagadeesh Sappa — Electronics & Communication Engineer and Quantum Developer" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Gradient Shadow Overlay at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent"></div>
              </div>

              {/* Floating Badge 1: Quantum Developer */}
              <div className="absolute top-8 left-8 bg-black/60 border border-white/20 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-white text-xs font-bold">Bloch Verse Creator</span>
              </div>

              {/* Floating Badge 2: ECE Engineer */}
              <div className="absolute bottom-16 right-8 bg-[#ff2a2a]/80 border border-[#ff2a2a] backdrop-blur-md rounded-xl px-3.5 py-1.5 shadow-lg">
                <span className="text-white text-xs font-bold">ECE &amp; VLSI Design</span>
              </div>

              {/* Bottom Card Footer info */}
              <div className="pt-4 pb-1 text-center">
                <h3 className="text-white font-extrabold text-lg">Jagadeesh Sappa</h3>
                <p className="text-gray-400 text-xs font-medium tracking-wide">Quantum Developer &amp; ECE Engineer</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Smooth Scroll Indicator */}
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to About Section" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">Scroll Down</span>
          <svg className="w-5 h-5 animate-bounce text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
