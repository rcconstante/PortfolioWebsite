import { Link } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Projects() {
  return (
    <div className="bg-white min-h-screen">
      <ScrollToTopButton />
      {/* Header Section */}
      <header className="px-4 sm:px-8 lg:px-[133px] pt-8 lg:pt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg sm:text-xl font-medium hover:underline">
              ← Back to Home
            </Link>
          </div>
          <div className="text-lg sm:text-xl font-medium">Code by Richhh</div>
          <div className="text-base sm:text-lg lg:text-xl font-light max-w-[600px] text-right">
            Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 lg:px-[133px] py-12 lg:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium leading-tight max-w-[1078px]">
          welcome to my realm of wild projects and awesome creations
        </h1>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-8 lg:px-[133px] pb-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Project 1 - Logo Maker AI */}
          <ProjectCard
            title="Logo Maker AI"
            image="/logomaker.jpg"
            link="https://logomaker-ai.com/"
          />

          {/* Project 2 - Ads Maker AI */}
          <ProjectCard
            title="Ads Maker AI"
            image="/adsmaker.jpg"
            link="https://adsmakerai.netlify.app/"
          />
          
          {/* Project 3 - TagHub CRM */}
          <ProjectCard
            title="Truth Chain Social"
            image="/TruthChain.png"
            link="https://truth-chain-social.netlify.app/"
          />          

          {/* Project 3 - TagHub CRM */}
          <ProjectCard
            title="TagHub CRM"
            image="/taghub.jpg"
            link="https://taghub-app.netlify.app/"
          />

          {/* Project 4 - AI Chat WorkSpace */}
          <ProjectCard
            title="AI Chat WorkSpace"
            image="/Ai.jpg"
            link="https://tgptproject.netlify.app/"
          />

          {/* Project 5 - Computer Vision */}
          <ProjectCard
            title="Computer Vision"
            image="/CompVP.png"
            link="https://github.com/rcconstante/ComputerVisionSummative"
          />

          {/* Project 6 - NeonBlitz */}
          <ProjectCard
            title="NeonBlitz"
            image="/NeonBlitz.png"
            link="https://neonblitz.netlify.app/"
          />

          {/* Project 7 - RacerPH Website */}
          <ProjectCard
            title="RacerPH Website"
            image="/RacerPH.png"
            link="https://racerph.netlify.app/"
          />

          {/* Project 8 - SmartWater */}
          <ProjectCard
            title="SmartWater"
            image="/SmartWater.png"
            link="https://github.com/rcconstante/SmartWaterApp"
          />

          {/* Project 9 - Study Space */}
          <ProjectCard
            title="Study Space"
            image="/StudySpace.png"
            link="https://github.com/rcconstante/StudySpaceThesis"
          />

          {/* Project 10 - Text Safe */}
          <ProjectCard
            title="Text Safe"
            image="/TestSafe.png"
            link="https://github.com/rcconstante/TextSafe"
          />

          {/* Project 11 - Automata Visualizer */}
          <ProjectCard
            title="Automata Visualizer"
            image="/Automata.jpg"
            link="https://automatavisualizer.netlify.app/"
          />

          {/* Project 12 - Sntch Ecommerce Website */}
          <ProjectCard
            title="Sntch Ecommerce Website"
            image="/sntch.jpg"
            link="https://sntchofficial.com/"
          />

          {/* Project 13 - DLSUD Smart Classroom */}
          <ProjectCard
            title="DLSUD - Smart Classroom"
            image="/SmartClassroom.jpg"
            link="https://github.com/rcconstante/SmartClassroomv2"
          />

          {/* Project 14 - Automata Project v2 */}
          <ProjectCard
            title="Automata Project v2"
            image="/Automata1.jpg"
            link="https://jacob-automata.netlify.app/"
          />

          {/* Project 15 - Automata Project v3 */}
          <ProjectCard
            title="Automata Project v3"
            image="/Automata2.jpg"
            link="https://brandon-automata.netlify.app/"
          />

          {/* Project 16 - Ecoflow */}
          <ProjectCard
            title="Ecoflow"
            image="/ecoflow.jpg"
            link="https://ecoflowww.netlify.app/"
          />
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
  link: string;
}

function ProjectCard({ title, image, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 lg:gap-7 group cursor-pointer">
      <div className="relative w-full rounded-[32px] lg:rounded-[42px] overflow-hidden aspect-[807/470] transition-transform hover:scale-[1.02]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
    </a>
  );
}
