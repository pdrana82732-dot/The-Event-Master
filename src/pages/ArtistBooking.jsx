import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const artists = [
    { name: "Ranjit Bawa", category: "Live Concert Artist", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779359315/ranjit_bawa_yfhur7.jpg" },
    { name: "Satinder Sartaj", category: "Soulful Vocalist", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/satinder_sartaj_kwwnkp.jpg" },
    { name: "Hardy Sandhu", category: "Celebrity Performer", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/hardy_sandhu_u6ub3r.jpg" },
    { name: "Amit Trivedi", category: "Music Director", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/amit_trivedi_rtcqb5.jpg" },
    { name: "Babbu Maan", category: "Stage Performer", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/babbu_maan_hmchoi.jpg" },
    { name: "Jasmine Sandlas", category: "Pop Icon", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/jasmine_sandlas_ohbfmm.jpg" },
    { name: "Kulwinder Billa", category: "Folk Artist", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/kulwinder_billla_dzse1w.jpg" },
    { name: "Sunanda Sharma", category: "Live Sensation", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358887/sunanda_sharma_topb2x.jpg" },
    { name: "DJs & Band", category: "Event Entertainment", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779359474/djs_e3z0oh.jpg" },
    { name: "Ammy Virk", category: "Punjabi Star", image: "https://res.cloudinary.com/dd0bw31fi/image/upload/v1779358888/ammy_virk_nlpugw.jpg" },
];

const stats = [
    { value: "500+", label: "Artists" },
    { value: "1200+", label: "Events" },
    { value: "98%", label: "Satisfaction" },
    { value: "15+", label: "Years" },
];

const features = [
    { title: "Verified Artists", desc: "Every artist is personally vetted and professionally managed for your event." },
    { title: "Fast Booking Process", desc: "Confirmed bookings within 24 hours with zero hassle or back-and-forth." },
    { title: "Luxury Event Experience", desc: "Premium end-to-end coordination from initial planning to live performance." },
    { title: "24/7 Professional Support", desc: "Our dedicated team is available round the clock for every event need." },
];

const marqueeItems = ["LIVE CONCERTS", "CELEBRITY BOOKINGS", "DJS & BANDS", "PRIVATE EVENTS", "WEDDINGS", "FESTIVALS", "CORPORATE EVENTS", "STAGE SHOWS"];

const filterCategories = ["All", "Live Concert Artist", "Soulful Vocalist", "Celebrity Performer", "Music Director", "Stage Performer", "Pop Icon", "Folk Artist", "Live Sensation", "Event Entertainment", "Punjabi Star"];

export default function ArtistBookingPage() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState("All");
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const filtered = activeFilter === "All" ? artists : artists.filter(a => a.category === activeFilter);

    return (
        <div className="w-full min-h-screen bg-black text-white overflow-hidden">

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');

                @keyframes marquee {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 28s linear infinite;
                }
                .artist-card-img {
                    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
                }
                .artist-card:hover .artist-card-img {
                    transform: scale(1.1);
                }
                .book-reveal {
                    opacity: 0;
                    transform: translateY(10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                .artist-card:hover .book-reveal {
                    opacity: 1;
                    transform: translateY(0);
                }
                .filter-scroll::-webkit-scrollbar { display: none; }
                .filter-scroll { -ms-overflow-style: none; scrollbar-width: none; }

                .stat-value {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-style: italic;
                    font-weight: 900;
                    background: linear-gradient(135deg, #a855f7, #c084fc, #e879f9);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1;
                    letter-spacing: -1px;
                }
                .stat-label {
                    font-family: 'Playfair Display', Georgia, serif;
                    font-style: italic;
                    font-weight: 700;
                    color: #d1d5db;
                    font-size: 1.05rem;
                }
            `}</style>

            {/* ── HERO ── */}
            <section ref={heroRef} className="relative text-center px-6 py-28 bg-gradient-to-br from-purple-950 via-black to-black overflow-hidden" style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-800/10 blur-3xl rounded-full" />

                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                    >
                        Book Premium <span className="text-purple-500">Artists</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
                    >
                        From live concerts and celebrity performances to DJs and private events —
                        we connect you with professional artists who create unforgettable experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold shadow-lg shadow-purple-700/30 transition-all duration-300"
                        >
                            Book Now
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── MARQUEE STRIP ── */}
            <div className="border-t border-b border-purple-900/40 py-4 overflow-hidden bg-purple-950/20">
                <div className="marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="flex items-center gap-10 px-10 text-purple-400/50 text-xs font-semibold tracking-widest uppercase">
                            {item} <span className="text-purple-600/40 text-[5px]">◆</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── STATS ── */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center py-10 px-4 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="stat-value text-5xl md:text-6xl mb-3">{s.value}</div>
                            <div className="stat-label">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── ARTISTS GRID ── */}
            <section id="artists-section" className="px-6 py-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold mb-2">Featured <span className="text-purple-500">Artists</span></h2>
                    <p className="text-gray-400 max-w-2xl mb-8">
                        Discover talented performers, celebrity artists, DJs, and live entertainers
                        for concerts, weddings, festivals, and premium events.
                    </p>

                    {/* Filter Pills */}
                    <div className="filter-scroll flex gap-2 overflow-x-auto pb-2">
                        {filterCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-250 border ${activeFilter === cat
                                        ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-700/30"
                                        : "bg-transparent border-zinc-700 text-gray-400 hover:border-purple-500/60 hover:text-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                    >
                        {filtered.map((artist, index) => (
                            <motion.div
                                key={artist.name}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.07 }}
                                className="artist-card group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                                style={{ aspectRatio: "3/4" }}
                            >
                                {/* Image */}
                                <div className="overflow-hidden w-full h-full absolute inset-0">
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        loading="lazy"
                                        className="artist-card-img w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                                {/* Info */}
                                <div className="absolute bottom-0 left-0 p-5 w-full">
                                    <p className="text-purple-400/70 text-[10px] font-semibold tracking-widest uppercase mb-1">
                                        {artist.category}
                                    </p>
                                    <h3 className="text-xl font-bold leading-tight mb-3">{artist.name}</h3>
                                    <button
                                        className="book-reveal px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-medium transition-colors duration-200"
                                        onClick={() => navigate("/contact")}
                                    >
                                        Book Artist →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="px-6 py-24 bg-zinc-950">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-purple-500">Us</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We provide premium artist booking services with trusted management,
                        seamless coordination, and unforgettable experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04 }}
                            className="p-8 rounded-3xl bg-black border border-zinc-800 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 text-center"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-5">
                                <span className="text-purple-400 text-lg font-bold">{i + 1}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="relative text-center py-28 bg-gradient-to-r from-purple-900 to-black overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800/10 blur-3xl rounded-full" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-5">
                        Ready To Book Your Next <span className="text-purple-400">Artist?</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10">
                        Let us create a premium entertainment experience for your event.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold shadow-lg shadow-purple-700/40 transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                            className="px-10 py-4 bg-black hover:bg-zinc-900 rounded-full font-semibold border border-purple-500 transition-all duration-300"
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}