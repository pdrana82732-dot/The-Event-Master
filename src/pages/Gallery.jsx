import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759385/event_1_jmvtjl.jpg",
    title: "Live Concert Experience",
  },
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759385/event_2_fbpem4.jpg",
    title: "Music Festival Production",
  },
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759385/event_3_wsvr4o.jpg",
    title: "Luxury Event Setup",
  },
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759385/event_4_wn3q2b.jpg",
    title: "Stage & Lighting Design",
  },
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759386/event_5_tfkjsi.jpg",
    title: "Corporate Event Management",
  },
  {
    image:
      "https://res.cloudinary.com/dd0bw31fi/image/upload/v1778759786/event_6_mjndu1.jpg",
    title: "Festival Crowd Experience",
  },
];

export default function Gallery() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#C9A84C]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C9A84C]/5 blur-3xl rounded-full" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <SectionTitle title="Gallery" subtitle="Recent Events" />

        <p className="text-center text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore some of our premium event productions, concert setups,
          luxury celebrations, and unforgettable live experiences crafted
          with creativity and precision.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 relative z-10">

        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl"
          >

            {/* Premium Top Border */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent z-20" />

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/5 transition-all duration-500" />
            </div>

            {/* Floating Label */}
            <div className="absolute top-5 left-5">
              <span className="bg-black/70 backdrop-blur-md border border-[#C9A84C]/30 text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase px-3 py-2 rounded-full font-semibold">
                Premium Event
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-7 w-full">

              {/* Animated Line */}
              <div className="h-px w-14 bg-[#C9A84C] mb-5 group-hover:w-28 transition-all duration-500" />

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                Premium event production with world-class stage,
                lighting, sound systems, visual experience, and
                seamless execution.
              </p>
            </div>

            {/* Border Animation */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#C9A84C]/30 transition-all duration-500" />

          </motion.div>
        ))}

      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
      >

        {[
          { number: "500+", text: "Events Managed" },
          { number: "100+", text: "Artists Connected" },
          { number: "15+", text: "Years Experience" },
          { number: "24/7", text: "Event Support" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl p-6 text-center hover:border-[#C9A84C]/30 transition-all duration-500"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#C9A84C]">
              {item.number}
            </h3>

            <p className="text-gray-400 text-sm mt-2 tracking-wide">
              {item.text}
            </p>
          </motion.div>
        ))}

      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24 relative z-10"
      >
        <span className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-semibold">
          Let’s Build Your Next Event
        </span>

        <h2
          className="text-4xl md:text-5xl font-bold text-white mt-5 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Creating <span className="text-[#C9A84C] italic">Unforgettable</span>{" "}
          Experiences
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mt-6">
          From concerts and festivals to luxury weddings and corporate
          productions, we combine creativity, technology, and flawless
          execution to deliver exceptional event experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(201,168,76,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide"
            >
              Book Your Event →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-[#C9A84C]/30 text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#C9A84C]/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}