import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiBriefcase, FiLayers, FiCode, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/", icon: <FiHome className="w-4 h-4" /> },
  { name: "About", path: "/about", icon: <FiUser className="w-4 h-4" /> },
  { name: "Skills", path: "/skills", icon: <FiLayers className="w-4 h-4" /> },
  { name: "Experience", path: "/experiences", icon: <FiBriefcase className="w-4 h-4" /> },
  { name: "Projects", path: "/projects", icon: <FiCode className="w-4 h-4" /> },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 md:pt-6 px-4"
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex glass rounded-full px-2 py-2 gap-1 shadow-2xl shadow-black/40">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive ? "text-primary brightness-125" : "text-zinc-400 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden w-full flex justify-between items-center px-2">
        <div />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 glass rounded-2xl text-zinc-300 active:scale-90 transition-transform"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden glass rounded-3xl p-4 shadow-2xl shadow-black/60 z-50 border-white/5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-medium transition-all ${
                      isActive ? "bg-primary/10 text-primary border border-primary/20" : "text-zinc-400 active:bg-zinc-800/50"
                    }`
                  }
                >
                  <span className="p-2 rounded-xl bg-zinc-800/50">{link.icon}</span>
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
