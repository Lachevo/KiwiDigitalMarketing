"use client"

import type React from "react"

import { motion, AnimatePresence, useSpring } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Twitter, Linkedin, Globe } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Alex Mercer",
    role: "CEO & Growth Strategist",
    bio: "10+ years turning ambitious brands into market leaders. Alex has overseen $50M+ in ad spend across 200 campaigns.",
    avatar: "/placeholder.svg?height=400&width=400&query=professional+business+man+headshot+suit",
    stats: [
      { label: "Campaigns Led", value: "200+" },
      { label: "Revenue Driven", value: "$50M+" },
      { label: "Years Exp.", value: "10+" },
    ],
    tags: ["Growth", "Strategy", "PPC"],
    accentColor: "#BA0807",
    bgColor: "from-[#BA0807]/20 via-[#BA0807]/5 to-transparent",
    social: { twitter: "#", linkedin: "#", website: "#" },
  },
  {
    id: 2,
    name: "Sofia Reyes",
    role: "Head of SEO & Content",
    bio: "Organic growth architect. Sofia has built content engines that rank #1 for 500+ competitive keywords across industries.",
    avatar: "/placeholder.svg?height=400&width=400&query=professional+woman+headshot+marketing",
    stats: [
      { label: "Keywords Ranked", value: "500+" },
      { label: "Organic Growth", value: "+300%" },
      { label: "Years Exp.", value: "8+" },
    ],
    tags: ["SEO", "Content", "Analytics"],
    accentColor: "#f59e0b",
    bgColor: "from-[#f59e0b]/20 via-[#f59e0b]/5 to-transparent",
    social: { twitter: "#", linkedin: "#", website: "#" },
  },
  {
    id: 3,
    name: "James Okafor",
    role: "Creative Director",
    bio: "Award-winning creative mind behind campaigns that don't just perform — they leave lasting cultural imprints.",
    avatar: "/placeholder.svg?height=400&width=400&query=professional+creative+director+man+modern",
    stats: [
      { label: "Brands Elevated", value: "80+" },
      { label: "Awards Won", value: "12" },
      { label: "Years Exp.", value: "9+" },
    ],
    tags: ["Branding", "Design", "Creative"],
    accentColor: "#00D4FF",
    bgColor: "from-[#00D4FF]/20 via-[#00D4FF]/5 to-transparent",
    social: { twitter: "#", linkedin: "#", website: "#" },
  },
  {
    id: 4,
    name: "Lena Zhao",
    role: "Paid Media Specialist",
    bio: "Data-obsessed performance marketer. Lena squeezes every dollar of ROI from Meta, Google, and TikTok campaigns.",
    avatar: "/placeholder.svg?height=400&width=400&query=professional+asian+woman+analyst+tech",
    stats: [
      { label: "Ad Spend Managed", value: "$20M+" },
      { label: "Avg. ROAS", value: "4.8x" },
      { label: "Years Exp.", value: "6+" },
    ],
    tags: ["Meta Ads", "Google Ads", "TikTok"],
    accentColor: "#a855f7",
    bgColor: "from-[#a855f7]/20 via-[#a855f7]/5 to-transparent",
    social: { twitter: "#", linkedin: "#", website: "#" },
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 350 : -350,
    opacity: 0,
    scale: 0.92,
    rotateY: direction > 0 ? 12 : -12,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -350 : 350,
    opacity: 0,
    scale: 0.92,
    rotateY: direction > 0 ? -12 : 12,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  }),
}

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[, direction], setPage] = useState([0, 0])
  const currentMember = teamMembers[currentIndex]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 4)
    rotateX.set((-(e.clientY - cy) / (rect.height / 2)) * 4)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const paginate = (newDirection: number) => {
    const newIndex = (currentIndex + newDirection + teamMembers.length) % teamMembers.length
    setCurrentIndex(newIndex)
    setPage(([p]) => [p + newDirection, newDirection])
  }

  return (
    <section id="our-team" className="relative py-20 bg-[#121212] overflow-hidden border-t border-white/5">
      {/* Animated background gradient */}
      <motion.div
        key={currentMember.id}
        className={`absolute inset-0 bg-gradient-to-br ${currentMember.bgColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Decorative radial blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: currentMember.accentColor }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <motion.span
            className="font-mono text-xs tracking-widest uppercase inline-block mb-3"
            style={{ color: currentMember.accentColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Proven Results
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              MEET THE{" "}
            </motion.span>
            <motion.span
              className="inline-block"
              style={{ color: currentMember.accentColor }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              TEAM
            </motion.span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">

            {/* Prev button */}
            <motion.button
              onClick={() => paginate(-1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-white/20 items-center justify-center hover:border-white hover:bg-white/10 text-white transition-colors flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Slide card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentMember.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-3xl"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* Avatar */}
                    <motion.div
                      className="relative flex flex-col items-center gap-4"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Ring glow */}
                      <div
                        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px]"
                        style={{ background: `linear-gradient(135deg, ${currentMember.accentColor}, transparent)` }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white/10">
                          <img
                            src={currentMember.avatar}
                            alt={currentMember.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Social icons */}
                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[
                          { icon: Twitter, href: currentMember.social.twitter },
                          { icon: Linkedin, href: currentMember.social.linkedin },
                          { icon: Globe, href: currentMember.social.website },
                        ].map(({ icon: Icon, href }, i) => (
                          <a
                            key={i}
                            href={href}
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Info */}
                    <div className="space-y-5">
                      <div>
                        <motion.span
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: currentMember.accentColor }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {currentMember.role}
                        </motion.span>
                        <motion.h3
                          className="text-3xl md:text-4xl font-black text-white tracking-tighter mt-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                        >
                          {currentMember.name}
                        </motion.h3>
                      </div>

                      <motion.p
                        className="text-sm text-white/60 font-mono leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentMember.bio}
                      </motion.p>

                      {/* Stats row */}
                      <motion.div
                        className="grid grid-cols-3 gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                      >
                        {currentMember.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl p-3 text-center"
                            style={{ background: `${currentMember.accentColor}18` }}
                          >
                            <div
                              className="text-xl font-black"
                              style={{ color: currentMember.accentColor }}
                            >
                              {stat.value}
                            </div>
                            <div className="text-[10px] font-mono text-white/50 mt-0.5">{stat.label}</div>
                          </div>
                        ))}
                      </motion.div>

                      {/* Tags */}
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {currentMember.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Next button */}
            <motion.button
              onClick={() => paginate(1)}
              className="hidden md:flex w-12 h-12 rounded-full border-2 border-white/20 items-center justify-center hover:border-white hover:bg-white/10 text-white transition-colors flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center text-white"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => {
                  const d = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage(([p]) => [p + d, d])
                }}
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? member.accentColor : "rgba(255,255,255,0.2)",
                }}
                animate={{ width: index === currentIndex ? 28 : 10 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={`Go to ${member.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
