import { motion } from "framer-motion";
import { Code, Code2, BarChart2, Database, Wrench} from 'lucide-react';
import { useState } from "react";

const skillsData = [
  {
    category: "Development",
    description: "Frontend, backend and styling technologies I use to build web applications.",
    icon: "code",
    skills: [
      { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", proficiency: 90 },
      { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 85},
      { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 70  },
      { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", proficiency: 55 },
      { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", proficiency: 55 },
      { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", proficiency: 20},
      { name: "Tailwind", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", proficiency: 45 },
      { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", proficiency: 60 },
    ]
  },
  {
    category: "Data & Analysis",
    description: "Data analysis and visualization using Python ecosystem.",
    icon: "chart",
    skills: [
      { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: 40 },
      { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", proficiency: 75 },
      { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", proficiency: 50 },
      { name: "EDA", img: "https://img.icons8.com/color/48/analytics.png", proficiency: 75 },
    ]
  },
  {
    category: "Database",
    description: "Databases I work with to store and manage data.",
    icon: "db",
    skills: [
      { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", proficiency: 55 },
      { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" , proficiency: 50 },
    ]
  },
  {
    category: "Tools",
    description: "Tools and platforms that help me build and ship efficiently.",
    icon: "tool",
    skills: [
      { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", proficiency: 65 },
      { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", proficiency: 65 },
      { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", proficiency: 60},
      { name: "Shopify", img: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg", proficiency: 85 },
    ]
  }
];

function Skills() {

  const [activeSkill, setActiveSkill] = useState(null);

  return (
  <div id="skills" className="bg-oat-milk min-h-screen">
    <motion.section initial={{opacity: 0, y:60 }} whileInView={{opacity:1, y:0}} transition={{duration: 0.6}}  className='max-w-6xl mx-auto bg-white rounded-3xl shadow-xl mb-20 px-5 mt-30'>
      <section className="pt-3 md:p-10">
        <span className=" font-bold text-sm uppercase">My Skills</span><br/>
        <span className="font-serif text-5xl text-[#1a1012] hidden md:block">Skills</span>
        <div>
          <p className="text-black mt-2">Technologies and tools I use to build, analyze,<br/> and solve real-world problems.</p>
        </div>

        {/* main four cards */}
        <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2 md:gap-6">
          
          {/* --------------------Development card container----------------- */}

          <div className="bg-white/50 border border-[#8B2D38]/10 rounded-xl p-8 shadow-sm">
            {/* header (icon+text) */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 bg-[#FDE2E4] rounded-2xl flex items-center justify-center text-[#8B2D38] font-bold">{"</>"}</div>     
              {/* title+subtitle */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-[#4A1D1F]">Development</h3>
                <p className="text-[10px] text-[#4A1D1F]/60">Frontend, backend and styling technologies.</p>     
              </div>
            </div>
            
            {/* Inner Grid for Icons */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
            
            {/* .map() logic starts here */}
            {skillsData[0].skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                
                {/* relative + group class parent div */}
                <div onClick={
                  () => setActiveSkill(activeSkill === `dev-${index}` ? null : `dev-${index}`)
                }
                

                className=" relative group w-full aspect-square bg-white border border-[#8B2D38]/5 rounded-2xl p-3 flex items-center justify-center shadow-sm cursor-pointer select-none">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain" 
                  />
                  
                  <span className={
                    `absolute inset-0 items-center justify-center bg-blush/60 rounded-2xl text-md font-bold border-2 group-hover:shadow-lg 
                    ${activeSkill === `dev-${index}` ? 'flex shadow-[0_0_20px_rgba(139,45,56,0.6)]' 
                      : 'hidden group-hover:flex group-hover:shadow-[0_0_20px_rgba(139,45,56,0.4)]'} `
                  }>
                    {skill.proficiency}%
                  </span>


                </div>
                
                <span className="text-[10px] font-bold text-[#4A1D1F]/70">
                  {skill.name}
                </span>

              </div>
            ))}

            
            </div>
          </div>
          


          {/*---------------- Data analysis card ----------------------*/}
          <div className="bg-white/50 border border-[#8B2D38]/10 rounded-xl p-8 shadow-sm">
            {/* header (icon+text) */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 bg-[#FDE2E4] rounded-2xl flex items-center justify-center text-[#8B2D38] font-bold">
                <BarChart2 size={24} strokeWidth={2.5} />
                </div>     
              {/* title+subtitle */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-[#4A1D1F]">Data & Analysis</h3>
                <p className="text-[10px] text-[#4A1D1F]/60">Data analysis and visualization using Python ecosystem.</p>     
              </div>
            </div>
            
            {/* Inner Grid for Icons */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">

            {/* .map() logic starts here */}
            {skillsData[1].skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                
                {/* relative + group class parent div */}
                <div onClick={
                  () => setActiveSkill(activeSkill === `data-${index}` ? null : `data-${index}`)
                }
                className=" relative group w-full aspect-square bg-white border border-[#8B2D38]/5 rounded-2xl p-3 flex items-center justify-center shadow-sm">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain" 
                  />

                  <span className={
                    `absolute inset-0 items-center justify-center bg-blush/60 rounded-2xl text-md font-bold border-2 group-hover:shadow-lg 
                    ${activeSkill === `data-${index}` ? 'flex shadow-[0_0_20px_rgba(139,45,56,0.6)]' 
                      : 'hidden group-hover:flex group-hover:shadow-[0_0_20px_rgba(139,45,56,0.4)]'} `
                  }>
                    {skill.proficiency}%
                  </span>
   
                </div>
                <span className="text-[10px] font-bold text-[#4A1D1F]/70">
                  {skill.name}
                </span>
              </div>
            ))}
            </div>
          </div>


          
          {/* ------------------------Database card---------------------*/}
          <div className="bg-white/50 border border-[#8B2D38]/10 rounded-xl p-8 shadow-sm">
            {/* header (icon+text) */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 bg-[#FDE2E4] rounded-2xl flex items-center justify-center text-[#8B2D38] font-bold">
                <Database size={24} strokeWidth={2.5} />
                </div>     
              {/* title+subtitle */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-[#4A1D1F]">Databases</h3>
                <p className="text-[10px] text-[#4A1D1F]/60">Databases I work with to store and manage data</p>     
              </div>
            </div>
            
            {/* Inner Grid for Icons */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">

            {/* .map() logic starts here */}
            {skillsData[2].skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">

                {/* relative + group class parent div */}
                <div onClick={
                  () => setActiveSkill(activeSkill === `db-${index}`? null : `db-${index}`)
                } 
                className=" relative group w-full aspect-square bg-white border border-[#8B2D38]/5 rounded-2xl p-3 flex items-center justify-center shadow-sm">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain" 
                  />
                  
                  <span className={
                    `absolute inset-0 items-center justify-center bg-blush/60 rounded-2xl text-md font-bold border-2 group-hover:shadow-lg 
                    ${activeSkill === `db-${index}` ? 'flex shadow-[0_0_20px_rgba(139,45,56,0.6)]' 
                      : 'hidden group-hover:flex group-hover:shadow-[0_0_20px_rgba(139,45,56,0.4)]'} `
                  }>
                    {skill.proficiency}%
                  </span>

                </div>
                <span className="text-[10px] font-bold text-[#4A1D1F]/70">
                  {skill.name}
                </span>
              </div>
            ))}
            </div>
          </div>
          
          {/* -----------------------------Tools------------------------------------------- */}
          <div className="bg-white/50 border border-[#8B2D38]/10 rounded-xl p-8 shadow-sm">
            {/* header (icon+text) */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 bg-[#FDE2E4] rounded-2xl flex items-center justify-center text-[#8B2D38] font-bold">
                <Wrench size={24} strokeWidth={2.5} />
                </div>     
              {/* title+subtitle */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-serif text-[#4A1D1F]">Tools</h3>
                <p className="text-[10px] text-[#4A1D1F]/60">Tools and platforms that help me ship efficiently.</p>     
              </div>
            </div>
            
            {/* Inner Grid for Icons */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">

            {/* .map() logic starts here */}
            {skillsData[3].skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2">

                {/* relative + group class parent div */}
                <div onClick={
                  () => setActiveSkill(activeSkill === `tools-${index}`? null : `tools-${index}`)
                } className=" relative group w-full aspect-square bg-white border border-[#8B2D38]/5 rounded-2xl p-3 flex items-center justify-center shadow-sm">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-10 h-10 object-contain" 
                  />

                  <span className={
                    `absolute inset-0 items-center justify-center bg-blush/60 rounded-2xl text-md font-bold border-2 group-hover:shadow-lg 
                    ${activeSkill === `tools-${index}` ? 'flex shadow-[0_0_20px_rgba(139,45,56,0.6)]' 
                      : 'hidden group-hover:flex group-hover:shadow-[0_0_20px_rgba(139,45,56,0.4)]'} `
                  }>
                    {skill.proficiency}%
                  </span>
                

                </div>
                <span className="text-[10px] font-bold text-[#4A1D1F]/70">
                  {skill.name}
                </span>
              </div>
            ))}
            </div>
          </div>

        </div>
      </section>
    </motion.section> 
  </div>
  );
}

export default Skills;