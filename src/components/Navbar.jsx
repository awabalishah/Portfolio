import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

// Kept minimal on purpose: the homepage is a VSL, so the only action is booking.
const Navbar = () => {
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(252, 250, 246, 0.6)', 'rgba(252, 250, 246, 0.9)']
    );

    return (
        <motion.nav
            style={{ backgroundColor }}
            className="fixed top-4 left-1/2 -translate-x-1/2 max-w-4xl w-[calc(100%-2rem)] z-50 backdrop-blur-xl border border-line/80 shadow-soft rounded-full px-4 md:px-6"
        >
            <div className="flex justify-between items-center h-14 md:h-16">
                <Link to="/" className="relative group flex items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-display text-base md:text-lg font-bold tracking-tight text-ink">
                            AWAB <span className="text-sage-600">ALI</span>
                        </span>
                        <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-sage-100 text-sage-800">
                            GHL &amp; FUNNELS
                        </span>
                    </div>
                </Link>

                <a
                    href="/#book"
                    className="px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-cream bg-sage-700 hover:bg-sage-800 rounded-full transition-colors whitespace-nowrap"
                >
                    Book a Call
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
