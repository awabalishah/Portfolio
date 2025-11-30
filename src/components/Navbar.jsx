import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div
                className={`container flex justify-between items-center transition-all duration-300 ${isScrolled
                    ? 'bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 max-w-2xl mx-auto shadow-lg shadow-black/20'
                    : ''
                    }`}
            >
                <a href="#" className="text-2xl font-light tracking-tight italic" style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}>Awab Ali.</a>

                <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                    <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>

                <a href="mailto:hey@awabalishah.com" className="hidden md:block px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all">
                    Let's Talk
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
