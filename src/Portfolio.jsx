import React, { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  Send,
  ChevronLeft,
  ChevronRight,
  BrainCircuit,
  Terminal,
  Globe,
  Server,
  Database,
  Sparkles
} from "lucide-react";

const Portfolio = () => {
  const scrollRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const projects = [
   { 
      name: "Autonomous Network Orchestration", 
      desc: "LLM-centric system for networks configuration",
      overview: "Designed an LLM-centric system for cloud-native networks using RAG and closed-loop control on Kubernetes. Achieved 96% accuracy.", 
      tech: ["LLM", "RAG", "Kubernetes"], 
      link: "https://github.com/inasbou", 
      type: "Research Intern",
      color: "from-violet-500 to-fuchsia-500",
      images: [
        "/projects/llm1.png",
        "/projects/llm2.png"
      ]
      
    },
    { 
      name: "AI Community Management", 
      desc: "Hybrid ML + LLM system for community managers",
      overview: "Hybrid ML + LLM architecture for automated management at Algérie Poste, validated in real operational conditions.", 
      tech: ["ML", "LLM", "Python","Flask","Figma", "React"], 
      link: "https://github.com/inasbou", 
      type: "Ai powered System",
      color: "from-emerald-500 to-teal-500",
      images: [
        "/projects/AlgPost1.png",
        "/projects/AlgPost2.png",
        "/projects/AlgPost3.png",
        "/projects/AlgPost4.png",
        "/projects/AlgPost5.png"
      ]
    },
    { 
      name: "University Management System", 
      desc: " Management platform ", 
      overview: "Complete university administration platform with modules for students, courses, Teachers, and admins.", 
      tech: ["MERN", "MongoDB", "Express","React", "Node.js"], 
      link: "https://github.com/inasbou/Systeme-de-gestion-d-une-universit-", 
      type: "Full Stack",
      color: "from-blue-500 to-indigo-500",
      images: [
        "/projects/uni1.png",
        "/projects/uni2.png",
        "/projects/uni3.png",
        "/projects/uni4.png",
        "/projects/uni5.png"
      ]
    },
    { 
      name: "AQAR Real Estate App", 
      desc:"web App for house rentals and sales",
      overview: "Full web application featuring CRUD operations, routing, and a Flask-based backend.", 
      tech: ["Flask", "Python", "SQL","React","HTML","CSS"], 
      link: "https://github.com/inasbou/AQAR-Application-Web-d-annonces-immobili-res", 
      type: "Web App",
      color: "from-orange-500 to-amber-500",
      images: [
        "/projects/aqar1.png",
        "/projects/aqar3.png",
        "/projects/aqar2.png"
      ]
    },
    { 
      name: "AlSafir Web Application", 
      desc:"Algerain tourism web Application  ",
      overview: "Full web application featuring CRUD operations, routing, and a Django-based backend.", 
      tech: ["Django", "Python", "SQL","React","HTML","CSS"], 
      link: "https://github.com/inasbou/AlSafir", 
      type: "Web App",
      color: "from-orange-500 to-amber-500",
      images: [
        "/projects/safir0.png",
        "/projects/safir1.png",
        "/projects/safir5.png",
        "/projects/safir6.png",
        "/projects/safir7.png"
      ]
    },
     {
      name: "Grocery shopping Platform",
      desc: "E-commerce web platform for food products.",
      overview:
        "Frontend interface allowing users to browse food categories, view product details, manage a shopping cart, and place orders through a simple and responsive UI.",
      link: "https://github.com/inasbou/plateforme-pour-l-achat-de-produits-alimentaires.",
      tech: ["HTML", "CSS", "JavaScript",  "MySQL",],
      type: "Web / E-commerce",
      images: [
        "/projects/gro1.png",
        "/projects/gro2.png",
        "/projects/gro3.png",
        "/projects/gro4.png",
        "/projects/gro5.png",
        "/projects/gro6.png"]
    },
    { 
      name: "Custom CNN Classifier", 
      desc: "Image classification using CNNs",
      overview: "Built a CNN from scratch for image classification, improving accuracy to 71% on Cotton Water Stress datasets.", 
      tech: ["PyTorch", "CV", "CNN","Python"], 
      link: "https://github.com/inasbou", 
      type: "Deep Learning",
      color: "from-rose-500 to-pink-500"
    }
  ];

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth"
    });
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
        
            <nav className="fixed top-0 w-fit z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 px-8 py-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center text-white font-black text-xs">IB</div>
                  <span className="text-lg font-black tracking-tighter text-slate-900 uppercase">Inas Bouaiss</span>
              </div>
              <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] mx-72 text-slate-400">
                <a href="#about" className="hover:text-violet-600 transition-colors">Profile</a>
                <a href="#projects" className="hover:text-violet-600 transition-colors">Engineering</a>
                <a href="#experience" className="hover:text-violet-600 transition-colors">Timeline</a>
                <a href="#contact" className="text-violet-600 hover:opacity-70">Hire Me</a>
              </div>
            </nav>
      
            <main className="max-w-7xl mx-auto px-6 pt-40 space-y-40 pb-20">
              
              {/* --- HERO SECTION --- */}
              <section id="about" className="max-w-4xl relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-[10px] font-black uppercase tracking-widest mb-8 border border-violet-100 shadow-sm">
                  <Sparkles size={12} /> Open to Opportunities
                </div>
                
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-10 relative">
                  Inas <br />
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    Bouaiss
                    {/* Enhanced Multi-Path Doodle */}
                    <svg className="absolute -bottom-6 -left-4 -right-8 -z-10 w-[110%] h-16 text-violet-200 opacity-80" viewBox="0 0 300 50" preserveAspectRatio="none">
                      <path d="M10,40 Q60,5 150,35 T290,25" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" className="text-amber-200" />
                      <path d="M15,45 Q65,10 155,40 T295,30" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-violet-300" />
                    </svg>
                  </span>
                </h1>
      
                <p className="text-2xl text-slate-500 leading-relaxed max-w-2xl font-medium italic">
                  Computer science Engineer, <span className="text-slate-900 font-bold not-italic">   Passionate about leveraging cutting-edge technologies to build intelligent and efficient solutions.</span>
                </p>
                
                <div className="flex gap-4 mt-12">
                  {[
                    { icon: <Github size={20}/>, link: "https://github.com/inasbou" },
                    { icon: <Linkedin size={20}/>, link: "https://linkedin.com/in/inas-bouaiss" },
                    { icon: <Globe size={20}/>, link: "https://huggingface.co/inasbou" }
                  ].map((social, i) => (
                    <a key={i} href={social.link} target="_blank" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-violet-600 hover:text-violet-600 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </section>
      
              {/* --- CATEGORIZED SKILLS --- */}
              <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: "AI & Research", icon: <BrainCircuit className="text-violet-500"/>, bg: "bg-violet-50", border: "border-violet-100", skills: ["ML", "LLMs", "RAG", "Fine-tuning", "PyTorch", "NLP"] },
                      { title: "Web Developement", icon: <Terminal className="text-blue-500"/>, bg: "bg-blue-50", border: "border-blue-100", skills: ["React", "TypeScript", "Node.js", "FastAPI", "MERN","NextJs","Django"] },
                      { title: "Cloud & Ops", icon: <Server className="text-emerald-500"/>, bg: "bg-emerald-50", border: "border-emerald-100", skills: ["Docker", "Kubernetes", "CI/CD", "Nginx", "Git","Prometeus","Gitlab CL"] },
                      { title: "Data Systems", icon: <Database className="text-amber-500"/>, bg: "bg-amber-50", border: "border-amber-100", skills: ["PostgreSQL", "MongoDB", "Neo4j", "InfluxDB", "Redis","SQL"] },
                  ].map((cat, i) => (
                      <div key={i} className={`${cat.bg} ${cat.border} border p-8 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow`}>
                          <div className="flex items-center gap-3 mb-6 font-black uppercase text-[10px] tracking-widest text-slate-600">
                              {cat.icon} {cat.title}
                          </div>
                          <div className="flex flex-wrap gap-2">
                              {cat.skills.map(s => (
                                  <span key={s} className="bg-white/80 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm border border-white">
                                      {s}
                                  </span>
                              ))}
                          </div>
                      </div>
                  ))}
              </section>
      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-4xl font-black mb-16 text-center">
          Selected Projects
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-6"
          >
            {projects.map((p) => (
              <div
                key={p.name}
                className="min-w-[320px] max-w-[320px] bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="text-xs uppercase tracking-widest font-black text-indigo-600 mb-2">
                  {p.type}
                </div>

                <h3 className="text-2xl font-black mb-4">{p.name}</h3>
                <p className="text-slate-600 mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase font-black bg-slate-100 px-3 py-1 rounded-full"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setActiveProject(p);
                      setImageIndex(0);
                    }}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-full font-black text-xs uppercase"
                  >
                    Show Project
                  </button>

                  <a
                    href={p.link}
                    target="_blank"
                    className="flex items-center justify-center px-4 rounded-full border"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur px-6">
          <div className="bg-white max-w-3xl w-full rounded-[2rem] p-8 relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 text-slate-400"
            >
              ✕
            </button>

            <h3 className="text-3xl font-black mb-4">
              {activeProject.name}
            </h3>

            {/* IMAGE CAROUSEL */}
            {activeProject.images && (
              <div className="relative mb-8">
                <img
                  src={activeProject.images[imageIndex]}
                  alt="project preview"
                  className="w-full h-72 object-cover rounded-xl border"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            <p className="text-slate-600 mb-6">
              {activeProject.overview}
            </p>

            <div className="flex gap-4">
              <a
                href={activeProject.link}
                target="_blank"
                className="flex-1 text-center bg-indigo-600 text-white py-4 rounded-full font-black uppercase text-xs"
              >
                View Repository
              </a>
              <button
                onClick={() => setActiveProject(null)}
                className="flex-1 border py-4 rounded-full font-black uppercase text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

       {/* --- PROFESSIONAL TIMELINE --- */}
              <section id="experience" className="grid lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                  <h2 className="text-2xl font-black uppercase italic tracking-widest flex items-center gap-4 text-slate-900">
                      <Briefcase className="text-violet-600" /> Career Path
                  </h2>
                  <div className="space-y-16">
                  <div className="relative pl-12 border-l-4 border-violet-600/20">
                      <div className="absolute w-6 h-6 bg-violet-600 rounded-full -left-[14px] top-1 border-4 border-[#fafafa]" />
                      <h4 className="font-black text-xl leading-none">Computer science Engineer</h4>
                      <p className="text-violet-600 text-[10px] font-black uppercase mt-2 mb-4 tracking-widest">Algiers • 2025 - Now</p>
                      <p className="text-slate-600 text-sm leading-relaxed bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        Engaged in full-stack development, cloud deployment, and AI integration to deliver scalable solutions.
                      </p>
                    </div>
                    <div className="relative pl-12 border-l-4 border-violet-300/20">
                      <div className="absolute w-6 h-6 bg-violet-300 rounded-full -left-[14px] top-1 border-4 border-[#fafafa]" />
                      <h4 className="font-black text-xl leading-none">Research Intern: LLM Orchestration</h4>
                      <p className="text-violet-400 text-[10px] font-black uppercase mt-2 mb-4 tracking-widest">L3i Laboratory, France • 2024 - 2025</p>
                      <p className="text-slate-600 text-sm leading-relaxed bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        Implementation of LLM-centric orchestration for cloud-native networks using Docker, Kubernetes, and RAG. Focused on translating network intent into operational configs.
                      </p>
                    </div>
                    <div className="relative pl-12 border-l-4 border-slate-200">
                      <div className="absolute w-6 h-6 bg-slate-200 rounded-full -left-[14px] top-1 border-4 border-[#fafafa]" />
                      <h4 className="font-black text-xl leading-none">Web Development Intern</h4>
                      <p className="text-slate-400 text-[10px] font-black uppercase mt-2 mb-4 tracking-widest">Spinet Algiers • 2023</p>
                      <p className="text-slate-500 text-sm">Building modular UI components and integrating real-time API services.</p>
                    </div>
                  </div>
                </div>
      
                <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full"></div>
                  <h2 className="text-2xl font-black uppercase italic mb-12 flex items-center gap-4 tracking-widest">
                      <Award className="text-violet-400" /> Certifications
                  </h2>
                  <div className="space-y-8">
                    {[
                        { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2023" },
                        { title: "Data Analyst Specialization", issuer: "DataCamp", year: "2024" },
                        { title: "Cloud Computing", issuer: "Huawei", year: "2026" },
                    ].map((cert, i) => (
                      <div key={i} className="group cursor-default">
                        <div className="flex justify-between items-center border-b border-white/10 pb-6 group-hover:border-violet-400/50 transition-colors">
                          <div>
                            <div className="font-black text-lg group-hover:text-violet-300 transition-colors">{cert.title}</div>
                            <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-black">{cert.issuer}</div>
                          </div>
                          <div className="text-xs font-mono text-violet-400">{cert.year}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
      
              {/* --- CONTACT SECTION --- */}
              <section id="contact" className="text-center py-32 bg-gradient-to-b from-white to-violet-50 border border-violet-100 rounded-[5rem] shadow-xl shadow-violet-100/50 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent"></div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                  Let's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Collaborate.</span>
                </h2>
                <p className="text-slate-500 mb-12 font-bold uppercase text-[10px] tracking-[0.4em]">Available for Engineering and AI Roles</p>
                <a href="mailto:Ki_bouaiss@esi.dz" className="group inline-flex items-center gap-4 bg-slate-900 text-white px-16 py-7 rounded-full font-black text-xl hover:bg-violet-600 transition-all shadow-2xl hover:scale-105 active:scale-95">
                  Send Message <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
              </section>
      
            </main>
      
            <footer className="px-10 py-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 border-t border-slate-100 bg-white">
              <span>Inas Bouaiss © 2026 — Algiers</span>
              <div className="flex gap-10 mt-8 md:mt-0">
                <a href="https://github.com/inasbou" className="hover:text-violet-600 transition-colors">Github</a>
                <a href="https://linkedin.com/in/inas-bouaiss" className="hover:text-violet-600 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-violet-600 transition-colors">HuggingFace</a>
              </div>
            </footer>
    </div>
  );
};

export default Portfolio;
