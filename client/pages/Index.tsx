import { Home, Menu, Box, User, FileText, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Index() {
  return (
    <div className="w-full bg-white scroll-smooth">
      <ScrollToTopButton />
      {/* Hero Section */}
      <section className="relative w-full h-screen max-h-[972px] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/picture1.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top Header Text */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 text-white/80 font-dm-sans text-sm md:text-base">
          Code by Richhh
        </div>

        {/* Top Right Description */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 text-white/80 font-dm-sans text-xs md:text-sm text-right max-w-[280px] md:max-w-md leading-relaxed hidden md:block">
          Passionate Creative Designer and Developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 text-center px-4 w-full overflow-hidden">
          <div className="inline-flex animate-[scroll_15s_linear_infinite] whitespace-nowrap">
            <h1 className="font-dm-sans font-medium text-white leading-none inline-block px-8">
              <span className="text-[clamp(3rem,12vw,15rem)]">
                Creative Developer & Designer
              </span>
            </h1>
            <h1 className="font-dm-sans font-medium text-white leading-none inline-block px-8">
              <span className="text-[clamp(3rem,12vw,15rem)]">
                Creative Developer & Designer
              </span>
            </h1>
            <h1 className="font-dm-sans font-medium text-white leading-none inline-block px-8">
              <span className="text-[clamp(3rem,12vw,15rem)]">
                Creative Developer & Designer
              </span>
            </h1>
          </div>
        </div>

        {/* Floating Navigation Bar */}
        <div className="absolute bottom-24 z-20 flex items-center gap-3 px-5 py-2.5 bg-portfolio-gray-darkest rounded-[18px]">
          <button className="w-12 h-12 rounded-full bg-portfolio-gray-light flex items-center justify-center transition-all hover:scale-110">
            <Home className="w-6 h-6 text-white" />
          </button>
          <a href="#impressive-works" className="w-12 h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Menu className="w-6 h-6 text-white" />
          </a>
          <Link to="/projects" className="w-12 h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Box className="w-6 h-6 text-white" />
          </Link>
          <Link to="/skills" className="w-12 h-12 rounded-full overflow-hidden transition-all hover:scale-110 bg-portfolio-gray-darker flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </Link>
          <a href="/RichmondC.pdf" download className="w-12 h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <FileText className="w-6 h-6 text-white" />
          </a>
          <a href="https://github.com/rcconstante" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <Github className="w-6 h-6 text-white" />
          </a>
          <button onClick={() => navigator.share?.({ url: window.location.href, title: document.title })} className="w-12 h-12 rounded-full bg-portfolio-gray-darker flex items-center justify-center transition-all hover:scale-110">
            <ExternalLink className="w-6 h-6 text-white" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-4 md:px-8 lg:px-[133px] py-16 md:py-20 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Column - Main Description */}
          <div className="flex-1 max-w-[1015px]">
            <p className="font-dm-sans font-medium text-[clamp(1.5rem,4vw,2.5rem)] leading-normal text-black">
              Driven by curiosity and a love for design, I create simple,
              functional, and visually striking digital experiences. As a
              student, I'm always learning and exploring new ideas.
            </p>
          </div>

          {/* Right Column - Sub Description and CTA */}
          <div className="flex flex-col items-start lg:items-end gap-4 max-w-[487px]">
            <p className="font-dm-sans font-light text-[clamp(1rem,2vw,1.375rem)] leading-normal text-portfolio-gray-dark text-left lg:text-right">
              The fusion of my passion for design, development, and seamless
              user experiences places me at the intersection of creativity and
              technology in the digital world.
            </p>
            <Link
              to="/skills"
              className="flex items-center gap-3 mt-4 group transition-transform hover:translate-x-2"
            >
              <span className="font-dm-sans font-normal text-[clamp(1.25rem,2vw,1.875rem)] text-black">
                More about me
              </span>
              <svg
                className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:rotate-45"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M19.403 16.4415C18.853 16.3915 18.3666 16.7968 18.3166 17.3468C18.2666 17.8969 18.6719 18.3833 19.2219 18.4333L19.403 16.4415ZM29.625 18.3749L30.6209 18.2843C30.5772 17.8036 30.1963 17.4227 29.7156 17.379L29.625 18.3749ZM29.5667 28.778C29.6167 29.328 30.1031 29.7333 30.6531 29.6833C31.2031 29.6333 31.6084 29.1469 31.5584 28.5969L29.5667 28.778ZM17.6679 28.9179C17.2773 29.3084 17.2773 29.9415 17.6679 30.3321C18.0584 30.7226 18.6915 30.7226 19.0821 30.3321L17.6679 28.9179ZM19.2219 18.4333L29.5345 19.3708L29.7156 17.379L19.403 16.4415L19.2219 18.4333ZM28.6291 18.4654L29.5667 28.778L31.5584 28.5969L30.6209 18.2843L28.6291 18.4654ZM28.9179 17.6678L17.6679 28.9179L19.0821 30.3321L30.3321 19.082L28.9179 17.6678ZM41 24C41 33.3888 33.3888 41 24 41V43C34.4934 43 43 34.4934 43 24H41ZM24 41C14.6112 41 7 33.3888 7 24H5C5 34.4934 13.5066 43 24 43V41ZM7 24C7 14.6112 14.6112 7 24 7V5C13.5066 5 5 13.5066 5 24H7ZM24 7C33.3888 7 41 14.6112 41 24H43C43 13.5066 34.4934 5 24 5V7Z"
                  fill="black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impressive Works Section */}
      <section id="impressive-works" className="w-full px-4 md:px-8 lg:px-[133px] pb-16 md:pb-20 lg:pb-[100px]">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-[66px]">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
            <h2 className="font-inter font-medium text-[clamp(2.5rem,8vw,6.25rem)] leading-normal text-black">
              Impressive Works
            </h2>
            <p className="font-dm-sans font-light text-[clamp(1rem,2vw,1.375rem)] leading-normal text-black max-w-[428px]">
              HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN
              AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Project 1 - Logo Maker AI */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="w-full h-auto rounded-[42px] overflow-hidden aspect-[807/470]">
                <img src="/logomaker.jpg" alt="Logo Maker AI" className="w-full h-full object-cover" />
              </div>
              <a
                href="https://logomaker-ai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-transform hover:translate-x-2"
              >
                <svg
                  className="w-14 h-14 md:w-[68px] md:h-[68px] flex-shrink-0 transition-transform group-hover:rotate-45"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <path
                    d="M35.8798 25.3055C35.5189 24.8874 34.8875 24.8411 34.4694 25.2021C34.0514 25.563 34.0051 26.1944 34.366 26.6125L35.8798 25.3055ZM41.8899 33.7971L42.6692 34.4238C42.9717 34.0476 42.9623 33.509 42.6468 33.1436L41.8899 33.7971ZM34.6213 41.2399C34.2752 41.6703 34.3435 42.2997 34.7739 42.6458C35.2043 42.992 35.8337 42.9236 36.1799 42.4933L34.6213 41.2399ZM25.9649 33.0749C25.4127 33.0845 24.9728 33.54 24.9825 34.0922C24.9921 34.6444 25.4476 35.0842 25.9998 35.0746L25.9649 33.0749ZM34.366 26.6125L41.133 34.4506L42.6468 33.1436L35.8798 25.3055L34.366 26.6125ZM41.1106 33.1704L34.6213 41.2399L36.1799 42.4933L42.6692 34.4238L41.1106 33.1704ZM41.8725 32.7972L25.9649 33.0749L25.9998 35.0746L41.9074 34.7969L41.8725 32.7972ZM46.1648 45.7452C39.6428 52.4989 28.8806 52.6868 22.1269 46.1647L20.7375 47.6034C28.2859 54.8928 40.3142 54.6828 47.6035 47.1345L46.1648 45.7452ZM22.1269 46.1647C15.3731 39.6427 15.1852 28.8805 21.7073 22.1268L20.2686 20.7375C12.9793 28.2858 13.1892 40.3141 20.7375 47.6034L22.1269 46.1647ZM21.7073 22.1268C28.2293 15.373 38.9915 15.1852 45.7452 21.7072L47.1346 20.2685C39.5862 12.9792 27.5579 13.1891 20.2686 20.7375L21.7073 22.1268ZM45.7452 21.7072C52.499 28.2292 52.6869 38.9914 46.1648 45.7452L47.6035 47.1345C54.8928 39.5862 54.6829 27.5579 47.1346 20.2685L45.7452 21.7072Z"
                    fill="black"
                  />
                </svg>
                <span className="font-inter font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
                  Logo Maker AI
                </span>
              </a>
            </div>

            {/* Project 2 - Ads Maker AI */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="w-full h-auto rounded-[42px] overflow-hidden aspect-[807/470]">
                <img src="/adsmaker.jpg" alt="Ads Maker AI" className="w-full h-full object-cover" />
              </div>
              <a
                href="https://adsmakerai.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-transform hover:translate-x-2"
              >
                <svg
                  className="w-14 h-14 md:w-[68px] md:h-[68px] flex-shrink-0 transition-transform group-hover:rotate-45"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <path
                    d="M35.8798 25.3055C35.5188 24.8874 34.8874 24.8411 34.4693 25.2021C34.0513 25.563 34.005 26.1944 34.3659 26.6125L35.8798 25.3055ZM41.8898 33.7971L42.6691 34.4238C42.9716 34.0476 42.9622 33.509 42.6467 33.1436L41.8898 33.7971ZM34.6212 41.2399C34.2751 41.6703 34.3434 42.2997 34.7738 42.6458C35.2042 42.992 35.8337 42.9236 36.1798 42.4933L34.6212 41.2399ZM25.9648 33.0749C25.4126 33.0845 24.9727 33.54 24.9824 34.0922C24.992 34.6444 25.4475 35.0842 25.9997 35.0746L25.9648 33.0749ZM34.3659 26.6125L41.1329 34.4506L42.6467 33.1436L35.8798 25.3055L34.3659 26.6125ZM41.1105 33.1704L34.6212 41.2399L36.1798 42.4933L42.6691 34.4238L41.1105 33.1704ZM41.8724 32.7972L25.9648 33.0749L25.9997 35.0746L41.9073 34.7969L41.8724 32.7972ZM46.1647 45.7452C39.6427 52.4989 28.8805 52.6868 22.1268 46.1647L20.7375 47.6034C28.2858 54.8928 40.3141 54.6828 47.6034 47.1345L46.1647 45.7452ZM22.1268 46.1647C15.373 39.6427 15.1852 28.8805 21.7072 22.1268L20.2685 20.7375C12.9792 28.2858 13.1891 40.3141 20.7375 47.6034L22.1268 46.1647ZM21.7072 22.1268C28.2292 15.373 38.9914 15.1852 45.7452 21.7072L47.1345 20.2685C39.5861 12.9792 27.5578 13.1891 20.2685 20.7375L21.7072 22.1268ZM45.7452 21.7072C52.4989 28.2292 52.6868 38.9914 46.1647 45.7452L47.6034 47.1345C54.8928 39.5862 54.6828 27.5579 47.1345 20.2685L45.7452 21.7072Z"
                    fill="black"
                  />
                </svg>
                <span className="font-inter font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
                  Ads Maker AI
                </span>
              </a>
            </div>

            {/* Project 3 - TagHub CRM */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="w-full h-auto rounded-[42px] overflow-hidden aspect-[807/470]">
                <img src="/taghub.jpg" alt="TagHub CRM" className="w-full h-full object-cover" />
              </div>
              <a
                href="https://taghub-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-transform hover:translate-x-2"
              >
                <svg
                  className="w-14 h-14 md:w-[68px] md:h-[68px] flex-shrink-0 transition-transform group-hover:rotate-45"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <path
                    d="M35.8798 25.3054C35.5189 24.8873 34.8875 24.841 34.4694 25.2019C34.0514 25.5628 34.0051 26.1943 34.366 26.6124L35.8798 25.3054ZM41.8899 33.797L42.6692 34.4236C42.9717 34.0475 42.9623 33.5089 42.6468 33.1435L41.8899 33.797ZM34.6213 41.2398C34.2752 41.6702 34.3435 42.2996 34.7739 42.6457C35.2043 42.9918 35.8337 42.9235 36.1799 42.4931L34.6213 41.2398ZM25.9649 33.0748C25.4127 33.0844 24.9728 33.5399 24.9825 34.0921C24.9921 34.6443 25.4476 35.0841 25.9998 35.0745L25.9649 33.0748ZM34.366 26.6124L41.133 34.4505L42.6468 33.1435L35.8798 25.3054L34.366 26.6124ZM41.1106 33.1703L34.6213 41.2398L36.1799 42.4931L42.6692 34.4236L41.1106 33.1703ZM41.8725 32.7971L25.9649 33.0748L25.9998 35.0745L41.9074 34.7968L41.8725 32.7971ZM46.1648 45.745C39.6428 52.4988 28.8806 52.6867 22.1269 46.1646L20.7375 47.6033C28.2859 54.8926 40.3142 54.6827 47.6035 47.1344L46.1648 45.745ZM22.1269 46.1646C15.3731 39.6426 15.1852 28.8804 21.7073 22.1267L20.2686 20.7373C12.9793 28.2857 13.1892 40.314 20.7375 47.6033L22.1269 46.1646ZM21.7073 22.1267C28.2293 15.3729 38.9915 15.185 45.7452 21.7071L47.1346 20.2684C39.5862 12.9791 27.5579 13.189 20.2686 20.7373L21.7073 22.1267ZM45.7452 21.7071C52.499 28.2291 52.6869 38.9913 46.1648 45.745L47.6035 47.1344C54.8928 39.586 54.6829 27.5577 47.1346 20.2684L45.7452 21.7071Z"
                    fill="black"
                  />
                </svg>
                <span className="font-inter font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
                  TagHub CRM
                </span>
              </a>
            </div>

            {/* Project 4 - AI Chat WorkSpace */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="w-full h-auto rounded-[42px] overflow-hidden aspect-[807/470]">
                <img src="/Ai.jpg" alt="AI Chat WorkSpace" className="w-full h-full object-cover" />
              </div>
              <a
                href="https://tgptproject.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-transform hover:translate-x-2"
              >
                <svg
                  className="w-14 h-14 md:w-[68px] md:h-[68px] flex-shrink-0 transition-transform group-hover:rotate-45"
                  viewBox="0 0 68 68"
                  fill="none"
                >
                  <path
                    d="M35.8798 25.3054C35.5188 24.8873 34.8874 24.841 34.4693 25.2019C34.0513 25.5628 34.005 26.1943 34.3659 26.6124L35.8798 25.3054ZM41.8898 33.797L42.6691 34.4236C42.9716 34.0475 42.9622 33.5089 42.6467 33.1435L41.8898 33.797ZM34.6212 41.2398C34.2751 41.6702 34.3434 42.2996 34.7738 42.6457C35.2042 42.9918 35.8337 42.9235 36.1798 42.4931L34.6212 41.2398ZM25.9648 33.0748C25.4126 33.0844 24.9727 33.5399 24.9824 34.0921C24.992 34.6443 25.4475 35.0841 25.9997 35.0745L25.9648 33.0748ZM34.3659 26.6124L41.1329 34.4505L42.6467 33.1435L35.8798 25.3054L34.3659 26.6124ZM41.1105 33.1703L34.6212 41.2398L36.1798 42.4931L42.6691 34.4236L41.1105 33.1703ZM41.8724 32.7971L25.9648 33.0748L25.9997 35.0745L41.9073 34.7968L41.8724 32.7971ZM46.1647 45.745C39.6427 52.4988 28.8805 52.6867 22.1268 46.1646L20.7375 47.6033C28.2858 54.8926 40.3141 54.6827 47.6034 47.1344L46.1647 45.745ZM22.1268 46.1646C15.373 39.6426 15.1852 28.8804 21.7072 22.1267L20.2685 20.7373C12.9792 28.2857 13.1891 40.314 20.7375 47.6033L22.1268 46.1646ZM21.7072 22.1267C28.2292 15.3729 38.9914 15.185 45.7452 21.7071L47.1345 20.2684C39.5861 12.9791 27.5578 13.189 20.2685 20.7373L21.7072 22.1267ZM45.7452 21.7071C52.4989 28.2291 52.6868 38.9913 46.1647 45.745L47.6034 47.1344C54.8928 39.586 54.6828 27.5577 47.1345 20.2684L45.7452 21.7071Z"
                    fill="black"
                  />
                </svg>
                <span className="font-inter font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
                  AI Chat WorkSpace
                </span>
              </a>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center w-full">
            <Link to="/projects">
              <button className="flex items-center gap-3 px-8 md:px-[34px] py-3 md:py-[13px] rounded-[37px] border border-[#AEAEAE] transition-all hover:bg-black hover:text-white group">
              <div className="w-2.5 h-2.5 rounded-full bg-black group-hover:bg-white transition-colors"></div>
              <span className="font-inter font-normal text-lg md:text-xl text-black group-hover:text-white transition-colors">
                Explore more
              </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full px-4 md:px-8 lg:px-[133px] py-12 md:py-16 lg:py-[66px] bg-white"
      >
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-[113px]">
          {/* Contact Header */}
          <div className="max-w-[810px]">
            <p className="font-ibm-mono font-normal text-base md:text-xl text-black mb-2">
              That's all for now.
            </p>
            <h2 className="font-inter font-normal text-[clamp(2rem,6vw,4.8rem)] leading-tight text-black">
              Got a project in mind?
            </h2>
            <h3 className="font-inter font-normal text-[clamp(2rem,6vw,4.8rem)] leading-tight text-black">
              Let's talk
            </h3>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black"></div>

          {/* Contact Details and CTA */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start relative">
            {/* Email */}
            <div className="flex flex-col gap-1">
              <p className="font-inter font-normal text-base text-portfolio-gray-medium">
                Email:
              </p>
              <a
                href="mailto:r.constante.dev@gmail.com"
                className="font-inter font-normal text-xl md:text-2xl text-black hover:underline"
              >
                r.constante.dev@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <p className="font-inter font-normal text-base text-portfolio-gray-medium">
                Phone
              </p>
              <a
                href="tel:+639150365602"
                className="font-inter font-normal text-xl md:text-2xl text-black hover:underline"
              >
                +639150365602
              </a>
            </div>

            {/* Get in Touch Button */}
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
      <footer className="w-full bg-black relative overflow-hidden py-12 md:py-16 lg:py-0">
        <div className="relative w-full h-auto lg:h-[565px] flex flex-col justify-center px-4 md:px-8 lg:px-[36px]">
          {/* Top Text */}
          <div className="relative z-10 mb-4 lg:mb-0 lg:absolute lg:top-[57px] lg:left-[69px]">
            <p className="font-dm-sans font-light text-[clamp(2rem,8vw,6.25rem)] leading-tight text-white">
              your friendly chaos creator
            </p>
          </div>

          {/* Main Text */}
          <div className="relative z-10 lg:absolute lg:top-[156px] lg:left-[36px]">
            <h2 className="font-dm-sans font-medium text-[clamp(3rem,15vw,18.75rem)] leading-none text-white tracking-[0.04em]">
              Richhh
            </h2>
            <p className="text-xs text-gray-400 mt-4">
              Design inspired by a Figma Community template by @ashhhh
            </p>
          </div>

          {/* Arrow Button */}
          <div className="relative z-10 mt-8 lg:mt-0 lg:absolute lg:top-[57px] lg:right-[38px]">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-[120px] h-[120px] md:w-[142px] md:h-[142px] rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110 hover:rotate-45 mx-auto lg:mx-0"
            >
              <svg className="w-12 h-12 md:w-[73px] md:h-[73px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
