import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiCode, FiCpu, FiZap, FiDownload, FiExternalLink } from 'react-icons/fi';
import profilePhoto from '../bhanu.jpeg.jpeg';

const currentSkills = [
  'C',
  'HTML',
  'CSS',
  'JavaScript (Basic)',
  'Git & GitHub',
  'AI-Assisted Development (VSCode + Copilot)',
];

const interestedSkills = [
  'C++',
  'Data Structures & Algorithms',
  'React',
  'Tailwind CSS',
  'Web Development',
];

const projects = [
  {
    title: 'My Profile',
    description: 'A personal portfolio website showcasing my journey, skills, and projects with a modern and elegant design.',
    tags: ['React', 'Tailwind CSS', 'Web Design'],
    link: 'https://my-profile-tawny-three.vercel.app/',
    github: 'https://github.com/mailtobhanupriyan07/my-profile',
  },
  {
    title: 'HealthPulse',
    description: 'A smart wellness dashboard that brings health insights, habit tracking, and AI-powered summaries together in one elegant experience.',
    tags: ['React', 'AI', 'Health Tech'],
    link: 'https://serene-sprinkles-1fc80c.netlify.app/',
    github: 'https://github.com/mailtobhanupriyan07/healthpulse',
  },
];

const achievements = [
  'Built award-worthy hackathon experiences with polished user interfaces',
  'Strong interest in researching current boom in ai and practical implementation',
  'Focused on solving real-world problems through clean engineering',
];

const stats = [
  { label: 'CGPA', value: '9.53' },
  { label: 'Hackathons', value: '2+' },
  { label: 'Projects', value: '2+' },
  { label: 'DSA Problems', value: '10+(working on it)' },
];

const education = [
  {
    institution: 'JSS STU Mysore',
    level: 'Bachelor of Engineering (3rd Semester)',
    score: 'First Sem SGPA: 9.53',
    year: 'Current',
  },
  {
    institution: 'BGS Mysore',
    level: 'PU Board (Karnataka)',
    score: '95.33%',
    year: '2025',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya',
    level: 'Class 10 (CBSE)',
    score: '93%',
    year: '2023',
  },
];

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <div className="custom-cursor min-h-screen bg-transparent text-slate-100">
      <div className="cursor-glow" style={{ left: cursorPosition.x, top: cursorPosition.y }} />

      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mb-8 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Bhanupriya</p>
              <p className="text-xs text-slate-500">CSE student • AI • DSA</p>
            </div>
            <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-cyan-300">About</a>
              <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
              <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
            </nav>
          </div>
        </header>

        <main className="space-y-6">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 shadow-glow backdrop-blur-2xl sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.2),transparent_35%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                  👋 Hi, I'm Bhanupriya
                </p>
                <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">Beginner Software Developer </span>
                </h1>
                <p className="mt-5 max-w-xl text-lg text-slate-300">
                  Building intelligent products that solve real-world problems. Computer Science student at JSS STU with a passion for learning coding fundamentals, problem solving, hackathons, and creating meaningful digital experiences.
                </p>
              
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]">
                    View Projects <FiArrowRight />
                  </a>
                  <a href="/Bhanupriya_N_Resume_Final.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 font-semibold text-cyan-200 transition hover:scale-[1.02] hover:border-cyan-300/50 hover:bg-cyan-400/20">
                    View Resume <FiDownload />
                  </a>
                </div>
                <div className="mt-8 flex gap-4 text-slate-300">
                  <a href="https://github.com/mailtobhanupriyan07" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300 hover:scale-110" title="GitHub"><FiGithub size={20} /></a>
                  <a href="https://www.linkedin.com/in/bhanupriya-n-678576386?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300 hover:scale-110" title="LinkedIn"><FiLinkedin size={20} /></a>
                  <a href="mailto:mailtobhanupriyan07@gmail.com" className="rounded-full border border-white/10 p-3 transition hover:border-cyan-300/40 hover:text-cyan-300 hover:scale-110" title="Email"><FiMail size={20} /></a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-3xl" />
                <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Current focus</p>
                      <p className="font-semibold text-white">Integrating AI in my works to make the works easier</p>
                    </div>
                    <div className="rounded-full bg-violet-500/20 p-3 text-violet-300"><FiCpu size={20} /></div>
                  </div>
                  <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 p-2">
                    <img src={profilePhoto} alt="Bhanupriya" className="h-[320px] w-full rounded-[1.1rem] object-cover" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-2">
                        <p className="text-lg font-bold text-cyan-300">{stat.value}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-cyan-300">Current Skills</p>
                      <div className="space-y-2">
                        {currentSkills.map((skill) => (
                          <div key={skill} className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-violet-300">Learning</p>
                      <div className="space-y-2">
                        {interestedSkills.map((skill) => (
                          <div key={skill} className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-white/10 bg-slate-900/50 p-7 backdrop-blur-xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About</p>
              <h2 className="text-3xl font-bold text-white">A curious builder with a sharp eye for impact.</h2>
              <p className="mt-4 text-slate-300 leading-7">
                I enjoy blending technical depth with design sensibility to create experiences that feel both intelligent and human. Whether it’s solving a DSA problem, building a machine learning prototype, or competing in a hackathon, I’m driven by the same goal: create something meaningful.
              </p>              <p className="mt-4 text-slate-300 leading-7">
                I'm the girl who is an introvert, but I dream of becoming a public speaker—and I'm actively working on it!
              </p>            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-cyan-300">
                <FiZap />
                <p className="font-semibold">What drives me</p>
              </div>
              <div className="mt-5 space-y-3">
                {achievements.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="projects" className="rounded-[1.8rem] border border-white/10 bg-slate-900/50 p-7 backdrop-blur-xl">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Projects</p>
                <h2 className="text-3xl font-bold text-white">Selected work with a premium feel</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-[1.4rem] border border-white/10 bg-slate-950/70 p-6">
                  <div className="mb-4 flex items-center gap-2 text-cyan-300">
                    <FiCode />
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-300 leading-7">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-800 border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-300">
                          <FiGithub size={16} /> GitHub
                        </a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-500/40">
                        Live Demo <FiExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-white/10 bg-slate-900/50 p-7 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Achievements</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Built for hackathons, research, and thoughtful execution.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {['Hackathon-ready problem solving', 'Creative AI exploration', 'Clean, modern product execution'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="rounded-[1.8rem] border border-white/10 bg-slate-900/50 p-7 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Education</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Academic Excellence & Growth</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left font-semibold text-cyan-300">Institution</th>
                    <th className="px-4 py-3 text-left font-semibold text-cyan-300">Level</th>
                    <th className="px-4 py-3 text-left font-semibold text-cyan-300">Score</th>
                    <th className="px-4 py-3 text-left font-semibold text-cyan-300">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((edu, index) => (
                    <tr key={index} className="border-b border-white/5 transition hover:bg-white/5">
                      <td className="px-4 py-3 text-slate-200 font-medium">{edu.institution}</td>
                      <td className="px-4 py-3 text-slate-300">{edu.level}</td>
                      <td className="px-4 py-3 text-cyan-300 font-semibold">{edu.score}</td>
                      <td className="px-4 py-3 text-slate-400">{edu.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="contact" className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-7 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Let’s create something exceptional together.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              If you’re looking for a curious builder who enjoys AI, strong engineering fundamentals, and polished product design, feel free to reach out.
            </p>
            <p className="mt-3 max-w-2xl rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-slate-200 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
              ✨ If you currently want to build a project and need help turning the idea into something real, feel free to DM me — I’d love to help you build it.
            </p>
            <a href="mailto:mailtobhanupriyan07@gmail.com?subject=Let's%20Connect&body=Hi%20Bhanupriya" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Say hello <FiArrowRight />
            </a>
          </section>
        </main>

        <footer className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Bhanupriya. Crafted with passion and precision.</p>
          <div className="flex gap-4">
            <a href="https://github.com/mailtobhanupriyan07" className="transition hover:text-cyan-300">GitHub</a>
            <a href="https://www.linkedin.com/in/bhanupriya-n-678576386?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="transition hover:text-cyan-300">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
