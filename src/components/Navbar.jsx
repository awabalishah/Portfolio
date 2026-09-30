import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Kept minimal on purpose: the homepage is a VSL, so the only action is booking.
const Navbar = () => {
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.7)']
    );

    return (
        <motion.nav
            style={{ backgroundColor }}
            className="fixed top-4 left-1/2 -translate-x-1/2 max-w-4xl w-[calc(100%-2rem)] z-50 transition-all duration-500 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-full px-4 md:px-6"
        >
            <div className="flex justify-between items-center h-14 md:h-16">
                <Link to="/" className="relative group flex items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-base md:text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-teal-400">
                            AWAB <span className="text-teal-500 group-hover:text-teal-300">ALI</span>
                        </span>
                        <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-teal-500/30 bg-teal-500/10 text-teal-300">
                            CLINIC GROWTH
                        </span>
                    </div>
                </Link>

                <a
                    href="/#book"
                    className="px-4 md:px-6 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all shadow-md shadow-teal-500/10 hover:shadow-teal-500/25 hover:!opacity-90 whitespace-nowrap"
                >
                    Book a Call
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
