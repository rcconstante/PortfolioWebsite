import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  Menu,
  Box,
  User,
  FileText,
  Github,
  ExternalLink,
} from "lucide-react";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Timeline } from "@/components/ui/timeline";
import { Briefcase, GraduationCap, Rocket, Code } from "lucide-react";

export default function Skills() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-black scroll-smooth" style={{ overflowX: 'clip' }}>
      <ScrollToTopButton />
      {/* Header Section with Video Background */}
      <section className="w-full bg-black px-4 md:px-8 lg:px-[133px] py-12 md:py-16 lg:py-[66px] relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/0103.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Top Info Bar */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 md:mb-16 lg:mb-[70px]">
          <div className="text-white font-dm-sans text-base md:text-xl font-medium">
            Code by Richhh
          </div>
          <div className="text-white font-dm-sans text-sm md:text-xl font-light text-left md:text-right max-w-[600px]">
            Passionate Creative Designer and Developer, dedicated to crafting
            innovative solutions and exceptional digital experiences through
            modern technologies
          </div>
        </div>

        {/* Main Header */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-[60px] py-12 md:py-0 md:min-h-[400px]">
          <h1 className="text-white text-center font-dm-sans text-[clamp(3rem,10vw,8.75rem)] font-normal leading-normal max-w-[1212px] drop-shadow-2xl">
            Skills that fuel my passion
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
              <Link to="/projects" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
                <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </Link>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all hover:scale-110 bg-blue-600 flex items-center justify-center">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
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
          <Link to="/projects" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Box className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </Link>
          <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transition-all hover:scale-110 bg-blue-600 flex items-center justify-center">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
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

      {/* Skills Grid Section */}
      <section className="w-full px-4 md:px-8 lg:px-[133px] py-12 md:py-16 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full mx-auto">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">

            {/* Front-End Development */}
            <SkillCard
              title="Front-End Development"
              description="Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise."
              icons={[
                <HtmlIcon key="html" />,
                <JsIcon key="js" />,
                <TsIcon key="ts" />
              ]}
              bottomIcons={[
                <NextIcon key="next" />,
                <ReactIcon key="react" />
              ]}
            />

            {/* Back-End Development */}
            <SkillCard
              title="Back-End Development"
              description="Developing robust server-side logic and APIs to power dynamic and scalable web applications."
              icons={[
                <NodeIcon key="node" />,
                <FlaskIcon key="flask" />,
                <DjangoIcon key="django" />
              ]}
              bottomIcons={[
                <StreamlitIcon key="streamlit" />
              ]}
            />

            {/* Core Computer Science Concepts */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2.5">
                  <Badge text="Operating Systems" />
                  <Badge text="Computer Networks" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Badge text="Object-Oriented Programming" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Badge text="System Design" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Core Computer Science Concepts
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-5">

            {/* Programming Languages */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-8">
              <div className="flex items-start gap-8">
                <IconContainer>
                  <PythonIcon />
                </IconContainer>
                <IconContainer>
                  <JavaIcon />
                </IconContainer>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Programming Languages
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.
                </p>
              </div>
            </div>

            {/* Database Management */}
            <SkillCard
              title="Database Management"
              description="Designing and managing databases to ensure secure and efficient data storage and retrieval."
              icons={[
                <SQLiteIcon key="sqlite" />,
                <MySQLIcon key="mysql" />,
                <PostgresIcon key="postgres" />
              ]}
            />

            {/* Mobile App Development */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-10">
              <div className="flex items-center gap-8">
                <IconContainer>
                  <img src="/logo/react-native.svg" alt="React Native" className="w-[66px] h-[66px] object-contain" />
                </IconContainer>
                <IconContainer>
                  <FlutterIcon />
                </IconContainer>
                <IconContainer>
                  <KotlinIcon />
                </IconContainer>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Mobile App Development
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Creating cross-platform mobile apps with sleek designs and robust functionality using React Native, Flutter, and Kotlin.
                </p>
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-8">
                  <IconContainer>
                    <TensorFlowIcon />
                  </IconContainer>
                  <IconContainer>
                    <NumPyIcon />
                  </IconContainer>
                </div>
                <div className="flex justify-end items-center gap-8">
                  <IconContainer>
                    <PandasIcon />
                  </IconContainer>
                  <IconContainer>
                    <MatplotlibIcon />
                  </IconContainer>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Machine Learning
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Building intelligent models and data pipelines using TensorFlow, NumPy, Pandas, and Matplotlib for predictive analysis and visualization.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">

            {/* Styling & Design */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-8">
                  <IconContainer>
                    <CssIcon />
                  </IconContainer>
                  <IconContainer>
                    <TailwindIcon />
                  </IconContainer>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Styling & Design
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Crafting visually appealing and responsive designs with advanced styling tools and frameworks.
                </p>
              </div>
            </div>

            {/* Version Control & Collaboration */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <IconContainer>
                  <GithubIcon />
                </IconContainer>
                <IconContainer>
                  <GitIcon />
                </IconContainer>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Version Control & Collaboration
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Effectively managing code and collaborating on projects to ensure seamless teamwork.
                </p>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <IconContainer>
                  <FigmaIconSvg />
                </IconContainer>
                <div className="flex items-center gap-2.5">
                  <Badge text="Prototyping" />
                  <Badge text="Wireframing" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  UI/UX Design
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.
                </p>
              </div>
            </div>

            {/* Personal Development */}
            <div className="bg-[#1E1E1E] rounded-[32px] p-10 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2.5">
                  <Badge text="Time Management" />
                  <Badge text="Problem Solving" />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <Badge text="Communication" />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <h2 className="text-white text-[28px] font-medium leading-normal">
                  Personal Development
                </h2>
                <p className="text-[#AAA] text-xl font-light leading-normal">
                  Committed to continuous learning and personal growth to excel in both professional and collaborative environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <TimelineSection />

      {/* Contact Section */}
      <section className="w-full px-4 md:px-8 lg:px-[133px] py-12 md:py-16 lg:py-[66px] bg-black">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[113px]">
          <div className="max-w-[810px]">
            <p className="font-ibm-mono font-normal text-base md:text-xl text-white mb-2">
              That's all for now.
            </p>
            <h2 className="font-inter font-normal text-[clamp(2rem,6vw,4.8rem)] leading-tight text-white">
              Got a project in mind?
            </h2>
            <h3 className="font-inter font-normal text-[clamp(2rem,6vw,4.8rem)] leading-tight text-white">
              Let's talk
            </h3>
          </div>

          <div className="w-full h-px bg-white"></div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start relative">
            <div className="flex flex-col gap-1">
              <p className="font-inter font-normal text-base text-portfolio-gray-medium">
                Email:
              </p>
              <a
                href="mailto:r.constante.dev@gmail.com"
                className="font-inter font-normal text-xl md:text-2xl text-white hover:underline"
              >
                r.constante.dev@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-inter font-normal text-base text-portfolio-gray-medium">
                Phone
              </p>
              <a
                href="tel:+639150365602"
                className="font-inter font-normal text-xl md:text-2xl text-white hover:underline"
              >
                +639150365602
              </a>
            </div>

            <a
              href="mailto:r.constante.dev@gmail.com"
              className="md:absolute md:right-0 md:bottom-0 w-[278px] h-[278px] rounded-full bg-portfolio-blue flex items-center justify-center transition-transform hover:scale-105 shadow-lg mt-8 md:mt-0"
            >
              <span className="font-inter font-normal text-xl md:text-2xl text-white">
                Get in touch
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white relative overflow-hidden py-12 md:py-16 lg:py-0">
        <div className="relative w-full h-auto lg:h-[565px] flex flex-col justify-center px-4 md:px-8 lg:px-[36px]">
          <div className="relative z-10 mb-4 lg:mb-0 lg:absolute lg:top-[57px] lg:left-[69px]">
            <p className="font-dm-sans font-light text-[clamp(2rem,8vw,6.25rem)] leading-tight text-black">
              your friendly chaos creator
            </p>
          </div>

          <div className="relative z-10 lg:absolute lg:top-[156px] lg:left-[36px]">
            <h2 className="font-dm-sans font-medium text-[clamp(3rem,15vw,18.75rem)] leading-none text-black tracking-[0.04em]">
              Richhh
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-inter mt-2">
              Design inspired by a Figma Community template by @ashhhh
            </p>
          </div>

          <div className="relative z-10 mt-8 lg:mt-0 lg:absolute lg:top-[57px] lg:right-[38px]">
            <a
              href="/"
              className="w-[120px] h-[120px] md:w-[142px] md:h-[142px] rounded-full bg-black flex items-center justify-center transition-transform hover:scale-110 hover:rotate-45 mx-auto lg:mx-0"
            >
              <svg
                width="73"
                height="73"
                viewBox="0 0 73 73"
                fill="none"
                className="w-12 h-12 md:w-[73px] md:h-[73px]"
              >
                <path
                  d="M45.8864 12.7751L62.0498 28.9385M62.0498 28.9385L45.8864 45.102M62.0498 28.9385L14.9498 28.9385C12.7407 28.9385 10.9498 30.7294 10.9498 32.9385L10.9498 60.2251"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div >
  );
}

// Reusable Components
function SkillCard({
  title,
  description,
  icons,
  bottomIcons
}: {
  title: string;
  description: string;
  icons: React.ReactNode[];
  bottomIcons?: React.ReactNode[];
}) {
  return (
    <div className="bg-[#1E1E1E] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        {bottomIcons ? (
          <>
            <div className="flex flex-wrap items-start gap-3 sm:gap-5 lg:gap-8">
              {icons.map((icon, i) => (
                <IconContainer key={i}>{icon}</IconContainer>
              ))}
            </div>
            <div className="flex flex-wrap justify-end items-center gap-3 sm:gap-5 lg:gap-8">
              {bottomIcons.map((icon, i) => (
                <IconContainer key={i}>{icon}</IconContainer>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 lg:gap-8">
            {icons.map((icon, i) => (
              <IconContainer key={i}>{icon}</IconContainer>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-medium leading-normal">{title}</h2>
        <p className="text-[#AAA] text-base sm:text-lg lg:text-xl font-light leading-normal">{description}</p>
      </div>
    </div>
  );
}

function IconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-[#141414] flex items-center justify-center flex-shrink-0 overflow-hidden">
      {children}
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="rounded-full bg-[#141414] px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 flex items-center justify-center">
      <span className="text-white text-sm sm:text-base lg:text-xl font-light leading-normal">{text}</span>
    </div>
  );
}

// Icon Components using PNG images
const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[51px] lg:h-[51px] object-contain" />
);

const HtmlIcon = () => <Icon src="/logo/html.png" alt="HTML" />;
const JsIcon = () => <Icon src="/logo/js.png" alt="JavaScript" />;
const TsIcon = () => <Icon src="/logo/typescript.png" alt="TypeScript" />;
const NodeIcon = () => <Icon src="/logo/nodejs.png" alt="Node.js" />;
const FlaskIcon = () => <Icon src="/logo/flask.png" alt="Flask" />;
const DjangoIcon = () => <Icon src="/logo/django.png" alt="Django" />;
const PythonIcon = () => <Icon src="/logo/python.png" alt="Python" />;
const JavaIcon = () => <Icon src="/logo/java.png" alt="Java" />;
const SQLiteIcon = () => <Icon src="/logo/SQlite.png" alt="SQLite" />;
const MySQLIcon = () => <Icon src="/logo/mysql-database.png" alt="MySQL" />;
const PostgresIcon = () => <Icon src="/logo/postgre.png" alt="PostgreSQL" />;
const GithubIcon = () => <Icon src="/logo/github.png" alt="GitHub" />;
const GitIcon = () => <Icon src="/logo/Git.png" alt="Git" />;
const CssIcon = () => <Icon src="/logo/css-3.png" alt="CSS" />;
const TailwindIcon = () => <Icon src="/logo/Tailwind CSS.png" alt="Tailwind CSS" />;
const FigmaIconSvg = () => <Icon src="/logo/figma.png" alt="Figma" />;

// New Icons for Machine Learning
const TensorFlowIcon = () => <Icon src="/logo/icons8-tensorflow-48.png" alt="TensorFlow" />;
const NumPyIcon = () => <Icon src="/logo/icons8-numpy-48.png" alt="NumPy" />;
const PandasIcon = () => <Icon src="/logo/Pandas.png" alt="Pandas" />;
const MatplotlibIcon = () => <Icon src="/logo/icons8-matplotlib-48.png" alt="Matplotlib" />;

// New Icons for Mobile
const FlutterIcon = () => <Icon src="/logo/flutter_icon_130936.png" alt="Flutter" />;
const KotlinIcon = () => <Icon src="/logo/icons8-kotlin-48.png" alt="Kotlin" />;

// Streamlit for Backend
const StreamlitIcon = () => <Icon src="/logo/icons8-streamlit-48.png" alt="Streamlit" />;

// SVG Icons for frameworks without PNG versions
const ReactIcon = () => (
  <svg className="w-[65px] h-[65px] p-1" viewBox="0 0 65 65" fill="none">
    <circle cx="32.5" cy="32.5" r="10" stroke="#61DAFB" strokeWidth="2" />
    <ellipse cx="32.5" cy="32.5" rx="25" ry="10" stroke="#61DAFB" strokeWidth="2" fill="none" />
    <ellipse cx="32.5" cy="32.5" rx="25" ry="10" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 32.5 32.5)" />
    <ellipse cx="32.5" cy="32.5" rx="25" ry="10" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 32.5 32.5)" />
  </svg>
);

const NextIcon = () => (
  <svg className="w-[60px] h-[60px] p-1" viewBox="0 0 60 60" fill="none">
    <ellipse cx="30" cy="30" rx="28" ry="28" fill="white" />
    <path d="M30.5 0C13.6773 0 0 13.6773 0 30.5C0 47.3227 13.6773 61 30.5 61C35.8375 61 40.8414 59.618 45.1781 57.2352L23.0656 26.3539V43.7961H19.825V19.9203H23.0656L47.132 56.0438C55.4719 50.6109 61 41.2227 61 30.5C61 13.6773 47.3227 0 30.5 0ZM41.032 40.3172L37.4578 34.932V19.9203H41.032V40.3172Z" fill="black" />
  </svg>
);

const ViteIcon = () => (
  <svg className="w-[60px] h-[60px] p-2" viewBox="0 0 60 60" fill="none">
    <path d="M30 10L35 20L45 25L35 30L30 40L25 30L15 25L25 20L30 10Z" fill="#646CFF" />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-[60px] h-[60px] p-2" viewBox="0 0 60 60" fill="none">
    <rect x="8" y="15" width="44" height="30" rx="2" fill="#68A063" />
    <rect x="18" y="10" width="24" height="5" fill="#68A063" />
    <rect x="18" y="45" width="24" height="5" fill="#68A063" />
  </svg>
);

// Timeline Section Component
function TimelineSection() {
  const timelineData = [
    {
      title: "2026",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Current year - Continuing professional growth
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Rocket className="w-4 h-4 text-green-400" />
              <span className="font-medium">Freelancer</span>
              <span className="text-neutral-500">Ongoing</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Advanced into professional development and specialized in AI/ML
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">Passed Thesis - Smart Classroom</span>
              <span className="text-neutral-500">Dec 2025</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="font-medium">Full Stack Developer & ML Engineer Intern at Cawil.AI</span>
              <span className="text-neutral-500">Jun 2025 - Aug 2025</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Computer Vision & NLP Development</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Developed Smart Classroom IoT System (Thesis)</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Created Automata Visualizer Tools</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Thesis.png"
              alt="Smart Classroom Thesis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/logomaker.jpg"
              alt="Logo Maker AI"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/SmartClassroom.jpg"
              alt="Smart Classroom"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/taghub.jpg"
              alt="TagBase"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/sntch.jpg"
              alt="Sntch"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/echocheck.png"
              alt="Echocheck"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built major projects and learned Machine Learning
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Built SmartWater IoT Project</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Learned Machine Learning fundamentals</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Rocket className="w-4 h-4 text-green-400" />
              <span className="font-medium">Started Freelance Career</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/SmartWater.png"
              alt="SmartWater"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/TruthChain.png"
              alt="Truth Chain"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Focused on mastering programming fundamentals
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Mastered Java & Python Programming (OOP)</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Learned HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and more</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>UI/UX Design with Figma</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started my Computer Science journey at DLSUD
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Enrolled at De La Salle University - Dasmariñas</span>
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Bachelor of Science in Computer Science</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/dlsudlogo.jfif"
              alt="SmartWater"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Computer Networking specialization
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Computer Networking Specialization</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Technical foundations in hardware
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Troubleshooting & Computer Hardware Specialization</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={timelineData} />;
}
