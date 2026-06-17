"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquareQuote } from "lucide-react"

const testimonials = [
  {
    name: "Dawit Teklay",
    role: "CEO, Fly Addis Ethiopia",
    text: "Kiwi Digital completely transformed our digital presence. Their launch branding and video campaigns scaled our audience to over 214K followers and drove massive organic engagement.",
    metrics: "214.5K+ Followers",
  },
  {
    name: "Tigist Assefa",
    role: "Founder, Cenacle Reflexology",
    text: "The team's full-suite video production and campaigns drove over 3 million views and helped us scale to 58K+ followers. They truly understand modern video storytelling.",
    metrics: "3M+ Views",
  },
  {
    name: "Samuel Kebede",
    role: "Operations Director, Gojo Jobs",
    text: "Their high-visibility content strategy and fast-paced video pipeline drove massive reach for our job openings, capturing over 700K+ views and bringing in high-quality candidates.",
    metrics: "700K+ Views",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="testimonials" className="relative py-16 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#BA0807] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            CLIENT SUCCESS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              WHAT THEY SAY
            </motion.span>
            <motion.span
              className="text-[#BA0807] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              .
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-[#BA0807] mb-4 opacity-50" />
                <p className="text-white text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
              </div>
              <div>
                <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                <p className="font-mono text-[#BA0807] text-xs mt-1">{testimonial.role}</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-white/40 text-xs">Result:</span>
                  <span className="font-mono text-[#BA0807] text-sm font-bold">{testimonial.metrics}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="flex items-center gap-2 bg-[#BA0807] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Read More Success Stories</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
