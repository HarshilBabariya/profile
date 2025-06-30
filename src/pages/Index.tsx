
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
    'ReactJs', 'NextJs', 'NodeJs', 'Remix', 'Typescript', 'JavaScript', 'HTML/CSS',
    'Git', 'MySQL', 'MongoDB', 'PostgreSQL'
  ];

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tatvasoft',
      location: 'Ahmedabad, India',
      period: '2023 - Present',
      description: 'Led development of scalable web applications using ReactJs and NodeJs. Managed a team of 2 developers and improved application performances by using NextJs.',
      technologies: ['ReactJs', 'NodeJs', 'NextJs', 'Remix', 'TypeScript', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Thinkbiz Technology Pvt Ltd.',
      location: 'Ahmedabad, India',
      period: '2022 - 2023',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces. Implemented modern frontend architectures.',
      technologies: ['ReactJs', 'Javascript', 'Typescript', 'HTML/CSS', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bechlor Of Engineering',
      school: 'Government Engineering College',
      location: 'Rajkot, Gujarat',
      period: '2018 - 2022',
      description: 'Specialized in Computer Engineering. Active member of the Computer Science Club. Graduated with a CGPA of 8.32/10',
      achievements: ['Bus Seat Booking System Project', 'Library Management System Project']
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Pro',
      description: 'Full-stack e-commerce solution with ReactJs, NodeJs, and Stripe integration to create multiple e-commerce websites from single website',
      technologies: ['ReactJs', 'NodeJs', 'MySQL', 'Stripe', 'Typescript', 'Material-UI'],
      live: 'https://ecomproduplicate-384812-react.b384812.dev.eastus.az.svc.builder.cafe/',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      technologies: ['ReactJs', 'Firebase', 'TypeScript', 'Ant Design', 'NodeJs', 'MongoDB', 'Socket.io'],
      live: 'https://trello-clone-eta-ivory.vercel.app/',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Day Docker',
      description: 'Application to book a dock for parking a boat for vacations',
      technologies: ['ReactJs', 'Material-UI', 'Socket.io', 'Typescript', 'Google-maps', 'Stripe'],
      live: 'https://nathanrobinsonsbc-496588-react.b496588.dev.eastus.az.svc.builder.cafe/',
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10">
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
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-white/80 hover:text-blue-400'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Harshil <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Babariya</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
              Passionate about creating innovative web solutions that combine beautiful design with powerful functionality. 
              Let's build something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="border-white/30 hover:bg-white/10">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-8 h-8 text-white/60 cursor-pointer" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm a passionate full-stack developer with 3+ years of experience creating digital solutions that make a difference. 
                  I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-400" />
                    <span className="text-white">3+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-purple-400" />
                    <span className="text-white">20+ Projects Completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-pink-400" />
                    <span className="text-white">Available for Freelance</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Briefcase className="w-24 h-24 text-white/60" />
              </div>
            </div>

            {/* Skills */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8">Skills & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <Card key={exp.title} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <div className="flex items-center text-blue-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/80 mb-2">
                      <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-white/60">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-colors">
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Education</span>
            </h2>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <Card key={edu.degree} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                      <div className="flex items-center text-blue-400 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/80 mb-2">
                      <GraduationCap className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="font-semibold">{edu.school}</span>
                    </div>
                    <div className="flex items-center text-white/60">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 leading-relaxed">{edu.description}</p>
                    <div className="mb-3">
                      <h4 className="text-white font-medium mb-2">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-purple-400/30">
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

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="ghost" className="text-white hover:text-purple-400">
                        <a href={project.live}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-colors">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Connect</span>
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Ready to work together? I'd love to hear about your next project!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Email</CardTitle>
                  <CardDescription className="text-white/70">
                    harshilbabariya01@gmail.com
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader className="text-center">
                  <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">LinkedIn</CardTitle>
                  <CardDescription className="text-white/70">
                    /babariya-harshil
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <CardHeader className="text-center">
                  <Github className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">GitHub</CardTitle>
                  <CardDescription className="text-white/70">
                    /HarshilBabariya
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Harshil Babariya. Be Good and Code Clean
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
