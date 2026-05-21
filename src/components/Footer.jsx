import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PF = "'Playfair Display', serif";

const LINKS = [
  { name: "Home", path: "/" },
  { name: "Inventory", path: "/inventory" },
  { name: "Artist Management", path: "/artist-booking" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const SOCIALS = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/theeventsmaster95/", label: "Instagram" },
  { icon: <FaWhatsapp />, href: "https://wa.me/919907655554", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#C9A84C]/20 mt-10 overflow-hidden">

      {/* Top gold sweep */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,#C9A84C 0,#C9A84C 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-[#C9A84C]/10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 group mb-4">
              <img
                src="https://res.cloudinary.com/dd0bw31fi/image/upload/v1778664482/Events_Logo_qqulft.png"
                alt="The Events Master"
                className="h-14 w-auto object-contain"
              />
              <div>
                <p className="text-lg font-bold text-white group-hover:text-[#C9A84C] transition-colors duration-300" style={{ fontFamily: PF }}>
                  The <span className="text-[#C9A84C]">Events</span> Master
                </p>
                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Event Production</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-7 mt-4">
              Premium event management and equipment rental — delivering unforgettable
              experiences from stage to sound.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/5 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-colors duration-300"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide" style={{ fontFamily: PF }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {LINKS.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#C9A84C] group-hover:w-4 transition-all duration-300" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm font-medium text-gray-400">
          <p className="tracking-wide">
            © {new Date().getFullYear()} The Events Master. All rights reserved.
          </p>
          <p className="text-gray-400">
            Designed with <span className="text-[#C9A84C]">♥</span> for unforgettable events
          </p>
        </div>
      </div>
    </footer>
  );
}