"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FloatingParticles, MagicCircle, MiniMagicCircle, GlowingOrbs, StarField, NebulaClouds, GridOverlay } from "@/components/AnimatedBackground";

// Experience data
const experience = [
  {
    date: "2025 - 2026",
    role: "Fullstack Developer",
    company: "PrimeX Ventures",
    description: "Develop custom web applications and websites for clients using modern technologies. Focus on creating responsive, accessible, and performant user interfaces.",
  },
  {
    date: "2025 - Present",
    role: "Junior Web Developer",
    company: "Freelance / Self-Employed",
    description: "Assisted in the development of client websites and web applications. Gained hands-on experience with fullstack technologies and industry best practices.",
  },
];
// Tech stack data
const techStack = [
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "Node JS", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "GitHub Desktop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React JS", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
  { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
];
const contactEmail = "johnhowardgarcia17@gmail.com";
const githubUrl = "https://github.com/Howard-23/Howard";
const linkedinUrl = "https://www.linkedin.com/in/john-howard-garcia-31a075390/";
const contactPrefill = {
  name: "John Howard Garcia...",
  email: "johnhowardgarcia17@gmail.com...",
  subject: "System, UI, Website, and etc. Development Inquiry...",
  message: "Contact me for inquiries about your system, website even designing and etc. I am open to collaborate and help you to achieve your goals...",
} as const;
type ContactField = keyof typeof contactPrefill;
const aboutRuntimeLines = [
  'const role = "Fullstack & Mobile Developer";',
  'const status = "Open to opportunities";',
  'const location = "Philippines";',
  "const stack = [",
  '  "Next.js", "Node JS", "CSS3", "TypeScript",',
  '  "GitHub Desktop",',
  '  "PHP", "MySQL", "JavaScript", "React JS",',
  '  "GitHub", "VSCode", "Laravel", "HTML5"',
  "];",
  "function buildExperience() { return 'Responsive, user-focused products'; }",
  "console.log('Ready to collaborate on your next project.');",
];
// Projects data
const projects = [
  {
    title: "Professional Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript. Features dark/light mode toggle, smooth animations, and a clean, professional design optimized for showcasing work.",
    icon: "https://img.icons8.com/color/96/briefcase.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    liveDemo: "https://john-howard.vercel.app/",
    viewCode: "https://github.com/Howard-23/Howard",
  },
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online store operations. Features real-time analytics, order management, and inventory tracking with an intuitive user interface.",
    icon: "https://img.icons8.com/color/96/combo-chart.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    status: "Completed",
    liveDemo: "https://e-commerce-psi-dusky-70.vercel.app/",
    viewCode: "https://github.com/Howard-23/e-commerce",
  },
  {
    title: "Attendance System",
    description: "A New Attendance Monitoring that helps a company and the employees to monitor their attendance",
    icon: "https://img.icons8.com/color/96/calendar.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    liveDemo: "https://attandance-system.vercel.app/",
    viewCode: "https://github.com/Howard-23/attandance-system",
  },
  {
    title: "Barangay System",
    description: "A Modern Barangay System that Helps other to request their clearance and etc also helps barangay to know the population in their barangay",
    icon: "https://img.icons8.com/color/96/city.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    liveDemo: "https://barangay-three.vercel.app/",
    viewCode: "https://github.com/Howard-23/barangay",
  },
  {
    title: "Office Management System",
    description: "Helps a company and their Employee to track their duties and also to get the goal of the company",
    icon: "https://img.icons8.com/color/96/office.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    liveDemo: "https://office-management-pi.vercel.app/login",
    viewCode: "https://github.com/Howard-23/office-management",
  },
  {
    title: "CCTV Management System",
    description: "A modern cctv management that helps you to track and report an accident that it will auto detect",
    icon: "https://img.icons8.com/color/96/webcam.png",
    tech: ["Next.js", "Python", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    liveDemo: "https://cctv-management-system-gcyl.vercel.app/dashboard",
    viewCode: "https://github.com/Howard-23/CCTV-Management-System",
  },
  {
    title: "Prescription Reader",
    description: "It helps all the elderly and pharmacist to read the prescription of the Doctor's that It's Hard to read",
    icon: "https://img.icons8.com/color/96/pill.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    liveDemo: "https://medi-scan-prescription-scanner.vercel.app/",
    viewCode: "https://github.com/Howard-23/Medi-Scan-Prescription-Scanner",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Features drag-and-drop organization, priority levels, and progress tracking to help users stay organized.",
    icon: "https://img.icons8.com/color/96/todo-list.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    liveDemo: "https://task-manager-lime-theta-49.vercel.app/",
    viewCode: "https://github.com/Howard-23/Task-Manager",
  },
  {
    title: "Shopify Landing Page",
    description: "A custom landing page template designed for Shopify stores. Features sections for products, testimonials, and call-to-action buttons optimized for conversions.",
    icon: "https://img.icons8.com/color/96/shopping-bag.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    liveDemo: "https://shopify-landing-page-omega.vercel.app/",
    viewCode: "https://github.com/Howard-23/shopify-landing-page",
  },
  {
    title: "Dental Management System",
    description: "A comprehensive dental clinic management system for scheduling appointments, managing patient records, tracking treatments, and handling billing. Streamlines clinic operations with an intuitive dashboard.",
    icon: "https://img.icons8.com/color/96/tooth.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    liveDemo: "https://dental-management-system-rose.vercel.app/",
    viewCode: "https://github.com/Howard-23/Dental-Management-System",
  },
  {
    title: "Event Sparks",
    description: "A dynamic event management platform built with Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/confetti.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://event-spark-two.vercel.app/",
    viewCode: "https://github.com/Howard-23/Event-Spark",
  },
  {
    title: "Habit Harbor",
    description: "A habit tracking application created using Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/goal.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://habit-harbor.vercel.app/",
    viewCode: "https://github.com/Howard-23/Habit-Harbor",
  },
  {
    title: "Course Craft",
    description: "An educational course platform built with Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/training.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://course-craft-ashy.vercel.app/",
    viewCode: "https://github.com/Howard-23/Course-Craft",
  },
  {
    title: "Menu Muse",
    description: "A restaurant menu showcase created using Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/restaurant-menu.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://menu-muse.vercel.app/",
    viewCode: "https://github.com/Howard-23/Menu-Muse",
  },
  {
    title: "Pulse Studio",
    description: "A creative studio site built with Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/audio-wave.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://pulse-studio-xi.vercel.app/",
    viewCode: "https://github.com/Howard-23/Pulse-Studio",
  },
  {
    title: "Insight Board",
    description: "A dashboard application developed using Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/line-chart.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://insight-board-eight.vercel.app/",
    viewCode: "https://github.com/Howard-23/Insight-Board",
  },
  {
    title: "Brandkit",
    description: "A branding toolkit platform built with Next.js, CSS3, and HTML5.",
    icon: "https://img.icons8.com/color/96/color-palette.png",
    tech: ["Next.js", "CSS3", "HTML5"],
    status: "Completed",
    liveDemo: "https://brand-kit-nine.vercel.app/",
    viewCode: "https://github.com/Howard-23/Brand-Kit",
  },
];
const isImageIcon = (icon: string) => icon.startsWith("http://") || icon.startsWith("https://");

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [contactFormValues, setContactFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [activeTypingField, setActiveTypingField] = useState<ContactField | null>(null);
  const contactSectionRef = useRef<HTMLElement | null>(null);
  const isContactInView = useInView(contactSectionRef, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isContactInView) {
      return;
    }

    const fieldOrder: ContactField[] = ["name", "email", "subject", "message"];
    const typingSpeedMs = 240;
    let typingTimer: number | null = null;
    let fieldIndex = 0;
    let charIndex = 0;

    setContactFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setActiveTypingField("name");

    typingTimer = window.setInterval(() => {
      const currentField = fieldOrder[fieldIndex];
      const targetValue = contactPrefill[currentField];

      charIndex += 1;
      setContactFormValues((prev) => ({
        ...prev,
        [currentField]: targetValue.slice(0, charIndex),
      }));

      if (charIndex >= targetValue.length) {
        fieldIndex += 1;
        charIndex = 0;
        setActiveTypingField(fieldOrder[fieldIndex] ?? null);
      }

      if (fieldIndex >= fieldOrder.length && typingTimer !== null) {
        window.clearInterval(typingTimer);
        typingTimer = null;
        setActiveTypingField(null);
      }
    }, typingSpeedMs);

    return () => {
      if (typingTimer !== null) {
        window.clearInterval(typingTimer);
      }
    };
  }, [isContactInView]);

  const handleContactInputChange = (field: ContactField, value: string) => {
    setContactFormValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-black-clover-dark relative overflow-hidden">
      {/* Enhanced Background Layers */}
      <FloatingParticles count={50} />
      <GlowingOrbs count={8} />
      <StarField count={120} />
      <NebulaClouds />
      <GridOverlay />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        {/* Multiple Magic Circles for Hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <MagicCircle size={700} className="opacity-20 -translate-x-20" />
          <MagicCircle size={500} className="opacity-15 translate-x-32 translate-y-10" />
          <MagicCircle size={300} className="opacity-25 -translate-y-20" />
        </div>

        <motion.div
          initial={false}
          className="text-center relative z-10"
        >
          {/* Mini Magic Circle */}
          <div className="flex justify-center mb-8">
            <MiniMagicCircle className="text-8xl" />
          </div>

          <motion.h1
            initial={false}
            className="text-6xl md:text-8xl font-bold gradient-text mb-4"
          >
            JOHN HOWARD GARCIA
          </motion.h1>

          <motion.p
            initial={false}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            <span className="typing-container inline-block overflow-hidden">
              Fullstack & Mobile Developer
            </span>
          </motion.p>

          <motion.div
            initial={false}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-e94560 text-white rounded-full font-bold text-lg glow-pulse"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-e94560 text-e94560 rounded-full font-bold text-lg hover:bg-e94560 hover:text-white transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={false}
          className="flex gap-6 mt-8 relative z-10"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-e94560 transition-colors text-2xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-e94560 transition-colors text-2xl"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="text-gray-400 hover:text-e94560 transition-colors text-2xl"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <div className="text-4xl">&darr;</div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 relative z-10">
        {/* Multiple Magic Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <MagicCircle size={450} className="-translate-x-32 -translate-y-20" />
          <MagicCircle size={300} className="translate-x-40 translate-y-10 opacity-40" />
          <MagicCircle size={200} className="-translate-x-20 translate-y-32 opacity-30" />
        </div>
        
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={false}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={false}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black-clover-primary p-8 rounded-2xl border border-gray-800 glass-effect"
            >
              <h3 className="text-3xl font-bold text-e94560 mb-4">Get To Know Me</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Fullstack and Mobile Developer based in the Philippines. 
                With a strong foundation in modern web technologies and a keen eye for detail, 
                I help businesses establish their digital presence and streamline their operations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me learning new technologies, optimizing workflows, 
                or helping clients achieve their goals through efficient virtual assistance.
              </p>
              <div className="mt-6 code-runner rounded-lg border border-gray-700 bg-gray-950/80 p-4">
                <div className="code-runner-track">
                  {[...aboutRuntimeLines, ...aboutRuntimeLines].map((line, i) => (
                    <div key={`${i}-${line}`} className="code-runner-line">
                      <span className="code-prompt">{">"}</span> {line}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Years Experience", value: "1+" },
                { label: "Projects Completed", value: "8+" },
                { label: "Happy Clients", value: "3+" },
                { label: "Technologies", value: "10+"},
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black-clover-primary p-6 rounded-xl border border-gray-800 glass-effect text-center"
                >
                  <div className="text-4xl font-bold text-e94560">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20 px-3 md:px-6 relative z-10">
        {/* Multiple Magic Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
          <MagicCircle size={400} className="-translate-x-40 translate-y-20" />
          <MagicCircle size={280} className="translate-x-32 -translate-y-16 opacity-35" />
          <MagicCircle size={180} className="-translate-x-16 translate-y-36 opacity-25" />
        </div>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[96rem] mx-auto"
        >
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="w-full rounded-2xl border border-[#2f477d] bg-[linear-gradient(135deg,rgba(20,33,64,0.9),rgba(10,15,34,0.9))] p-6 md:p-10 shadow-[0_18px_40px_rgba(4,10,28,0.45)] backdrop-blur-sm"
          >
            <div className="mb-5 md:mb-6">
              <h3 className="text-4xl font-bold text-white">Technical Stacks</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 rounded-[10px] border border-[#4a69a4] bg-[#0b1734]/85 px-5 py-3 text-base font-semibold text-[#d0ddf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  <span className="flex h-7 w-7 items-center justify-center">
                    <img src={tech.logo} alt={`${tech.name} logo`} className="h-5 w-5 object-contain" />
                  </span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="min-h-screen py-20 px-4 relative z-10">
        {/* Multiple Magic Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <MagicCircle size={450} className="translate-x-24 -translate-y-10" />
          <MagicCircle size={320} className="-translate-x-36 translate-y-14 opacity-40" />
          <MagicCircle size={220} className="translate-x-28 translate-y-32 opacity-30" />
        </div>
        
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={false}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            Work Experience
          </motion.h2>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-black-clover-primary p-6 rounded-xl border border-gray-800 glass-effect"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <span className="px-4 py-2 bg-e94560/20 text-e94560 rounded-full text-sm font-bold">
                    {item.date}
                  </span>
                </div>
                <p className="text-e94560 font-medium mb-2">{item.company}</p>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 relative z-10">
        {/* Multiple Magic Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
          <MagicCircle size={380} className="-translate-x-28 translate-y-20" />
          <MagicCircle size={260} className="translate-x-36 -translate-y-12 opacity-35" />
          <MagicCircle size={160} className="-translate-x-20 translate-y-40 opacity-25" />
        </div>
        
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={false}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-hover bg-black-clover-primary rounded-2xl overflow-hidden border border-gray-800 glass-effect"
              >
                <div className="h-32 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-e94560/20 to-transparent" />
                  {isImageIcon(project.icon) ? (
                    <img
                      src={project.icon}
                      alt={`${project.title} logo`}
                      className="relative z-10 h-14 w-14 object-contain"
                    />
                  ) : (
                    <span className="text-6xl relative z-10">{project.icon}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-gray-800 text-e94560 rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-bold ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-e94560 text-white rounded-full text-sm font-bold hover:bg-e94560/80 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.viewCode && (
                      <a
                        href={project.viewCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-full text-sm font-bold hover:border-e94560 hover:text-e94560 transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactSectionRef} className="min-h-screen py-20 px-4 relative z-10">
        {/* Multiple Magic Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <MagicCircle size={420} className="translate-x-20 -translate-y-20" />
          <MagicCircle size={300} className="-translate-x-40 translate-y-8 opacity-40" />
          <MagicCircle size={200} className="translate-x-36 translate-y-28 opacity-30" />
        </div>
        
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            Get In Touch
          </motion.h2>

          <motion.form
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            action={`mailto:${contactEmail}`}
            method="post"
            encType="text/plain"
            className="relative overflow-hidden bg-black-clover-primary p-8 rounded-2xl border border-gray-800 glass-effect"
          >
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 rounded-2xl border border-e94560/40"
            />
            <motion.div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.input
                type="text"
                name="name"
                value={contactFormValues.name}
                onChange={(e) => handleContactInputChange("name", e.target.value)}
                placeholder="Your Name"
                required
                className={`w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white font-mono focus:border-e94560 focus:outline-none ${activeTypingField === "name" ? "ring-1 ring-e94560/50" : ""}`}
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,69,96,0.35)" }}
              />
              <motion.input
                type="email"
                name="email"
                value={contactFormValues.email}
                onChange={(e) => handleContactInputChange("email", e.target.value)}
                placeholder="Your Email"
                required
                className={`w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white font-mono focus:border-e94560 focus:outline-none ${activeTypingField === "email" ? "ring-1 ring-e94560/50" : ""}`}
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,69,96,0.35)" }}
              />
            </motion.div>
            <motion.div className="mb-6">
              <motion.input
                type="text"
                name="subject"
                value={contactFormValues.subject}
                onChange={(e) => handleContactInputChange("subject", e.target.value)}
                placeholder="Subject"
                required
                className={`w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white font-mono focus:border-e94560 focus:outline-none ${activeTypingField === "subject" ? "ring-1 ring-e94560/50" : ""}`}
                whileFocus={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,69,96,0.35)" }}
              />
            </motion.div>
            <motion.textarea
              name="message"
              value={contactFormValues.message}
              onChange={(e) => handleContactInputChange("message", e.target.value)}
              placeholder="Your Message"
              rows={5}
              required
              className={`w-full p-4 bg-gray-900 border border-gray-800 rounded-lg text-white font-mono focus:border-e94560 focus:outline-none mb-6 ${activeTypingField === "message" ? "ring-1 ring-e94560/50" : ""}`}
              whileFocus={{ scale: 1.01, boxShadow: "0 0 0 1px rgba(233,69,96,0.35)" }}
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-e94560 text-white rounded-lg font-bold text-lg glow-pulse"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Contact me via email or social links</p>
            <div className="flex justify-center gap-6">
              <a
                href={`mailto:${contactEmail}`}
                className="text-xl text-gray-400 hover:text-e94560"
              >
                Email
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-e94560"
              >
                LinkedIn
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-e94560"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} John Howard P. Garcia. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            "Building digital experiences with passion and precision."
          </p>
        </div>
      </footer>
    </main>
  );
}


