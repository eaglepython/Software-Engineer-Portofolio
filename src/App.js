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
      liveUrl: 'https://eaglepython.github.io/Nexus/',
      githubUrl: 'https://github.com/eaglepython/Nexus',
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
      liveUrl: 'https://javascript-dom-portfolio.netlify.app/',
      githubUrl: 'https://github.com/eaglepython/JavaScript-DOM-Portfolio',
      gradient: 'from-purple-400 to-indigo-500',
      icon: '💻'
    },
    {
      id: 5,
      title: 'BookVault Library System',
      subtitle: 'Inventory Management • DOM Integration',
      description: 'Sophisticated digital library with infinite carousel, external API integration, and advanced search. Features reading list management and responsive design.',
      tech: ['JavaScript', 'DOM API', 'External APIs', 'CSS3', 'Responsive Design'],
      metrics: ['Infinite Carousel', 'API Integration', 'Advanced Search', 'User Management'],
      liveUrl: 'https://eaglepython.github.io/DOM-Project/',
      githubUrl: 'https://github.com/eaglepython/DOM-Project',
      gradient: 'from-green-400 to-emerald-500',
      icon: '📚'
    },
    {
      id: 6,
      title: 'Healthcare LLM Governance Toolkit',
      subtitle: 'AI Risk Assessment • Healthcare',
      description: 'AI risk assessment system for healthcare environments with automated bias detection, HIPAA compliance monitoring, and multi-vendor comparison. Serves 200,000+ patients with 95% bias detection accuracy.',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'React', 'TypeScript', 'PostgreSQL'],
      metrics: ['200K+ Patients', '95% Bias Detection', 'HIPAA Compliant', 'Multi-vendor Support'],
      liveUrl: 'https://eaglepython.github.io/healthcare-llm-governance-toolkit/',
      githubUrl: 'https://github.com/eaglepython/healthcare-llm-governance-toolkit',
      gradient: 'from-emerald-400 to-teal-500',
      icon: '🏥'
    },
    {
      id: 7,
      title: 'Multi-LLM Orchestration Platform',
      subtitle: 'AI Orchestration • Production Scale',
      description: 'Production system handling 10,000+ requests/day with intelligent load balancer across OpenAI, Anthropic, and Cohere. Features automatic failover, cost optimization, and real-time monitoring.',
      tech: ['Node.js', 'Express.js', 'Redis', 'OpenAI API', 'Anthropic', 'React'],
      metrics: ['10K+ Requests/Day', '99.9% Uptime', '<150ms Failover', '15% Cost Savings'],
      liveUrl: 'https://eaglepython.github.io/multi-llm-orchestration-platform/',
      githubUrl: 'https://github.com/eaglepython/multi-llm-orchestration-platform',
      gradient: 'from-violet-400 to-purple-500',
      icon: '🔀'
    },
    {
      id: 8,
      title: 'AI Ethics Dashboard',
      subtitle: 'Ethics Monitoring • Compliance',
      description: 'Real-time AI ethics monitoring platform with automated bias detection, fairness metrics tracking, and compliance reporting. Integrates with major ML platforms for comprehensive oversight.',
      tech: ['Python', 'Streamlit', 'scikit-learn', 'Plotly', 'MLflow', 'Docker'],
      metrics: ['Real-time Monitoring', 'Multi-platform Support', 'Automated Reporting', 'Bias Detection'],
      liveUrl: 'https://eaglepython.github.io/ai-ethics-monitoring-dashboard/',
      githubUrl: 'https://github.com/eaglepython/ai-ethics-dashboard',
      gradient: 'from-pink-400 to-rose-500',
      icon: '⚖️'
    }
  ];

  const projectCategories = [
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
            <a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium"
            >
              📄 Resume
            </a>
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
            <a
              href="./resume.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 font-medium mt-4"
            >
              📄 Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)`
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              JOSEPH BIDIAS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Quantitative Researcher & Software Engineer specializing in{' '}
              <span className="text-cyan-400 font-semibold">AI/ML solutions</span>,{' '}
              <span className="text-blue-400 font-semibold">algorithmic trading</span>, and{' '}
              <span className="text-purple-400 font-semibold">full-stack development</span>
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-400/30">
              <span className="text-cyan-400 font-semibold">7+ Years Experience</span>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-blue-400/30">
              <span className="text-blue-400 font-semibold">11+ Live Projects</span>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-400/30">
              <span className="text-purple-400 font-semibold">AI/ML Specialist</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#projects" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25">
              View Portfolio
            </a>
            <a href="#contact" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-cyan-400">the 7th sense</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Bridging quantitative finance and software engineering through innovative AI solutions. 
              Specializing in algorithmic trading, full-stack development, and machine learning applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Professional Focus</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With over 7 years of experience in software engineering and quantitative research, I specialize in 
                  building production-grade ML systems, algorithmic trading platforms, and enterprise applications. 
                  My work spans from healthcare AI governance serving 200K+ patients to achieving 28.4% annual 
                  trading returns through advanced quantitative strategies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Master's in Financial Engineering (WorldQuant University)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">AI 2030 Global Fellow & Published Researcher</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Enterprise experience at Apple, Verizon, Texas HHS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {projectCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A showcase of cutting-edge applications spanning algorithmic trading, AI/ML solutions, 
              and full-stack development. Each project demonstrates technical excellence and real-world impact.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`text-4xl p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="bg-gray-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="bg-gray-700/30 p-3 rounded-lg">
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive skill set spanning quantitative finance, software engineering, and AI/ML technologies. 
              Built through years of enterprise experience and continuous learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Python</span>
                  <div className="w-16 h-2 bg-gray-600 rounded-full">
                    <div className="w-15 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">JavaScript/TypeScript</span>
                  <div className="w-16 h-2 bg-gray-600 rounded-full">
                    <div className="w-14 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SQL</span>
                  <div className="w-16 h-2 bg-gray-600 rounded-full">
                    <div className="w-13 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Java/C++</span>
                  <div className="w-16 h-2 bg-gray-600 rounded-full">
                    <div className="w-12 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">AI/ML & Data Science</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">TensorFlow & PyTorch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">scikit-learn & Pandas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">OpenAI & LangChain</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Neural Networks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Computer Vision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Time Series Analysis</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">React.js & Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Node.js & Express.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">MongoDB & PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">REST APIs & GraphQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm">Redux & State Management</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantitative Finance</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Portfolio Optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Risk Modeling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Algorithmic Trading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Derivatives Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm">Monte Carlo Methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm">VaR & Stress Testing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-800/20 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Cloud & DevOps</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">☁️</div>
                <h4 className="text-white font-semibold mb-2">Cloud Platforms</h4>
                <p className="text-gray-400 text-sm">AWS, Azure, GCP</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🐳</div>
                <h4 className="text-white font-semibold mb-2">Containerization</h4>
                <p className="text-gray-400 text-sm">Docker, Kubernetes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="text-white font-semibold mb-2">CI/CD</h4>
                <p className="text-gray-400 text-sm">GitHub Actions, Jenkins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can work together to create something extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <a href="tel:2148863785" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    (214) 886-3785
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <div className="space-y-1">
                    <a href="mailto:bidias_consulting@outlook.com" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      bidias_consulting@outlook.com
                    </a>
                    <a href="mailto:rodabeck777@gmail.com" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      rodabeck777@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-colors">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Github className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">GitHub</h3>
                  <a href="https://github.com/eaglepython" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    github.com/eaglepython
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg border border-cyan-400/30">
                <h3 className="text-white font-semibold mb-3">Available for</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Full-stack Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">AI/ML Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Consulting Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Technical Leadership</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg border border-cyan-400/50">
                <a
                  href="./resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 text-cyan-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                    📄
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">Download Resume</div>
                    <div className="text-sm text-gray-400">PDF Available</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-colors"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
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