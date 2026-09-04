export const portfolioData = {
  personal: {
    name: "MD. SALAUDDIN",
    shortName: "Salauddin",
    eyebrow: "SOFTWARE ENGINEER · BANGLADESH",
    role: "Software Engineer",
    subRole: "Frontend + Backend + DevOps + SQA + UI/UX + AI",
    headline: "Building scalable software from idea to production.",
    bio: "I build production-grade web platforms across frontend, backend, DevOps, and AI — with a focus on scalable architecture, performance, and reliable user experiences.",
    availability: "Open to Software Engineering Opportunities",
    email: "ahmedsalauddin677785@gmail.com",
    phone: "+8801902061020",
    phoneDisplay: "+880 1902-061020",
    location: "Dhaka, Bangladesh",
    portfolioUrl: "http://salauddin.vercel.app",
    githubUrl: "https://github.com/salauddin85",
    linkedinUrl: "https://linkedin.com/in/salauddinahmed85/",
    resumeUrl: "/MD.Salauddin-Resume.pdf",
    avatarUrl: "/images/salauddin_img.png",
    experienceYears: "2+",
  },

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],

  highlights: [
    {
      metric: "~65%",
      label: "CV Screening Time Reduced",
      description: "Implemented LLM + pgvector parser for automated candidate semantic matching in TALENTek.",
    },
    {
      metric: "4h → 30m",
      label: "Deployment Release Time",
      description: "Automated container builds, CI/CD pipelines, and zero-downtime VPS deployment processes.",
    },
    {
      metric: "~30%",
      label: "API Performance Improvement",
      description: "Applied Redis multi-layer caching, database index tuning, and ORM query optimization.",
    },
    {
      metric: "~20%",
      label: "Infrastructure Cost Reduction",
      description: "Consolidated micro-services, optimized resource allocation, and tuned Nginx & VPS servers.",
    },
  ],

  about: {
    headline: "Engineer behind the systems.",
    summary:
      "Software Engineer with 2+ years of professional engineering experience building maintainable, high-reliability software systems across the full software development life cycle. Proven background architecting and scaling production systems including AI-powered HRM ecosystems, multi-vendor e-commerce platforms, club management architectures, and healthcare backends. Driven by clean architecture, automated deployment pipelines, and practical AI implementations that solve tangible business problems.",
    subtext:
      "Specialized in architecting Python/Django backends, modern React and Next.js frontend interfaces, and containerized Docker environments running on Linux VPS infrastructure.",
    focusAreas: [
      {
        number: "01",
        title: "Backend Engineering",
        description:
          "Designing resilient REST APIs, transactional workflows, and schema migrations with Django REST Framework and FastAPI.",
      },
      {
        number: "02",
        title: "Full-Stack Development",
        description:
          "Engineering responsive, accessible client interfaces with Next.js App Router, React, Zustand state management, and modern JavaScript.",
      },
      {
        number: "03",
        title: "AI & LLM Systems",
        description:
          "Building production RAG pipelines, high-dimensional vector search with pgvector, prompt engineering, and autonomous evaluation agents.",
      },
      {
        number: "04",
        title: "DevOps & Infrastructure",
        description:
          "Containerizing microservices with Docker, building automated CI/CD workflows, reverse-proxying with Nginx, and managing Linux VPS servers.",
      },
      {
        number: "05",
        title: "Performance Optimization",
        description:
          "Eliminating N+1 database bottlenecks, tuning SQL queries, establishing Redis cache strategies, and optimizing server compute resources.",
      },
      {
        number: "06",
        title: "Product Engineering",
        description:
          "Enforcing zero-trust multi-tenant isolation, integrating secure payment gateways like SSLCommerz, and delivering seamless user experiences.",
      },
    ],
  },

  experience: [
    {
      role: "Junior Software Developer",
      company: "PEPOLTEK LTD",
      duration: "December 2024 — Present",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      overview:
        "Developing scalable backend systems, architecting RESTful services, building frontend integrations, and managing automated containerized infrastructure for enterprise client platforms.",
      achievements: [
        "Engineered scalable REST APIs using Django REST Framework and maintained production-grade backend systems across multiple live client projects.",
        "Built modular backend architectures for Club Management System, Talent Tracker (talentracker.net), and Pepoltek platform (pepoltek.com) using DRF, TypeScript, and Docker.",
        "Contributed to full-stack features for AI-HRM TALENTek (talentek.bd) using Next.js and modern JavaScript for frictionless frontend-to-backend communication.",
        "Automated deployment pipelines with Docker and CI/CD, reducing release turnaround times from 4 hours to 30 minutes.",
        "Improved API throughput and response performance by ~30% through caching strategies and optimized database query execution.",
        "Managed Linux VPS production deployments, reducing server infrastructure operating costs by ~20% through resource consolidation.",
      ],
      technologies: [
        "Django",
        "Django REST Framework",
        "Python",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Docker",
        "CI/CD",
        "PostgreSQL",
        "Redis",
        "Nginx",
        "Linux VPS",
      ],
    },
  ],

  projects: {
    featured: {
      number: "01",
      name: "TALENTek",
      badge: "Featured Production System",
      tagline: "Enterprise Multi-Tenant AI-HRM Platform",
      liveUrl: "https://talentek.bd/",
      githubUrl: null,
      technologies: [
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "pgvector",
        "Next.js",
        "Zustand",
        "Redis",
        "Docker",
        "CI/CD",
        "Nginx",
        "Linux",
        "Cloudflare",
      ],
      description:
        "An enterprise-scale multi-tenant AI Human Resource Management ecosystem that automates candidate screening, technical evaluations, employee onboarding, and talent pipelines.",
      engineeringChallenge:
        "Processing unstructured CVs at scale, performing semantic talent matching without high latency, and orchestrating multi-tenant isolation with strict privacy boundaries.",
      keyImpact:
        "Reduced resume screening duration by ~65% via LLM + pgvector parser and cut application deployment release time from 4 hours to 30 minutes.",
      achievements: [
        "AI-Driven Screening & Parser: Built an LLM and pgvector vector search parser cutting CV screening time by ~65%, alongside an autonomous interview engine with AI proctoring.",
        "Smart Onboarding & JD Builder: Developed a chunked RAG chatbot for new-hire policy retrieval and an automated JD builder with de-biasing and clarity scoring.",
        "Interactive ATS (Kanban): Engineered a real-time applicant tracking pipeline using Next.js, @dnd-kit, and Zustand featuring optimistic UI updates.",
        "Multi-Tenancy, Fintech & DevOps: Architected zero-trust tenant isolation with SSLCommerz billing; containerized services via Docker, cutting release time from 4 hours to 30 minutes.",
      ],
    },
    ecommerce: {
      number: "02",
      name: "Multi-Vendor E-commerce Platform",
      tagline: "Full-Stack Scalable Commerce Engine",
      liveUrl: "https://eziymart.com/",
      githubUrl: "https://github.com/salauddin85/multivendor_ecommerce_frontend_backend",
      technologies: [
        "Django",
        "DRF",
        "PostgreSQL",
        "Next.js",
        "TypeScript",
        "Zustand",
        "Docker",
        "Nginx",
      ],
      description:
        "Full-featured multi-vendor commerce platform engineered with role-based access control, approval-driven merchant onboarding, and split-order fulfillment.",
      engineeringChallenge:
        "Designing unified order splitting across disparate vendors, handling concurrent inventory reservations, and securing merchant payouts.",
      keyImpact:
        "Seamlessly supports Admin, Vendor, Brand, and Customer entities with complete SSLCommerz automated payment handling and Dockerized container architecture.",
      features: [
        "Hierarchical role system: Admin, Vendor, Brand, and Customer entities with granular access controls.",
        "Admin-controlled vendor, brand, and product approval lifecycle with audit trails.",
        "Stateless JWT authentication with secure refresh token rotation.",
        "Comprehensive shopping cart, dynamic shipping calculation, and multi-vendor split orders.",
        "SSLCommerz payment gateway integration with IPN callback verification.",
        "Production-ready Dockerized microservice setup behind an Nginx reverse proxy.",
      ],
    },
    selectedWorks: [
      {
        number: "03",
        name: "Talent Tracker",
        tagline: "Candidate Sourcing & Verification Engine",
        liveUrl: "https://talentracker.net",
        githubUrl: null,
        technologies: ["Django REST Framework", "Python", "PostgreSQL", "TypeScript", "Docker"],
        description:
          "Production backend architecture powering candidate sourcing, technical skill verification, and recruiter analytics with role-based permissions.",
        impact: "Centralized talent assessment pipeline with optimized relational querying.",
      },
      {
        number: "04",
        name: "Pepoltek Corporate Platform",
        tagline: "Enterprise Client Services Portal",
        liveUrl: "https://pepoltek.com",
        githubUrl: null,
        technologies: ["Django", "DRF", "Next.js", "Docker", "Linux VPS"],
        description:
          "Enterprise web platform and client engagement engine backed by optimized REST endpoints and automated CI/CD delivery pipelines.",
        impact: "Sub-150ms average API response times with automated zero-downtime deployment.",
      },
      {
        number: "05",
        name: "Club Management System",
        tagline: "Member Subscription & Operations Architecture",
        liveUrl: null,
        githubUrl: null,
        technologies: ["Django REST Framework", "PostgreSQL", "Docker", "Redis"],
        description:
          "Full administrative backend managing membership tiers, automated recurring subscription tracking, facility reservations, and event registrations.",
        impact: "Replaced manual tracking with automated billing notifications and audit-compliant reporting.",
      },
      {
        number: "06",
        name: "Hospital Management (MEDItek)",
        tagline: "Healthcare Records & Scheduling System",
        liveUrl: null,
        githubUrl: null,
        technologies: ["Python", "Django", "PostgreSQL", "Docker"],
        description:
          "Healthcare operations architecture facilitating doctor-patient appointment scheduling, consultation records, and outpatient billing workflows.",
        impact: "Enforced strict data access boundaries adhering to medical record privacy requirements.",
      },
      {
        number: "07",
        name: "School Management System",
        tagline: "Academic Administration & Records Engine",
        liveUrl: null,
        githubUrl: null,
        technologies: ["Python", "Django", "MySQL", "REST APIs"],
        description:
          "Educational institution platform handling student admissions, grade calculations, attendance tracking, and faculty scheduling.",
        impact: "Digitized academic record storage across multiple departments and class cohorts.",
      },
    ],
  },

  skills: [
    {
      category: "Languages",
      description: "Core programming and querying languages for high-performance computing.",
      skills: ["Python", "JavaScript", "C", "C++", "Java", "SQL", "NoSQL"],
    },
    {
      category: "Frontend",
      description: "Modern component-driven web interfaces, state management, and UX design.",
      skills: ["Next.js", "React", "JavaScript", "TypeScript", "Zustand", "HTML5", "CSS"],
    },
    {
      category: "Backend",
      description: "RESTful web services, asynchronous processing, and server architectures.",
      skills: ["Django", "Django REST Framework (DRF)", "FastAPI"],
    },
    {
      category: "Databases",
      description: "Relational persistence, in-memory caches, and NoSQL document stores.",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "DynamoDB"],
    },
    {
      category: "DevOps & Infrastructure",
      description: "Containerization, CI/CD pipelines, web servers, and telemetry monitoring.",
      skills: [
        "Docker",
        "CI/CD",
        "AWS",
        "VPS",
        "Kubernetes",
        "Nginx",
        "Linux",
        "Grafana",
        "Loki",
        "Prometheus",
      ],
    },
    {
      category: "AI & LLM Technologies",
      description: "Applied generative AI, high-dimensional vector search, and agent architectures.",
      skills: [
        "Generative AI",
        "LLMs",
        "RAG",
        "Prompt Engineering",
        "Vector Embeddings",
        "pgvector",
        "AI Agents",
        "OpenAI API",
      ],
    },
    {
      category: "Architecture & Engineering",
      description: "Software design principles, structural patterns, and architectural paradigms.",
      skills: [
        "OOP",
        "Async Programming",
        "Functional Programming",
        "SOLID",
        "DRY",
        "KISS",
        "System Design",
        "Monolith",
        "Microservices",
        "Factory",
        "Singleton",
        "Strategy",
        "Repository",
        "Observer",
      ],
    },
    {
      category: "Testing & Tooling",
      description: "Automated test suites, API documentation, version control, and development environments.",
      skills: [
        "Pytest",
        "Postman",
        "Swagger",
        "Git",
        "GitHub",
        "GitLab",
        "Bitbucket",
        "VS Code",
        "PyCharm",
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Northern University Bangladesh",
      period: "April 2026 — Present",
      grade: "CGPA: 3.85 / 4.00",
      status: "1st Semester",
      focus: "Advanced computing, distributed systems, algorithms, and software engineering principles.",
    },
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Brahmanbaria Government Polytechnic Institute",
      period: "May 2021 — March 2026",
      grade: "CGPA: 3.51 / 4.00",
      status: "Completed",
      focus: "Computer programming, database design, operating systems, computer networking, and web architecture.",
    },
  ],

  certifications: [
    {
      name: "Backend Web Development (Django & DRF)",
      issuer: "Phitron",
      description: "Comprehensive mastery of Django, Django REST Framework, relational databases, and secure API architecture.",
      credentialUrl:
        "https://www.linkedin.com/in/salauddinahmed85/overlay/Certifications/961498844/treasury?profileId=ACoAAEpViY0BcEhcbZRRvpmn8o2OOJCaJJL-t0o",
    },
    {
      name: "Professional Spoken English Training",
      issuer: "3-Month Program",
      description: "Intensive 3-month communication training for international engineering collaboration, team syncs, and client delivery.",
      credentialUrl:
        "https://www.linkedin.com/in/salauddinahmed85/overlay/Certifications/822099377/treasury?profileId=ACoAAEpViY0BcEhcbZRRvpmn8o2OOJCaJJL-t0o",
    },
    {
      name: "DevOps Fundamentals",
      issuer: "Ostad",
      description: "Hands-on containerization with Docker, CI/CD automation, Linux system administration, and deployment orchestration.",
      credentialUrl:
        "https://www.linkedin.com/in/salauddinahmed85/overlay/Certifications/961498844/treasury?profileId=ACoAAEpViY0BcEhcbZRRvpmn8o2OOJCaJJL-t0o",
    },
  ],

  contact: {
    headline: "Have a project in mind?",
    subheadline:
      "I'm open to software engineering opportunities, product development, and technically challenging projects across backend, frontend, DevOps, and AI.",
  },
};
