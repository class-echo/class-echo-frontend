import { useEffect, useState } from "react";
import { School, Users, Zap, Cog, BookOpenText, Presentation } from "lucide-react";
import LogoDark from "../assets/class-echo-logo-dark.png";

const HeroSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // A small delay to ensure the component is mounted before starting the animation
    const timeoutId = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)]">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="simpleGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M80 0H0V80" fill="none" stroke="var(--grid-color)" strokeWidth="0.6" />
          </pattern>
          <mask id="fadeMask">
            <linearGradient id="fadeGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="30%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>
          <rect width="100%" height="100%" fill="url(#simpleGrid)" mask="url(#fadeMask)" />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* LEFT TEXT */}
          <div 
            className={`text-left flex flex-col justify-center transition-all duration-1000 ease-out 
              ${hasAnimated ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0'}`
            }>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empowering Schools
              <br /> with Class Echo
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-xl">
              A modern platform for teachers, students, and parents to connect,
              manage academics, and streamline communication.
            </p>
            <div className="mt-8 flex gap-4">
              <a className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] font-medium hover:opacity-90 transition">
                Get Started
              </a>
              <a className="inline-flex items-center justify-center rounded-full px-6 py-3 ring-1 ring-[var(--text-color)] text-[var(--text-color)] hover:bg-[var(--text-color)]/10 transition">
                Learn More
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Graph with Icons */}
          <div 
            className={`flex items-center justify-center mt-8 md:mt-0 transition-all duration-1000 ease-out 
              ${hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'}`
            }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              className="w-full h-auto max-w-[90vw] md:max-w-xl"
            >
              {/* CONNECTION PATHS */}
              <g stroke="var(--text-color)" strokeWidth="1.5" className="opacity-70">
                <path id="p1" d="M400 300 L50 300" fill="none" />
                <path id="p2" d="M400 300 L750 300" fill="none" />
                <path id="p3" d="M320 300 L190 150" fill="none" />
                <path id="p4" d="M260 300 L120 460" fill="none" />
                <path id="p5" d="M485 300 L610 150" fill="none" />
                <path id="p6" d="M540 300 L680 460" fill="none" />
                <path id="p7" d="M190 150 L90 150" fill="none" />
                <path id="p8" d="M120 460 L60 460" fill="none" />
                <path id="p9" d="M610 150 L710 150" fill="none" />
                <path id="p10" d="M680 460 L740 460" fill="none" />
              </g>

              {/* MOVING DOTS */}
              
              <g>
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle key={i} r="6" fill="blue">
                    <animateMotion
                      dur="1.5s"
                      repeatCount="indefinite"
                      rotate="auto"
                      begin={`${i * 0.3}s`}
                      keyPoints="1;0"
                      keyTimes="0;1"
                    >
                      <mpath xlinkHref={`#p${i + 1}`} />
                    </animateMotion>
                    {/* Hide circle until animation begins */}
                    <set attributeName="visibility" to="hidden" begin="0s" />
                    <set attributeName="visibility" to="visible" begin={`${i * 0.3 + 0.01}s`} />
                    <animate
                      attributeName="r"
                      values="4;8;4"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="fill"
                      values="blue;cyan;lightblue"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>


              {/* Central Logo */}
              <foreignObject x="361" y="260" width="80" height="80">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center transition duration-300 hover:scale-110 focus:scale-110 active:scale-110">
                  <img
                    src={LogoDark}
                    alt="Class Echo Logo"
                    className="w-20 h-20"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/48x48/666666/ffffff?text=Logo";
                    }}
                  />
                </div>
              </foreignObject>

              {/* Left Side Icons */}
              <foreignObject x="28" y="118" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <BookOpenText className="w-10 h-10 text-white" />
                </div>
              </foreignObject>

              <foreignObject x="18" y="268" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </foreignObject>

              <foreignObject x="28" y="428" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </foreignObject>

              {/* Right Side Icons */}
              <foreignObject x="708" y="118" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <School className="w-10 h-10 text-white" />
                </div>
              </foreignObject>

              <foreignObject x="720" y="268" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <Cog className="w-10 h-10 text-white" />
                </div>
              </foreignObject>

              <foreignObject x="708" y="428" width="64" height="64">
                <div className="w-16 h-16 rounded-2xl bg-gray-800 flex items-center justify-center 
                  transition-all duration-300 
                  hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-600 
                  hover:scale-110 focus:scale-110 active:scale-110">
                  <Presentation className="w-10 h-10 text-white" />
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;