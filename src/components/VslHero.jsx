import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import VslPlayer, { isFileVideo } from './VslPlayer';
import { VSL_VIDEO_SRC, VSL_POSTER, CTA_REVEAL_SECONDS } from '../config/vsl';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const trustPoints = [
    'Built only for US healthcare practices',
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
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-sage-100/70 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blush/60 blur-[120px] pointer-events-none"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
                className="relative max-w-4xl mx-auto flex flex-col items-center text-center"
            >
                <motion.span variants={itemVariants} className="eyebrow mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-600"></span>
                    For US Healthcare Practice Owners
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-[2.1rem] md:text-6xl lg:text-[4rem] mb-6"
                >
                    Add 20–40 new patient appointments{' '}
                    <span className="accent">to your calendar every month.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl"
                >
                    Watch this short video to see the exact ad and follow-up system we use, and why most practices lose patients before the front desk ever calls them back.
                </motion.p>

                <motion.div variants={itemVariants} className="w-full max-w-3xl">
                    <VslPlayer src={VSL_VIDEO_SRC} poster={VSL_POSTER} onWatchTime={handleWatchTime} />
                </motion.div>

                <div className="min-h-[150px] mt-10 flex flex-col items-center">
                    <AnimatePresence>
                        {ctaVisible && (
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center"
                            >
                                <a href="#book" className="btn-primary !px-9 !py-4 !text-base md:!text-lg">
                                    Book Your Free Strategy Call
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </a>
                                <p className="text-sm text-mute mt-3">15 minutes. No pitch deck. Just a look at where your calendar is leaking.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-7">
                        {trustPoints.map((point) => (
                            <li key={point} className="flex items-center gap-2 text-sm text-body">
                                <svg className="w-4 h-4 text-sage-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
