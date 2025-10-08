import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Zap, Award, TrendingUp, Users, Globe, ChevronDown, Menu, X, Star, Calendar, Clock, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Multi-Agent Quantum Trading System',
      subtitle: 'Algorithmic Trading • FinTech',
      description: 'Real-time algorithmic trading platform with advanced risk management, probabilistic neural networks, and live execution through OANDA API. Achieved 28.4% annual return with 1.89 Sharpe ratio.',
      tech: ['Python', 'TensorFlow', 'OANDA API', 'Neural Networks', 'Real-time Processing'],
      metrics: ['28.4% Annual Return', '94.2% Prediction Accuracy', '5μs Execution Latency', '1.89 Sharpe Ratio'],
      liveUrl: 'https://bidiascapitalconsulting.netlify.app/',
      githubUrl: 'https://github.com/eaglepython/Finance-Architect-Portofolio',
      gradient: 'from-orange-400 to-yellow-500',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Bidias E-Commerce Platform',
      subtitle: 'Full-Stack • Enterprise',
      description: 'Complete MERN stack e-commerce platform with AI-powered recommendations, secure payment processing, and microservices architecture. NPower capstone project with 150+ lines of code.',
      tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'Stripe'],
      metrics: ['99%+ Test Coverage', 'Enterprise Grade', 'AI Integration', 'Real-time Processing'],
      liveUrl: 'https://bidias-e-com-full-stack-app.netlify.app',
      githubUrl: 'https://github.com/eaglepython/Bidias-E-Com-FullStack-App',
      gradient: 'from-red-400 to-pink-500',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'Nexus Weather Intelligence',
      subtitle: 'React • API Integration',
      description: 'Advanced weather platform with dynamic theming, geolocation UI, and comprehensive meteorological data. Features real-time updates, 5-day forecasts, and air quality monitoring.',
      tech: ['React 19', 'Vite', 'OpenWeatherMap API', 'CSS3', 'JavaScript ES6'],
      metrics: ['Real-time Data', 'API Integration', 'Responsive Design', 'Modern UI'],
      githubUrl: 'https://github.com/eaglepython/React_Nexus',
      gradient: 'from-blue-400 to-cyan-500',
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Interactive JavaScript Portfolio',
      subtitle: 'Frontend • DOM Manipulation',
      description: 'Futuristic portfolio with matrix rain animation, glitch effects, and comprehensive keyboard navigation. Demonstrates advanced vanilla JavaScript techniques.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'DOM API', 'Canvas', 'Animations'],
      metrics: ['Matrix Effects', 'Keyboard Navigation', 'Responsive Design', 'Modern UI'],
      githubUrl: 'https://github.com/eaglepython/Interactive-Portfolio',
      gradient: 'from-purple-400 to-indigo-500',
      icon: '💻'
    },
    {
      id: 5,
      title: 'BookVault Library System',
      subtitle: 'DOM Objects • API Integration',
      description: 'Sophisticated digital library with infinite carousel, external API integration, and advanced search. Features reading list management and responsive design.',
      tech: ['JavaScript', 'DOM API', 'External APIs', 'CSS3', 'Responsive Design'],
      metrics: ['Infinite Carousel', 'API Integration', 'Advanced Search', 'User Management'],
      githubUrl: 'https://github.com/eaglepython/BookVault-Library',
      gradient: 'from-green-400 to-emerald-500',
      icon: '📚'
    },
    {
      id: 6,
      title: 'Rx360 Healthcare Platform',
      subtitle: 'HealthTech • Data Deck',
      description: 'Complete medication management system with smart dispensing, health tracking, and comprehensive monitoring. Professional investment presentation.',
      tech: ['React', 'Healthcare APIs', 'Data Visualization', 'TypeScript', 'Charts'],
      metrics: ['Health Tracking', 'Smart Dispensing', 'Data Analytics', 'Professional UI'],
      gradient: 'from-rose-400 to-pink-500',
      icon: '🏥'
    }
  ];

  const collaborationAreas = [
    { title: 'Algorithmic Trading Systems', icon: '📈' },
    { title: 'E-Commerce Platforms', icon: '🛍️' },
    { title: 'AI/ML Integration', icon: '🤖' },
    { title: 'Full-Stack Applications', icon: '💻' },
    { title: 'Performance Optimization', icon: '⚡' },
    { title: 'Security Implementation', icon: '🔒' }
  ];

  const technologies = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'TensorFlow', color: 'text-orange-400' },
    { name: 'TypeScript', color: 'text-blue-300' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'Docker', color: 'text-blue-500' },
    { name: 'AWS', color: 'text-orange-500' }
  ];

  const NavBar = () => (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="text-cyan-400 font-bold text-xl tracking-wider">
              the 7th sense
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 border border-transparent hover:border-cyan-400/30 px-3 py-1 rounded"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-cyan-400/20">
          <div className="px-6 py-4 space-y-3">
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
    <div className="bg-gray-950 text-white min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Joseph Bidias
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Quantitative Researcher & Software Engineer
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bridging cutting-edge software engineering and quantitative finance through innovative AI solutions. 
            Specializing in algorithmic trading systems with proven <span className="text-cyan-400 font-semibold">28.4% annual returns</span>, enterprise-grade 
            applications, and machine learning integration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30">
              🎓 NPower Graduate
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
              📊 Live Trading Systems
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
              🤖 AI/ML Specialist
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
              💼 Full-Stack Expert
            </span>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A comprehensive showcase of full-stack applications, algorithmic trading systems, and 
              innovative AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{project.icon}</div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Key Metrics:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                          <span className="text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trading Portfolio Card */}
          <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/30 p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <TrendingUp className="text-yellow-400" size={32} />
              <h3 className="text-2xl font-bold text-yellow-400">Trading Portfolio</h3>
            </div>
            <p className="text-gray-300 mb-4">Live Performance Metrics</p>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-yellow-400">28.4%</div>
                <div className="text-sm text-gray-400">Annual Return</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">1.89</div>
                <div className="text-sm text-gray-400">Sharpe Ratio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">94.2%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">5μs</div>
                <div className="text-sm text-gray-400">Latency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Available for Collaboration</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {collaborationAreas.map((area, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-cyan-400/50 transition-all">
                <div className="text-2xl mb-2">{area.icon}</div>
                <div className="text-gray-300 font-medium">{area.title}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 mb-8">
            Open to <span className="text-cyan-400">full-time opportunities</span>, <span className="text-blue-400">consulting projects</span>, and <span className="text-purple-400">collaborative ventures</span> in fintech and software engineering.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-cyan-400 font-bold text-xl mb-4">the 7th sense</div>
              <p className="text-gray-400 text-sm">
                Bridging quantitative finance and software engineering through innovative AI solutions. 
                Specializing in algorithmic trading, full-stack development, and machine learning applications.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Featured Projects</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">→ Quantum Trading System</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">→ E-Commerce Platform</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">→ Weather Intelligence</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">→ BookVault Library</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className={`text-sm ${tech.color}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Joseph Bidias. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
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