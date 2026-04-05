import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiActivity, FiMapPin, FiShoppingCart } from "react-icons/fi";
import AnimatedPage from "./AnimatedPage";

const projectsData = [
  {
    title: "Todo Tracker with AI Coding",
    icon: <FiActivity />,
    description: "An interactive web app for tracking tasks with a premium user experience and seamless functionality. Features dynamic theming and quick actions.",
    tech: ["React", "TypeScript", "Redux", "Tailwind"],
    github: "https://github.com/Saitejaguptha/todotracker",
    live: "https://todotracker-murex.vercel.app",
    color: "from-blue-500/20 to-indigo-500/20 border-indigo-500/30",
  },
  {
    title: "Infinite Scrolling UI",
    icon: <FiCode />,
    description: "Added an infinite scroll feature to a React application for seamless loading of content without refresh. Focused on scroll events and performance.",
    tech: ["React", "API Handling", "Performance Optimization"],
    github: "https://github.com/Saitejaguptha/infinite-loading",
    live: "https://infinite-loading-kappa.vercel.app/",
    color: "from-emerald-500/20 to-teal-500/20 border-teal-500/30",
  },
  {
    title: "Movie Explorer App",
    icon: <FiCode />,
    description: "A React app using the OMDb API to search movies, view details (actors, ratings), and build a favorites list. Great handles of async data.",
    tech: ["React", "OMDb API", "CSS"],
    github: "https://github.com/Saitejaguptha/UsePopcorn",
    live: "https://use-popcorn-ten-sable.vercel.app/",
    color: "from-yellow-500/20 to-orange-500/20 border-orange-500/30",
  },
  {
    title: "Travel Packing List",
    icon: <FiCode />,
    description: "A simple, interactive tool to help users organize travel items. Add, checked off, filter, and reset your packing list easily.",
    tech: ["React", "State Management", "CSS"],
    github: "https://github.com/Saitejaguptha/TravelList",
    live: "https://travel-list-nine-phi.vercel.app/",
    color: "from-pink-500/20 to-rose-500/20 border-rose-500/30",
  },
  {
    title: "Weather Forecast",
    icon: <FiCloudLightning />,
    description: "Fetches and displays current weather forecast based on user geographic location utilizing Geoapify and Tomorrow.io APIs.",
    tech: ["HTML/CSS/JS", "Node.js", "APIs"],
    github: "https://github.com/Saitejaguptha/Weather-Fore-Cast",
    live: "https://weather-fore-cast.onrender.com/",
    color: "from-cyan-500/20 to-blue-500/20 border-blue-500/30",
  },
  {
    title: "Recipe App",
    icon: <FiShoppingCart />,
    description: "Dynamic web page interacting with the Forkify API to search, bookmark, and add recipes. Calculate servings and save favorites.",
    tech: ["HTML", "CSS", "JavaScript", "Forkify API"],
    github: "https://github.com/Saitejaguptha/RecipeApp",
    live: "https://addrecipewebpage.netlify.app/",
    color: "from-orange-500/20 to-red-500/20 border-red-500/30",
  },
  {
    title: "Mapty",
    icon: <FiMapPin />,
    description: "Web application mapping running and cycling routes for fitness enthusiasts. Uses Leaflet.js library for interactive functionality.",
    tech: ["HTML/CSS/JS", "Leaflet.js"],
    github: "https://github.com/Saitejaguptha/Mapty",
    live: "https://workoutsmapty.netlify.app/",
    color: "from-green-500/20 to-emerald-500/20 border-emerald-500/30",
  },
  {
    title: "Dice Duel Game",
    icon: <FiActivity />,
    description: "Engaging 2-player dice game pushing your luck to reach 100 points, avoiding a roll of 1.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Saitejaguptha/Pig-Game",
    live: "https://pig-game-saiteja.netlify.app/",
    color: "from-purple-500/20 to-fuchsia-500/20 border-purple-500/30",
  }
];

// Fallback icon for weather if not imported
function FiCloudLightning(props) {
  return (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
      <polyline points="13 11 9 17 15 17 11 23"></polyline>
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Projects() {
  return (
    <AnimatedPage className="w-full pt-4 md:pt-8" >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-12 text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-zinc-400 text-lg">A selection of my recent full-stack and frontend work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col justify-between p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Ambient background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none -z-10`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-zinc-800 rounded-xl text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
                    {project.icon}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-zinc-300 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium bg-zinc-800/80 text-zinc-300 rounded-md border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
}

export default Projects;