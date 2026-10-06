export const profile = {
  name: "Aniket Deotale",
  role: "Stay hungry, maybe foolish?",
  tagline: "CSE undergrad at VIT Vellore",
  location: "Vellore, Tamil Nadu, India",
  socials: {
    github: "https://github.com/CodeXAniket",
    linkedin: "https://www.linkedin.com/in/aniketdeotale/",
    email: "mailto:deotaleaniket2@gmail.com",
  },
};

// demo is optional: leave it out and the card shows only the GitHub button.
// status is optional: set it for work that isn't finished yet.
export const projects = [
  {
    id: "p1",
    icon: "lock",
    title: "CipherLink",
    subtitle: "P2P Encrypted Messenger",
    description:
      "Chats, photos and videos travel directly between browsers over WebRTC. The server only introduces peers and never sees or stores a message.",
    highlights: [
      "DTLS-encrypted DataChannels with 100 MB transfers on mobile",
      "ECDSA device keys and safety numbers to detect MITM attacks",
    ],
    tech: ["JavaScript", "Node.js", "WebRTC", "WebSocket", "AWS EC2"],
    color: "cyan",
    github: "https://github.com/CodeXAniket/CipherLink",
    demo: "https://cipherlink.duckdns.org",
  },
  {
    id: "p2",
    icon: "eye",
    title: "VisionGuard AI",
    subtitle: "Object Detection Platform",
    description:
      "A surveillance platform with a React frontend, Node.js API and a Python YOLOv8 service that detects 80 object classes in live webcam frames.",
    highlights: [
      "Turns continuous detections into single events with per-class cooldowns",
      "Snapshots in private AWS S3, metadata in MongoDB, JWT-secured APIs",
    ],
    tech: ["React", "Node.js", "Python", "YOLOv8", "MongoDB", "AWS S3"],
    color: "cyan",
    github: "https://github.com/CodeXAniket/VisionGuard_AI_object_detection",
  },
  {
    id: "p3",
    icon: "database",
    title: "SQL Query Doctor",
    subtitle: "SQL Performance Analyzer",
    description:
      "A web-based analyzer that parses queries in 4 SQL dialects, flags performance anti-patterns and explains how to fix each one.",
    highlights: [
      "Turns EXPLAIN output from 4 database engines into one D3.js plan tree",
      "In-browser PostgreSQL playground (PGlite) to measure index speed-ups",
    ],
    tech: ["React", "TypeScript", "PostgreSQL", "PGlite", "D3.js"],
    color: "cyan",
    github: "https://github.com/CodeXAniket/sql-query-doctor",
    demo: "https://sql-query-doctor.vercel.app",
  },
];

export const certifications = [
  {
    id: "c1",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Cloud Architecting — Amazon Web Services",
    verify: "https://drive.google.com/file/d/14x-Gian_2ssrBhGWdkwy3ZM-oamEW-uS/view?usp=sharing",
  },
  {
    id: "c2",
    name: "AWS Certified Solutions Architect - Associate SAA-C03",
    issuer: "AWS",
    verify: "https://drive.google.com/file/d/1ufWUZbeqU0rd7bQHKcxNVSVq5-QgePpv/view?usp=sharing",
  },
  {
    id: "c3",
    name: "Oracle Java Foundations Associate",
    issuer: "Oracle",
    verify: "https://drive.google.com/file/d/1U8jz58uv8SaUFy-mpi5Tm4gHoqW3BgqX/view?usp=sharing",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "VIT Vellore",
  years: "2023 — 2027",
  gpa: "9.05",
  scale: "10",
};

export const activities = [
  
  {
    id: "a1",
    title: "Team Lead Yuva Marathi",
    description: "Contributed to Aikya's consecutive winning Yuva Marathi team as a participant in the second year and as both Team Lead and participant in the third year.",
    color: "green",
  },
  
];
