"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from "lucide-react"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["0926 404 142", "0739 409 354"],
    href: "tel:+251926404142",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["kiwimarketing19@gmail.com"],
    href: "mailto:kiwimarketing19@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["22 Awraris, Tsega Building", "11th Floor · L11"],
    href: "#",
  },
]

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Full Launch Branding", href: "#services" },
      { label: "Marketing Strategy", href: "#services" },
      { label: "Video Production", href: "#services" },
      { label: "Social Media Mgmt", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "SEO", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about-us" },
      { label: "Our Team", href: "#our-team" },
      { label: "Our Work", href: "#our-work" },
      { label: "Results", href: "#results" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <footer ref={footerRef} id="contact" className="relative bg-[#0a0a0a] pt-20 pb-6 overflow-hidden">
      {/* Background watermark */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[12rem] md:text-[22rem] font-black text-white/[0.015] pointer-events-none select-none leading-none"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        KIWI
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#BA0807] text-xs tracking-widest uppercase">Let's Work Together</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] overflow-hidden mt-3">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              READY TO GROW
            </motion.span>
            <motion.span
              className="block text-[#BA0807]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              YOUR BUSINESS?
            </motion.span>
          </h2>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto mt-10"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div className="flex-1 relative" whileFocus={{ scale: 1.02 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#BA0807] transition-all duration-300"
                />
              </motion.div>
              <motion.button
                className="bg-[#BA0807] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={handleSubmit}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">
                  {isSubmitting ? "Sending…" : "Book a Free Strategy Call"}
                </span>
              </motion.button>
            </div>
            <p className="text-white/40 font-mono text-xs mt-2 text-center">
              Join 500+ growing brands. No spam — just results.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contactDetails.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: "#BA0807" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#BA0807]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#BA0807]/25 transition-colors">
                <item.icon className="w-5 h-5 text-[#BA0807]" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-1">{item.label}</p>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm font-semibold text-white leading-snug">{line}</p>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-10" />

        {/* Footer links + socials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image src="/kiwiLogo.png" alt="Kiwi Digital" width={36} height={36} className="object-contain" />
              <span className="text-2xl font-black">
                <span className="text-white">Kiwi</span>
                <span className="text-[#BA0807]"> Digital</span>
              </span>
            </motion.div>
            <p className="text-white/50 font-mono text-xs leading-relaxed max-w-xs mb-5">
              A results-driven marketing agency. We handle the entire pipeline — branding, strategy, video, social, web, and SEO — so you can focus on building your business.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#BA0807] hover:bg-[#BA0807]/10 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-white text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                      <Link
                        href={item.href}
                        className="text-white/50 hover:text-[#BA0807] font-mono text-xs transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3">
          <p className="text-white/30 font-mono text-xs">© 2025 Kiwi Digital Marketing. All rights reserved.</p>

          <motion.p
            className="text-white/30 font-mono text-xs cursor-default"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={
              isHovering
                ? { rotate: [0, -5, 5, -5, 5, 0], scale: [1, 1.1, 1], color: "#BA0807" }
                : { rotate: 0, scale: 1, color: "rgba(255,255,255,0.3)" }
            }
            transition={{ duration: 0.5 }}
          >
            made for growth 🥝
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
