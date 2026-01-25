import { Link } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Github,
  ExternalLink,
  Lock,
  Clock,
  Home,
  Menu,
  Box,
  User,
  FileText,
} from "lucide-react";

// Project data with all information
const projectsData = [
  {
    id: 1,
    title: "Logo Maker AI",
    image: "/logomaker.jpg",
    demoLink: "https://logomaker-ai.com/",
    repoLink: null, // Private
    description: "An AI-powered logo generation platform that creates professional, unique logos in seconds. Built with advanced machine learning models for creative design automation.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "Node.js"],
    status: "live"
  },
  {
    id: 2,
    title: "Ads Maker AI",
    image: "/adsmaker.jpg",
    demoLink: null, // In development
    repoLink: null, // Private
    description: "A sophisticated AI tool for creating compelling advertisement content automatically. Utilizes generative AI to produce marketing materials tailored to brand guidelines.",
    technologies: ["React", "Python", "OpenAI", "Node.js", "PostgreSQL"],
    status: "development"
  },
  {
    id: 3,
    title: "Echocheck",
    image: "/echocheck.png",
    demoLink: null, // In development
    repoLink: null, // Private
    description: "A health monitoring application that uses advanced audio analysis and machine learning to track and analyze respiratory patterns for early detection and health insights.",
    technologies: ["React Native", "Python", "TensorFlow", "ONNX", "Node.js"],
    status: "development"
  },
  {
    id: 4,
    title: "Truth Chain Social",
    image: "/TruthChain.png",
    demoLink: "https://truth-chain-social.netlify.app/",
    repoLink: "https://github.com/rcconstante/Truth-Chain-Social-Demo",
    description: "A blockchain-powered social media platform focused on authenticity and truth verification. Implements decentralized fact-checking mechanisms.",
    technologies: ["React", "TypeScript", "Blockchain", "Node.js", "PostgreSQL"],
    status: "live"
  },
  {
    id: 5,
    title: "TagBase CRM",
    image: "/taghub.jpg",
    demoLink: "https://tagbase.co",
    repoLink: null, // Private
    description: "A comprehensive CRM solution with advanced tagging system for contact management. Features customer journey visualization and analytics dashboards.",
    technologies: ["React", "TypeScript", "Convex", "TailwindCSS"],
    status: "live"
  },
  {
    id: 6,
    title: "AI Chat WorkSpace",
    image: "/Ai.jpg",
    demoLink: null, // In development
    repoLink: null, // Private
    description: "A collaborative AI-powered workspace that enables teams to interact with AI assistants for enhanced productivity and project management.",
    technologies: ["React", "TypeScript", "OpenAI", "WebSockets", "Node.js"],
    status: "development"
  },
  {
    id: 7,
    title: "Computer Vision",
    image: "/CompVP.png",
    demoLink: null,
    repoLink: "https://github.com/rcconstante/ComputerVisionSummative",
    description: "A comprehensive computer vision project implementing various image processing and object detection algorithms for real-world applications.",
    technologies: ["Python", "OpenCV", "TensorFlow", "NumPy", "Matplotlib"],
    status: "live"
  },
  {
    id: 8,
    title: "NeonBlitz",
    image: "/NeonBlitz.png",
    demoLink: "https://neonblitz.netlify.app/",
    repoLink: "https://github.com/rcconstante/NeonBlitz",
    description: "A fast-paced, visually stunning arcade game with neon aesthetics. Features smooth animations and engaging gameplay mechanics.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
    status: "live"
  },
  {
    id: 9,
    title: "RacerPH Website",
    image: "/RacerPH.png",
    demoLink: "https://racerph.netlify.app/",
    repoLink: null, // Private
    description: "A modern website for the Philippine racing community featuring event listings, driver profiles, and racing news.",
    technologies: ["React", "TailwindCSS", "Netlify", "Responsive Design"],
    status: "live"
  },
  {
    id: 10,
    title: "SmartWater",
    image: "/SmartWater.png",
    demoLink: null,
    repoLink: "https://github.com/rcconstante/SmartWaterApp",
    description: "An IoT-based smart water monitoring system that tracks water quality and consumption in real-time with alerts and analytics.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Machine Learning"],
    status: "live"
  },
  {
    id: 11,
    title: "Study Space",
    image: "/StudySpace.png",
    demoLink: null,
    repoLink: "https://github.com/rcconstante/StudySpaceThesis",
    description: "A thesis project focusing on creating an intelligent study environment with productivity tracking and adaptive learning recommendations.",
    technologies: ["React Native", "Tailwind", "Machine Learning", "SQLite"],
    status: "live"
  },
  {
    id: 12,
    title: "Text Safe",
    image: "/TestSafe.png",
    demoLink: null,
    repoLink: "https://github.com/rcconstante/TextSafe",
    description: "A text encryption and secure messaging application implementing advanced cryptographic algorithms for private communication.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Machine Learning"],
    status: "live"
  },
  {
    id: 13,
    title: "Automata Visualizer",
    image: "/Automata.jpg",
    demoLink: "https://automatavisualizer.netlify.app/",
    repoLink: null, // Private
    description: "An interactive educational tool for visualizing finite automata, helping students understand theoretical computer science concepts.",
    technologies: ["React", "TypeScript", "D3.js", "TailwindCSS"],
    status: "live"
  },
  {
    id: 14,
    title: "Sntch Ecommerce Website",
    image: "/sntch.jpg",
    demoLink: "https://sntchofficial.com/",
    repoLink: null, // Private
    description: "A fully-featured e-commerce platform with modern UI/UX, payment integration, and inventory management for a fashion brand.",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    status: "live"
  },
  {
    id: 15,
    title: "DLSUD - Smart Classroom",
    image: "/SmartClassroom.jpg",
    demoLink: null,
    repoLink: "https://github.com/rcconstante/SmartClassroomv2",
    description: "An IoT-powered smart classroom system with real-time attendance tracking, environmental monitoring, and analytics dashboard.",
    technologies: ["React", "Python", "IoT", "Machine Learning", "Firebase"],
    status: "live"
  },
  {
    id: 16,
    title: "Ecoflow",
    image: "/ecoflow.jpg",
    demoLink: "https://ecoflowww.netlify.app/",
    repoLink: "https://github.com/rcconstante/Computational-Science",
    description: "An environmental sustainability platform tracking carbon footprint and providing eco-friendly lifestyle recommendations.",
    technologies: ["React", "Node.js", "Data Visualization", "TailwindCSS"],
    status: "live"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <ScrollToTopButton />

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-none max-w-4xl max-h-[90vh] overflow-y-auto p-0 !rounded-[40px] shadow-2xl">
          {selectedProject && (
            <>
              {/* Modal Header Image */}
              <div className="relative w-full aspect-video rounded-t-[40px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/30 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  {selectedProject.status === "development" ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      In Development
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-6 left-8 right-8">
                  <DialogHeader>
                    <DialogTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-white text-sm font-medium mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/10 rounded-full text-gray-300 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Live Demo Button */}
                  {selectedProject.demoLink ? (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-gray-400 rounded-full font-medium cursor-not-allowed">
                      <Clock className="w-5 h-5" />
                      In Development
                    </span>
                  )}

                  {/* Repository Button */}
                  {selectedProject.repoLink ? (
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Repository
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-gray-500 rounded-full font-medium cursor-not-allowed">
                      <Lock className="w-5 h-5" />
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex flex-col overflow-hidden bg-white">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/0102.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Top Info Bar */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 md:px-8 lg:px-[133px] py-8 lg:py-12">
          <div className="text-black font-dm-sans text-base md:text-xl font-medium">
            Code by Richhh
          </div>
          <div className="text-gray-700 font-dm-sans text-sm md:text-base font-light text-left md:text-right max-w-[600px]">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </div>
        </div>

        {/* Main Header Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8 md:gap-12 px-4 md:px-8 lg:px-[133px] py-12 md:py-0">
          <h1 className="text-black text-center font-dm-sans text-[clamp(2.5rem,8vw,6rem)] font-medium leading-tight max-w-[1200px]">
            welcome to my realm of wild projects and awesome creations
          </h1>

          {/* Navigation Bar - inside hero, will become fixed on scroll */}
          {!isScrolled && (
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-portfolio-gray-darkest/90 backdrop-blur-md rounded-[18px] shadow-lg">
              <Link to="/">
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </Link>
              <a href="/#impressive-works" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
                <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <Link to="/skills" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Link>
              <a href="/RichmondC.pdf" download className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="https://github.com/rcconstante" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <button onClick={() => navigator.share?.({ url: window.location.href, title: document.title })} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Fixed Floating Navigation Bar - appears after scrolling */}
      {isScrolled && (
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 bg-portfolio-gray-darkest/95 backdrop-blur-md rounded-[18px] shadow-lg animate-in slide-in-from-bottom-4 duration-300">
          <Link to="/">
            <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
              <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </Link>
          <a href="/#impressive-works" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center transition-all hover:scale-110">
            <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <Link to="/skills" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </Link>
          <a href="/RichmondC.pdf" download className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a href="https://github.com/rcconstante" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <button onClick={() => navigator.share?.({ url: window.location.href, title: document.title })} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
      )}

      {/* Projects Grid */}
      <section className="px-4 sm:px-8 lg:px-[133px] py-16 lg:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              status={project.status}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-8 lg:px-[133px] py-12 lg:py-16 bg-white relative">
        <div className="max-w-[810px] mb-12 lg:mb-16">
          <p className="font-mono text-base sm:text-lg lg:text-xl mb-4 lg:mb-7">That's all for now.</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[77px] font-normal leading-tight mb-2">
            Got a project in mind?
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[77px] font-normal leading-tight">
            Let's talk
          </h2>
        </div>

        <div className="w-full h-px bg-black mb-8 lg:mb-12"></div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 relative">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-14">
            <div>
              <p className="text-sm lg:text-base text-gray-600 mb-1">Email:</p>
              <a
                href="mailto:r.constante.dev@gmail.com"
                className="text-xl lg:text-2xl hover:underline"
              >
                r.constante.dev@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm lg:text-base text-gray-600 mb-1">Phone</p>
              <a
                href="tel:+639150365602"
                className="text-xl lg:text-2xl hover:underline"
              >
                +639150365602
              </a>
            </div>
          </div>

          {/* Get in Touch Button */}
          <a
            href="mailto:r.constante.dev@gmail.com"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-[278px] lg:h-[278px] rounded-full bg-blue-600 text-white text-lg sm:text-xl lg:text-2xl font-normal flex items-center justify-center hover:scale-105 transition-transform duration-300 lg:absolute lg:-bottom-12 lg:right-0"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[69px]">
        <div className="relative z-10">
          <h3 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-light font-dm mb-4 lg:mb-8">
            your friendly chaos creator
          </h3>
          <div className="flex items-center gap-4 lg:gap-8 mb-8 lg:mb-12">
            <h2 className="text-6xl sm:text-8xl md:text-[150px] lg:text-[200px] xl:text-[300px] font-medium font-dm tracking-[0.02em] leading-none">
              Richhh
            </h2>
            <Link to="/">
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-[142px] lg:h-[142px] flex-shrink-0 hover:scale-110 transition-transform hover:rotate-45">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 sm:w-14 sm:h-14 lg:w-[73px] lg:h-[73px]"
                    viewBox="0 0 73 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.8864 12.7751L62.0498 28.9385M62.0498 28.9385L45.8864 45.102M62.0498 28.9385L14.9498 28.9385C12.7407 28.9385 10.9498 30.7294 10.9498 32.9385L10.9498 60.2251"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 font-inter">
            Design inspired by a Figma Community template by @ashhhh
          </p>
        </div>
      </footer>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  image: string;
  status: string;
  onClick: () => void;
}

function ProjectCard({ title, image, status, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-6 lg:gap-7 group cursor-pointer"
    >
      <div className="relative w-full rounded-[32px] lg:rounded-[42px] overflow-hidden aspect-[807/470] transition-transform hover:scale-[1.02]">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Status indicator overlay */}
        {status === "development" && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-400 text-sm font-medium">
              <Clock className="w-3.5 h-3.5" />
              In Development
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3 lg:gap-[13px] group">
        <svg
          className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 transition-transform group-hover:translate-x-2 group-hover:rotate-45"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.8798 25.3055C35.5188 24.8874 34.8874 24.8411 34.4693 25.2021C34.0513 25.563 34.005 26.1944 34.3659 26.6125L35.8798 25.3055ZM41.8898 33.7971L42.6691 34.4238C42.9716 34.0476 42.9622 33.509 42.6467 33.1436L41.8898 33.7971ZM34.6212 41.2399C34.2751 41.6703 34.3434 42.2997 34.7738 42.6458C35.2042 42.992 35.8337 42.9236 36.1798 42.4933L34.6212 41.2399ZM25.9648 33.0749C25.4126 33.0845 24.9727 33.54 24.9824 34.0922C24.992 34.6444 25.4475 35.0842 25.9997 35.0746L25.9648 33.0749ZM34.3659 26.6125L41.1329 34.4506L42.6467 33.1436L35.8798 25.3055L34.3659 26.6125ZM41.1105 33.1704L34.6212 41.2399L36.1798 42.4933L42.6691 34.4238L41.1105 33.1704ZM41.8724 32.7972L25.9648 33.0749L25.9997 35.0746L41.9073 34.7969L41.8724 32.7972ZM46.1647 45.7452C39.6427 52.4989 28.8805 52.6868 22.1268 46.1647L20.7375 47.6034C28.2858 54.8928 40.3141 54.6828 47.6034 47.1345L46.1647 45.7452ZM22.1268 46.1647C15.373 39.6427 15.1852 28.8805 21.7072 22.1268L20.2685 20.7375C12.9792 28.2858 13.1891 40.3141 20.7375 47.6034L22.1268 46.1647ZM21.7072 22.1268C28.2292 15.373 38.9914 15.1852 45.7452 21.7072L47.1345 20.2685C39.5861 12.9792 27.5578 13.1891 20.2685 20.7375L21.7072 22.1268ZM45.7452 21.7072C52.4989 28.2292 52.6868 38.9914 46.1647 45.7452L47.6034 47.1345C54.8928 39.5862 54.6828 27.5579 47.1345 20.2685L45.7452 21.7072Z"
            fill="black"
          />
        </svg>
        <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-normal transition-transform group-hover:translate-x-2">{title}</h3>
      </div>
    </div>
  );
}
