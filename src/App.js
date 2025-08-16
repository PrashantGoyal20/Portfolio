import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ChevronDown, Download, MapPin, Coffee } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

   const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'AI/ML', level: 80, icon: '🔷' },
    { name: 'MongoDB', level: 75, icon: '🍃' },
    { name: 'JAVA', level: 90, icon: <img className='skill-img' src='./java.png'/> },
    { name: 'Python', level: 70, icon: '🐍' }
  ];

  const projects = [
    {
      thumbnail:"./Aerial-Ascends.png",
      title: 'Aerial Ascend',
      description: 'Aerial Ascends is an airline management project designed to simplify air travel with features like smart booking, real-time flight updates, and cost-efficient ticketing for a seamless passenger experience.',
      tech: ['React', 'Node.js', 'MongoDB', 'Razorpay','Gemini','Qdrant','Cloudinary'],
      github: 'https://github.com/PrashantGoyal20/Aerial-Ascend',
      live: 'https://aerialascend-git-main-prashantgoyal20s-projects.vercel.app/',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      thumbnail:"./JobDekho.png",
      title: 'Job Dekho',
      description: 'Job Dekho – A job discovery and application platform designed to simplify recruitment by connecting job seekers with employers. Features include user-friendly job search, application tracking, and streamlined employer postings.',
      tech: ['React', 'Node.js', 'LiveKit.io', 'MongoDB','Gemini','Qdrant','Cloudinary'],
      github: 'https://github.com/PrashantGoyal20/Job-Dekho',
      live: "https://job-dekho-git-master-prashantgoyal20s-projects.vercel.app/",
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      thumbnail:"./Smart-Prep.png",
      title: 'Smart Prep',
      description: 'Smart Prep is an AI-powered preparation platform designed to help students and professionals practice interviews.',
      tech: ['React', 'Node.js', 'Gemini','Google-Cloud'],
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <div>
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      ></div>

      <header className="header">
        <nav className="nav">
          <a href="#" className="logo"><span>PORTFOLIO</span></a>
          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <Sun size={24}  color='white' /> : <Moon size={24}/>}
          </button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="profile-container">
            <div
              className="profile-photo"
              onClick={() => document.querySelector('.profile-photo').classList.toggle('flipped')}
            >
              <div className="profile-glow"></div>
              <div className="profile-back">👨‍💻</div>
              <img className="profile-front" src='./logo.svg'/>
            </div>
          </div>

          <h1 className="hero-title">Prashant Goyal</h1>
          <p className="hero-subtitle">Full Stack Web Developer</p>
          <p className="hero-description">
            Passionate about creating innovative web solutions with modern technologies.
            I build responsive, user-friendly applications that make a difference in the digital world.
          </p>
          <div className="cta-container">
            <a href="#projects" className="cta-button">
              <Code size={20} />
              View My Work
            </a>
            <a href="#contact" className="cta-button secondary">
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          <ChevronDown size={28} color="var(--accent)" />
        </div>
      </section>

      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate and detail-oriented software developer with strong expertise in MERN stack development, React applications, and backend integrations. With hands-on experience in building full-stack web applications, I specialize in creating scalable, efficient, and user-friendly solutions. I enjoy solving real-world problems with technology and continuously learning modern tools and frameworks.
            </p>
            <p>
              Beyond coding, I bring strong problem-solving skills, adaptability, and the ability to collaborate effectively in team environments. My goal is to contribute to innovative projects, deliver high-quality results, and grow as a developer while adding value to the organization.
            </p>

            
          </div>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--gradient': project.gradient }}>
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-thumbnail">
                  
                  <img className='thumbnail' src={project.thumbnail}/>
                </div>
                <div className="project-icon">
                  {index === 0 ? '✈️' : index === 1 ? '🏢' : '🧑‍💼'}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.live} className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's connect and discuss how we can bring your ideas to life! ✨
          </p>

          <div className="contact-links">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prashant.goyal2002@gmail.com" className="contact-link">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              Email Me
            </a>
            <a href="https://github.com/PrashantGoyal20" className="contact-link">
              <div className="contact-icon">
                <Github size={24} />
              </div>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/prashant-goyal-912697258" className="contact-link">
              <div className="contact-icon">
                <Linkedin size={24} />
              </div>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about" className="footer-link">About Me</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Resume</a>
          </div>
          <p>&copy; 2025 Prashant Goyal. Built with ❤️ and Hardwork</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
