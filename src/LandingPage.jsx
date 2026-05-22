import profileImg from './assets/disha_img_lightbg.png';

function LandingPage({ onEnter }) {
  return (
    <section className="h-screen w-full bg-[#1a1012] flex items-center justify-center">
      <div className="flex flex-row items-center gap-2 p-3 max-w-5xl bg-oat-milk rounded-xl border-2 mx-4">
        
        {/* Left: Image */}
        <div>
          <div className="w-1/2 max-w-35 md:max-w-xs shrink-0">
             <img src={profileImg} className="w-full h-auto rounded-2xl object-contain" />
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="p-2 md:p-5 w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-red-wine leading-tight md:text-6xl">
            Disha <br className="md:hidden" /> Jagetia
          </h1>
          <p className="text-xs md:text-xl text-red-wine/80 mt-1 md:mt-4 leading-tight">
            Web Developer and Student
          </p>

          <button onClick={onEnter}
            className="mt-3 px-3 py-1.5 text-xs md:mt-8 md:px-4 md:py-4 md:text-2xl font-bold text-oat-milk rounded-md transition-all bg-red-wine hover:bg-oat-milk hover:text-red-wine hover:border-2 w-max">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;