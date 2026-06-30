import Navbar from './components/Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { GraduationCap, Briefcase } from 'lucide-react';
import FloatingLines from './components/FloatingLines'
import { motion } from "framer-motion";

function MainPortfolio() {
  return (
    <>
    

    <div className="min-h-screen">
      <Navbar />
      

      <motion.section initial={{opacity: 0, y:60 }} whileInView={{opacity:1, y:0}} transition={{duration: 0.6}}  className='max-w-6xl mx-auto bg-white rounded-3xl shadow-xl mb-20 px-5 mt-30'>
          <section id="about" className="h-auto pt-4 pb-5 flex items-center px-5 py-10 overflow-hidden">

            {/* main section */}

              <div className="max-w-6xl w-full mx-auto md:p-10 grid md:grid-cols-2 gap-10 items-center">

                  {/* left side */}
                  <div className="flex flex-col max-w-xl space-y-6">

                    <span className="font-bold text-sm uppercase">
                      About Me
                    </span>

                    

                    <h1 className="text-xl md:text-3xl font-bold text-red-wine leading-tight">
                      Hi, I'm Disha Jagetia, a computer science student building web applications and exploring how technology solves real-world problems.
                    </h1>

                    <p className="text-md md:text-lg text-(--text-secondary)">
                      I've worked with <span className="font-semibold text-red-wine leading-relaxed"><i>Node.js, Express, and MongoDB</i></span> to build APIs and backend systems across multiple projects, focusing on clean structure and functionality.
                    </p>

                    <p className="text-md md:text-lg text-(--text-secondary)">
                      Alongside development, I've also worked on data analysis using real-world datasets, which helps me approach problems with a more structured and analytical mindset.
                    </p>

                    <div className="border-l-2 border-blush pl-4">
                      <p className="text-sm italic text-(--text-muted)">
                        Outside of tech, I enjoy cross-stitching and Kathak — both teaching me patience and attention to detail.
                      </p>
                    </div>

                  </div>

                  {/* RIGHT SIDE */}
                  <div className="grid grid-cols-2 gap-5 self-start">

                    {/* FEATURE CARD */}
                    <div className="col-span-2 bg-red-wine text-oat-milk p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
                      

                      <div className="flex items-center gap-2">
                        <GraduationCap size={18} />
                        <h3 className="font-semibold">Education</h3>
                      </div>
                    
                      <p className="text-sm opacity-90 mt-1">
                        BSC CS (3rd Year) <br/>
                        <u>SVKM's Mithibai College (Vile Parle)<br/></u>
                        SEM IV SGPA - 8.95
                      </p>

                    </div>


                    <div className="col-span-2 bg-white p-5 rounded-2xl border border-border shadow-sm hover:scale-[1.02] transition-all">

                      <div className="flex items-center gap-2">
                        <Briefcase size={16} className="text-red-wine opacity-70" />
                        <h3 className="font-semibold text-red-wine">Built</h3>
                      </div>
                      <p className="text-sm text-(--text-secondary) mt-2">
                      Developed REST APIs, CRUD-based systems, and full-stack applications including:
                        <br/>
                        • Bookstore API (Node.js, Express)  <br/>
                        • Blogging platform (Node.js, EJS, MongoDB)   <br/>
                        • Task Manager (Frontend + local storage)  <br/>
                        • Shopify e-commerce store  <br/>
                        • Data analysis on large datasets (~200K records) <br/>
                      </p>
                    </div>

                      {/* pill section */}
                    <div className="col-span-2 flex flex-wrap pt-2 gap-1">
                      {[
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "React.js",
                        "Dairy Management App Backend",
                        "Uber Kaggle dataset analysis"
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="px-5 py-2 bg-white border border-border rounded-full text-sm text-red-wine shadow-sm hover:text-oat-milk hover:bg-red-wine"
                        >
                          {item}
                        </div>
                      ))}
                  </div>
              </div>
            </div>
          </section>
        </motion.section>
    </div>
    <Skills/>
    <Projects />
    <Contact />
    </>
  );
};

export default MainPortfolio;