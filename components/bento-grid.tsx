"use client"

import type React from "react"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import {
  Search,
  Share2,
  Code,
  PenTool,
  Video,
  Megaphone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    id: 1,
    icon: PenTool,
    title: "Full Launch Branding",
    tagline: "Your brand. Built to dominate.",
    description:
      "We craft the complete visual and strategic identity of your brand from scratch logo design, brand guidelines, color system, typography, and positioning so you launch with authority.",
    deliverables: [
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Positioning Strategy",
      "Launch-Ready Assets",
    ],
    accent: "#BA0807",
    bgAccent: "from-[#BA0807]/20 via-[#BA0807]/5 to-transparent",
    number: "01",
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Marketing Strategy & Campaigns",
    tagline: "Data-driven plans. Real-world results.",
    description:
      "We build comprehensive marketing roadmaps and execute high-impact campaigns across every relevant channel built to acquire customers, grow awareness, and outpace competitors.",
    deliverables: [
      "Growth Roadmap",
      "Multi-Channel Campaigns",
      "Audience Targeting",
      "Performance Reporting",
    ],
    accent: "#f59e0b",
    bgAccent: "from-[#f59e0b]/20 via-[#f59e0b]/5 to-transparent",
    number: "02",
  },
  {
    id: 3,
    icon: Video,
    title: "Video Production & Editing",
    tagline: "Premium content that stops the scroll.",
    description:
      "From concept to final cut, our in-house production team delivers cinematic brand films, ads, and short-form content that captures attention and converts viewers into customers.",
    deliverables: [
      "Full Video Production",
      "Short-Form Reels & TikToks",
      "Cinematic Brand Films",
      "Motion Graphics",
    ],
    accent: "#00D4FF",
    bgAccent: "from-[#00D4FF]/20 via-[#00D4FF]/5 to-transparent",
    number: "03",
  },
  {
    id: 4,
    icon: Share2,
    title: "Social Media Management",
    tagline: "Consistent presence. Growing community.",
    description:
      "We take over your social channels end-to-end daily content creation, scheduling, community management, and analytics keeping your brand active, relevant, and growing every day.",
    deliverables: [
      "Daily Content Creation",
      "Community Management",
      "Influencer Partnerships",
      "Monthly Analytics Reports",
    ],
    accent: "#a855f7",
    bgAccent: "from-[#a855f7]/20 via-[#a855f7]/5 to-transparent",
    number: "04",
  },
  {
    id: 5,
    icon: Code,
    title: "Web Development",
    tagline: "Fast. Beautiful. Built to convert.",
    description:
      "We design and develop high-performance websites and landing pages that look stunning, load fast, and are engineered to turn visitors into paying customers.",
    deliverables: [
      "Landing Pages & Funnels",
      "Full Website Builds",
      "E-Commerce Stores",
      "Performance Optimization",
    ],
    accent: "#10b981",
    bgAccent: "from-[#10b981]/20 via-[#10b981]/5 to-transparent",
    number: "05",
  },
  {
    id: 6,
    icon: Search,
    title: "SEO",
    tagline: "Own the search results. Own the market.",
    description:
      "We architect technical and content SEO strategies that move your brand to the top of search rankings driving consistent, compounding organic traffic and qualified leads for months and years to come.",
    deliverables: [
      "Technical SEO Audit",
      "Keyword Strategy",
      "Content SEO",
      "Link Building & Authority",
    ],
    accent: "#f97316",
    bgAccent: "from-[#f97316]/20 via-[#f97316]/5 to-transparent",
    number: "06",
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      {/* Glow border */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.accent}50, transparent, ${service.accent}50)`,
          filter: "blur(6px)",
        }}
      />

      {/* Card */}
      <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden h-full flex flex-col">
        {/* Top accent bar */}
        <motion.div
          className="h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ backgroundColor: service.accent }}
        />

        <div className="p-6 flex flex-col h-full gap-4">
          {/* Number + Icon row */}
          <div className="flex items-start justify-between">
            <motion.div
              className="w-11 h-11 rounded-xl flex items-center justify-center relative"
              style={{ backgroundColor: `${service.accent}18` }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Pulse ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{ backgroundColor: service.accent }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isHovered
                    ? { opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <service.icon className="w-5 h-5 relative z-10" style={{ color: service.accent }} />
            </motion.div>

            <span
              className="font-mono text-3xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ color: service.accent }}
            >
              {service.number}
            </span>
          </div>

          {/* Title & tagline */}
          <div>
            <h3 className="text-lg font-black text-white tracking-tight leading-tight">
              {service.title}
            </h3>
            <p className="font-mono text-xs mt-1" style={{ color: service.accent }}>
              {service.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-white/50 font-mono leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Deliverables */}
          <ul className="space-y-1.5">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-white/70">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.accent }} />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA arrow */}
          <motion.div
            className="flex items-center gap-1.5 text-xs font-mono mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: service.accent }}
            animate={isHovered ? { x: [0, 4, 0] } : { x: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="services" className="relative py-20 bg-[#121212] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a]" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#BA0807]/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block font-mono text-[#BA0807] text-[10px] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.1 }}
          >
            Our Expertise
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-3xl md:text-5xl font-black text-white tracking-tighter"
              initial={{ y: 60 }}
              animate={isInView ? { y: 0 } : { y: 60 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              WE HANDLE THE{" "}
              <span className="text-[#BA0807]">ENTIRE PIPELINE</span>
            </motion.h2>
          </div>

          <motion.p
            className="text-white/50 font-mono text-sm max-w-xl mx-auto mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3 }}
          >
            From brand identity to viral content to search dominance — clients don't need to juggle agencies. We do it all.
          </motion.p>

          {/* Pipeline connector pills */}
          <motion.div
            className="flex items-center justify-center gap-2 flex-wrap mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            {["Branding", "Strategy", "Production", "Social", "Web", "SEO"].map((label, i) => (
              <span key={label} className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">{label}</span>
                {i < 5 && <span className="text-[#BA0807]/40 text-xs">→</span>}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="h-[2px] w-16 bg-[#BA0807] mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="mt-12 rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <p className="font-mono text-[#BA0807] text-xs tracking-widest uppercase mb-1">Ready to scale?</p>
            <h3 className="text-2xl font-black text-white tracking-tight">
              Let's build your complete growth system.
            </h3>
          </div>
          <motion.a
            href="#contact"
            className="flex-shrink-0 px-7 py-3 rounded-full font-bold text-sm tracking-wide text-white relative overflow-hidden"
            style={{ backgroundColor: "#BA0807" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
