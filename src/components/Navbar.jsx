import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RESUME_URL } from '../config/vsl';

const links = [
    { href: '/#results', label: 'Results' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/#contact', label: 'Contact' },
];

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
                <Link to="/" className="flex items-center gap-2">
                    <span className="font-display text-base md:text-lg font-bold tracking-tight text-ink">
                        AWAB <span className="text-sage-600">ALI</span>
                    </span>
                    <span className="hidden lg:inline-block text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-sage-100 text-sage-800">
                        MEDIA BUYER
                    </span>
                </Link>

                <div className="flex items-center gap-1">
                    <div className="hidden md:flex items-center">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-body hover:text-ink transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    {RESUME_URL ? (
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-cream bg-sage-700 hover:bg-sage-800 rounded-full transition-colors whitespace-nowrap"
                        >
                            Resume
                        </a>
                    ) : (
                        <a
                            href="/#contact"
                            className="ml-2 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-cream bg-sage-700 hover:bg-sage-800 rounded-full transition-colors whitespace-nowrap"
                        >
                            Let's Talk
                        </a>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
