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
  {
    id: "p4",
    icon: "monitor",
    title: "Lightweight API Gateway",
    subtitle: "Secure Entry Point for Microservices",
    description:
      "A single entry point that authenticates, logs, rate limits and load balances every request before routing it to the right backend service.",
    highlights: [
      "JWT authentication, rate limiting and load balancing as gateway filters",
      "Docker Compose stack with Swagger docs and a GitHub Actions CI/CD pipeline",
    ],
    tech: ["Java 21", "Spring Boot", "Spring Cloud Gateway", "JWT", "Docker", "GitHub Actions"],
    color: "cyan",
    github: "https://github.com/CodeXAniket/API-Gateway",
  },
  {
    id: "p5",
    icon: "pin",
    title: "Nearest Essentials Finder",
    subtitle: "Location-Based Service Finder",
    description:
      "Finds grocery stores, pharmacies, hospitals, ATMs and more near you, sorted by real distance, with walking or driving routes on the map.",
    highlights: [
      "8 categories and a 0.5 to 10 km radius, using live OpenStreetMap data",
      "User accounts with saved places and search history",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "React", "Tailwind CSS", "Leaflet"],
    color: "cyan",
    github: "https://github.com/CodeXAniket/Nearest_Essentials_finder",
    demo: "https://nearest-essentials-finder.vercel.app",
  },
];

// Open-source pull requests, grouped by project. status is "Merged" or "Under review".
export const openSource = [
  {
    id: "o1",
    project: "Serverless Framework",
    about: "Framework for building and deploying apps on AWS Lambda · 47k+ stars",
    url: "https://github.com/serverless/serverless",
    prs: [
      {
        number: 13940,
        type: "Bug fix",
        status: "Merged",
        title: "Dev mode silently dropped every function after the 25th",
        detail:
          "Traced it to AWS IoT's limit of 50 subscriptions per connection, replaced per-function subscriptions with two MQTT wildcards, and added unit tests.",
        url: "https://github.com/serverless/serverless/pull/13940",
      },
      {
        number: 13905,
        type: "Docs",
        status: "Merged",
        title: "Broken links and typos across 7 documentation pages",
        detail: "Found by scanning 164 docs files with a script, then checking every hit by hand.",
        url: "https://github.com/serverless/serverless/pull/13905",
      },
    ],
  },
  {
    id: "o2",
    project: "Sandstorm",
    about: "Self-hostable web app platform · 7k+ stars",
    url: "https://github.com/sandstorm-io/sandstorm",
    prs: [
      {
        number: 3786,
        type: "Bug fix",
        status: "Merged",
        title: "Installer advertised an -i flag that did nothing",
        detail:
          "Deprecated it with a warning instead of deleting it, so existing install scripts that pass -i keep working.",
        url: "https://github.com/sandstorm-io/sandstorm/pull/3786",
      },
      {
        number: 3788,
        type: "Fix",
        status: "Under review",
        title: "apiPath examples were missing a trailing slash",
        detail:
          "Without it, API requests reached apps as /apistuff instead of /api/stuff. Fixed the app template and docs.",
        url: "https://github.com/sandstorm-io/sandstorm/pull/3788",
      },
    ],
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
