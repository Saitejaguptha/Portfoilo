import { motion } from "framer-motion";
import { FiTerminal, FiCloud, FiTool, FiZap } from "react-icons/fi";
import AnimatedPage from "./AnimatedPage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const highlights = [
  { icon: <FiTerminal />, title: "Backend focus", desc: "Node.js, TypeScript, Express, MySQL" },
  { icon: <FiZap />, title: "Frontend fluency", desc: "React, Tailwind CSS, Redux" },
  { icon: <FiCloud />, title: "DevOps ready", desc: "AWS, Docker, CI/CD" },
  { icon: <FiTool />, title: "AI-native", desc: "Cursor, Copilot, Claude & Gemini" },
];

function About() {
  return (
    <AnimatedPage className="w-full flex flex-col lg:flex-row items-start justify-between gap-12 py-8 md:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-8"
      >
        <motion.div variants={itemVariants} className="text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Me</span>
          </h1>
          
          <div className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            <p>
              I’m Saiteja Dubakunta, a Full Stack Developer with 3+ years of experience delivering scalable, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I lead end-to-end development across frontend, backend, and system integration, building applications from scratch and enhancing existing platforms with new features.
            </p>
            <p>
              Most of my work has been in microservices architecture, designing and developing RESTful APIs with multiple endpoints for efficient data communication. I consistently deliver projects on time, improving engineering efficiency—I’ve achieved up to 30% faster issue resolution and 15% reduction in storage costs through optimized backend design and resource management.
            </p>
            <p>
              I specialize in building high-performance, user-centric backend systems and interactive, intuitive frontend interfaces. I also actively use AI-powered tools to maintain clean code structure, reusable patterns, and automate repetitive tasks, allowing me to stay focused on business logic and product impact rather than boilerplate work.
            </p>
            <p>
              I’m passionate about creating applications that not only perform well but also provide an exceptional user experience, and I’m always looking for opportunities to deliver meaningful value through code.
            </p>
          </div>
        </motion.div>

        {/* Highlight Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
           <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/30 transition-all group">
              <div className="text-3xl font-bold text-primary mb-1">30%</div>
              <div className="text-zinc-300 font-medium">Faster Resolution</div>
              <div className="text-zinc-500 text-sm mt-2">Achieved through optimized backend design and resource management.</div>
           </div>
           <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-400/30 transition-all group">
              <div className="text-3xl font-bold text-blue-400 mb-1">15%</div>
              <div className="text-zinc-300 font-medium">Cost Reduction</div>
              <div className="text-zinc-500 text-sm mt-2">Decreased storage costs via efficient data communication and caching.</div>
           </div>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-6">
          <a
            href="https://github.com/Saitejaguptha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white font-bold transition-all hover:scale-[1.02] active:scale-95 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/40"
          >
            <FiTerminal className="text-indigo-400 w-5 h-5" />
            Check out my GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Right side - Visual element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 w-full max-w-md hidden lg:block"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
          <div className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-[32px] space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-zinc-600 font-mono ml-2">bio.js</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm leading-relaxed">
              <p className="text-indigo-400">const <span className="text-zinc-300">developer</span> = &#123;</p>
              <p className="pl-4 text-zinc-400">name: <span className="text-green-400">'Saiteja Dubakunta'</span>,</p>
              <p className="pl-4 text-zinc-400">focus: <span className="text-blue-300">'MERN'</span>,</p>
              <p className="pl-4 text-zinc-400">efficiency: <span className="text-green-400">'+30%'</span>,</p>
              <p className="pl-4 text-zinc-400">ux_first: <span className="text-indigo-300">true</span></p>
              <p className="text-indigo-400">&#125;;</p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-4">
               {highlights.map((item, index) => (
                 <div key={index} className="flex items-center gap-3 text-xs text-zinc-400">
                    <div className="text-indigo-400 p-1.5 rounded-lg bg-zinc-800">{item.icon}</div>
                    <span>{item.title}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedPage>
  );
}

export default About;