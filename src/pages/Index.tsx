
import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, User, Code, Briefcase, Award, GraduationCap, MapPin, Calendar, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS',
    'Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL'
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React and Node.js. Managed a team of 4 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces. Implemented modern frontend architectures.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Redux', 'Jest']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Built and maintained company websites using modern web technologies. Contributed to open-source projects and gained experience in full-stack development.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Machine Learning. Graduated Magna Cum Laude with a GPA of 3.8/4.0.',
      achievements: ['Dean\'s List', 'Research Assistant', 'Machine Learning Capstone Project']
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Foundation in computer systems, programming, and software design. Active member of the Computer Science Club.',
      achievements: ['Summa Cum Laude', 'Outstanding Student Award', 'Hackathon Winner']
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI Dashboard',
      description: 'Analytics dashboard with AI-powered insights and data visualization',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none z-50 transition-all duration-300 opacity-50"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === section 
                      ? 'text-blue-400 bg-white/10 shadow-lg shadow-blue-400/20' 
                      : 'text-white/80 hover:text-blue-400 hover:bg-white/5'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse hover:animate-bounce transition-all duration-300 cursor-pointer">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 transition-colors">
                <User className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in hover:scale-105 transition-transform duration-500">
              John <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Developer</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in delay-300 hover:text-white transition-colors">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12 animate-fade-in delay-500 hover:text-white/80 transition-colors">
              Passionate about creating innovative web solutions that combine beautiful design with powerful functionality. 
              Let's build something amazing together!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/50"
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-20 hover:scale-105 transition-transform duration-300">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <p className="text-xl text-white/80 leading-relaxed hover:text-white transition-colors duration-300">
                  I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. 
                  I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-xl text-white/80 leading-relaxed hover:text-white transition-colors duration-300">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <Award className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg group-hover:text-blue-400 transition-colors">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <Code className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg group-hover:text-purple-400 transition-colors">50+ Projects Completed</span>
                  </div>
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <Phone className="w-8 h-8 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg group-hover:text-pink-400 transition-colors">Available for Freelance</span>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="w-full h-96 mx-auto rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  <Briefcase className="w-32 h-32 text-white/60 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Enhanced Skills */}
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-12 hover:scale-105 transition-transform duration-300">Skills & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer text-lg py-2 px-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-20 hover:scale-105 transition-transform duration-300">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
            </h2>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title} 
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in group hover:shadow-2xl hover:shadow-blue-500/10"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="group-hover:bg-white/5 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <CardTitle className="text-white text-2xl group-hover:text-blue-400 transition-colors duration-300">{exp.title}</CardTitle>
                      <div className="flex items-center text-blue-400 mt-2 md:mt-0 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="text-base font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/80 mb-3 group-hover:text-white transition-colors">
                      <Briefcase className="w-5 h-5 mr-3 text-purple-400" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>{exp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-6 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-110 cursor-pointer">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-white mb-20 hover:scale-105 transition-transform duration-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span>
            </h2>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree} 
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in group hover:shadow-2xl hover:shadow-purple-500/10"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="group-hover:bg-white/5 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <CardTitle className="text-white text-2xl group-hover:text-purple-400 transition-colors duration-300">{edu.degree}</CardTitle>
                      <div className="flex items-center text-blue-400 mt-2 md:mt-0 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span className="text-base font-medium">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/80 mb-3 group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5 mr-3 text-purple-400" />
                      <span className="font-semibold text-lg">{edu.school}</span>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>{edu.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-6 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">{edu.description}</p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">Achievements:</h4>
                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-purple-400/30 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 hover:scale-110 cursor-pointer">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-20 hover:scale-105 transition-transform duration-300">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="ghost" className="text-white hover:text-blue-400 hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="ghost" className="text-white hover:text-purple-400 hover:bg-white/20 transform hover:scale-110 transition-all duration-300">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="group-hover:bg-white/5 transition-colors duration-300">
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-10 hover:scale-105 transition-transform duration-300">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Connect</span>
            </h2>
            <p className="text-2xl text-white/80 mb-16 hover:text-white transition-colors duration-300">
              Ready to work together? I'd love to hear about your next project!
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 group hover:shadow-2xl hover:shadow-blue-500/20">
                <CardHeader className="text-center">
                  <Mail className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">Email</CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white transition-colors text-lg">
                    john.developer@email.com
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 group hover:shadow-2xl hover:shadow-purple-500/20">
                <CardHeader className="text-center">
                  <Linkedin className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">LinkedIn</CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white transition-colors text-lg">
                    /in/johndeveloper
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 group hover:shadow-2xl hover:shadow-pink-500/20">
                <CardHeader className="text-center">
                  <Github className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-white text-xl group-hover:text-pink-400 transition-colors">GitHub</CardTitle>
                  <CardDescription className="text-white/70 group-hover:text-white transition-colors text-lg">
                    /johndeveloper
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 text-lg px-8 py-4"
            >
              <Mail className="w-6 h-6 mr-3" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60 text-lg hover:text-white/80 transition-colors duration-300">
            © 2024 John Developer. Crafted with ❤️ and React
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
