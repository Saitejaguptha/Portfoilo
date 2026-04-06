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
        name: "Project 1: Ticket Tracking & Management System (Full-Stack)",
        desc: [
          "Developed a full-stack ticket management application using React.js, Node.js, Express.js, and MongoDB, improving operational efficiency by 25%.",
          "Built RESTful APIs for authentication, ticket creation, search, filtering, and lifecycle management.",
          "Implemented JWT-based authentication and secure user session handling.",
          "Designed dynamic UI components including modals and forms using React Hook Form, improving user interaction and reducing update time by 15%.",
          "Developed ETA tracking system for Development, QA, and Production stages, improving visibility by 30%.",
          "Integrated automated email notifications using Nodemailer for ticket events and updates.",
          "Implemented filtering and reporting features based on date and ticket metadata for improved monitoring.",
          "Containerized the application using Docker and deployed to Kubernetes clusters on AWS, ensuring scalable, highly available, and consistent production environments.",
          "Automated CI/CD pipeline with GitHub Actions for testing, QA validation, and production deployment.",
        ],
      },
      {
        name: "Project 2: IP Phone Provisioning & Contact Management System",
        desc: [
          "Designed and developed a Node.js microservice to manage global and personal contacts across IP phone devices, including speed dial support for Polycom devices.",
          "Implemented end-to-end device provisioning workflow using DNS, Apache, PHP, and Node.js, reducing manual configuration by 25%.",
          "Configured Apache server routing and MAC-based request validation to ensure secure device provisioning.",
          "Built backend services to fetch account and contact data from MySQL and dynamically generate device-compatible responses using EJS templates.",
          "Enabled real-time contact rendering on IP phones through optimized HTTP request-response handling.",
          "Improved system efficiency by 20% and reduced latency by 15%.",
          "Mentored a junior developer, improving delivery speed and code quality.",
          "Managed CI/CD pipeline using GitHub for version control and automated deployment to staging and production environments.",
        ],
      },
      {
        name: "Project 3: Agent Scheduling & ACD Automation Microservice",
        desc: [
          "Developed a Python-based microservice to automate agent scheduling workflows, including auto login/logout and status transitions.",
          "Implemented scheduled jobs to fetch agent data and trigger API calls to downstream services.",
          "Built automation for ACD workflows, ensuring accurate agent state transitions and improved system reliability.",
          "Designed schedulers to track and update agent states between active and completed phases.",
          "Automated processing of missed call data and call recordings, improving data consistency and reporting efficiency by 20%.",
          "Managed CI/CD pipeline using GitHub for version control, automated testing, and deployment to production environments.",
        ],
      },
      {
        name: "Project 4: Dynamic Call Flow & Time-Based Routing System",
        desc: [
          "Designed and developed a Node.js-based service for dynamic call routing based on business hours, time zones, holidays, and override schedules.",
          "Built scalable REST APIs to manage locations, schedules, holidays, and routing configurations.",
          "Implemented rule-based routing engine to determine call destinations in real-time based on user availability and configured schedules.",
          "Developed outbound call handling with timeout management and fallback routing mechanisms.",
          "Integrated support for Hunt Group (ACD) and Auto Attendant workflows.",
          "Improved routing flexibility by 30% and reduced manual configuration effort by 25%.",
          "Led a development team, ensuring timely delivery and high-quality implementation.",
          "Managed CI/CD pipeline using GitHub for version control, automated testing, and production deployment.",
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
        name: "Project 1: Real-Time Call Monitoring & User Analytics System",
        desc: [
          "Developed Node.js microservices to track real-time user call activity by processing SIP signals via WebSockets.",
          "Built event-driven backend services to capture and store active call data in MongoDB for live monitoring and analytics.",
          "Designed RESTful APIs using Express.js to retrieve active call metrics across Windows/Mac clients, IP phones, and desktop users.",
          "Implemented structured logging of user-agent and session data in MongoDB, improving troubleshooting and analytics.",
          "Improved cross-platform visibility by 20% and reduced issue diagnosis time by 15% through optimized logging and monitoring.",
          "Managed the development-to-deployment workflow: submitted services to QA, collaborated on bug fixes, maintained GitHub versions, and deployed stable releases to production, ensuring smooth rollout and operational stability.",
        ],
      },
      {
        name: "Project 2: Voicemail & Account Management Microservices",
        desc: [
          "Built scalable Node.js microservices using Express.js to manage voicemail, greetings, and music-on-hold (MOH) data across multiple accounts.",
          "Designed RESTful APIs for CRUD operations, authentication, account storage tracking, and subscription lifecycle management.",
          "Implemented secure authentication using JWT and bcrypt.js for robust API security.",
          "Integrated Nodemailer for automated email notifications, improving operational efficiency.",
          "Developed backend workflows for data migration, backup handling, and automated cleanup of inactive accounts.",
          "Utilized MySQL and file system operations for efficient data storage, reducing storage overhead by 15%.",
          "Improved system performance, achieving 10% faster resolution of account-related operations.",
          "Handled CI/CD and versioning: used GitHub for version control, coordinated with QA for bug fixes, released tested versions, and deployed final releases to production with post-deployment checks for stability.",
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
        name: "Project: Linux Monitoring Automation using Shell Scripting",
        desc: [
          "Developed Bash shell scripts to automate system monitoring tasks, including log anomaly detection, process tracking, socket connection analysis, and disk space utilization.",
          "Implemented log parsing and filtering using AWK, grep, and Linux utilities to identify abnormal system behavior and reduce manual monitoring effort.",
          "Automated real-time alerting using sendmail, notifying stakeholders immediately of critical issues.",
          "Scheduled monitoring scripts using cron jobs to ensure continuous system health checks and proactive incident detection.",
          "Reduced operational downtime by 10% and critical incidents by 15% through proactive monitoring and automated alerts.",
          "Managed the CI/CD workflow by coordinating development, QA requests, bug fixes, and production deployment plans, ensuring smooth releases and minimal downtime.",
          "Maintained code in SVN repositories, tracked changes, and collaborated with QA and operations teams for version control and deployment readiness.",
          "Performed production deployments, monitored logs, and conducted basic sanity checks post-deployment to ensure application stability.",
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