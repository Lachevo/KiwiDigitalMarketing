"use client"

import { motion, useInView, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 250, suffix: "+", label: "Campaigns Launched" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 10, prefix: "$", suffix: "M+", label: "Revenue Generated" },
]

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.round(v))
        },
      })
      return () => controls.stop()
    }
  }, [value, inView])

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function ResultsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="results" className="relative py-24 bg-[#121212] overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-[#121212]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#BA0807] text-xs tracking-widest inline-block mb-4 uppercase">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            IMPACT IN <span className="text-[#BA0807]">NUMBERS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              className="text-center relative group"
            >
              <motion.div
                className="absolute inset-0 bg-[#BA0807]/5 rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="text-4xl md:text-6xl font-black text-white mb-2" style={{ textShadow: "0 4px 20px rgba(175,255,0,0.2)" }}>
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base font-mono text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
