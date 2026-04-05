import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimatedPage from "./AnimatedPage";

const experiences = [
  {
    role: "Software Engineer",
    company: "Pandora R&D Labs Private Limited",
    date: "Oct 2024 - Present",
    location: "Hyderabad, India",
    projects: [
      {
        name: "Call Flow - Time-Based Call Routing",
        desc: [
          "Developed a Node.js service for a Call Flow (time-based call routing) feature, enabling users to configure business hours, time zones, holidays, and override schedules, improving routing flexibility and user control by 30%.",
          "Designed and implemented RESTful APIs to manage locations, schedules (open/close hours, days), holidays, and overrides, allowing dynamic and scalable call routing configurations.",
          "Built backend logic to route calls based on real-time user availability and configured schedules, eliminating manual time-based routing and improving efficiency by 25%.",
          "Developed endpoints to determine active schedules by location, and dynamically fetch destination type and routing targets, improving routing accuracy by 20%.",
          "Implemented APIs for outbound call handling, including timeout management and routing to fallback destinations, as well as support for Hunt Group/ACD (Automatic Call Distribution) and Auto Attendant (AA) flows.",
          "Led a team for this feature, coordinating development and ensuring timely delivery, improving team productivity and feature quality."
        ],
      },
      {
        name: "Python Task Automation Microservice",
        desc: [
          "Developed a Python microservice to automate scheduling of tasks such as agent auto login/logout, improving operational efficiency by 25%.",
          "Implemented scheduled jobs to fetch agent details from the database and trigger HTTP requests to corresponding services, reducing manual intervention by 20%.",
          "Built automation for ACD (Automatic Call Distribution) workflows, ensuring accurate agent state transitions and system reliability by 15%.",
          "Designed schedulers to track agent status changes, moving records between active and completed states, enhancing data accuracy and monitoring.",
          "Automated processing of missed call data into user call records and updated call recording details, improving data consistency and reporting efficiency by 20%."
        ],
      },
      {
        name: "IP Phone Contact Management & Provisioning",
        desc: [
          "Conducted R&D and developed a Node.js microservice to manage global and personal contacts across multiple IP phone models, including speed dial support for Polycom devices, improving contact accessibility by 30%.",
          "Designed and implemented an end-to-end provisioning flow using DNS, Apache, PHP, and Node.js, enabling seamless device communication and reducing manual configuration effort by 25%.",
          "Configured Apache server redirection to validate device MAC address provisioning and route requests to Node.js services, ensuring secure and efficient request handling.",
          "Built backend logic to fetch account and contact details from MySQL, dynamically generating device-compatible responses using EJS templates, improving response efficiency by 20%.",
          "Enabled real-time contact rendering on IP phones by handling HTTP request-response cycles, enhancing user experience and reducing access latency by 15%.",
          "Led and mentored a junior developer, improving team productivity and delivery efficiency by 20%."
        ],
      },
      {
        name: "Full-Stack Ticket Tracking System",
        desc: [
          "Developed a full-stack, user-friendly ticket tracking web application using React.js, React Router DOM, React Hook Form, Node.js, Express.js, and MongoDB, improving overall ticket management efficiency by 25%.",
          "Built multiple REST API endpoints for user authentication (JWT-based login/signup), ticket creation, search (by ID/description), and deletion based on date, reducing manual effort by 20%.",
          "Designed and implemented interactive UI components, including modal windows for editing ticket details such as description, root cause, fix, and status, enhancing user experience and reducing update time by 15%.",
          "Created endpoints to manage and track Development, QA, and Production ETAs, improving tracking accuracy and visibility by 30%.",
          "Integrated Nodemailer to send automated email notifications for ticket creation, updates, and ETA changes, reducing communication delays by 25%.",
          "Developed endpoints to filter and track ETAs based on date, improving reporting efficiency and monitoring by 20%."
        ],
      },
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Pandora R&D Labs Private Limited",
    date: "Sep 2023 - Sep 2024",
    location: "Hyderabad, India",
    projects: [
      {
        name: "Account-Level Storage & Voicemail Manager",
        desc: [
          "Developed Node.js microservices using Express.js, building RESTful APIs to manage and track voicemail, greetings, and MOH data per user and account, supporting two frontend applications for centralized management and space monitoring.",
          "Designed and implemented API endpoints for CRUD operations, agent/supervisor authentication, account space tracking, data migration between mount and backup paths, and automated cleanup of inactive subscriptions.",
          "Integrated Nodemailer to enable automated email notifications for key account actions, improving operational visibility and reducing manual effort.",
          "Implemented secure authentication and validation using JWT middleware, bcrypt.js, and input validation techniques, ensuring data integrity and system security.",
          "Utilized MySQL, FileSync, and backend utilities for efficient data storage, backup, and retrieval operations.",
          "Improved system efficiency by achieving 15% reduction in storage overhead and 10% faster resolution of account-related operations through optimized backend logic and automation."
        ],
      },
      {
        name: "SIP Signal Processing & Live Analytics",
        desc: [
          "Enhanced Node.js microservices to track user active call details from SIP signals using WebSocket and sip_signal modules, with data stored in MongoDB.",
          "Developed REST API endpoints to retrieve active call counts for Windows/Mac (EXE), IP phones, and desktop users, improving cross-platform visibility by 20%.",
          "Implemented logging of user-agent details in a separate MongoDB collection to support analytics and troubleshooting, improving issue diagnosis efficiency by 15%.",
          "Leveraged Express.js, MongoDB, and backend logging best practices to ensure high performance, reliability, and data integrity."
        ],
      },
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Pandora R&D Labs Private Limited",
    date: "Jan 2023 - Aug 2023",
    location: "Hyderabad, India",
    projects: [
      {
        name: "Automated System Monitoring & Alerting",
        desc: [
          "Developed shell scripts to automate monitoring tasks, including log anomaly detection, socket connections, process usage, and mount path space consumption.",
          "Automated email notifications for abnormalities using sendmail, improving alert efficiency, reducing operational downtime by 10% and critical outages by 15%.",
          "Utilized AWK, grep, ps, free, and other Linux commands for process management and system monitoring.",
          "Gained strong expertise in Linux commands, shell scripting, and automated email alerts, enhancing system reliability and maintainability."
        ],
      },
    ],
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

function Experiences() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedPage className="w-full pt-4 md:pt-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-8 text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Experience
          </h1>
          <p className="text-zinc-400 text-lg">My professional journey and key projects.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 h-full">
          {/* Tabs sidebar */}
          <motion.div variants={itemVariants} className="flex md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar border-b md:border-b-0 md:border-l border-zinc-800 min-w-[200px] shrink-0 pb-2 md:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative text-left px-4 py-3 text-sm font-medium transition-all whitespace-nowrap md:whitespace-normal duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${activeTab === index
                  ? "text-indigo-400 border-indigo-500 bg-indigo-500/5 md:bg-indigo-500/10"
                  : "text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-800/30"
                  }`}
              >
                <span className="block text-zinc-200 text-base">{exp.role}</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1 block">{exp.date.split(" - ")[0]}</span>
              </button>
            ))}
          </motion.div>

          {/* Content area */}
          <motion.div variants={itemVariants} className="flex-1 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 md:p-8 min-h-[320px] relative group/card">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1">
                    {experiences[activeTab].role}
                  </h2>
                  <p className="text-indigo-400 font-semibold text-lg">
                    at {experiences[activeTab].company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-8 border-b border-zinc-800/50 pb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-zinc-950 rounded-full border border-zinc-800 text-zinc-300">
                    <FiCalendar className="w-3.5 h-3.5 text-indigo-400" />
                    {experiences[activeTab].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="w-3.5 h-3.5 text-indigo-400" />
                    {experiences[activeTab].location}
                  </span>
                </div>

                <div className="space-y-6">
                  {experiences[activeTab].projects.map((project, pIndex) => (
                    <div key={pIndex} className="group">
                      <h3 className="text-indigo-300 font-semibold mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {project.name}
                      </h3>
                      <ul className="space-y-2 pl-3 border-l border-zinc-800 group-hover:border-indigo-500/30 transition-colors">
                        {project.desc.map((bullet, bIndex) => (
                          <li key={bIndex} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                            <span className="text-indigo-400 mt-1 shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation Buttons */}
                <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  {activeTab > 0 ? (
                    <button
                      onClick={() => setActiveTab(activeTab - 1)}
                      className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-indigo-500/30 transition-all flex items-center justify-center gap-2 group"
                    >
                      <FiChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      <div className="text-left">
                        <span className="block text-[10px] uppercase tracking-wider text-zinc-500">Previous</span>
                        <span className="block text-sm font-semibold">{experiences[activeTab - 1].role}</span>
                      </div>
                    </button>
                  ) : (
                    <div className="hidden sm:block w-full sm:w-auto" />
                  )}

                  {activeTab < experiences.length - 1 ? (
                    <button
                      onClick={() => setActiveTab(activeTab + 1)}
                      className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-indigo-500/30 transition-all flex items-center justify-center gap-2 group text-right"
                    >
                      <div className="text-right">
                        <span className="block text-[10px] uppercase tracking-wider text-zinc-500">Next</span>
                        <span className="block text-sm font-semibold">{experiences[activeTab + 1].role}</span>
                      </div>
                      <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <div className="hidden sm:block w-full sm:w-auto" />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedPage>
  );
}

export default Experiences;