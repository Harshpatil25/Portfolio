import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-zinc-400">{description}</p>
    </motion.div>
  )
}
