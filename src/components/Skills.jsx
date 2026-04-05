import { motion } from "framer-motion";
import AnimatedPage from "./AnimatedPage";

const skillsData = [
  {
    category: "Backend",
    items: ["Node.js", "TypeScript", "Express", "MongoDB", "MySQL", "Redis", "REST APIs", "WebSockets", "Microservices"],
  },
  {
    category: "Frontend",
    items: ["React", "Redux Toolkit", "React Query", "React Router", "Tailwind CSS"],
  },
  {
    category: "DevOps",
    items: ["AWS (S3, EC2, Lambda)", "Docker", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    category: "Tooling & AI",
    items: ["Git", "Postman", "npm", "GitHub Copilot", "Claude", "ChatGPT", "Gemini", "Cursor", "Antigravity"],
  },
];

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

function Skills() {
  return (
    <AnimatedPage className="w-full py-8 md:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <div className="text-left space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Tech</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            My technical toolbox and the cutting-edge technologies I use to build robust digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[32px] bg-zinc-900/40 border border-zinc-800/60 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/50" />
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, idx) => (
                  <motion.span 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-zinc-800/50 text-zinc-300 text-sm font-semibold rounded-2xl border border-zinc-700/30 hover:border-primary/40 hover:text-white hover:bg-primary/10 transition-all cursor-default shadow-sm hover:shadow-primary/20"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedPage>
  );
}

export default Skills;