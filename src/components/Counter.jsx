import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix, label }) {
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
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <div ref={ref} className="text-center group">
            <div className="relative inline-block">
                <span className="text-4xl md:text-5xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {count}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {suffix}
                </span>
            </div>
            <p className="text-black/70 text-[11px] tracking-[0.18em] uppercase mt-2 font-medium">{label}</p>
            <div className="w-6 h-px bg-black/25 mx-auto mt-3 group-hover:w-14 transition-all duration-500" />
        </div>
    );
}