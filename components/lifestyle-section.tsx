"use client"

import { motion } from "framer-motion"
import { ActivationsSection } from "./activations-section"


export function AboutSection() {

  return (
    <section id="about-us" className="relative py-32 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            className="font-mono text-[#BA0807] text-sm tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ABOUT US
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mt-4 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
            >
              KIWI{" "}
            </motion.span>
            <motion.span
              className="text-[#BA0807] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              DIGITAL.
            </motion.span>
          </h2>
          <motion.p
            className="text-white/70 font-mono text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We are Addis Ababa's full-service creative marketing agency. From brand identity and cinematic video production to viral social media, web development, and SEO — we handle the entire pipeline so your brand dominates online, grows without limits, and becomes the one everyone is talking about.
          </motion.p>
        </motion.div>


      </div>

      <div className="mt-32">
        <ActivationsSection />
      </div>
    </section>
  )
}
