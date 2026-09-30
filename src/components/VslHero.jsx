import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import VslPlayer, { isFileVideo } from './VslPlayer';
import { VSL_VIDEO_SRC, VSL_POSTER, CTA_REVEAL_SECONDS } from '../config/vsl';

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const trustPoints = [
    'Built only for US vein & pain clinics',
    'HIPAA-compliant funnels',
    'Patients booked in 14–21 days',
];

const VslHero = () => {
    const gated = CTA_REVEAL_SECONDS > 0 && isFileVideo(VSL_VIDEO_SRC);
    const [ctaVisible, setCtaVisible] = useState(!gated);

    const handleWatchTime = (seconds) => {
        if (!ctaVisible && seconds >= CTA_REVEAL_SECONDS) setCtaVisible(true);
    };

    return (
        <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
                className="relative max-w-4xl mx-auto flex flex-col items-center text-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    <span className="text-[11px] md:text-xs font-medium text-teal-300 tracking-wide uppercase">
                        For US Vein & Pain Clinic Owners
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] mb-5"
                >
                    How we add 20–40 new patient appointments{' '}
                    <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold">
                        to your calendar every month
                    </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-2xl"
                >
                    Watch this short video to see the exact ad and follow-up system we use, and why most clinics lose patients before the front desk ever calls them back.
                </motion.p>

                <motion.div variants={itemVariants} className="w-full max-w-3xl">
                    <VslPlayer src={VSL_VIDEO_SRC} poster={VSL_POSTER} onWatchTime={handleWatchTime} />
                </motion.div>

                <div className="min-h-[140px] mt-8 md:mt-10 flex flex-col items-center">
                    <AnimatePresence>
                        {ctaVisible && (
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center"
                            >
                                <motion.a
                                    href="#book"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full font-semibold text-white text-base md:text-lg shadow-lg shadow-teal-500/25 hover:!opacity-100"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    Book Your Free Strategy Call
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </motion.a>
                                <p className="text-xs text-gray-500 mt-3">15 minutes. No pitch deck. Just a look at where your calendar is leaking.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                        {trustPoints.map((point) => (
                            <li key={point} className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                                <svg className="w-4 h-4 text-teal-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default VslHero;
