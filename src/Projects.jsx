import { motion } from "framer-motion";
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ArrowUpRight } from "lucide-react";
import projectImg1 from './assets/rest_menu.png';
import projectImg2 from './assets/projectImg2.png';
import projectImg3 from './assets/uber_choropleth.png';
import projectImg4 from './assets/file_blog.png';
import projectImg5 from './assets/hugging_face_interface.png';
import projectImg6 from './assets/stitchbydisha.png';


const projectDetails = [
    {
    title: "Scentivia Perfumes",
    description: "Worked upon this website as a part of my internship. Executing Shopify theme customization and UI/UX enhancements for a luxury perfume brand. This includes managing technical parameters like precise brand hex codes and utilizing Shopify Sidekick for efficient development. ",
    date: "May 2026",
    tools: ["Shopify", "Shopify Sidekick"],
    link: "https://scentivia.shop/",
    image: projectImg2
  },
  {
    title: "StitchByDisha",
    description: "Explored the backend flow of product management, inventory tracking, and liquid-based theme structures. This is still in development-mode thus it is password protected. If you'd like to explore the full shopping flow, feel free to drop a message in the Contact section and I’ll share the access key immediately!",
    date: "May 2026",
    tools: ["Shopify"],
    link: "https://stitchbydisha.myshopify.com",
    image: projectImg6
  },
   {
    title: "RL Environment",
    description: "A Reinforcement Learning (RL) Environment designed to automate the cleaning and validation of KYC (Know Your Customer) records. The agent must learn to categorize data issues and apply the correct processing action to maximize data integrity",
    date: "April 2026",
    tools: ["Re-inforcement learning", "Python"],
    link: "https://github.com/dish982/meta-pytorch-hackathon/",
    image: projectImg5
  },
  {
    title: "Uber Dataset analysis",
    description: "Analyzed a dataset of approximately 200,000 records in December 2025 to perform exploratory data analysis and distance-based fare prediction.",
    date: "December 2025",
    tools: ["Pandas", "Numpy", "Python"],
    link: "https://colab.research.google.com/drive/1nMXuyyEzMh1r_Pfhlprxe2taUxX7YGqQ?usp=sharing",
    image: projectImg3
  },
  {
    title: "File Based Blogging System",
    description: "A simple blogging platform built with Node.js, Express, and EJS that allows users to create, edit, and delete blog posts. The project demonstrates CRUD operations, routing, and basic templating for a server-side rendered application.",
    date: "July 2025",
    tools: ["Node.js", "Express", "ejs"],
    link: "https://github.com/dish982/file-based-blogging-system/",
    image: projectImg4
  },
  {
    title: "Restaurant Menu Filter",
    description: "A simple and responsive Restaurant Menu Filter web page built using HTML, CSS, JavaScript, and Bootstrap. It displays a dummy restaurant menu and allows users to filter items by category — Appetizers, Main Course, Desserts, Beverages, or view the Full Menu.",
    date: "May 2025",
    tools: ["Bootstrap", "Vanilla JS"],
    link: "https://menu-filter-disha.netlify.app/",
    image: projectImg1
  },
]

function Projects() {
  return (
  <div id="projects" className="bg-oat-milk min-h-screen">
    <motion.section initial={{opacity: 0, y:60 }} whileInView={{opacity:1, y:0}} transition={{duration: 0.6}}  className='max-w-6xl mx-auto bg-white rounded-3xl shadow-xl mb-20 px-5 mt-30'>
      <section className="pt-5 md:p-10">
        <span className=" font-bold text-xl md:text-sm uppercase ">My Projects</span><br/>
        <span className="font-serif text-5xl text-[#1a1012] hidden md:block">Projects</span>
        
        {/* main div */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-12 px-4">
          
          {/* project 1 */}
          {projectDetails.map((project, index) => (
            // parent div
            <div key={index} className="min-w-[150%] md:min-w-137.5 snap-center bg-white/70 border-2  rounded-[2.5rem] mt-10 overflow-hidden md:shadow-sm flex flex-col justify-between">

              {/* image section */}
              <div className="w-full h-72 relative bg-[#FDE2E4] overflow-hidden group"> 
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl" 
                />

                {/* overlay pill "view project" */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">                  
                    <a href={project.link} target="_blank" className="bg-white/90 backdrop-blur-md text-[#8B2D38] px-6 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      View Project 
                      <ArrowUpRight size={16} />
                    </a>
                </div>
              </div>
    
              {/* content section */}
              <div className="flex-1 p-8 flex flex-col justify-between bg-white">
                <h3 className="text-4xl font-serif text-[#4A1D1F] mb-4">{project.title}</h3>
                <span className="text-[#4A1D1F]/70 text-sm leading-relaxed mb-6">{project.date}</span>
                <p className="text-[#4A1D1F]/80 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* tool pills section */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.map((tech, index) => 
                      <span key = {index} className="px-4 py-2 bg-[#FDE2E4]/50 text-[#8B2D38] rounded-full text-xs font-bold">
                    
                      {tech}
                    </span>
                    )}
                </div>
              </div>

              {/* <div className="flex items-center gap-2 text-[#4A1D1F]/40 italic text-xs border-t border-[#8B2D38]/5 pt-6">
                <a href="https://github.com/dish982/restaurant-menu-filter-page"><SiGithub size={14} /></a>
              </div> */}

            </div>
          ))}
        </div>
     
      </section>
    </motion.section> 
  </div>
  );
}

export default Projects;