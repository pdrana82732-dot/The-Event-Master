import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import inventoryData from "../data/inventory.json";

const G = "#C9A84C";
const PF = "'Playfair Display', serif";

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

export default function Inventory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filtered = inventoryData.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-hidden">

      {/* Header */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
        <FadeIn>
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-semibold">Equipment Rental</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4" style={{ fontFamily: PF }}>
            Our <span className="text-[#C9A84C] italic">Inventory</span>
          </h1>
          <div className="h-px w-20 bg-[#C9A84C] mx-auto mt-6" />
          <p className="text-gray-400 mt-5 max-w-lg mx-auto leading-relaxed">
            Premium event equipment available for rent — from stage systems to sound rigs.
          </p>
        </FadeIn>
      </section>

      {/* Search */}
      <div className="max-w-2xl mx-auto px-4 mb-14">
        <FadeIn>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A84C] text-lg">⌕</span>
            <input
              type="text"
              placeholder="Search equipment..."
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-4 rounded-2xl bg-zinc-900/80 border border-[#C9A84C]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
            />
          </div>
        </FadeIn>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 py-20">
              No equipment found for "<span className="text-[#C9A84C]">{search}</span>"
            </motion.p>
          ) : (
            <motion.div className="grid md:grid-cols-3 gap-8">
              {filtered.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-[#C9A84C]/35 transition-colors duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img src={item.image} alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-300" style={{ fontFamily: PF }}>
                        {item.name}
                      </h3>
                      <div className="h-px w-8 bg-[#C9A84C]/50 mb-4 group-hover:w-16 transition-all duration-500" />
                      <p className="text-gray-400 text-sm leading-7 flex-1">{item.description}</p>
                      {item.specifications && (
                        <p className="text-gray-500 text-xs mt-3 leading-6 border-t border-white/5 pt-3">
                          {item.specifications}
                        </p>
                      )}
                      <div className="mt-5">
                        <button
                          onClick={() => navigate("/contact")}
                          className="text-[#C9A84C] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300 hover:underline underline-offset-4"
                        >
                          Enquire now →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}

            </motion.div>

          )}
        </AnimatePresence>
      </section>

      {/* PDF Catalog Banner */}
      <FadeIn>
        <div className="max-w-6xl mx-auto px-4 mb-16">

          <div className="relative overflow-hidden rounded-3xl border border-[#C9A84C]/20 bg-gradient-to-r from-[#111] via-[#161616] to-[#111] p-8 md:p-10">

            {/* Glow */}
            <div className="absolute -top-20 -right-10 w-52 h-52 bg-[#C9A84C]/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

              {/* Left Content */}
              <div className="max-w-2xl">
                <span className="text-[#C9A84C] uppercase tracking-[0.25em] text-xs font-semibold">
                  Complete Inventory Catalog
                </span>

                <h2
                  className="text-3xl md:text-4xl font-bold text-white mt-3"
                  style={{ fontFamily: PF }}
                >
                  Download Our Equipment PDF
                </h2>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Explore our complete inventory catalog featuring professional
                  sound systems, lighting equipment, LED walls, stage setups,
                  trussing structures, power backup systems, and premium event
                  production assets.
                </p>
              </div>

              {/* Button */}
              <motion.a
                href="/catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(201,168,76,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold tracking-wide text-sm"
              >
                Download PDF →
              </motion.a>

            </div>
          </div>
        </div>
      </FadeIn>

    </div>
  );
}