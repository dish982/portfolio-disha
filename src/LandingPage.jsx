import React, { useState } from 'react';
import profileImg from './assets/disha_img_darkbg.png';
import FerroFluid from './components/FerroFluid';
import { ArrowUpRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

function LandingPage({ onEnter }) {
  // State to track when the sequence completely finishes
  const [showPortfolioLink, setShowPortfolioLink] = useState(false);

  return (
    
    <section className="relative min-h-screen md:h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-12 overflow-y-auto">
      <div className='fixed inset-0 -z-10 pointer-events-none w-full h-screen overflow-hidden bg-dark-bg'>
        <FerroFluid
          colors={["#000000", "#ffffff", "#ffffff"]}
          speed={0.5}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
        />
      </div>


      <div className="z-10 w-full max-w-[95%] sm:max-w-[85%] md:max-w-2xl h-fit bg-dark-surface rounded-2xl border-2 border-border p-5 md:p-7 font-mono text-white shadow-xl shadow-black/30 backdrop-blur-sm my-auto">
        
        {/* Terminal Header Action Bar */}
        <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10"></div>
            <div className="w-3 h-3 rounded-full bg-white/10"></div>
            <div className="w-3 h-3 rounded-full bg-white/10"></div>
          </div>
        </div>

        {/* Real-time Code Execution Stream */}
        <div className="space-y-3 text-xs sm:text-sm md:text-base leading-relaxed h-auto">
          
          <TypeAnimation
            sequence={[
              // Step 1: Prompt 1 types whoami
              'Disha> whoami',
              500,
              
              'Disha> whoami\nHi, I\'m Disha Jagetia | Web Developer & Student\nDisha> ',
              400,
              
              'Disha> whoami\nHi, I\'m Disha Jagetia | Web Developer & Student\nDisha> cd Portfolio',
              600,
              
              'Disha> whoami\nHi, I\'m Disha Jagetia | Web Developer & Student\nDisha> cd Portfolio\nDisha/Portfolio> ',
              400,

              'Disha> whoami\nHi, I\'m Disha Jagetia | Web Developer & Student\nDisha> cd Portfolio\nDisha/Portfolio> npm run dev',
              800,

              'Disha> whoami\nHi, I\'m Disha Jagetia | Web Developer & Student\nDisha> cd Portfolio\nDisha/Portfolio> npm run dev\n',
              10,
              () => {
                setShowPortfolioLink(true);
              }
            ]}
            wrapper="pre"
            cursor={!showPortfolioLink}
            speed={60}
            style={{ 
              whiteSpace: 'pre-wrap', 
              fontFamily: 'monospace',
              display: 'block',
              color: 'inherit',
              margin: 0
            }}
            className="font-mono text-rose-quartz"
          />

          <div 
            className={`pt-3 border-t border-border transition-all duration-500 ease-out ${
              showPortfolioLink ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <button 
              onClick={onEnter}
              disabled={!showPortfolioLink}
              className="group flex items-center gap-2 font-mono font-bold text-white text-base sm:text-lg focus:outline-none transition-colors duration-200 text-left cursor-pointer hover:text-rose-quartz w-full sm:w-auto"
            >
              <span className="text-white/50 font-black animate-pulse">&gt;</span> 
              <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white flex items-center gap-1.5 break-all sm:break-normal">
                Click here to view my portfolio
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
              </span>
            </button>
          </div>

        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center z-10 w-full max-w-sm pl-4">
        <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-4xl overflow-hidden p-1 bg-dark-surface shadow-2xl">
          <div className="w-full h-full rounded-[1.8rem] bg-dark-bg overflow-hidden flex items-center justify-center">
            <img 
              src={profileImg} 
              alt="Disha's photo"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

export default LandingPage;