import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Header from "./Header";

const navOrder = ["/", "/about", "/skills", "/experiences", "/projects"];

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative h-screen bg-zinc-950 font-sans text-zinc-200 flex flex-col overflow-hidden">
      {/* Background elegant gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-violet-600/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <Header />
      
      {/* Responsive Main Container */}
      <main className="relative z-10 pt-24 md:pt-32 pb-12 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto w-full flex-1 flex flex-col overflow-y-auto no-scrollbar scroll-smooth">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Layout;
