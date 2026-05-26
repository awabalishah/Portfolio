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
                        {/* Logo - Modern B2B Clinic Growth Style */}
                        <Link to="/" className="relative group flex items-center">
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-teal-400">
                                    AWAB <span className="text-teal-500 group-hover:text-teal-300">ALI</span>
                                </span>
                                <span className="hidden sm:inline-block text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded border border-teal-500/30 bg-teal-500/10 text-teal-300">
                                    CLINIC GROWTH
                                </span>
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
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
                                { href: '#results', label: 'Results' },
                                { href: '#services', label: 'Services' },
                                { href: '#process', label: 'Process' },
                            ].map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 group-hover:w-3/4 transition-all duration-300"></div>
                                </a>
                            ))}

                            {/* Contact Button */}
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="relative px-6 py-2 ml-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full hover:opacity-90 transition-all shadow-md shadow-teal-500/10 hover:shadow-teal-500/25 cursor-pointer"
                            >
                                Schedule 15-Min Call
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
                                { href: '#results', label: 'Results' },
                                { href: '#services', label: 'Services' },
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
                                className="w-full text-left px-4 py-3 text-sm text-teal-400 font-semibold hover:bg-white/5 rounded-lg transition-colors"
                            >
                                Schedule 15-Min Call
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
