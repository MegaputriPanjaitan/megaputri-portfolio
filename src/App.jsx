import { useState } from "react";

const profile = {
  name: "Megaputri Nathalina",
  headline: "Computer Science Graduate",
  summary:
    "Computer Science graduate with practical experience in information systems, data analysis, software quality assurance, and administrative process digitalization through internships and academic projects. Proficient in Python, SQL, Power BI, and manual software testing, with strong analytical, problem-solving, and teamwork skills. Interested in contributing to technology-driven organizations through data-driven decision making and digital transformation initiatives.",
  email: "megaputripanjaitan@gmail.com",
  linkedin: "https://www.linkedin.com/in/megaputri-panjaitan/",
  github: "https://github.com/MegaputriPanjaitan",
  cv: "https://drive.google.com/drive/folders/1iB0mvuKWxY33IWx9Ed37ybA4qtMiUM1i?usp=sharing",
  photo: "/profile.jpg",
};

const skills = [
  {
  title: "Data Analytics & Information Systems",
  items: [
    "Python",
    "SQL",
    "Power BI",
    "Microsoft Excel",
    "Data Analysis",
    "Data Cleaning",
    "Dashboard Development",
    "Database Design",
    "System Analysis",
    "Requirement Analysis",
  ],
},
  {
  title: "Software Testing",
  items: [
    "Manual Testing",
    "Test Case Design",
    "API Testing",
    "Bug Reporting",
    "Postman",
    "Trello",
  ],
},
{
  title: "Development Tools",
  items: [
    "Git",
    "GitHub",
    "Visual Studio Code",
  ],
}
];

const experiences = [
  {
    category: "Education",
    title: "Bachelor of Computer Science",
    organization: "Universitas Sumatera Utara",
    location: "Medan, Indonesia",
    period: "Aug 2022 - Apr 2026",
    badge: "GPA 3.89 / 4.00",
    description:
      "Graduated Cum Laude with a Bachelor's degree in Computer Science (GPA 3.89/4.00). Developed practical skills in information systems, data analytics, software quality assurance, and web application development through academic projects, internships, and research.",

    image: "/organization/graduation.jpg"
  },
  {
    category: "Internship",
    title: "IT Program Monitoring Intern",
    organization: "BPJS Ketenagakerjaan Medan Kota",
    location: "Medan, Indonesia",
    period: "Mar 2025 - May 2025",
    badge: "Data Monitoring",
    description:
      "Supported internship program monitoring through participant data validation, dashboard reporting, and the development of a web-based internship performance monitoring system to improve reporting efficiency.",
    image: "/organization/bpjs.png"
  },
  {
    category: "Internship",
    title: "Administrative Intern",
    organization: "BNI KCP Citra Garden Medan",
    location: "Medan, Indonesia",
    period: "Jul 2025",
    badge: "Banking Operations",
    description:
      "Supported daily banking operations including document processing, customer data administration, account registration support, and reporting while gaining hands-on experience in banking workflows.",
     image: null,
  },
  
];

const courses = [
  {
    title: "Dasar Microsoft Excel Administrasi Perkantoran",
    provider: "Yureka Education Center",
    year: "2026",
    thumbnail: "/certificates/excel-preview.png", // Halaman pertama saja
    pdf: "/certificates/excel-yec.pdf",               // File PDF lengkap
    description:
      "Learned Microsoft Excel fundamentals for administrative tasks, including data management, formulas, and reporting.",
  },
  {
    title: "Basic English for Work",
    provider: "Yureka Education Center",
    year: "2026",
    thumbnail: "/certificates/english-preview.png", // Halaman pertama saja
    pdf: "/certificates/english-yec.pdf",               // File PDF lengkap
    description:
      "Completed workplace English training focusing on communication and professional interaction.",
  },
  {
    title: "Belajar Dasar Data Science",
    provider: "Dicoding",
    year: "2024",
    thumbnail: "/certificates/data-preview.png", // Halaman pertama saja
    pdf: "/certificates/data-dicoding.pdf",               // File PDF lengkap
    description:
      "Study the fundamental concepts of data science, including an introduction to the data analysis process, data processing, and data visualization",
  },
  {
    title: "Structured Query Language (SQL) Basics",
    provider: "Dicoding",
    year: "2024",
    thumbnail: "/certificates/sql-preview.png", // Halaman pertama saja
    pdf: "/certificates/sql-dicoding.pdf",               // File PDF lengkap
    description:
      "Learned SQL fundamentals including querying, filtering, joining tables, and database concepts.",
  },
  {
    title: "Quality Assurance Introduction",
    provider: "MySkill",
    year: "2026",
    thumbnail: "/certificates/qa-preview.png", // Halaman pertama saja
    pdf: "/certificates/qa-myskill.pdf",               // File PDF lengkap
    description:
      "Learned software testing fundamentals, SDLC, STLC, and quality assurance concepts.",
  },
  {
    title: "Python Programming Basics",
    provider: "Dicoding",
    year: "2024",
    thumbnail: "/certificates/python-preview.png", // Halaman pertama saja
    pdf: "/certificates/python-dicoding.pdf",               // File PDF lengkap
    description:
      "Completed Python programming fundamentals including variables, functions, loops, and object-oriented programming.",
  },
  
];

const organizations = [
  {
    title: "Student Executive Board Member",
    organization: "BEM FASILKOM-TI USU",
    period: "2024 - 2025",
    description:
      "Actively contributed to student governance activities by organizing campus programs, collaborating with multidisciplinary teams, and strengthening leadership, communication, and teamwork skills.",

    certificates: [
      {
        thumbnail: "/organization/bem-preview.png",
        pdf: "/organization/bem.pdf",
      },
    ],
  },

  {
    title: "Committee Experience",
    organization: "Faculty Events",
    period: "2022 - 2024",
    description:
      "Served as a committee member in several faculty events, supporting event planning, coordination, administration, and execution while developing collaboration, adaptability, and problem-solving skills.",

    certificates: [
      {
        thumbnail: "/organization/pkkmb-preview.jpg",
        pdf: "/organization/pkkmb.jpg",
      },
      {
        thumbnail: "/organization/csa-preview.png",
        pdf: "/organization/csa.png",
      },
      {
        thumbnail: "/organization/porseni-preview.png",
        pdf: "/organization/porseni.png",
      },
    ],
  },
];

const projects = [
  {
  title: "North Sumatra Socioeconomic Information System",
  role: "Data Analyst & System Developer | Independent Project | 2026",
  layout: "desktop",
  image: "/projects/north-sumatra-information-system.png",
  tags: [
    "Python",
    "SQL",
    "Power BI",
    "ETL",
    "Data Analysis",
    "BPS Dataset",
    "Dashboard",
    "Business Intelligence",
  ],
  description:
    "An end-to-end socioeconomic information system built using official Statistics Indonesia (BPS) datasets to analyze and visualize key development indicators across regencies and cities in North Sumatra. The project integrates ETL processes, relational database design, and interactive Power BI dashboards to support data-driven decision making.",
  highlights: [
    "Collected and integrated official BPS datasets covering population, education, poverty, unemployment, Human Development Index (HDI), and regional GDP indicators.",
    "Performed data cleaning, transformation, and validation using Python before storing the processed data in a relational SQL database.",
    "Designed interactive Power BI dashboards featuring KPI cards, trend analysis, regional comparisons, and district-level filtering for socioeconomic monitoring.",
    "Produced analytical insights and technical documentation including database schema, ETL workflow, and system design to simulate a real-world government information system project.",
  ],
},
{
    title: "URLDetector Application",
    role: "Thesis Project / Developer | Medan, Indonesia | 2026",
    layout: "mobile",
    image: "/projects/url-detector.png",
    tags: ["Cybersecurity", "URL Analysis", "Validation", "Thesis Project"],
    description:
      "A thesis-based application to detect potentially malicious URLs using URL string characteristics and support safer browsing awareness.",
    highlights: [
      "Developed the workflow from URL input to detection result output.",
      "Applied validation-oriented system design for security-related use cases.",
      "Strengthened cybersecurity fundamentals through malicious URL detection research.",
      "Documented the application as part of an academic thesis project.",
    ],
  },
  {
    title: "QA Testing Projects - SauceDemo & Automation Exercise",
    role: "Independent Projects | 2025",
    layout: "desktop",
    image: "/projects/qa-testing.png",
    tags: ["Manual Testing", "API Testing", "Postman", "Trello", "Test Cases"],
    description:
      "Manual UI and API testing projects covering authentication, product/search, cart, checkout, subscription, contact, and selected API modules.",
    highlights: [
      "Designed and executed 50 manual UI/API test cases.",
      "Prepared test plans, test scenarios, defect logs, and final test summary reports.",
      "Used Trello for defect tracking and Postman for API testing notes.",
      "Practiced functional testing, negative testing, API validation, and structured QA documentation.",
    ],
  },
  {
    title: "Workshop Cashier & Inventory System",
    role: "Python Developer | Client Project | 2026 - Ongoing",
    layout: "desktop",
    image: "/projects/workshop-cashier.png",
    tags: [
      "Python",
      "PySide6",
      "SQLite",
      "Desktop App",
      "Inventory",
      "Transactions",
    ],
    description:
      "A Python-based desktop cashier and inventory application for a workshop, designed to support stock monitoring, cashier transactions, transaction history, cash management, assets, quotation, and application settings.",
    highlights: [
      "Designed and implemented a local SQLite database schema.",
      "Built product, category, stock-in, and cashier transaction workflows.",
      "Implemented sales validation, discount calculation, change calculation, and low-stock warning.",
      "Prepared the application for executable packaging using PyInstaller.",
    ],
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-100 transition-all duration-300 hover:border-blue-300/60 hover:bg-blue-400/20">
      {children}
    </span>
  );
}

function SmartImage({ src, alt, className, fallbackClassName, fallbackText }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={fallbackClassName}>
        <span>{fallbackText}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative z-10 border-y border-white/10 bg-white/[0.025] px-6 py-20"
    >
      <SectionTitle
        eyebrow="Experience"
        title="Education, internship, and learning journey"
        description="A summary of academic background, internship experience, certifications, and organizational activities aligned with IT development, banking operations, data monitoring, and software quality."
      />

      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-5">
          {experiences.map((item, index) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-slate-950/25 transition-all duration-500 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.07]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-400/10 blur-3xl" />

              {/* Number */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-300/10 text-sm font-black text-blue-200">
                0{index + 1}
              </div>

              {/* Header */}
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">

                <div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-300">
                    {item.organization} • {item.location}
                  </p>

                </div>

                <div className="flex flex-col gap-2">

                  <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-1 text-xs text-slate-300">
                    {item.period}
                  </span>

                  <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-1 text-xs text-blue-100">
                    {item.badge}
                  </span>

                </div>

              </div>

              {/* Content */}
              {item.image ? (

                <div className="flex flex-col lg:flex-row gap-8 items-center">

                  <div className="flex-1">

                    <p className="leading-8 text-slate-300">
                      {item.description}
                    </p>

                  </div>

                  <div className="w-full lg:w-80 shrink-0">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-2xl object-cover shadow-lg"
                    />

                  </div>

                </div>

              ) : (

                <div className="mx-auto max-w-4xl">

                  <p className="leading-8 text-slate-300 text-center">
                    {item.description}
                  </p>

                </div>

              )}

            </article>
          ))}
        </div>

        {/* <aside className="space-y-5"> */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-slate-950/25 transition duration-300 hover:border-blue-300/30">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Courses & Certifications
            </p>

            <h3 className="text-xl font-bold text-white">
              Continuous Learning
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Professional training and certifications completed to strengthen my
              knowledge in data analytics, software development, quality assurance,
              and workplace skills.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Certificate Preview */}
                  <a
                    href={course.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex h-60 items-center justify-center bg-white p-4">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="h-full w-full object-contain transition duration-300 hover:scale-105"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-white">
                      {course.title}
                    </h4>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-300">
                        {course.provider}
                      </span>

                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-200">
                        {course.year}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {course.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-slate-400">
                        PDF Certificate Available
                      </span>

                      <a
                        href={course.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                      >
                        View Certificate ↗
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-slate-950/25">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
            Leadership & Organization
          </p>

          <h3 className="text-2xl font-bold text-white">
            Campus Leadership Experience
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Organizational and committee experiences that strengthened leadership,
            teamwork, communication, and project coordination skills throughout my
            university journey.
          </p>

          <div className="mt-8 space-y-8">

            {organizations.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition-all duration-300 hover:border-blue-400/40"
              >

                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-blue-300">
                      {item.organization}
                    </p>

                  </div>

                  <span className="rounded-full bg-blue-500/15 px-4 py-1 text-xs font-medium text-blue-200">
                    {item.period}
                  </span>

                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6">

                  <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Certificates
                  </h5>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {item.certificates.map((certificate, index) => (

                      <a
                        key={index}
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
                      >

                        <div className="flex h-60 items-center justify-center p-4">

                          <img
                            src={certificate.thumbnail}
                            alt={`${item.title} Certificate ${index + 1}`}
                            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                          />

                        </div>

                      </a>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
        {/* </aside> */}
      </div>
    </section>
  );
}

function ProjectSlide({ project, index }) {
  const isMobileLayout = project.layout === "mobile";

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-md transition-all duration-500 md:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div
        className={
          isMobileLayout
            ? "relative grid gap-8 lg:grid-cols-[0.56fr_1.44fr] lg:items-center"
            : "relative space-y-7"
        }
      >
        <div
          className={
            isMobileLayout
              ? "flex justify-center lg:justify-start"
              : "overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-inner shadow-slate-950/40"
          }
        >
          <SmartImage
            src={project.image}
            alt={`${project.title} screenshot`}
            className={
              isMobileLayout
                ? "max-h-[520px] w-auto object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-[1.03]"
                : "max-h-[430px] w-full object-contain transition duration-500 hover:scale-[1.015]"
            }
            fallbackClassName={
              isMobileLayout
                ? "flex min-h-72 w-52 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-16 text-center text-sm font-semibold text-slate-400"
                : "flex min-h-72 w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 px-6 py-16 text-center text-sm font-semibold text-slate-400"
            }
            fallbackText="Project screenshot preview"
          />
        </div>

        <div className="relative">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-blue-300">
                0{index + 1} / 0{projects.length}
              </p>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{project.role}</p>
            </div>

            <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold text-slate-300">
              {project.layout === "mobile" ? "Mobile-style Preview" : "Desktop/Web Preview"}
            </div>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-[15px]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/35 p-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectCarousel() {
  const [activeProject, setActiveProject] = useState(0);

  const goToPrevious = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setActiveProject(index)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                activeProject === index
                  ? "border-blue-300 bg-blue-300 text-slate-950 shadow-lg shadow-blue-400/20"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-300/40 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              0{index + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevious}
            className="group rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-x-1 hover:border-blue-300/50 hover:bg-blue-400/10"
            aria-label="Previous project"
          >
            ← Prev
          </button>
          <button
            onClick={goToNext}
            className="group rounded-full bg-blue-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-blue-400/20 transition-all duration-300 hover:translate-x-1 hover:bg-blue-300"
            aria-label="Next project"
          >
            Next →
          </button>
        </div>
      </div>

      <div key={projects[activeProject].title} className="slide-fade">
        <ProjectSlide project={projects[activeProject]} index={activeProject} />
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setActiveProject(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeProject === index
                ? "w-10 bg-blue-300"
                : "w-2.5 bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          body {
            background: #020617;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatSoft {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          @keyframes slideFade {
            from {
              opacity: 0;
              transform: translateX(18px) scale(0.985);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              opacity: 0.45;
              transform: scale(1);
            }
            50% {
              opacity: 0.85;
              transform: scale(1.08);
            }
          }

          .fade-up {
            animation: fadeUp 0.75s ease-out both;
          }

          .float-soft {
            animation: floatSoft 4s ease-in-out infinite;
          }

          .slide-fade {
            animation: slideFade 0.45s ease-out both;
          }

          .glow-pulse {
            animation: glowPulse 4.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="glow-pulse absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-10 top-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Megaputri<span className="text-blue-300">.</span>
        </a>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#skills">
            Skills
          </a>
          <a className="transition hover:text-white" href="#experience">
            Experience
          </a>
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24"
      >
        <div className="fade-up text-center md:text-left">
          <div className="mb-6 inline-flex rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-sm font-medium text-blue-100 shadow-lg shadow-blue-400/10">
            Open to IT Development Program opportunities
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-xl font-semibold text-blue-200 md:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row md:justify-start">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-blue-400/20 transition hover:-translate-y-0.5 hover:bg-blue-300"
            >
              View CV
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-sm perspective-1000">
          <div className="group relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-blue-950/40 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 hover:border-blue-300/40 hover:bg-white/[0.075] hover:shadow-[0_28px_90px_rgba(59,130,246,0.22)]">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl transition duration-500 group-hover:bg-blue-300/30" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition duration-500 group-hover:bg-cyan-300/20" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900 transition duration-500 group-hover:border-blue-300/40">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-40" />
              <SmartImage
                src={profile.photo}
                alt={`${profile.name} profile photo`}
                className="float-soft aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                fallbackClassName="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 text-5xl font-black text-blue-200"
                fallbackText="MN"
              />
            </div>

            <div className="relative mt-4 rounded-2xl border border-white/10 bg-slate-950/80 p-4 transition duration-500 group-hover:border-blue-300/30 group-hover:bg-slate-950/90">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">
                  IT Development Portfolio
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.7)]" />
              </div>
              <p className="text-sm text-slate-400">
                Desktop App • Backend • Cybersecurity • QA Testing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="about"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Building practical systems with reliability, data, and security in
              mind.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-base leading-8 text-slate-300 shadow-2xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30">
            <p>
              I enjoy developing applications that solve practical business
              problems, especially systems involving transactions, data
              management, validation, and user workflows. My project experience
              includes a workshop cashier and inventory system, backend features
              for a mobile pet-care app, a malicious URL detection thesis
              project, and structured QA testing projects.
            </p>
            <p className="mt-4">
              I am especially interested in digital banking technology, backend
              development, database systems, cybersecurity fundamentals, and
              software quality assurance.
            </p>
          </div>
        </div>
      </section> */}

      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Skills"
          title="Technical strengths"
          description="A focused skill set across application development, backend tools, database systems, security awareness, and QA documentation."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.07]"
            >
              <h3 className="mb-5 text-lg font-bold text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExperienceSection />

      <section
        id="projects"
        className="relative z-10 border-y border-white/10 bg-white/[0.03] px-6 py-20"
      >
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured projects"
          description="Selected academic, client, team, and independent projects that show development, backend, cybersecurity, database, and QA fundamentals."
        />

        <ProjectCarousel />
      </section>

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <SectionTitle
          eyebrow="Contact"
          title="Let’s connect"
          description="Feel free to reach out for IT development, backend, QA, cybersecurity-related opportunities, or graduate development programs."
        />

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <a
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-100"
            href={`mailto:${profile.email}`}
          >
            Email Me
          </a>

          <a
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-white/10"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-white/10"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          © 2026 Megaputri Nathalina. Built with React, Vite, and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}
