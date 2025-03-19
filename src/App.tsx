import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Download } from 'lucide-react';

function App() {
  const [selectedJob, setSelectedJob] = useState(0);

  const jobs = [
    {
      title: "Support Engineer II",
      company: "Amazon",
      period: "May. 2022 - April-2024",
      logo: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png-1.webp",
      responsibilities: [
        "Amazon Academy :Implemented functionalities to manage course content bundles (cloning, adding, deleting, and viewing offerings in a bundle), reducing manual workload for the content team.Technologies used:Flask,Elastic Search,Dynamo DB",
        "Amazon Academy :Implemented validations on daily digest (tip of the day) fields to eliminate delivery of blank/incorrect content for a specific day to the students using Java and Bash scripting.",
        "Amazon Academy :Developed an automated solution to validate availability of all artifacts (DPP, Classnotes, watch recordings) for each session in the Live Lectures component and notify teachers via email. Technologies: Flask, S3, AppConfig, IAM.",
        "Kindle Accounting and Royalty:Worked on accounting launches and addressing tech debts for the Ebooks and Kindle Unlimited(KU) business.",
        "Automated the generation of Accounting Rollforward report for Deferred Revenue in the KU business utilising Datanet and Spark technologies.",
        "Developed a new reporting framework to automate the generation of Accounting Aging Reports for KU subscriptions.Technologies used: Datanet,Redshift,AWS CDK,AWS Glue,AWS Lambda,Pyspark,Kotlin",
        "Addressed a significant financial impact of approximately one $1MM resulting from unbooked transactions in the accounting ledger.",
        "Performed accounting transaction redrives for reducing unbooked impact.",
        "Experienced in ticket handling including sev 2 tickets and engaged in on-call responsibilities.Worked on resolving risks and weblab removal.",
        "Automated the booking of accounting entries for Gift breakage and Unbreakage for Ebooks Gifting and KU subscription gifting.Technologies Used:Cradle Job,AWS Glue",
        "Implemented an automated alarm system to detect and alert revenue adjustment failures in bundled purchases(Digital+Physical),  preventing accounting discrepancies.(Java)"
      ]
    },
    {
      title: "Senior Software Developer",
      company: "Prodapt",
      period: "Dec. 2021 - April. 2022",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE9p2EG5ghtDA/company-logo_200_200/company-logo_200_200/0/1631357517588?e=1750291200&v=beta&t=OpyibG9kK1WMvVP-bmOYAxpkZOTTiwkU7ksGyNCc5d8",
      responsibilities: [

        "Developed a Python-based SNMP query utility for network management and packaged it as a standalone app with PyInstaller.",
        "Replaced the file-based approach with an API-based approach when directing information to ESP(Event Stream Processing), a component of Assure1",

        "Exposure to concepts such as the Go programming language and Microservices, as well as network technologies like Assure1"
      ]
    },
    {
      title: "Cloud and Automation Engineer",
      company: "MicroFocus",
      period: "Nov. 2017 - Oct. 2021",
      logo: "https://devtools.in/wp-content/uploads/2022/10/Micro_Focus.png",
      responsibilities: [
        "Created a dashboard for Micro Focus Pre-sales data using the ELK stack by processing data with Logstash, storing it in Elasticsearch, and creating visualizations in Kibana",
        "Developed banking use cases such as securitization and demand drafts, and fixed defects for the Westpac application",
        "Worked with HPE tools such as Server Automation, Operations Bridge Manager(OBM), Operation Orchestration, and vCenter to automate the setup and management of a Linux-based infrastructure",
        "Automated Workday expense report generation with RPA (Robotic Process Automation) and UFT(Unified Functional Testing)",
        "Contributed to chatbot development for Sungard customer",
        "API Integration with Netsuite APIs for P2P processing",
        "Automated VM resource utilization summary generation in an Excel worksheet using Python scripting",
        "Developed functionality and APIs to enable E-bonding between two incident management applications",
        "Tracked workflow path usage in Operations Orchestration to identify least-used paths, enabling data-driven decisions on path retention",
        "Automated daily status report generation for Westpac, providing a snapshot of application performance, transaction metrics, errors, and anomalies"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering ",
      school: "B V Bhoomaraddi College Of Engineering & Technology",
      period: "2013 - 2017",
      description: `Developed a college database management system with a GUI using Java Swing and MySQL.
      Implemented an Online Results System for college using Java and MySQL.
      Created a hand gesture-controlled game in Unity 3D, integrated with OpenCV.
      Built an optimized face recognition system using Gabor filter and SVM classifier.`,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E_T3QyR3tMXkTqkuDpvt709EcLfEh2HT_g&s"
    },
    {
      degree: "Pre-University",
      school: "Chetan PU College Hubli",
      period: "2010 - 2012",
      description: "Statistics",
      logo: "http://www.chetancollege.co.in/images/logo/logo3.jpg"
    }
  ];

  const programmingSkills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },

    { name: "TailwindCSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NextJS", icon: "https://www.hacksoft.io/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F98835%2F1684410508-image-7.png&w=640&q=75" },
    { name: "Flask", icon: "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhjieh24f0kpcwfi9eiau.jpg" },
    { name: "OOP", icon: "https://thumbs.dreamstime.com/z/object-oriented-programming-icon-trendy-modern-flat-linear-vect-vector-white-background-thin-line-technology-collection-130960480.jpg?ct=jpeg" },
    { name: "Data Structures and Algorithm", icon: "https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ=s96-rw" },

  ];

  const itTools = [
    { name: "AWS", icon: "https://images.icon-icons.com/2407/PNG/512/aws_icon_146074.png" },
    { name: "Linux", icon: "https://cdn-icons-png.flaticon.com/128/6124/6124995.png" },
    { name: "ELK", icon: "https://www.edureka.co/blog/wp-content/uploads/2017/11/ELK.png" },
    { name: "Git", icon: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png" },
    { name: "HCM", icon: "https://store-images.s-microsoft.com/image/apps.29509.3e0a99fc-a17d-4dab-8ccc-42809cdaa4f4.80a4d011-a7bf-4b1b-ab0c-47fae161af9b.b64d5b93-4ca6-4d70-90a6-546ddc4d6d12" },

  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">Aishwarya Kalburgi.</a>
          <div className="flex items-center gap-6">
            <a href="#experience" className="hover:text-gray-300 transition">Experience</a>
            <a href="#education" className="hover:text-gray-300 transition">Education</a>
            <a href="#work" className="hover:text-gray-300 transition">Work</a>
            <a href="#skills" className="hover:text-gray-300 transition">Skills</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Software Developer<br />
              AI Enthusiast, <br />
              Building Full-Stack Solutions.
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              I have 7+ years of experience across multiple domains, including Automation,Cloud Technologies and Full Stack Development.Now expanding into Data Science and AI, I enjoy solving real-world problems.One key principle I adopted from my previous company is Customer Obsession, which deeply resonates with me.I am eager to learn, grow, and contribute to the business success of the company I work for.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                Get in touch
              </a>
              <a href="#work" className="border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition">
                View work
              </a>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Work Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`
                      p-4 rounded-lg cursor-pointer transition-all duration-300
                      ${selectedJob === index ? 'bg-[#1a1a1a]' : 'hover:bg-[#1a1a1a]/50'}
                    `}
                    onClick={() => setSelectedJob(index)}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-gray-400">{job.company}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 bg-[#1a1a1a] p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-2">{jobs[selectedJob].title}</h3>
                <p className="text-gray-400 mb-6">{jobs[selectedJob].company}</p>
                <p className="text-sm text-gray-400 mb-6">{jobs[selectedJob].period}</p>
                <ul className="space-y-4">
                  {jobs[selectedJob].responsibilities.map((responsibility, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-gray-300">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Education</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10" />

            {/* Timeline Items */}
            <div className="space-y-20">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full" />

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-[#1a1a1a] p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={edu.logo}
                          alt={edu.school}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-xl">{edu.degree}</h3>
                          <p className="text-gray-400">{edu.school}</p>
                        </div>
                      </div>
                      <p className="text-sm text-purple-400 mb-2">{edu.period}</p>
                      <p className="text-gray-300">
                        <ul className="list-disc list-inside space-y-1">
                          {edu.description.split("\n").map((line, i) => (
                            <li key={i}>{line.trim()}</li>
                          ))}
                        </ul>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ice Cream POS Billing Application",
                description: "The application manages billing, orders, sales tracking, employee management,analytic dashboard and coupon handling. The system features a user-friendly interface, robust backend processing, and insightful sales analytics, empowering business owners to make informed decisions.",
                image: "https://i.ibb.co/ynGqrL8H/FotoJet.jpg",
                url: "https://github.com/aishwarya1-1/IgluPOS/blob/main/README.md",
                tags: ["Next.js", "MySQL", "Tailwind", "Prisma"]
              },
              {
                title: "Label Lens:A Food Ingredient Analyser",
                description: "Label Lens is an AI-powered application that helps users analyze the ingredient list of food products, providing a rating out of 10 based on health factors. It also detects potentially harmful ingredients, carcinogenic substances, and preservatives. Additionally, users can compare up to three products to determine the healthiest option.",
                image: "https://i.ibb.co/7dvrkMhC/Screenshot-2025-03-11-at-3-22-09-PM.png",
                url: "https://labellens.netlify.app/",
                tags: ["React Vite", "botpress", "Supabase"]
              },
              {
                title: "Daily Karnataka News Highlights AI",
                description: "The Karnataka News Subscription project is an automated news summary system that fetches and delivers the latest news updates about Karnataka. The application leverages CrewAI to manage research agents, Serper API for web searches, and Mailchimp for email distribution. Users can subscribe to receive daily news summaries via email. The project is deployed on GitHub Actions and integrates with Streamlit for the user interface.",
                image: "https://i.ibb.co/RptTCtqN/Screenshot-2025-03-15-at-1-17-02-PM.png",
                url: "https://highlights7k.streamlit.app/",
                tags: ["Python", "Mailchimp", "Langchain", "crewAI", "gitHub actions"]

              },
              {
                title: "News Researcher Agent",
                description: "AI Powered RAG Application which enables users to fetch and process article content from URLs using LangChain's UnstructuredURL Loader. It generates embedding vectors with OpenAI's embeddings and indexes them using FAISS for fast and efficient retrieval. Users can interact with Gemini LLM to ask questions and receive answers with source URLs. ",
                image: "https://i.ibb.co/Rpxxth8J/Screenshot-2025-03-19-at-9-37-37-PM.png",
                url: "https://aishwarya1-1-newsresearcher-main-a9delv.streamlit.app/",
                tags: ["Python", "Langchain", "FAISS", "RAG"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => window.open(project.url, '_blank')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm px-3 py-1 bg-white/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-500 mb-4 font-mono">&lt;TECHNICAL PROFICIENCIES&gt;</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Skills.</h2>
          </div>

          <div className="space-y-20">
            {/* Programming Skills */}
            <div>
              <p className="text-purple-500 mb-8 font-mono text-xl">&lt;programming&gt;</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                {programmingSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-24 h-24 bg-[#1a1a1a] rounded-lg relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-hexagon opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-purple-500 mt-8 font-mono text-xl text-right">&lt;/programming&gt;</p>
            </div>

            {/* IT Tools */}
            <div>
              <p className="text-purple-500 mb-8 font-mono text-xl">&lt;itTools&gt;</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                {itTools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-24 h-24 bg-[#1a1a1a] rounded-lg relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-hexagon opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                      {tool.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-purple-500 mt-8 font-mono text-xl text-right">&lt;/itTools&gt;</p>
            </div>

            {/* AI Tools */}
            <div>
              <p className="text-purple-500 mb-8 font-mono text-xl">&lt;aiTools&gt;</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                {[

                  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
                  { name: "Hugging Face", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDvVvSTSxKKvBwZAf9c9UWMY2yOfZvPq46g&s" },
                  { name: "LangChain", icon: "https://newrelic.com/sites/default/files/styles/medium/public/quickstarts/images/icons/langchain--logo.png?itok=JPlfUXXw" },
                  { name: "crewAI", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JLFCJAa-vLzYszw3IJiJv9z-C7pxyIlWPA&s" },
                  { name: "n8n", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTij0b8TpUaSufmgsn43_APfxxx5_E58N9JaA&s" }
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-24 h-24 bg-[#1a1a1a] rounded-lg relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-hexagon opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                      {tool.name}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-purple-500 mt-8 font-mono text-xl text-right">&lt;/aiTools&gt;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work and interesting projects.
              If you have a project that you want to get started, think you need my help
              with something or just fancy saying hey, then get in touch.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:aishwaryak151194@gmail.com"
                className="flex items-center gap-2 hover:text-gray-300 transition"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/aishwarya1-1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300 transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya-kalburgi-721150120/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-300 transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-400">© 2025 Aishwarya Kalburgi. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/aishwarya1-1?tab=repositories" className="text-gray-400 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aishwarya-kalburgi-721150120/" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;