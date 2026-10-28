import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import projectImg2 from "./assets/projectImg2.png";
import projectImg3 from "./assets/uber_choropleth.png";
import projectImg4 from "./assets/wordweave-preview.png";
import projectImg6 from "./assets/stitchbydisha.png";
import projectImg7 from "./assets/plant-disease.png";

// Order matters: strongest / most role-relevant first. The first item is shown as the featured card.
// links: first link is the primary button, the rest are secondary. Use label "GitHub" to get the GitHub icon.
const projectDetails = [
  {
    title: "WordWeave",
    description:
      "A blogging platform where users can sign up, write, edit and delete posts, mark them public or private, and search across blogs. Built with Node.js, Express and MongoDB.",
    date: "July 2025",
    tools: ["Node.js", "Express", "MongoDB", "EJS"], // update to React after the MERN conversion
    links: [
      { label: "GitHub", href: "https://github.com/dish982/WordWeave" },
      // { label: "Live demo", href: "https://your-render-url.onrender.com" }, // add after deploy
    ],
    image: projectImg4,
  },
  {
    title: "Multi-Crop Plant Disease Detection",
    description:
      "A deep learning model that detects plant diseases across multiple crops from leaf images, using the PlantifyDR dataset. Supports early detection and smarter crop health management.",
    date: "September 2026",
    tools: ["Python", "TensorFlow", "Keras", "MobileNetV3Small", "TensorFlow.js", "Next.js"],
    links: [
      {
        label: "Notebook",
        href: "https://colab.research.google.com/drive/1TiE25TFcegYhvkbvIyET8W_eqVGwEDHg?usp=sharing",
      },
    ],
    image: projectImg7,
  },
  {
    title: "Uber Dataset Analysis",
    description:
      "Exploratory data analysis and distance-based fare prediction on about 200,000 ride records.",
    date: "December 2025",
    tools: ["Python", "Pandas", "NumPy"],
    links: [
      {
        label: "Notebook",
        href: "https://colab.research.google.com/drive/1nMXuyyEzMh1r_Pfhlprxe2taUxX7YGqQ?usp=sharing",
      },
    ],
    image: projectImg3,
  },
  {
    title: "Scentivia Perfumes",
    description:
      "Built during my internship: Shopify theme customization and UI/UX improvements for a luxury perfume brand, including exact brand hex codes and faster development with Shopify Sidekick.",
    date: "May 2026",
    tools: ["Shopify", "Liquid", "Shopify Sidekick"],
    links: [{ label: "Visit site", href: "https://scentivia.shop/" }],
    image: projectImg2,
  },
  {
    title: "StitchByDisha",
    description:
      "A Shopify store for my cross-stitch work, where I explored product management, inventory tracking and Liquid theme structure. The store is still in development mode and password protected, so message me in the Contact section for the access key.",
    date: "May 2026",
    tools: ["Shopify", "Liquid"],
    links: [{ label: "Visit store", href: "https://stitchbydisha.myshopify.com" }],
    image: projectImg6,
  },
];

function LinkButtons({ links }) {
  return (
    <div className="flex flex-wrap gap-3 mt-auto pt-2">
      {links.map((link, i) => {
        const isPrimary = i === 0;
        const isGithub = link.label === "GitHub";
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors " +
              (isPrimary
                ? "bg-feature text-on-feature hover:opacity-90"
                : "border border-line text-heading hover:bg-blush")
            }
          >
            {isGithub && <SiGithub size={16} />}
            {link.label}
            {!isGithub && <ArrowUpRight size={16} />}
          </a>
        );
      })}
    </div>
  );
}

function ToolPills({ tools }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-sage-soft text-sage-ink rounded-full text-xs font-semibold"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function Projects() {
  const [featured, ...rest] = projectDetails;

  return (
    <div id="projects" className="min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-surface rounded-3xl shadow-xl mb-20 px-5 mt-30"
      >
        <section className="pt-5 pb-8 md:p-10">
          <span className="font-bold text-xs uppercase tracking-widest text-sage-ink">
            My Projects
          </span>
          <p className="text-ink-muted mt-2 mb-8">
            Full-stack apps, data work and client projects I've built.
          </p>

          {/* featured project: image beside content on desktop */}
          <article className="grid md:grid-cols-2 bg-cream border border-line rounded-3xl overflow-hidden shadow-sm mb-6">
            <div className="h-56 md:h-auto bg-oat-milk">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4">
              <div>
                <h3 className="text-3xl text-heading">{featured.title}</h3>
                <span className="text-ink-muted text-sm">{featured.date}</span>
              </div>
              <p className="text-ink text-sm md:text-base leading-relaxed">
                {featured.description}
              </p>
              <ToolPills tools={featured.tools} />
              <LinkButtons links={featured.links} />
            </div>
          </article>

          {/* remaining projects: 2-column grid, one column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project) => (
              <article
                key={project.title}
                className="flex flex-col bg-cream border border-line rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="h-48 bg-oat-milk">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-2xl text-heading">{project.title}</h3>
                    <span className="text-ink-muted text-sm">{project.date}</span>
                  </div>
                  <p className="text-ink text-sm leading-relaxed">{project.description}</p>
                  <ToolPills tools={project.tools} />
                  <LinkButtons links={project.links} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </motion.section>
    </div>
  );
}

export default Projects;