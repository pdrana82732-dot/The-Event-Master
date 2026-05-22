import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SERVICES = [
  "Stage Setup",
  "Sound Systems",
  "LED Walls",
  "Trussing",
  "Lighting",
  "Generators",
  "Artist Management",
];

export default function Hero({ onBookClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dd0bw31fi/image/upload/v1779439558/concert_h7fgla.avif"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
      </motion.div>

      {/* Gold sweep line top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent origin-left z-10"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center max-w-4xl px-6 w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-px w-10 bg-[#C9A84C] block origin-right"
          />
          <span className="text-[#C9A84C] text-[10px] tracking-[0.28em] uppercase font-semibold">
            Professional Event Company
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-px w-10 bg-[#C9A84C] block origin-left"
          />
        </motion.div>

        {/* Headline — reduced from 7rem → ~4.5rem max */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          We Build
          <span className="block text-[#C9A84C] italic"> Unforgettable</span>
          Experiences
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-9 leading-relaxed"
        >
          End-to-end event production — Stage, Sound, Lighting, LED walls, Tentage across Punjab &amp; India.
        </motion.p>

        {/* Service Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {SERVICES.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.07 }}
              className="text-[11px] text-gray-200 border border-white/15 rounded-full px-3.5 py-1.5 backdrop-blur-sm bg-white/5 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-colors duration-300"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={() => scrollToSection("services")}
            whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(201,168,76,0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320 }}
            className="relative overflow-hidden bg-[#C9A84C] text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            />
            Explore Services
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact-cta")}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320 }}
            className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide backdrop-blur-sm"
          >
            Get a Quote →
          </motion.button>
        </motion.div>
      </motion.div>


    </section>
  );
}