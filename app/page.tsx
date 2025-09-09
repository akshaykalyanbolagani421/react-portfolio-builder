"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ChevronUp,
  Code,
  Database,
  Globe,
  Wrench,
  GraduationCap,
  Award,
  User,
  Briefcase,
} from "lucide-react"

const roles = ["MERN Stack Developer", "Problem Solver", "Open Source Enthusiast", "CSE Student"]

const skills = {
  Programming: ["Python", "Java", "C", "JavaScript", "TypeScript"],
  Frontend: ["React", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  Tools: ["Git", "GitHub", "AWS", "Vercel", "Netlify", "Docker"],
  "Core CS": ["DSA", "OOP", "DBMS", "Operating Systems", "Networks"],
}

const projects = [
  {
    title: "BookReuse Hub",
    description:
      "A comprehensive platform for buying and selling used books with user authentication, search functionality, and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Express.js"],
    github: "https://github.com/akshaykalyan/bookreuse-hub",
    demo: "https://bookreuse-hub.vercel.app",
  },
  {
    title: "Expense Tracker App",
    description:
      "Modern expense tracking application with data visualization, budget management, and real-time analytics.",
    tech: ["React", "Chart.js", "Local Storage", "Tailwind CSS"],
    github: "https://github.com/akshaykalyan/expense-tracker",
    demo: "https://expense-tracker-ak.vercel.app",
  },
  {
    title: "Smart Farmer Assistant",
    description:
      "AI-powered agricultural decision-making app providing crop recommendations, weather insights, and farming tips.",
    tech: ["React", "Python", "Machine Learning", "Weather API"],
    github: "https://github.com/akshaykalyan/smart-farmer",
    demo: "https://smart-farmer-assistant.vercel.app",
  },
  {
    title: "Travel Hub Platform",
    description: "Travel planning platform for remote areas with offline maps, local guides, and community features.",
    tech: ["React", "Node.js", "MongoDB", "Maps API", "PWA"],
    github: "https://github.com/akshaykalyan/travel-hub",
    demo: "https://travel-hub-platform.vercel.app",
  },
]

const certifications = [
  "NPTEL - Programming, Data Structures and Algorithms using Python",
  "NPTEL - Database Management System",
  "AWS Cloud Practitioner Essentials",
  "Google Cloud Digital Leader",
  "HackerRank Problem Solving (Gold Badge)",
  "Coding Ninjas - Full Stack Web Development",
]

export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = ["hero", "about", "skills", "projects", "education", "certifications", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-accent"
            >
              AK
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.toLowerCase() ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-4xl font-bold text-white">
              AK
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-balance">
              Hi, I'm <span className="text-accent">Akshay Kalyan</span>
            </h1>

            <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Passionate about creating innovative web solutions and exploring the intersection of technology and user
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-accent hover:bg-accent/90">
                View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <User className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  I'm a passionate Computer Science Engineering student with a strong foundation in full-stack web
                  development. My journey in technology is driven by curiosity and a desire to solve real-world problems
                  through innovative solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  With expertise in the MERN stack, I enjoy building scalable applications that provide exceptional user
                  experiences. I'm particularly interested in AI, cloud computing, and open-source contributions.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Core Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Problem Solving",
                      "Team Collaboration",
                      "Adaptability",
                      "Continuous Learning",
                      "Communication",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Code className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {category === "Programming" && <Code className="h-5 w-5 text-accent" />}
                        {category === "Frontend" && <Globe className="h-5 w-5 text-accent" />}
                        {category === "Backend" && <Briefcase className="h-5 w-5 text-accent" />}
                        {category === "Database" && <Database className="h-5 w-5 text-accent" />}
                        {category === "Tools" && <Wrench className="h-5 w-5 text-accent" />}
                        {category === "Core CS" && <GraduationCap className="h-5 w-5 text-accent" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Briefcase className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Bachelor of Technology in Computer Science Engineering</CardTitle>
                <CardDescription className="text-lg">University Name • Expected Graduation: 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented
                  Programming, Computer Networks, Operating Systems, Software Engineering
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Award className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-12 justify-center">
              <Mail className="h-8 w-8 text-accent" />
              <h2 className="text-3xl font-bold">Get In Touch</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology. Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:akshaykalyan@example.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    akshaykalyan@example.com
                  </a>
                  <a
                    href="https://github.com/akshaykalyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </a>
                  <a
                    href="https://linkedin.com/in/akshaykalyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Your Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Your Message" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Akshay Kalyan. Built with React, Next.js, and Tailwind CSS.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-colors z-40"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
