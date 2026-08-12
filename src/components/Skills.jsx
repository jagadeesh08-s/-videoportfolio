import React from 'react';

const skillCategories = [
  {
    icon: "⚛",
    title: "Quantum Computing",
    color: "from-purple-500 to-indigo-600",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    skills: [
      "Qiskit", "OpenQASM 2.0", "IBM Quantum", "Quantum Circuit Simulation",
      "Statevector Computation", "Bloch Sphere Visualization",
      "Hybrid Quantum-Classical Integration", "Multi-Qubit State Analysis",
      "Gate-Level Circuit Design"
    ]
  },
  {
    icon: "🔧",
    title: "ECE / VLSI",
    color: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/20",
    skills: [
      "FPGA Architecture", "VLSI Design", "MOSFET/FinFET", "Digital Logic",
      "Embedded Architectures", "Power Electronics", "Signal Processing",
      "Analog Circuits", "Assembly (8086)"
    ]
  },
  {
    icon: "💻",
    title: "Software",
    color: "from-red-500 to-orange-600",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/20",
    skills: [
      "Python (NumPy, Matplotlib)", "JavaScript", "Node.js", "REST API",
      "HTML5", "CSS3", "React", "Basic C", "Git/GitHub"
    ]
  }
];

const achievements = [
  {
    icon: "🏆",
    title: "1st Place — AQVH 2025",
    subtitle: "National Level · 120+ Teams",
    description: "Amaravathi Quantum Valley Hackathon — Built Bloch Verse quantum visualizer under competitive time constraints."
  },
  {
    icon: "🏆",
    title: "1st Prize — Web Saga",
    subtitle: "GMR Institute of Technology",
    description: "Full-stack web application development hackathon."
  },
  {
    icon: "📄",
    title: "SSRN Research Preprint",
    subtitle: "SSRN eLibrary · Abstract 7200684",
    description: "Quantum State Visualizer: An Interactive Tool for Multi-Qubit System Analysis Using Partial Trace and Bloch Sphere Representation."
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] py-24 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm backdrop-blur-sm">
            Skills & Achievements
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4 tracking-tight">
            Technical <span className="text-[#ff2a2a]">Arsenal</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            Bridging quantum computing, electronics engineering, and modern software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`relative group rounded-2xl p-[1px] bg-gradient-to-br ${category.color} hover:shadow-xl ${category.glowColor} transition-all duration-500`}
            >
              <div className="bg-[#111111] rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-black text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-white/70 border ${category.borderColor} hover:bg-white/10 hover:text-white transition-all duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div data-aos="fade-up" className="mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-8">
            Achievements <span className="text-[#ff2a2a]">&</span> Recognition
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-[#ff2a2a]/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-500 group"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h4 className="text-lg font-black text-white mb-1 group-hover:text-[#ff2a2a] transition-colors">{item.title}</h4>
              <p className="text-xs text-white/40 font-bold mb-3 uppercase tracking-wider">{item.subtitle}</p>
              <p className="text-sm text-white/60 leading-relaxed font-medium">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div data-aos="fade-up" className="mt-20">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-8">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-black text-white">B.Tech — ECE</h4>
                <span className="text-xs text-white/40 font-bold">2024 – 2027</span>
              </div>
              <p className="text-sm text-[#ff2a2a] font-semibold mb-2">BVC College of Engineering, Rajahmundry</p>
              <p className="text-xs text-white/50">VLSI · Quantum Systems · Embedded Architectures</p>
            </div>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-black text-white">Diploma — ECE</h4>
                <span className="text-xs text-white/40 font-bold">2021 – 2023 · 88%</span>
              </div>
              <p className="text-sm text-[#ff2a2a] font-semibold mb-2">Sir C.R. Reddy Polytechnic College, Eluru</p>
              <p className="text-xs text-white/50">Circuit Theory · Analog & Digital Systems</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
