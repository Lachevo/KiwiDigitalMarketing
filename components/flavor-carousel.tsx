"use client"

import type React from "react"

import { motion, AnimatePresence, useSpring } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Users, Eye, Play } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    client: "Fly Addis Ethiopia",
    category: "Corporate & Travel",
    tagline: "214.5K+ Followers",
    description:
      "For corporate and travel brands, we deliver a complete growth package — full launch branding, marketing strategy, campaigns, video production, video editing, and social media management. This exact approach successfully scaled the client to over 214.5K+ followers while driving massive organic engagement.",
    image: "/ourWork/flyAddis.jpg",
    images: null,
    stats: [
      { icon: Users, label: "Followers", value: "214.5K+" },
      { icon: TrendingUp, label: "Growth", value: "Organic" },
      { icon: Play, label: "Services", value: "Full Suite" },
    ],
    services: ["Branding", "Strategy", "Video Production", "Social Media"],
    accentColor: "#BA0807",
    bgColor: "from-[#BA0807]/20 via-[#BA0807]/10 to-transparent",
  },
  {
    id: 2,
    client: "Cenacle Reflexology",
    category: "Health & Wellness",
    tagline: "3M+ Views · 58K+ Followers",
    description:
      "For health and wellness brands, we deliver a complete growth package — full launch branding, marketing strategy, campaigns, video production, video editing, and social media management. This exact approach successfully drove 3M+ views and scaled the client to over 58K+ followers.",
    image: "/ourWork/cenacle.jpg",
    images: null,
    stats: [
      { icon: Eye, label: "Total Views", value: "3M+" },
      { icon: Users, label: "Followers", value: "58K+" },
      { icon: Play, label: "Services", value: "Full Suite" },
    ],
    services: ["Branding", "Campaigns", "Video Editing", "Social Media"],
    accentColor: "#10b981",
    bgColor: "from-[#10b981]/20 via-[#10b981]/10 to-transparent",
  },
  {
    id: 3,
    client: "Yenu Trading",
    category: "Auto Rentals",
    tagline: "34K+ Followers · 100K+ Views",
    description:
      "To stand out in the car rental market, you need attention-grabbing content. We handled their complete digital strategy — from branding and campaigns to video editing and daily management. This approach generated hundreds of thousands of views and sales, rapidly growing their audience to 34K+ followers.",
    image: "/ourWork/yenu.jpg",
    images: null,
    stats: [
      { icon: Users, label: "Followers", value: "34K+" },
      { icon: Eye, label: "Views", value: "100K+" },
      { icon: TrendingUp, label: "Result", value: "Sales" },
    ],
    services: ["Branding", "Campaigns", "Video Editing", "Daily Management"],
    accentColor: "#f59e0b",
    bgColor: "from-[#f59e0b]/20 via-[#f59e0b]/10 to-transparent",
  },
  {
    id: 4,
    client: "Fast Guzo",
    category: "Visa Consultancy",
    tagline: "10.3K+ Followers in 2 Months",
    description:
      "In the international consultancy space, building credibility is everything. We developed an educational, high-trust content strategy backed by premium video production, sharp editing, and full social media management. This authority-building approach established massive online trust — rapidly scaling the brand to over 10.3K+ followers within just 2 months.",
    image: "/ourWork/fastGuzo.jpg",
    images: null,
    stats: [
      { icon: Users, label: "Followers", value: "10.3K+" },
      { icon: TrendingUp, label: "Timeline", value: "2 Months" },
      { icon: Play, label: "Focus", value: "Trust" },
    ],
    services: ["Strategy", "Video Production", "Editing", "Social Media"],
    accentColor: "#00D4FF",
    bgColor: "from-[#00D4FF]/20 via-[#00D4FF]/10 to-transparent",
  },
  {
    id: 5,
    client: "MTE Furniture & Interior",
    category: "Home & Lifestyle",
    tagline: "Direct Sales via Content",
    description:
      "In just 2 months, we deployed a highly niched, value-added content strategy focused entirely on consumer education. This approach proves you don't need a massive follower count to win — by prioritizing high-intent video production over empty vanity metrics, we successfully turned a targeted audience into direct sales.",
    image: "/ourWork/mte.jpg",
    images: null,
    stats: [
      { icon: TrendingUp, label: "Timeline", value: "2 Months" },
      { icon: Play, label: "Strategy", value: "Education" },
      { icon: Eye, label: "Result", value: "Direct Sales" },
    ],
    services: ["Content Strategy", "Video Production", "Social Media"],
    accentColor: "#a855f7",
    bgColor: "from-[#a855f7]/20 via-[#a855f7]/10 to-transparent",
  },
  {
    id: 6,
    client: "Mental Health & Podcasting",
    category: "Health & Media",
    tagline: "35.1K+ Subscribers · Viral TikTok",
    description:
      "We build high-authority, multi-platform content assets for specialized professionals. By combining long-form podcast production with high-hook short-form editing, we create digital engines that command attention. This cross-platform approach scaled the client to over 35.1K+ YouTube subscribers and generated immediate viral reach on TikTok through just 16 videos.",
    image: "/ourWork/mentalHealth.jpg",
    images: ["/ourWork/mentalHealth.jpg", "/ourWork/mentalHealthPodcast.jpg"],
    stats: [
      { icon: Users, label: "YouTube Subs", value: "35.1K+" },
      { icon: Play, label: "Videos", value: "16 Only" },
      { icon: Eye, label: "Platform", value: "Viral TikTok" },
    ],
    services: ["Podcast Production", "Short-Form Editing", "YouTube", "TikTok"],
    accentColor: "#f97316",
    bgColor: "from-[#f97316]/20 via-[#f97316]/10 to-transparent",
  },
  {
    id: 7,
    client: "BGS Poultry Farm",
    category: "Agriculture & Food",
    tagline: "40K+ Followers · Active Community",
    description:
      "We provide continuous monthly marketing strategy and content direction to keep the brand consistently relevant, while deploying our premium production team for high-quality shooting based on the client's specific requests. This hybrid strategy successfully brought the company into the digital space — scaling the brand to over 40K followers with a highly active community.",
    image: "/ourWork/bgs.jpg",
    images: null,
    stats: [
      { icon: Users, label: "Followers", value: "40K+" },
      { icon: TrendingUp, label: "Model", value: "Monthly" },
      { icon: Play, label: "Production", value: "Premium" },
    ],
    services: ["Monthly Strategy", "Content Direction", "Video Shooting"],
    accentColor: "#10b981",
    bgColor: "from-[#10b981]/20 via-[#10b981]/10 to-transparent",
  },
  {
    id: 8,
    client: "Gojo Jobs",
    category: "Job Platform",
    tagline: "67.5K+ Followers · 700K+ Views",
    description:
      "We deployed a high-visibility content strategy and fast-paced video pipeline to drive massive reach for job openings. This punchy approach successfully scaled the platform to 67.5K+ followers and captured viral attention with views hitting over 700K+.",
    image: "/ourWork/gojo.jpg",
    images: null,
    stats: [
      { icon: Users, label: "Followers", value: "67.5K+" },
      { icon: Eye, label: "Views", value: "700K+" },
      { icon: TrendingUp, label: "Content", value: "Viral" },
    ],
    services: ["Content Strategy", "Video Pipeline", "Social Media"],
    accentColor: "#BA0807",
    bgColor: "from-[#BA0807]/20 via-[#BA0807]/10 to-transparent",
  },
  {
    id: 9,
    client: "Melanix Anti-Grey Hair",
    category: "Beauty & Wellness",
    tagline: "114K+ Likes · 222K+ Views",
    description:
      "We paired high-converting content marketing with strategic influencer partnerships to build instant product trust and drive sales. This targeted strategy completely amplified the brand's reach — delivering over 114K+ total likes and viral ad campaigns pulling in 222K+ views.",
    image: "/ourWork/melanix1.jpg",
    images: [
      "/ourWork/melanix1.jpg",
      "/ourWork/melanix2.jpg",
      "/ourWork/melanix3.jpg",
      "/ourWork/melanix4.jpg",
      "/ourWork/melanix5.jpg",
      "/ourWork/melanix6.jpg",
      "/ourWork/melanix7.jpg",
    ],
    stats: [
      { icon: TrendingUp, label: "Total Likes", value: "114K+" },
      { icon: Eye, label: "Ad Views", value: "222K+" },
      { icon: Users, label: "Channel", value: "Influencers" },
    ],
    services: ["Content Marketing", "Influencer Partnerships", "Ad Campaigns"],
    accentColor: "#a855f7",
    bgColor: "from-[#a855f7]/20 via-[#a855f7]/10 to-transparent",
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 350 : -350,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -350 : 350,
    opacity: 0,
    scale: 0.92,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
}

export function FlavorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [[, direction], setPage] = useState([0, 0])
  const [activeImg, setActiveImg] = useState(0)
  const current = caseStudies[currentIndex]

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    rotateY.set(((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 4)
    rotateX.set((-(e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 4)
  }
  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0) }

  const paginate = (dir: number) => {
    const next = (currentIndex + dir + caseStudies.length) % caseStudies.length
    setCurrentIndex(next)
    setPage(([p]) => [p + dir, dir])
    setActiveImg(0)
  }

  const displayImg = current.images ? current.images[activeImg] : current.image

  return (
    <section id="our-work" className="relative py-20 bg-white overflow-hidden">
      {/* Animated bg */}
      <motion.div
        key={current.id}
        className={`absolute inset-0 bg-gradient-to-br ${current.bgColor}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

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
            className="font-mono text-[#121212]/60 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Proven Results
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              OUR{" "}
            </motion.span>
            <motion.span
              className="inline-block"
              style={{ color: current.accentColor }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              WORK
            </motion.span>
          </h2>

          {/* Client counter pill */}
          <motion.div
            className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full border border-[#121212]/10 bg-white/60 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: current.accentColor }} />
            <span className="font-mono text-xs text-[#121212]/60">
              {currentIndex + 1} / {caseStudies.length} Clients
            </span>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">


            {/* Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-full max-w-4xl"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  className="bg-white rounded-3xl border border-[#121212]/10 shadow-xl overflow-hidden relative"
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid md:grid-cols-2 gap-0">

                    {/* Image panel */}
                    <div className="relative overflow-hidden bg-[#121212]/5">

                      {/* Prev arrow — left edge of image, vertically centered */}
                      <motion.button
                        onClick={() => paginate(-1)}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:border-white hover:bg-black/80 transition-colors"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        aria-label="Previous project"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      {/* Next arrow — right edge of image, vertically centered */}
                      <motion.button
                        onClick={() => paginate(1)}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-11 h-11 rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:border-white hover:bg-black/80 transition-colors"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.88 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        aria-label="Next project"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                      <motion.div
                        key={displayImg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="aspect-[4/5] md:aspect-auto md:h-full relative"
                      >
                        <img
                          src={displayImg ?? current.image}
                          alt={current.client}
                          className="w-full h-full object-cover"
                          style={{ minHeight: "320px" }}
                        />
                        {/* Overlay gradient */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{ background: `linear-gradient(135deg, ${current.accentColor}, transparent)` }}
                        />
                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full text-white"
                            style={{ background: current.accentColor }}
                          >
                            {current.category}
                          </span>
                        </div>
                      </motion.div>

                      {/* Multi-image thumbnails (Melanix / Mental Health) */}
                      {current.images && current.images.length > 1 && (
                        <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 overflow-x-auto pb-1">
                          {current.images.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveImg(i)}
                              className={`flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                                activeImg === i ? "border-white scale-110" : "border-white/30 opacity-60"
                              }`}
                            >
                              <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content panel */}
                    <div className="p-6 md:p-8 flex flex-col justify-between gap-5">

                      {/* Client name + tagline */}
                      <div>
                        <motion.span
                          className="font-mono text-xs tracking-widest uppercase"
                          style={{ color: current.accentColor }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          {current.tagline}
                        </motion.span>
                        <motion.h3
                          className="text-2xl md:text-3xl font-black text-[#121212] tracking-tighter mt-1"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                        >
                          {current.client}
                        </motion.h3>
                      </div>

                      {/* Stats row */}
                      <motion.div
                        className="grid grid-cols-3 gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                      >
                        {current.stats.map((stat) => {
                          const Icon = stat.icon
                          return (
                            <div
                              key={stat.label}
                              className="rounded-xl p-3 text-center"
                              style={{ background: `${current.accentColor}15` }}
                            >
                              <Icon className="w-4 h-4 mx-auto mb-1" style={{ color: current.accentColor }} />
                              <div className="text-base font-black text-[#121212] leading-none">{stat.value}</div>
                              <div className="text-[10px] font-mono text-[#121212]/50 mt-0.5">{stat.label}</div>
                            </div>
                          )
                        })}
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-sm text-[#121212]/60 font-mono leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {current.description}
                      </motion.p>

                      {/* Services tags */}
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        {current.services.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-full text-[11px] font-mono border"
                            style={{
                              borderColor: `${current.accentColor}40`,
                              color: current.accentColor,
                              background: `${current.accentColor}08`,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </motion.div>

                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>


          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border-2 border-[#121212]/20 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border-2 border-[#121212]/20 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {caseStudies.map((study, index) => (
              <motion.button
                key={study.id}
                onClick={() => {
                  const d = index > currentIndex ? 1 : -1
                  setCurrentIndex(index)
                  setPage(([p]) => [p + d, d])
                  setActiveImg(0)
                }}
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: index === currentIndex ? study.accentColor : "#12121225",
                }}
                animate={{ width: index === currentIndex ? 28 : 10 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={`Go to ${study.client}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
