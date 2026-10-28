import Navbar from './components/Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from "framer-motion";

function MainPortfolio() {
  return (
    <>
    

    <div className="min-h-screen">
      <Navbar />
      

      <motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto bg-surface rounded-3xl shadow-xl mb-20 px-5 mt-30"
>
  <section id="about" className="h-auto pt-4 pb-5 flex items-center px-5 py-10 overflow-hidden">
    <div className="max-w-6xl w-full mx-auto md:p-10 grid md:grid-cols-2 gap-10 items-center">

      {/* left side */}
      <div className="flex flex-col max-w-xl space-y-6">
        <span className="font-bold text-xs uppercase tracking-widest text-sage-ink">
          About Me
        </span>

        <h1 className="text-xl md:text-3xl font-bold text-heading leading-tight">
          Hi, I'm Disha Jagetia, a computer science student building web
          applications and exploring how technology solves real-world problems.
        </h1>

        <p className="text-md md:text-lg text-ink leading-relaxed">
          I've worked with{" "}
          <span className="font-semibold text-accent italic">
            Node.js, Express, and MongoDB
          </span>{" "}
          to build APIs and backend systems across multiple projects, focusing
          on clean structure and functionality.
        </p>

        <p className="text-md md:text-lg text-ink leading-relaxed">
          Alongside development, I've also worked on data analysis using
          real-world datasets, which helps me approach problems with a more
          structured and analytical mindset.
        </p>

        <div className="border-l-2 border-sage-ink pl-4">
          <p className="text-sm italic text-ink-muted">
            Outside of tech, I enjoy cross-stitching and Kathak — both teaching
            me patience and attention to detail.
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="grid grid-cols-2 gap-5 self-start">

        {/* Education */}
        <div className="col-span-2 bg-feature text-on-feature p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} />
            <h3 className="font-semibold">Education</h3>
          </div>
          <p className="text-sm opacity-90 mt-1">
            BSc CS (3rd Year) <br />
            <u>SVKM's Mithibai College (Vile Parle)</u>
            <br />
            SEM IV SGPA - 8.95
          </p>
        </div>

        {/* Built */}
        <div className="col-span-2 bg-surface p-5 rounded-2xl border border-line shadow-sm hover:scale-[1.02] transition-all">
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-accent" />
            <h3 className="font-semibold text-heading">Built</h3>
          </div>
          <p className="text-sm text-ink-muted mt-2">
            Developed REST APIs, CRUD-based systems, and full-stack applications including:
          </p>
          <ul className="text-sm text-ink mt-2 space-y-1 list-disc pl-5 marker:text-accent">
            <li>Bookstore API (Node.js, Express)</li>
            <li>Blogging platform (Node.js, Express, MongoDB)</li>
            <li>Task Manager (Frontend + local storage)</li>
            <li>Shopify e-commerce store</li>
            <li>Data analysis on large datasets (~200K records)</li>
          </ul>
        </div>

        {/* Tool pills */}
        <div className="col-span-2 flex flex-wrap pt-2 gap-2">
          {["Node.js", "Express.js", "MongoDB", "React.js", "Python"].map((item) => (
            <div
              key={item}
              className="px-5 py-2 bg-sage-soft border border-line rounded-full text-sm text-sage-ink font-medium shadow-sm transition-colors hover:bg-feature hover:text-on-feature"
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