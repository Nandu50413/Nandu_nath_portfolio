export const CONTACT = {
  name: "Nandu Nath",
  role: "Software Engineer",
  location: "Bangalore, Karnataka",
  email: "nn504136@gmail.com",
  phone: "+91 8875376718",
  linkedin: "https://www.linkedin.com/in/nandu-nath-079359266",
  github: "https://github.com/",
  resumePath: "/Nandu_Nath_Resume.pdf",
};

export const SUMMARY =
  "BCA graduate with hands-on experience in software development, data operations, and technical problem-solving. Experienced in building responsive web applications and working with Python, JavaScript, React, SQL, and REST APIs, with a strong focus on software engineering and full-stack development.";

export const HERO_STATS = [
  { value: "99%+", label: "Data accuracy at Hudl" },
  { value: "3", label: "Professional roles" },
  { value: "2", label: "Projects shipped" },
  { value: "7.43", label: "BCA CGPA / 10" },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Hudl India Pvt. Ltd.",
    role: "Sports Analyst",
    period: "Jul 2025 — Feb 2026",
    location: "Bangalore",
    summary:
      "High-volume competitive match data operations in the 1001 Assist Competitive department.",
    bullets: [
      "Analyzed and tagged high-volume competitive match footage, maintaining 99%+ accuracy across data logs while meeting tight SLA turnarounds.",
      "Enforced strict quality guidelines, identifying tagging anomalies and edge cases in raw game data to prevent downstream reporting errors.",
      "Partnered with QA leads and shift supervisors to refine tagging protocols, contributing to smoother queue handling and operational consistency.",
      "Applied structured data validation methods to sports event datasets, strengthening operational and analytical reporting pipelines.",
    ],
    tags: ["Sports Data", "Data Auditing", "QA Workflows", "SLA Delivery"],
  },
  {
    company: "VTech Integrated Solutions",
    role: "Front-End Development Intern",
    period: "Internship",
    location: "Bangalore",
    summary:
      "Responsive, cross-browser web interfaces for production team projects.",
    bullets: [
      "Developed responsive, cross-browser web interfaces utilizing HTML5, CSS3, and JavaScript.",
      "Implemented modular UI components and modern styling patterns with Tailwind CSS.",
      "Managed source code and version tracking using Git & GitHub, participating in team code reviews and sprint tasks.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"],
  },
  {
    company: "ODA Class",
    role: "Academic Mentor",
    period: "6 months",
    summary:
      "Daily mentorship translating complex logical and analytical concepts into clear explanations.",
    bullets: [
      "Mentored students daily, translating complex logical and analytical concepts into structured, step-by-step explanations.",
      "Monitored learning progress, diagnosed conceptual roadblocks, and designed personalized problem-solving strategies.",
      "Strengthened cross-functional communication, stakeholder coordination, and active listening capabilities.",
    ],
    tags: ["Mentorship", "Communication", "Problem Solving"],
  },
];

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  features: string[];
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "sportsmatch",
    name: "SportsMatch Analytics",
    tagline: "Interactive Match Intelligence Dashboard",
    description:
      "A responsive match intelligence dashboard that visualizes team performance metrics, scoring efficiency, and outcome trends across match events — built for fast, readable in-game insight.",
    metrics: [
      { value: "3", label: "Filter dimensions: position, quarter, opponent" },
      { value: "Live", label: "Real-time visual summaries" },
      { value: "100%", label: "Mobile-first responsive layout" },
    ],
    features: [
      "Engineered a responsive match intelligence dashboard visualizing team performance metrics, scoring efficiency, and outcome trends across match events.",
      "Implemented dynamic data filtering by player position, quarter, and opponent team, providing real-time data visual summaries.",
      "Structured modular, maintainable client-side code adhering to clean architecture and mobile-first responsive design principles.",
    ],
    stack: ["JavaScript (ES6+)", "Tailwind CSS", "Chart.js", "HTML5", "REST APIs"],
  },
  {
    id: "devtracker",
    name: "DevTracker",
    tagline: "Developer Task & Sprint Management Tool",
    description:
      "A streamlined task tracking application with category tags, priority queues, and real-time status transitions — designed around data integrity and clean, iterative Git history.",
    metrics: [
      { value: "Priority", label: "Queues + category tag system" },
      { value: "Validated", label: "Input validation & error handling" },
      { value: "Clean", label: "Structured Git commit history" },
    ],
    features: [
      "Built a streamlined task tracking application featuring category tags, priority queues, and real-time status transitions.",
      "Integrated robust input validation and error handling to ensure data integrity across local persistence layers.",
      "Published clean, structured Git commit histories documenting iterative feature implementations.",
    ],
    stack: ["JavaScript", "Python", "REST APIs", "SQLite / LocalStorage", "Git"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Programming & Scripting",
    skills: ["JavaScript (ES6+)", "Python", "Core Java", "SQL (Basics)"],
  },
  {
    title: "Web & Full-Stack",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI Design", "RESTful APIs", "DOM Manipulation"],
  },
  {
    title: "Tools & Environments",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Linux / Shell Basics"],
  },
  {
    title: "Quality & Operations",
    skills: ["Data Auditing & Anomaly Detection", "Test Scenario Execution", "Process Compliance"],
  },
];

export const CORE_SKILLS = [
  "JavaScript",
  "Python",
  "React",
  "Tailwind CSS",
  "SQL",
  "REST APIs",
];

export const EDUCATION = {
  degree: "Bachelor of Computer Applications (BCA)",
  university: "Bangalore University",
  college: "Christ Academy Institute for Advanced Studies",
  batch: "2022 – 2025",
  aggregate: "74.28% (3,454 / 4,650 marks)",
  cgpa: "7.43 / 10",
  coursework:
    "Data Structures, Design & Analysis of Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, Web Programming",
};

export const CERTIFICATIONS = [
  "Software Testing & QA Fundamentals",
  "Cybersecurity Fundamentals (Kali Linux)",
  "Infosys Springboard — Industry Readiness & Technical Foundations",
];

export const MARQUEE_ITEMS = [
  "Software Engineering",
  "Python Full-Stack Development",
  "JavaScript",
  "Python",
  "React",
  "Tailwind CSS",
  "REST APIs",
  "SQL",
  "Data Auditing",
  "Responsive UI",
];
