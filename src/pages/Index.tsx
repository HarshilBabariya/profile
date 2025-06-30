import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, User, Code, Briefcase, Award, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'experience', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-white/80'
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              John <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in delay-300">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 animate-fade-in delay-500">
              Passionate about creating innovative web solutions that combine beautiful design with powerful functionality
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
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
                  I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. 
                  I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-blue-400" />
                  <span className="text-white">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Code className="w-6 h-6 text-purple-400" />
                  <span className="text-white">50+ Projects Completed</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Briefcase className="w-24 h-24 text-white/60" />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8">Skills & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card 
                  key={exp.title} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
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
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400">
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
              {education.map((edu, index) => (
                <Card 
                  key={edu.degree} 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
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
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4 leading-relaxed">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <Badge key={achievement} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-blue-400/30">
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
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-400/50 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button size="sm" variant="ghost" className="text-white hover:text-blue-400">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:text-purple-400">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
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
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">Email</CardTitle>
                  <CardDescription className="text-white/70">
                    john.developer@email.com
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">LinkedIn</CardTitle>
                  <CardDescription className="text-white/70">
                    /in/johndeveloper
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <Github className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white">GitHub</CardTitle>
                  <CardDescription className="text-white/70">
                    /johndeveloper
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
            >
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
            © 2024 John Developer. Crafted with ❤️ and React
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
