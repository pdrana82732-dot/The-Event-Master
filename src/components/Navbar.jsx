import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Artist Management", path: "/artist-booking" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-3 z-50 mx-3 md:mx-6 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-black/92 border-[#C9A84C]/35 shadow-[0_8px_40px_rgba(0,0,0,0.7)]"
            : "bg-black/65 border-white/10 shadow-xl"
        } backdrop-blur-xl`}
      >
        {/* Gold top sweep line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent rounded-full" />

        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5 relative">

          {/* ── Logo + Name ── */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 z-20 group min-w-0"
          >
            {/* Wrapper div to safely handle the oversized desktop logo without breaking navbar bounds */}
            <div className="relative flex items-center justify-center h-10 w-10 md:h-14 md:w-16 lg:h-16 lg:w-20 flex-shrink-0">
              <motion.img
                src="https://res.cloudinary.com/dd0bw31fi/image/upload/v1778664482/Events_Logo_qqulft.png"
                alt="The Events Master Logo"
                className="h-10 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl absolute max-w-none origin-center"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Company name */}
            <div className="flex flex-col leading-tight min-w-0">
              <span
                className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white group-hover:text-[#C9A84C] transition-colors duration-300 truncate tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The{" "}
                <span className="text-[#C9A84C] italic">Events</span>{" "}
                Master
              </span>
              <span className="hidden md:block text-[10px] text-[#C9A84C]/60 tracking-[0.28em] uppercase font-medium mt-0.5 truncate">
                Your Event · Our Expertise
              </span>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-0.5 text-sm font-medium flex-shrink-0">
            {NAV_LINKS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className="relative px-3.5 py-2.5 group">
                  <span
                    className={`transition-colors duration-300 text-sm ${
                      active ? "text-[#C9A84C]" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A84C]"
                    />
                  )}
                  {!active && (
                    <span className="absolute left-3 right-3 bottom-1 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              );
            })}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="ml-4">
              <button
                onClick={() => setShowContactPopup(true)}
                className="relative overflow-hidden inline-flex items-center gap-2 bg-[#C9A84C] text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:shadow-[0_0_24px_rgba(201,168,76,0.55)] transition-shadow duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />
                Book Event <span className="text-xs">→</span>
              </button>
            </motion.div>
          </div>

          {/* ── Mobile: Hamburger only ── */}
          <div className="md:hidden flex items-center flex-shrink-0 z-20">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl border border-white/10 bg-white/5 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-4 h-px bg-white block origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-4 h-px bg-white block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-4 h-px bg-white block origin-center"
              />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[76px] left-3 right-3 z-40 rounded-2xl bg-black/95 backdrop-blur-xl border border-[#C9A84C]/20 shadow-2xl overflow-hidden md:hidden max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
            <div className="flex flex-col py-3 px-2">
              {NAV_LINKS.map((item, i) => {
                const active = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        active
                          ? "text-[#C9A84C] bg-[#C9A84C]/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="px-4 pt-3 pb-2 border-t border-white/5 mt-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowContactPopup(true);
                  }}
                  className="block w-full text-center bg-[#C9A84C] text-black px-5 py-3 rounded-full text-sm font-bold tracking-wide"
                >
                  Book Event →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Contact Popup ── */}
      <AnimatePresence>
        {showContactPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto py-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-md rounded-3xl border border-[#C9A84C]/25 bg-[#0e0c08] p-6 shadow-2xl my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#C9A84C]/10 blur-3xl rounded-full pointer-events-none" />
              <button
                onClick={() => setShowContactPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl z-20 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                ×
              </button>

              <div className="relative z-10 text-center">
                <span className="text-[#C9A84C] uppercase tracking-[0.3em] text-[10px] font-semibold">
                  Book Your Event
                </span>
                <h2
                  className="text-xl md:text-3xl font-bold text-white mt-3 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Let's Create Something Amazing
                </h2>
                <p className="text-gray-400 mt-3 leading-relaxed text-xs md:text-sm">
                  Connect with our team for concerts, weddings, corporate events, artist bookings,
                  and premium event solutions.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      icon: "☎",
                      label: "Call Us",
                      text: "+91 99076 55554",
                      href: "tel:+919907655554",
                    },
                    {
                      icon: "✉",
                      label: "Email Us",
                      text: "gagandeep.singh@rthevents.co.in",
                      href: "mailto:gagandeep.singh@rthevents.co.in",
                    },
                  ].map(({ icon, label, text, href }) => (
                    <motion.a
                      key={label}
                      whileHover={{ scale: 1.02 }}
                      href={href}
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-black/40 border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] text-lg flex-shrink-0">
                        {icon}
                      </div>
                      <div className="text-left overflow-hidden">
                        <p className="text-[9px] text-gray-500 uppercase tracking-widest">{label}</p>
                        <p className="text-white font-medium text-xs md:text-sm truncate">{text}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setShowContactPopup(false);
                      window.location.href = "/contact";
                    }}
                    className="flex-1 bg-[#C9A84C] text-black py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] transition-all duration-300"
                  >
                    Contact Details
                  </button>
                  <a
                    href="https://wa.me/919907655554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#C9A84C]/30 text-white py-2.5 rounded-full font-bold text-sm hover:bg-[#C9A84C]/10 transition-all duration-300 text-center"
                  >
                    WhatsApp →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}