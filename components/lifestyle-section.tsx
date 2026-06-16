"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const aboutImages = [
  { query: "marketing+agency+team+meeting", aspect: "portrait" },
  { query: "digital+marketing+strategy+analytics", aspect: "landscape" },
  { query: "modern+office+startup+collaboration", aspect: "square" },
  { query: "data+charts+laptop+business", aspect: "landscape" },
  { query: "creative+agency+teamwork", aspect: "portrait" },
  { query: "business+growth+presentation", aspect: "square" },
]



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function AboutSection() {
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: "-50px" })

  return (
    <section id="about" className="relative py-32 bg-[#121212] overflow-hidden">
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
              ELEVATE{" "}
            </motion.span>
            <motion.span
              className="text-[#BA0807] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              DIGITAL
            </motion.span>
          </h2>
          <motion.p
            className="text-white/70 font-mono text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We are a results-driven marketing agency focused on growth, performance, and measurable ROI. We turn clicks into customers and scale your business to new heights.
          </motion.p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {aboutImages.map((img, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{
                scale: 1.03,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={`relative overflow-hidden rounded-2xl bg-white/5 ${
                img.aspect === "portrait" ? "row-span-2" : ""
              } ${img.aspect === "landscape" ? "col-span-2" : ""}`}
            >
              <div
                className={`${img.aspect === "portrait" ? "aspect-[3/4]" : img.aspect === "landscape" ? "aspect-[16/9]" : "aspect-square"} relative group`}
              >
                <motion.img
                  src={`/placeholder.svg?height=${img.aspect === "portrait" ? 400 : 300}&width=${img.aspect === "landscape" ? 600 : 300}&query=${img.query}`}
                  alt=""
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#BA0807]/0 group-hover:bg-[#BA0807]/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
