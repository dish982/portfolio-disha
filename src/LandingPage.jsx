import profileImg from './assets/disha_img_lightbg.png';

function LandingPage({ onEnter }) {
  return (
    <section className="h-screen w-full bg-[#1a1012] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 max-w-[60%] md:max-w-5xl bg-oat-milk rounded-xl border-2 p-3 md:p-0">
        
        {/* Left: Image */}
        <div>
          <div className="">
             <img src={profileImg} className="md:w-80 rounded-2xl" />
          </div>
        </div>

        {/* Right: Intro Text */}
        <div className="p-5">
          <h1 className="text-5xl md:text-6xl font-bold text-red-wine pr-5">Disha Jagetia</h1>
          <p className="text-lg md:text-xl text-red-wine/80 mt-4 max-w-sm leading-relaxed">
            Web Developer and Student
          </p>
          
          {/* Action Link */}
          <button onClick={onEnter}
            className="mt-8 px-4 py-4 text-xl md:text-2xl font-bold text-oat-milk rounded-md transition-all bg-red-wine hover:bg-oat-milk hover:text-red-wine hover:border-2">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;