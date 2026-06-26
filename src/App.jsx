import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Helmet } from 'react-helmet-async'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa6'
import { FiArrowRight, FiCode, FiLayers, FiZap } from 'react-icons/fi'
import { Layout } from './components/Layout'
import { SectionHeading } from './components/SectionHeading'
import { aboutHighlights, projects, skillGroups, heroHighlights, socialLinks } from './data/siteData'
import emailjs from '@emailjs/browser'

function App() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    setFormStatus('loading')

    try {
      await emailjs.sendForm('service_8uq6ld5', 'template_xf0xvra', form, 'hQeY9M7IXdYd4Vg7m')
      setFormStatus('success')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Harsh Patil | Frontend Developer</title>
        <meta name="description" content="Harsh Patil is a frontend developer crafting premium experiences with React, Tailwind, and modern UI systems." />
        <meta name="theme-color" content="#09090B" />
      </Helmet>

      <div className="pointer-events-none fixed inset-0 z-70 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.13),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0,transparent_60%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 backdrop-blur">
              <FiZap /> Available for freelance & full-time opportunities
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Harsh Patil</span>
            </h1>
            <div className="mt-5 text-2xl text-zinc-300 sm:text-3xl">
              <TypeAnimation sequence={['Frontend Developer', 1200, 'React Engineer', 1200, 'UI Enthusiast', 1200]} wrapper="span" speed={35} repeat={Infinity} />
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              I create modern, fast, and highly polished web experiences that feel premium from the first interaction to the last.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5">View Projects <FiArrowRight /></a>
              <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5">Contact Me</a>
              <a href="/HarshPatilResume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5"><FaDownload /> Download Resume</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:-translate-y-0.5 hover:border-violet-400/50">
                  {link.icon === 'github' ? <FaGithub /> : link.icon === 'linkedin' ? <FaLinkedin /> : <FaEnvelope />}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }} className="relative mx-auto w-full max-w-xl">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-4 shadow-2xl shadow-violet-950/20 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(192,132,252,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.16),transparent_30%)]" />
              <div className="relative rounded-3xl border border-white/10 bg-[#0f172a]/70 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Current focus</p>
                    <p className="text-xl font-semibold text-white">Premium frontend craft</p>
                  </div>
                  <div className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">React / Tailwind</div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[{ title: 'Design systems', description: 'Reusable, polished UI foundations' }, { title: 'Motion', description: 'Delightful interactions and transitions' }].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <FiCode className="text-violet-300" />
                    <span className="font-medium">Building with modern tools</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'Framer Motion', 'Supabase', 'Vite'].map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="A thoughtful developer with a refined product mindset." description="I enjoy turning product goals into elegant, high-performance interfaces that feel effortless to use." />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-zinc-400">
              I’m Harsh Patil, a third-year diploma student in Computer Engineering at Bhausaheb Vartak Polytechnic, based in Palghar, Maharashtra. I’m passionate about building frontend experiences that blend crisp design, thoughtful interaction, and strong engineering fundamentals.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Education</p>
                <p className="mt-2 text-lg text-white">Diploma in Computer Engineering</p>
                <p className="mt-1 text-sm text-zinc-400">Bhausaheb Vartak Polytechnic</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Location</p>
                <p className="mt-2 text-lg text-white">Palghar, Maharashtra</p>
                <p className="mt-1 text-sm text-zinc-400">India</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {aboutHighlights.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }} className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-transparent p-5 backdrop-blur-xl">
                <p className="text-lg font-medium text-white">{item.title}</p>
                <p className="mt-2 text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Skills" title="Focused on the tools that shape delightful products." description="A practical blend of frontend craft, modern workflows, and reliable building blocks." />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }} className="rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-linear-to-br from-violet-500/30 to-fuchsia-500/20 p-3 text-violet-200">
                  <FiLayers />
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="h-2 rounded-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects" title="A collection of thoughtful interfaces and polished products." description="Each project is crafted to balance practicality, narrative, and a premium visual language." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }} className="card group rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/30">
              <div className="mb-6 h-40 rounded-[1.25rem] border border-white/10 bg-linear-to-br from-violet-600/25 via-fuchsia-500/20 to-cyan-400/20" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">{tech}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-violet-400/40">GitHub</a>
                <a href={project.demo} className="rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5">Live Demo</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Let’s create something sharp and memorable." description="Whether you need a polished product page or a full frontend experience, I’m ready to build it." />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease: 'easeOut' }} className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Email</p>
                <a href="mailto:harshpatil@example.com" className="mt-2 block text-lg text-white">harshpatil@example.com</a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">GitHub</p>
                <a href="https://github.com/Harshpatil25" target="_blank" rel="noreferrer" className="mt-2 block text-lg text-white">github.com/Harshpatil25</a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Location</p>
                <p className="mt-2 text-lg text-white">Palghar, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease: 'easeOut' }} onSubmit={handleSubmit} className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="from_name" required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0" placeholder="Your name" />
              <input name="reply_to" type="email" required className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0" placeholder="Your email" />
            </div>
            <textarea name="message" required rows="6" className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0" placeholder="Tell me about your idea..." />
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5">
              {formStatus === 'loading' ? 'Sending...' : formStatus === 'success' ? 'Message sent' : 'Send message'}
              <FiArrowRight />
            </button>
            {formStatus === 'error' ? <p className="mt-3 text-sm text-rose-400">Something went wrong. Please try again later.</p> : null}
          </motion.form>
        </div>
      </section>
    </Layout>
  )
}

export default App
