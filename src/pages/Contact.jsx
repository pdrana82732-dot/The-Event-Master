import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CONTACT_ITEMS = [
  {
    icon: "📍",
    label: "Location",
    lines: ["Punjab, India"],
  },
  {
    icon: "📞",
    label: "Phone",
    lines: ["+91 99076 55554"],
  },
  {
    icon: "✉️",
    label: "Email",
    lines: ["gagandeep.singh@rthevents.co.in", "gurpreet.kaur@rthevents.co.in"],
  },
  {
    icon: "🕐",
    label: "Availability",
    lines: ["Available 24/7 for support"],
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* ── Section Header ── */}
      <FadeIn className="text-center mb-16">
        <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold">
          Reach Out
        </span>
        <h2
          className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get In <span className="text-[#C9A84C] italic">Touch</span>
        </h2>
        <div className="h-px w-20 bg-[#C9A84C] mx-auto mt-6" />
      </FadeIn>

      {/* ── Contact Cards ── */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CONTACT_ITEMS.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280 }}
              className="relative group rounded-2xl border border-[#C9A84C]/15 bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-[#C9A84C]/50 group-hover:w-24 transition-all duration-500" />

              {/* Icon */}
              <div className="text-4xl mb-5 select-none">{item.icon}</div>

              {/* Label */}
              <p className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
                {item.label}
              </p>

              {/* Lines */}
              <div className="space-y-1.5">
                {item.lines.map((line) => (
                  <p
                    key={line}
                    className="text-gray-300 text-sm leading-6 break-all"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}