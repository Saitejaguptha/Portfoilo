import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
import saitejaImg from "../assets/saiteja.png";

function Home() {
  return (
    <AnimatedPage className="flex flex-col lg:flex-row items-center justify-between gap-12 py-8 md:py-16 min-h-[calc(100vh-14rem)] w-full">
      {/* Left content */}
      <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Saiteja Dubakunta</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed"
        >
          Full Stack Developer | Node.js · React · TypeScript · MongoDB | MERN Stack | REST APIs | Microservices | AI-Enhanced Full-Stack Developer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
        >
          <Link 
            to="/projects" 
            className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20 hover:shadow-primary/30"
          >
            Explore My Work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Saitejaguptha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/saitejadubakunta/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-blue-400 hover:text-blue-300 hover:border-zinc-700 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
      >
        {/* Decorative background shapes */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[40px] blur-2xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
          <img 
            src={saitejaImg} 
            alt="Saiteja" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
          />
        </div>
      </motion.div>
    </AnimatedPage>
  );
}

export default Home;