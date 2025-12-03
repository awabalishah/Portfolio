import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import ContactModal from './ContactModal';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.7)']
    );

    return (
        <>
            <motion.nav
                style={{ backgroundColor }}
                className="fixed top-4 left-1/2 -translate-x-1/2 max-w-4xl w-[calc(100%-2rem)] z-50 transition-all duration-500 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 rounded-full px-6"
            >
                <div className="mx-auto max-w-full">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo - Handwritten Style */}
                        <Link to="/" className="relative group">
                            <span
                                className="text-xl md:text-2xl font-light bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-purple-400"
                                style={{ fontFamily: 'Brush Script MT, cursive' }}
                            >
                                Awab Ali.
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {/* Phone Number */}
                            <a
                                href="tel:+923227601040"
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                                +92 322 7601040
                            </a>

                            {[
                                { href: '#services', label: 'Services' },
                                { href: '#work', label: 'Work' },
                                { href: '#process', label: 'Process' },
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></div>
                                </a>
                            ))}

                            {/* Contact Button */}
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="relative px-6 py-2 ml-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/10 hover:border-white/20 group overflow-hidden"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <motion.div
                        initial={false}
                        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="py-4 space-y-2">
                            <a
                                href="tel:+923227601040"
                                className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                                +92 322 7601040
                            </a>
                            {[
                                { href: '#services', label: 'Services' },
                                { href: '#work', label: 'Work' },
                                { href: '#process', label: 'Process' },
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsContactOpen(true);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 text-sm text-blue-400 font-medium hover:bg-white/5 rounded-lg transition-colors"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Navbar;
