export interface Project {
  id: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Backend & System';
  technologies: string[];
  features: string[];
  technicalDetails: string[];
  architecturePoints: { title: string; desc: string }[];
  sampleEndpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; path: string; desc: string; responseSample: string }[];
  githubUrl: string;
  demoUrl: string;
  badgeColor: string;
  visualType: 'job-portal' | 'logistics-tracker';
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  badge: string;
  skillsGained: string[];
  credentialId: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  type: 'academic' | 'certification' | 'project';
  description: string;
}

export const PERSONAL_INFO = {
  name: "Chevvu Harsha Vardhan Reddy",
  preferredName: "Harsha Vardhan Reddy",
  role: "Python Full Stack Developer",
  email: "chevvuharshavardhanreddy@gmail.com",
  phone: "+91-9059883215",
  location: "Chennai / Hyderabad / Bengaluru, India (Open to Relocate)",
  linkedIn: "https://linkedin.com/in/harshavardhanreddy-chevvu-283529285",
  linkedInDisplay: "linkedin.com/in/harshavardhanreddy-chevvu-283529285",
  github: "https://github.com/harshavardhanreddy-dev",
  githubDisplay: "github.com/harshavardhanreddy-dev",
  heroDescription:
    "Motivated Python Full Stack Developer with hands-on knowledge of building full-stack web applications using Python, FastAPI, PostgreSQL, HTML, CSS, and JavaScript. Passionate about learning new technologies and building real-world software solutions.",
  aboutMe:
    "Computer Science and Engineering graduate with hands-on experience developing end-to-end full-stack web applications. Skilled in designing high-performance RESTful APIs using Python & FastAPI, modeling relational schemas in PostgreSQL and MySQL, and building responsive, user-friendly frontend interfaces. Enthusiastic about clean software architecture, database management, and solving real-world challenges with modern technology.",
  coreInterests: [
    { title: "Python Development", desc: "Writing clean, modular, and maintainable Python code" },
    { title: "Backend Development", desc: "Designing robust server-side business logic and services" },
    { title: "REST API Development", desc: "Crafting scalable, well-documented FastAPI endpoints" },
    { title: "Full-Stack Web Applications", desc: "Bridging modern frontend UIs with fast backends" },
    { title: "Database Management", desc: "PostgreSQL & MySQL schema design, indexing, and ORM mapping" },
    { title: "Learning New Technologies", desc: "Quick learner passionate about modern engineering tooling" },
    { title: "Building Real-World Software", desc: "Transforming requirements into working, production-ready software" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    iconName: "Code2",
    color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
    skills: [
      { name: "Python", level: "Proficient", highlight: "OOP, Data Structures, Decorators, Pydantic" },
      { name: "SQL", level: "Proficient", highlight: "Complex Queries, Joins, Aggregations, Indexing" },
    ],
  },
  {
    category: "Backend",
    iconName: "Server",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    skills: [
      { name: "FastAPI", level: "Hands-on", highlight: "Asynchronous APIs, Dependency Injection, Routers" },
      { name: "REST APIs", level: "Proficient", highlight: "CRUD operations, HTTP Statuses, JSON contracts" },
      { name: "SQLAlchemy", level: "Hands-on", highlight: "ORM modeling, Relationships, Session management" },
    ],
  },
  {
    category: "Frontend",
    iconName: "Layout",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
    skills: [
      { name: "HTML5", level: "Proficient", highlight: "Semantic markup, Accessibility, Forms" },
      { name: "CSS3", level: "Proficient", highlight: "Flexbox, CSS Grid, Responsive Design, Animations" },
      { name: "JavaScript", level: "Proficient", highlight: "ES6+, DOM Manipulation, Async/Fetch API" },
    ],
  },
  {
    category: "Databases",
    iconName: "Database",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    skills: [
      { name: "PostgreSQL", level: "Hands-on", highlight: "Relational modeling, Foreign keys, Transactions" },
      { name: "MySQL", level: "Hands-on", highlight: "Schema design, Constraints, Data integrity" },
    ],
  },
  {
    category: "Tools & Workflow",
    iconName: "Wrench",
    color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 text-indigo-400",
    skills: [
      { name: "GitHub", level: "Proficient", highlight: "Version Control, Git Branching, Pull Requests" },
      { name: "Swagger / OpenAPI", level: "Proficient", highlight: "Interactive API documentation & testing" },
      { name: "Visual Studio Code", level: "Proficient", highlight: "Debugging, Extensions, Linting workflows" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "job-portal",
    title: "Full-Stack Job Portal",
    year: "2026",
    tagline: "End-to-end recruitment platform connecting employers and talent",
    category: "Full-Stack",
    technologies: ["Python", "FastAPI", "MySQL", "HTML", "CSS", "JavaScript", "REST APIs"],
    description:
      "Developed a full-stack job portal that enables employers to post job openings and job seekers to search and apply for jobs seamlessly with real-time status updates.",
    features: [
      "User Authentication (Role-based registration & secure login)",
      "Employer Job Posting & Management Dashboard",
      "Dynamic Job Search with filter by role, location, & salary",
      "One-click Job Applications with resume data submission",
      "Live Application Tracking with status milestones",
      "REST API Backend with comprehensive OpenAPI documentation",
      "MySQL Relational Database with normalized relational schema",
      "Fully Responsive Frontend optimized across mobile and desktop",
    ],
    technicalDetails: [
      "Built high-performance REST APIs using FastAPI and Pydantic validation schemas",
      "Designed and managed a normalized MySQL database storing users, jobs, and applications",
      "Created responsive, interactive frontend pages using vanilla HTML, CSS, and modern JavaScript",
      "Implemented secure password hashing and session token verification for user auth",
      "Developed job listing, search filtering, and applicant tracking status pipelines",
    ],
    architecturePoints: [
      { title: "FastAPI Routing Layer", desc: "Modular APIRouter for auth, jobs, candidates, and applications." },
      { title: "MySQL Schema Layer", desc: "Relational tables for Employers, Seekers, Postings, and Applications." },
      { title: "Interactive UI Layer", desc: "Dynamic async fetch calls for live search and application feedback." },
    ],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/api/v1/auth/login",
        desc: "Authenticate user and return session token",
        responseSample: '{\n  "access_token": "eyJhbGciOi...",\n  "role": "employer",\n  "name": "Acme Corp"\n}',
      },
      {
        method: "GET",
        path: "/api/v1/jobs/search?q=python",
        desc: "Filter active job openings with pagination",
        responseSample: '{\n  "total": 24,\n  "jobs": [\n    {"id": 101, "title": "Junior Python Developer", "company": "TechNova", "type": "Full-time"}\n  ]\n}',
      },
      {
        method: "POST",
        path: "/api/v1/applications/apply",
        desc: "Submit application with candidate profile",
        responseSample: '{\n  "application_id": "APP-9821",\n  "status": "Submitted",\n  "applied_at": "2026-09-24T10:30:00Z"\n}',
      },
    ],
    githubUrl: "https://github.com/harshavardhanreddy-dev/fullstack-job-portal",
    demoUrl: "#job-portal-demo",
    badgeColor: "from-cyan-500 to-blue-600",
    visualType: "job-portal",
  },
  {
    id: "logistics-tracking",
    title: "Real-Time Logistics & Delivery Tracking System",
    year: "2026",
    tagline: "Multi-role dispatch & shipment lifecycle tracking platform",
    category: "Backend & System",
    technologies: ["Python", "FastAPI", "PostgreSQL", "HTML", "CSS", "JavaScript", "REST APIs"],
    description:
      "Developed a full-stack logistics management system to create, assign, and track delivery orders through a web application with role-based access control and order progress workflows.",
    features: [
      "Customer Management (Order placement, tracking, delivery history)",
      "Delivery Agent Management (Assignment acceptance, route status updates)",
      "Admin Management (Live fleet oversight, order dispatching, analytics)",
      "Automated Order Creation & Tracking Number Generation",
      "Dynamic Order Assignment to available delivery personnel",
      "Live Delivery Tracking with multi-stage status progress bar",
      "JWT-based Secure Authentication with role permissions",
      "Responsive, clean dashboards tailored for each user role",
    ],
    technicalDetails: [
      "Built secure, robust REST APIs using FastAPI with granular route dependency guards",
      "Implemented JWT-based authentication protecting endpoints across distinct user roles",
      "Created role-based functionality for Customers, Delivery Agents, and Admin users",
      "Used SQLAlchemy ORM for clean database operations, relationship mapping, and migrations",
      "Designed and managed PostgreSQL database with ACID transaction safety for order state changes",
      "Developed responsive dashboards using HTML, CSS, and modern JavaScript with async status polling",
    ],
    architecturePoints: [
      { title: "JWT Auth & RBAC", desc: "Token inspection with role claims ensuring strict access boundaries." },
      { title: "SQLAlchemy ORM Models", desc: "Orders, Shipments, Checkpoints, and Agent assignment relationships." },
      { title: "PostgreSQL Engine", desc: "High-integrity order ledger with transactional checkpoint logging." },
    ],
    sampleEndpoints: [
      {
        method: "POST",
        path: "/api/v1/orders/create",
        desc: "Create shipment and trigger tracking code",
        responseSample: '{\n  "tracking_number": "TRK-2026-8849",\n  "status": "Order Placed",\n  "estimated_delivery": "2026-09-26"\n}',
      },
      {
        method: "GET",
        path: "/api/v1/tracking/TRK-2026-8849",
        desc: "Get real-time timeline & agent dispatch info",
        responseSample: '{\n  "tracking_number": "TRK-2026-8849",\n  "current_stage": "Out for Delivery",\n  "assigned_agent": "Ramesh Kumar",\n  "eta": "45 mins"\n}',
      },
      {
        method: "PUT",
        path: "/api/v1/agent/orders/TRK-2026-8849/status",
        desc: "Update milestone status by delivery agent",
        responseSample: '{\n  "success": true,\n  "updated_status": "Delivered",\n  "timestamp": "2026-09-24T14:15:00Z"\n}',
      },
    ],
    githubUrl: "https://github.com/harshavardhanreddy-dev/logistics-delivery-tracker",
    demoUrl: "#logistics-demo",
    badgeColor: "from-emerald-500 to-teal-600",
    visualType: "logistics-tracker",
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "B.E. — Computer Science and Engineering",
    field: "Computer Science & Engineering",
    institution: "SIMATS Engineering",
    location: "Chennai, Tamil Nadu",
    year: "2026",
    score: "8.3",
    scoreLabel: "CGPA",
    highlights: [
      "Core coursework in Data Structures, Algorithms, Database Management Systems, Computer Networks, and Software Engineering",
      "Hands-on project work in Full Stack Web Development and Python backend engineering",
      "Strong academic standing with consistent 8.3 CGPA throughout engineering curriculum",
    ],
  },
  {
    degree: "Intermediate — MPC",
    field: "Mathematics, Physics, Chemistry",
    institution: "Sri Chaitanya Junior College",
    location: "Tirupati, Andhra Pradesh",
    year: "2022",
    score: "81.6%",
    scoreLabel: "Percentage",
    highlights: [
      "Rigorous analytical problem-solving foundation in Mathematics and Sciences",
      "Consistent academic excellence with 81.6% final board standing",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    field: "General Secondary Education",
    institution: "Sri Chaitanya Techno School",
    location: "Rajampet, Andhra Pradesh",
    year: "2020",
    score: "9.6",
    scoreLabel: "CGPA",
    highlights: [
      "Outstanding academic performance achieving 9.6 CGPA",
      "Active participation in school mathematics and science technical events",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Python Programming",
    issuer: "Udemy",
    year: "2025",
    badge: "Python Mastery",
    skillsGained: ["Object-Oriented Programming (OOP)", "Data Structures", "Modular Code Architecture", "Error Handling & Debugging"],
    credentialId: "UC-PY-2025-HVREDDY",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    year: "2025",
    badge: "Full Stack Certified",
    skillsGained: ["REST API Architecture", "Frontend Integration", "Client-Server Communication", "Web Security Best Practices"],
    credentialId: "COURSERA-FSWD-2025",
  },
  {
    title: "MySQL for Database Management",
    issuer: "Scaler Topics",
    year: "2024",
    badge: "Database Specialist",
    skillsGained: ["Relational Schema Design", "Complex SQL Queries & Joins", "Indexing & Optimization", "Data Normalization"],
    credentialId: "SCALER-MYSQL-2024",
  },
];

export const TIMELINE_MILESTONES: JourneyMilestone[] = [
  {
    year: "2020",
    title: "Secondary School Certificate (SSC)",
    subtitle: "Sri Chaitanya Techno School, Rajampet",
    type: "academic",
    description: "Graduated with 9.6 CGPA, establishing strong analytical foundations.",
  },
  {
    year: "2022",
    title: "Intermediate (MPC)",
    subtitle: "Sri Chaitanya Junior College, Tirupati",
    type: "academic",
    description: "Completed with 81.6% in Mathematics, Physics, and Chemistry.",
  },
  {
    year: "2024",
    title: "MySQL Database Management Certification",
    subtitle: "Scaler Topics",
    type: "certification",
    description: "Mastered relational schema architecture, advanced SQL querying, and database normalization.",
  },
  {
    year: "2025",
    title: "Python Programming Certification",
    subtitle: "Udemy",
    type: "certification",
    description: "Deep-dived into OOP, data structures, and production-grade Python patterns.",
  },
  {
    year: "2025",
    title: "Full Stack Web Development Certification",
    subtitle: "Coursera",
    type: "certification",
    description: "Acquired comprehensive hands-on skills in end-to-end web architecture and REST APIs.",
  },
  {
    year: "2026",
    title: "B.E. in Computer Science & Engineering",
    subtitle: "SIMATS Engineering, Chennai",
    type: "academic",
    description: "Graduating with an impressive 8.3 CGPA in Computer Science & Engineering.",
  },
  {
    year: "2026",
    title: "Full-Stack Job Portal",
    subtitle: "Featured Major Project",
    type: "project",
    description: "Built full-stack recruitment platform with FastAPI, MySQL, role authentication, and tracking.",
  },
  {
    year: "2026",
    title: "Real-Time Logistics & Delivery Tracking System",
    subtitle: "Featured Major Project",
    type: "project",
    description: "Developed comprehensive logistics management with FastAPI, PostgreSQL, SQLAlchemy & JWT RBAC.",
  },
];

export const WHY_HIRE_ME_POINTS = [
  {
    iconName: "Code",
    title: "Strong Foundation in Python",
    description: "Thorough understanding of Python core concepts, OOP principles, data structures, and clean coding standards.",
  },
  {
    iconName: "Layers",
    title: "Full-Stack Development Knowledge",
    description: "Capable of connecting frontend interfaces (HTML/CSS/JS) with robust backend services and relational databases.",
  },
  {
    iconName: "Zap",
    title: "Backend API Development with FastAPI",
    description: "Practical experience building fast, asynchronous RESTful APIs with Pydantic validation and auto-generated OpenAPI docs.",
  },
  {
    iconName: "Database",
    title: "Database Experience with MySQL & PostgreSQL",
    description: "Hands-on ability to design normalized relational schemas, write optimized SQL queries, and manage transactional integrity.",
  },
  {
    iconName: "FolderGit2",
    title: "Experience Building Real-World Projects",
    description: "Demonstrated execution capability through complete projects: a Full-Stack Job Portal and a Logistics Tracking System.",
  },
  {
    iconName: "Network",
    title: "Knowledge of REST APIs",
    description: "Clear understanding of HTTP verbs, status codes, JSON request/response contracts, and API security fundamentals.",
  },
  {
    iconName: "ShieldCheck",
    title: "Familiarity with SQLAlchemy & JWT Authentication",
    description: "Practical implementation of ORM mapping, relationships, token-based authentication, and role-based access control.",
  },
  {
    iconName: "Sparkles",
    title: "Enthusiastic & Willingness to Learn",
    description: "Highly motivated entry-level engineer eager to adapt to team workflows, contribute value immediately, and grow continuously.",
  },
];
