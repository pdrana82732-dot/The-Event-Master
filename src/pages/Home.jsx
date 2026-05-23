import { motion, AnimatePresence, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */

const STATS_ABOUT = [
  { target: 500, suffix: "+", label: "Events Completed" },
  { target: 100, suffix: "+", label: "Artists Connected" },
  { target: 15, suffix: "+", label: "Years Experience" },
  { target: 24, suffix: "/7", label: "Support Available" },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Precision",
    desc: "Every detail planned, every moment executed flawlessly — from the first truss bolt to the final curtain call.",
    accent: "#C9A84C",
    bg: "from-[#C9A84C]/10 to-transparent",
    glow: "rgba(201,168,76,0.35)",
    number: "01",
  },
  {
    icon: "🌟",
    title: "Excellence",
    desc: "World-class equipment and experienced professionals on every job, no exceptions.",
    accent: "#D4AF6A",
    bg: "from-[#D4AF6A]/10 to-transparent",
    glow: "rgba(212,175,106,0.35)",
    number: "02",
  },
  {
    icon: "🤝",
    title: "Trust",
    desc: "500+ clients trust us to bring their vision to life — every single time.",
    accent: "#E8C97D",
    bg: "from-[#E8C97D]/10 to-transparent",
    glow: "rgba(232,201,125,0.35)",
    number: "03",
  },
];

const SERVICES = [
  {
    title: "Event Verticals Specialize In",
    tag: "Full Scale Events",
    icon: "🎪",
    image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779443201/p1_r5webd.jpg",
    items: [
      "Concerts & Music Festivals",
      "Corporate Events",
      "College Festivals",
      "Weddings & Private Events",
      "Brand Activations",
      "Exhibitions, Inaugurals & Product Launches",
    ],
    extra: {
      description:
        "We handle end-to-end event production — from venue scouting and logistics to on-ground execution. Every event is backed by our experienced production crew and state-of-the-art equipment.",
      highlights: [
        "Crowd capacity from 500 to 50,000+",
        "Dedicated event manager assigned",
        "Full vendor & logistics coordination",
        "Live streaming & media setup available",
        "Post-event reporting & debrief",
      ],
    },
  },
  {
    title: "Artist Management",
    tag: "Talent & Booking",
    icon: "🎤",
    image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778663970/samples/people/jazz.jpg",
    items: [
      "Celebrity & Management",
      "Bollywood Singers",
      "Punjabi Singers",
      "DJs, Bands & Live Performers",
      "Anchors & Hosts",
      "Regional Talent Network",
    ],
    extra: {
      description:
        "Access our curated network of 100+ artists across Punjab and India. We handle negotiations, contracts, rider requirements, and on-day artist coordination so you can focus on your event.",
      highlights: [
        "100+ verified artists in our network",
        "Transparent pricing & contract handling",
        "Rider & hospitality management",
        "Backup artist arrangements",
        "Regional & national talent access",
      ],
    },
  },
  {
    title: "Technical Production",
    tag: "Equipment & Setup",
    icon: "⚙️",
    image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779443388/p2_hts5w3.avif",
    items: [
      "Stage & Set Design",
      "Sound Systems",
      "Lighting Setup",
      "LED Walls & Visuals",
      "Trussing & Structures",
      "Power Backup (Gensets)",
    ],
    extra: {
      description:
        "Our warehouse holds touring-grade equipment ready for any scale. From intimate 200-seat setups to open-air festivals, our technical team ensures zero compromise on quality.",
      highlights: [
        "Line-array PA systems (L-Acoustics, d&b)",
        "LED walls from P2.5 indoor to P6 outdoor",
        "Moving heads, wash & strobe lighting rigs",
        "20kVA to 500kVA silent diesel gensets",
        "Modular aluminium stage 20ft to arena-scale",
      ],
    },
  },
];

const INDUSTRIES = [
  { icon: "🏢", label: "Corporate Companies", number: "01" },
  { icon: "🏛️", label: "Government Organizations", number: "02" },
  { icon: "🎓", label: "Educational Institutions", number: "03" },
  { icon: "🏨", label: "Hospitality Brands", number: "04" },
  { icon: "💍", label: "Luxury Wedding Clients", number: "05" },
  { icon: "🎬", label: "Entertainment Industry", number: "06" },
  { icon: "👗", label: "Lifestyle & Fashion Brands", number: "07" },
  { icon: "🏭", label: "Industrial & Manufacturing Companies", number: "08" },
];

/* ═══════════════════════════════════════════════════════
   SHARED UTILITIES
═══════════════════════════════════════════════════════ */

function FadeIn({ children, delay = 0, x = 0, y = 26, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y: x === 0 ? y : 0 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ target, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { start = target; clearInterval(timer); }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block">
        <span className="text-5xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          {count}
        </span>
        <span className="text-3xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          {suffix}
        </span>
      </div>
      <p className="text-black/70 text-[11px] tracking-[0.18em] uppercase mt-2 font-medium">{label}</p>
      <div className="w-6 h-px bg-black/25 mx-auto mt-3 group-hover:w-14 transition-all duration-500" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   QUOTE MODAL
═══════════════════════════════════════════════════════ */

function QuoteModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative z-10 w-full max-w-md rounded-3xl border border-[#C9A84C]/25 bg-[#0e0c08] overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          <div className="px-8 pt-8 pb-6 text-center">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold">Let's Connect</span>
            <h3 className="text-3xl font-bold text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get a Free Quote
            </h3>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto mt-4" />
            <p className="text-gray-400 text-sm mt-4 leading-6">
              Reach out directly — we respond within hours and are available 24/7.
            </p>
          </div>
          <div className="px-8 pb-6 space-y-3">
            {[
              { icon: "📞", label: "Call Us", text: "+91 99076 55554", href: "tel:+919907655554" },
              { icon: "💬", label: "WhatsApp", text: "Chat with us instantly", href: "https://wa.me/919907655554?text=Hi%2C%20I%20want%20a%20free%20quote%20for%20my%20event.", external: true },
              { icon: "✉️", label: "Email", text: "gagandeep.singh@rthevents.co.in", href: "mailto:gagandeep.singh@rthevents.co.in" },
              { icon: "✉️", label: "Email", text: "gurpreet.kaur@rthevents.co.in", href: "mailto:gurpreet.kaur@rthevents.co.in" },
            ].map(({ icon, label, text, href, external }) => (
              <a
                key={text}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-[#C9A84C]/40 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-semibold mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium truncate">{text}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="px-8 pb-8 text-center">
            <p className="text-gray-600 text-xs tracking-wide">🕐 Available 24/7 · Punjab, India</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C9A84C]/40 transition-all text-sm"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════
   VALUE CARD — with 3D tilt + shimmer + glow animations
═══════════════════════════════════════════════════════ */

function ValueCard({ v, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#0e0c08] p-8 cursor-pointer h-full"
      >
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={hovered
            ? { boxShadow: `0 0 60px 8px ${v.glow}, inset 0 0 40px 0px ${v.glow.replace("0.35", "0.08")}` }
            : { boxShadow: "0 0 0px 0px transparent" }
          }
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          animate={hovered ? { x: "120%", opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${v.glow.replace("0.35", "0.18")} 50%, transparent 60%)`,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-px"
          animate={hovered
            ? { background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)` }
            : { background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }
          }
          transition={{ duration: 0.4 }}
        />
        <div
          className="absolute -right-2 -top-3 text-[7rem] font-bold leading-none select-none pointer-events-none transition-all duration-500"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: hovered ? `${v.accent}18` : "rgba(255,255,255,0.025)",
          }}
        >
          {v.number}
        </div>
        <div className="relative w-16 h-16 mb-7 flex-shrink-0">
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={hovered
              ? { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }
              : { scale: 1, opacity: 0 }
            }
            transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, ease: "easeInOut" }}
            style={{ background: v.glow.replace("0.35", "0.3"), borderRadius: 16 }}
          />
          <motion.div
            className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border"
            style={{ borderColor: `${v.accent}40`, background: `${v.accent}10` }}
            animate={hovered ? { scale: 1.08, rotate: [0, -4, 4, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
          >
            {v.icon}
          </motion.div>
        </div>
        <motion.h3
          className="text-2xl font-bold mb-1 transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif", color: hovered ? v.accent : "#fff" }}
        >
          {v.title}
        </motion.h3>
        <motion.div
          className="h-px mb-5 rounded-full"
          animate={{ width: hovered ? 64 : 28 }}
          transition={{ duration: 0.4 }}
          style={{ background: v.accent }}
        />
        <p className="text-gray-400 text-sm leading-[1.9] relative z-10">{v.desc}</p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICE CARD
═══════════════════════════════════════════════════════ */

function ServiceCard({ service, index, isExpanded, onToggle }) {
  return (
    <FadeIn delay={index * 0.1} className="h-full">
      <motion.div
        whileHover={!isExpanded ? { y: -8 } : {}}
        transition={{ type: "spring", stiffness: 260 }}
        className={`group glass rounded-2xl overflow-hidden border transition-colors duration-300 flex flex-col h-full ${isExpanded ? "border-[#C9A84C]/50" : "border-white/5 hover:border-[#C9A84C]/35"}`}
      >
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-[#C9A84C]/30 rounded-full px-3 py-1">
            <span className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-semibold">{service.tag}</span>
          </div>
          <div className="absolute bottom-4 right-4 text-3xl">{service.icon}</div>
        </div>

        <div className="p-7 flex flex-col flex-1">
          <h3
            className="text-2xl font-bold text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {service.title}
          </h3>
          <div className="h-px w-10 bg-[#C9A84C]/50 mb-5 group-hover:w-20 transition-all duration-500" />
          <ul className="space-y-3 flex-1">
            {service.items.map((item, j) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: j * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="w-5 h-5 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-[10px] flex-shrink-0">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-white/5">
            <button
              onClick={onToggle}
              className="text-[#C9A84C] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              {isExpanded ? "Show less" : "Learn more"}
              <motion.span animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.3 }}>→</motion.span>
            </button>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPANDED PANEL
═══════════════════════════════════════════════════════ */

function ExpandedPanel({ service }) {
  return (
    <AnimatePresence mode="wait">
      {service && (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="mt-6 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/[0.03] p-8">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <span className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-semibold">{service.tag}</span>
                <h4 className="text-2xl font-bold text-white mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h4>
                <div className="h-px w-10 bg-[#C9A84C] mb-5" />
                <p className="text-gray-300 text-sm leading-7">{service.extra.description}</p>
              </div>
              <div className="flex-1">
                <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-semibold mb-4">Also Includes</p>
                <ul className="space-y-3">
                  {service.extra.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="w-5 h-5 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-[10px] flex-shrink-0 mt-0.5">◆</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════
   INDUSTRIES WE SERVE
═══════════════════════════════════════════════════════ */

function IndustryRow({ industry, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex items-center gap-5 py-4 px-5 rounded-2xl border border-white/[0.05] cursor-default transition-all duration-300 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.03]"
    >
      <motion.span
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-[#C9A84C]"
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        style={{ originY: 0.5 }}
        transition={{ duration: 0.25 }}
      />
      <span
        className="text-[11px] font-bold tracking-[0.2em] text-[#C9A84C]/40 group-hover:text-[#C9A84C]/70 transition-colors duration-300 flex-shrink-0 w-6 text-right select-none"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {industry.number}
      </span>
      <span className="w-1 h-1 rounded-full bg-[#C9A84C]/20 flex-shrink-0 group-hover:bg-[#C9A84C]/50 transition-colors duration-300" />
      <span className="text-xl flex-shrink-0">{industry.icon}</span>
      <motion.span
        animate={{ color: hovered ? "#C9A84C" : "#e5e7eb" }}
        transition={{ duration: 0.2 }}
        className="text-sm font-medium tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {industry.label}
      </motion.span>
    </motion.div>
  );
}

function IndustriesSection() {
  const half = Math.ceil(INDUSTRIES.length / 2);
  const left = INDUSTRIES.slice(0, half);
  const right = INDUSTRIES.slice(half);

  return (
    <section className="border-t border-[#C9A84C]/10 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] bg-[#C9A84C]/[0.04] blur-[90px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <FadeIn className="text-center mb-14">
          <span className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-semibold">
            Who We Work With
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Industries We{" "}
            <span className="text-[#C9A84C]">Serve</span>
          </h2>
          <div className="h-px w-16 bg-[#C9A84C] mx-auto mt-5 mb-5" />
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            From intimate luxury gatherings to massive open-air festivals — the same
            gold-standard execution across every sector we partner with.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-3 md:gap-x-10">
          <div className="space-y-3">
            {left.map((ind, i) => <IndustryRow key={ind.label} industry={ind} i={i} />)}
          </div>
          <div className="space-y-3">
            {right.map((ind, i) => <IndustryRow key={ind.label} industry={ind} i={i + half} />)}
          </div>
        </div>
        <FadeIn delay={0.3} className="mt-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-7 px-8 rounded-2xl border border-[#C9A84C]/15 bg-[#C9A84C]/[0.025]">
            {[
              { value: "8+", label: "Industry Verticals" },
              { value: "500+", label: "Events Delivered" },
              { value: "Pan India", label: "Reach & Network" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-[#C9A84C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {value}
                </p>
                <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════ */

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (i) => setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <>
      {showModal && <QuoteModal onClose={() => setShowModal(false)} />}

      {/* ── 1. HERO ── */}
      <Hero />

      {/* ── 2. ABOUT ROW 1 — Text + Image ── */}
      <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-28 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <FadeIn x={-70} delay={0.15}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Elevating Events Into Extraordinary Experiences
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 56 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-[#C9A84C] mb-7"
              />
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-gray-300 leading-[1.9] text-base"
              >
                Founded with a passion for creating unforgettable experiences,
                Events Master is a luxury-driven event production and artist
                management company specializing in live concerts, corporate
                events, luxury weddings, cultural festivals, and large-scale
                entertainment experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-gray-400 mt-5 leading-[1.9] text-base"
              >
                With over 15 years of professional journey in the event
                industry, we bring together creativity, precision, and
                world-class execution under one roof.
              </motion.p>
              <div className="flex flex-wrap gap-3 mt-10">
                {["Stage Setup", "Sound Systems", "LED Walls", "Trussing", "Lighting", "Generators", "Artist Management"].map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.82, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.7 + i * 0.08 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="text-[11px] text-[#D4AF37] border border-[#D4AF37]/30 rounded-full px-3.5 py-1.5 backdrop-blur-sm bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:text-[#F5D97A] transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </FadeIn>

          <FadeIn x={70} delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-[#C9A84C]/15 rounded-3xl" />
              <div className="absolute -inset-6 border border-[#C9A84C]/10 rounded-3xl" />
              <motion.img
                src="https://res.cloudinary.com/dd0bw31fi/image/upload/v1779439558/concert_h7fgla.avif"
                alt="Event production"
                className="rounded-2xl w-full h-[400px] md:h-[460px] object-cover relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute bottom-5 right-5 z-20 bg-black/80 backdrop-blur-md border border-[#C9A84C]/30 rounded-xl px-5 py-3.5"
              >
                <p className="text-[#C9A84C] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>15+ Years</p>
                <p className="text-gray-300 text-xs mt-0.5 tracking-wide">of excellence</p>
              </motion.div>
            </motion.div>
          </FadeIn>

        </div>
      </section>

      {/* ── 3. VALUES STRIP ── */}
      <section className="border-y border-[#C9A84C]/10 bg-[#C9A84C]/[0.02] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <FadeIn className="text-center mb-14">
            <span className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-semibold">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core <span className="text-[#C9A84C]">Values</span>
            </h2>
            <div className="h-px w-16 bg-[#C9A84C] mx-auto mt-5" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT ROW 2 — Image + Text ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-28">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn x={-50} delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-3 border border-[#C9A84C]/15 rounded-3xl" />
              <motion.img
                src="https://res.cloudinary.com/dd0bw31fi/image/upload/v1779428513/production_gx2jar.png"
                alt="Stage setup"
                className="rounded-2xl w-full h-[400px] md:h-[460px] object-cover relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.45 }}
              />
              <div className="absolute top-5 left-5 z-20 bg-black/80 backdrop-blur-md border border-[#C9A84C]/30 rounded-xl px-5 py-3.5">
                <p className="text-[#C9A84C] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>500+</p>
                <p className="text-gray-300 text-xs mt-0.5 tracking-wide">events delivered</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn x={50}>
            <span className="text-[#C9A84C] text-[11px] tracking-[0.28em] uppercase font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Complete Event Production Solutions
            </h2>
            <div className="h-px w-14 bg-[#C9A84C] mb-7" />
            <ul className="mt-9 space-y-3.5">
              {["Stage & Trussing Systems", "Line-array Sound Systems", "LED Walls & Lighting Design", "Artist & Performer Booking"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-300 text-sm"
                >
                  <span className="w-5 h-5 rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/10 flex items-center justify-center text-[#C9A84C] text-xs flex-shrink-0">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. STATS BAR ── */}
      <section className="bg-[#C9A84C] py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS_ABOUT.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <Counter target={s.target} suffix={s.suffix} label={s.label} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── 6. SERVICES HEADER ── */}
      <section id="services" className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        <FadeIn>
          <span className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-semibold">What We Do Best</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our <span className="text-[#C9A84C]">Services</span>
          </h2>
          <div className="h-px w-20 bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            From powerful concert productions and professional lighting setups to premium sound systems,
            LED walls, stage fabrication, tenting solutions, décor, and artist management — we deliver
            complete event solutions tailored to every client's vision. Our strength lies in transforming
            ideas into impactful experiences that leave lasting impressions.
          </p>
        </FadeIn>
      </section>

      {/* ── 7. SERVICE CARDS + EXPANDED PANEL ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-24">

        {/* ── MOBILE: each card stacks with its own panel directly below ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {SERVICES.map((service, i) => (
            <div key={service.title}>
              <ServiceCard
                service={service}
                index={i}
                isExpanded={activeIndex === i}
                onToggle={() => handleToggle(i)}
              />
              <ExpandedPanel service={activeIndex === i ? service : null} />
            </div>
          ))}
        </div>

        {/* ── DESKTOP: 3-column grid, shared panel below all cards ── */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8" style={{ gridAutoRows: "1fr" }}>
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                isExpanded={activeIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
          <ExpandedPanel service={activeIndex !== null ? SERVICES[activeIndex] : null} />
        </div>

      </section>

      {/* ── 8. INDUSTRIES WE SERVE ── */}
      <IndustriesSection />

      {/* ── 9. CTA BANNER ── */}
      <section id="contact-cta" className="max-w-7xl mx-auto px-4 md:px-8 pb-28">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1a1400] via-[#2a1e00] to-[#1a1400] border border-[#C9A84C]/25 p-12 md:p-16 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C9A84C]/8 blur-3xl rounded-full pointer-events-none" />
            <span className="text-[#C9A84C] text-[11px] tracking-[0.28em] uppercase font-semibold">Ready to Begin?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Plan Your Event?
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
              Let's talk about your vision. We'll handle everything from planning to execution — get in touch for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.06, boxShadow: "0 0 36px rgba(201,168,76,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-[#C9A84C] text-black px-10 py-4 rounded-full font-bold text-sm tracking-wide"
              >
                <motion.span className="absolute inset-0 bg-white/20" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.4 }} />
                Get a Free Quote →
              </motion.button>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-white/20 text-white px-10 py-4 rounded-full font-semibold text-sm tracking-wide backdrop-blur-sm"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── 10. FOOTER CREDIT ── */}
      <section className="relative py-8 text-center border-t border-[#C9A84C]/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9A84C]/40" />
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-500 font-medium">
              Curated by{" "}
              <span className="text-[#C9A84C] font-semibold tracking-[0.3em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                RTH Events
              </span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9A84C]/40" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}