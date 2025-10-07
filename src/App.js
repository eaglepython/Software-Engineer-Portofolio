import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Zap, Award, TrendingUp, Users, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const titles = [
    'Full-Stack Software Engineer',
    'Quantitative Developer',
    'AI/ML Engineer',
    'Cloud Architecture Specialist'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const currentTitle = titles[currentTitleIndex];
    const interval = setInterval(() => {
      if (index <= currentTitle.length) {
        setTypedText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  const projects = [
    {
      title: 'Bidias E-Commerce Platform',
      category: 'Full-Stack',
      description: 'Enterprise e-commerce with AI recommendations, secure payments, and microservices architecture',
      tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Stripe', 'AI/ML'],
      metrics: ['99.9% Uptime', '<200ms Response', '10+ Microservices'],
      liveUrl: 'https://bidias-e-com-full-stack-app.netlify.app',
      githubUrl: 'https://github.com/eaglepython/Bidias-E-Com-FullStack-App',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Nexus Weather Platform',
      category: 'Frontend',
      description: 'Advanced weather intelligence with real-time data, forecasts, and air quality monitoring',
      tech: ['React 19', 'Vite', 'OpenWeatherMap', 'Tailwind CSS'],
      metrics: ['Real-time Data', '5-Day Forecast', 'Air Quality'],
      githubUrl: 'https://github.com/eaglepython/React_Nexus',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Healthcare AI Governance',
      category: 'AI/ML',
      description: 'Risk assessment system for AI vendors in regulated healthcare environments',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL'],
      metrics: ['200K+ Patients', '95% Accuracy', '22% Risk Reduction'],
      liveUrl: 'https://eaglepython.github.io/healthcare-llm-governance-toolkit',
      githubUrl: 'https://github.com/eaglepython/healthcare-llm-governance-toolkit',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Multi-LLM Orchestration',
      category: 'AI/ML',
      description: 'Vendor diversity solution preventing algorithmic concentration risk',
      tech: ['Python', 'FastAPI', 'OpenAI', 'Anthropic', 'Redis'],
      metrics: ['10K+ Requests/Day', '99.9% Uptime', '<150ms Failover'],
      liveUrl: 'https://eaglepython.github.io/multi-llm-orchestration-platform/',
      githubUrl: 'https://github.com/eaglepython/multi-llm-orchestration-platform',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Trading Platform',
      category: 'FinTech',
      description: 'Algorithmic Trading Systems • Machine Learning • Full-Stack Financial Applications',
      tech: ['Python', 'TensorFlow', 'OANDA API', 'WebSocket'],
      metrics: ['28.4% Returns', '1.89 Sharpe', '5μs Latency'],
      liveUrl: 'https://bidiascapitalconsulting.netlify.app/',
      githubUrl: 'https://github.com/eaglepython/Finance-Architect-Portofolio',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'AI Ethics Dashboard',
      category: 'AI/ML',
      description: 'Real-time oversight system providing continuous AI accountability',
      tech: ['React', 'TypeScript', 'FastAPI', 'WebSocket', 'D3.js'],
      metrics: ['95% Faster Detection', '20hrs/week Saved', 'Real-time Alerts'],
      liveUrl: 'https://eaglepython.github.io/ai-ethics-monitoring-dashboard/',
      githubUrl: 'https://github.com/eaglepython/ai-ethics-monitoring-dashboard',
      gradient: 'from-red-500 to-rose-500'
    }
  ];

  const skills = [
    { name: 'React/TypeScript', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js/Express', level: 93, color: 'from-green-400 to-emerald-400' },
    { name: 'Python/FastAPI', level: 92, color: 'from-yellow-400 to-orange-400' },
    { name: 'AI/ML (TensorFlow)', level: 90, color: 'from-purple-400 to-pink-400' },
    { name: 'MongoDB/PostgreSQL', level: 88, color: 'from-cyan-400 to-blue-400' },
    { name: 'Docker/Kubernetes', level: 87, color: 'from-indigo-400 to-purple-400' },
    { name: 'AWS/Cloud', level: 85, color: 'from-orange-400 to-red-400' }
  ];

  const stats = [
    { icon: Code, label: 'Projects Built', value: '20+', color: 'text-blue-400' },
    { icon: Zap, label: 'Live Deployments', value: '15+', color: 'text-cyan-400' },
    { icon: Award, label: 'GitHub Stars', value: '250+', color: 'text-purple-400' },
    { icon: TrendingUp, label: 'Trading Returns', value: '28.4%', color: 'text-green-400' }
  ];

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-blue-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/50">
              JB
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Joseph Bidias</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-blue-500/20">
          <div className="px-4 py-4 space-y-3">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-cyan-400 transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Joseph Bidias
            </h1>
            <div className="h-12 flex items-center justify-center">
              <h2 className="text-xl sm:text-3xl text-cyan-400 font-light">
                {typedText}<span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Building scalable, production-grade applications that solve real-world problems through innovative technology and clean architecture
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/eaglepython" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/joseph-bidias-eaglepython" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:rodabeck777@gmail.com"
               className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
                <stat.icon className={`${stat.color} mb-3 group-hover:scale-110 transition-transform`} size={32} />
                <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">
                  Full-Stack Software Engineer with expertise in building enterprise-grade applications, 
                  algorithmic systems, and AI-powered platforms. Specialized in <span className="text-blue-400 font-semibold">MERN stack</span>, 
                  <span className="text-cyan-400 font-semibold"> Python</span>, and <span className="text-purple-400 font-semibold">cloud architecture</span>.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Core Expertise</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Full-Stack Web Development (React, Node.js, Python)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Algorithmic Trading & Financial Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>AI/ML Integration & Deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Cloud Architecture (AWS, Docker, Kubernetes)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education & Certifications</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <div className="font-semibold text-white">MS Financial Engineering</div>
                    <div className="text-sm text-gray-400">WorldQuant University (Expected 2026)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">NPower Full Stack Developer</div>
                    <div className="text-sm text-gray-400">Certified (2025)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">AWS Machine Learning Specialty</div>
                    <div className="text-sm text-gray-400">Certified</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">AI2030 Global Fellowship</div>
                    <div className="text-sm text-gray-400">AI Governance (2025)</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Achievements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Award className="text-yellow-400" size={18} />
                    <span>15+ Production Deployments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="text-green-400" size={18} />
                    <span>28.4% Trading Returns (Verified)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="text-blue-400" size={18} />
                    <span>250+ GitHub Stars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="text-cyan-400" size={18} />
                    <span>99.9% Production Uptime</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 space-y-1">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-cyan-500/50 transition-all">
                <div className="flex justify-between mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                    style={{width: `${skill.level}%`, boxShadow: `0 0 20px rgba(34, 211, 238, 0.5)`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Frontend</h3>
              <p className="text-gray-400 text-sm">React, TypeScript, Tailwind CSS, Material-UI, Redux, Vite</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Backend</h3>
              <p className="text-gray-400 text-sm">Node.js, Express, Python, FastAPI, MongoDB, PostgreSQL, Redis</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">DevOps</h3>
              <p className="text-gray-400 text-sm">Docker, Kubernetes, AWS, CI/CD, GitHub Actions, Nginx</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-12"></div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <p className="text-gray-300 text-center mb-8 text-lg">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:rodabeck777@gmail.com" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-semibold">rodabeck777@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+12148863785" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-semibold">(214) 886-3785</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/joseph-bidias-eaglepython" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="text-white font-semibold">joseph-bidias-eaglepython</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-white font-semibold">Dallas, TX</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="https://portofolioreact-project.netlify.app/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                <Globe size={20} />
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Joseph Bidias. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/eaglepython" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/joseph-bidias-eaglepython" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rodabeck777@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;