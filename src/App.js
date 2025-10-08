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