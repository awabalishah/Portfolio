import { motion } from 'framer-motion';
import { useState } from 'react';
import ContactModal from './ContactModal';

const platforms = [
    { label: 'Google Search Ads' },
    { label: 'Meta Ads (Facebook & Instagram)' },
    { label: 'GoHighLevel CRM' },
    { label: 'HIPAA-Compliant Funnels' },
    { label: 'Local LSA Search' },
    { label: 'CallRail Attribution' },
    { label: 'SMS Patient Automations' },
    { label: 'Zocdoc Integration' },
    { label: 'Patient Retention Email' },
    { label: 'Local Map Pack SEO' },
    { label: 'CRM Pipelines' },
    { label: 'Google Analytics 4' },
];

const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <>
            <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 gap-0">
                <div className="container max-w-4xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center text-center"
                    >
                        {/* Profile Image */}
                        <motion.div
                            variants={itemVariants}
                            className="relative mb-10"
                        >
                            <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                                <motion.div
                                    className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-teal-500/30 shadow-xl shadow-teal-500/20"
                                    whileHover={{ scale: 1.05, borderColor: "rgba(20, 184, 166, 0.5)" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <img
                                        src="/Profile-picture-website.jpg"
                                        alt="Awab Ali Shah"
                                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-emerald-500/10 pointer-events-none"></div>
                                </motion.div>
                                <div className="absolute -z-10 inset-0 bg-teal-500/25 rounded-full blur-xl"></div>
                            </div>
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 mb-7"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                            <span className="text-xs font-medium text-teal-300 tracking-wide uppercase">US Vein & Pain Clinic Growth Specialist</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-5"
                        >
                            I fill appointment calendars for<br />
                            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent font-bold">
                                US Vein & Pain Clinics.
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-xl"
                        >
                            Most clinics I work with are leaving 20–40 new patient appointments on the table every month. I deploy targeted Meta & Google Ads and automated scheduling systems to capture them.
                        </motion.p>

                        {/* CTA Row */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center gap-3 mb-6"
                        >
                            <motion.button
                                onClick={() => setIsContactOpen(true)}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full hover:opacity-90 transition-opacity cursor-pointer font-semibold text-white text-sm shadow-lg shadow-teal-500/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book a 15-Min Diagnostic Call
                            </motion.button>

                            <a href="#results">
                                <motion.div
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer text-gray-300 text-sm font-medium"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    See Patient Results
                                </motion.div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Platform Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="w-full mt-10 overflow-hidden border-t border-b border-white/5 py-4"
                >
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
                        <div className="marquee-track">
                            {[...platforms, ...platforms].map((p, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 mx-8 text-gray-500 hover:text-teal-400 transition-colors shrink-0 cursor-default"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/40 shrink-0"></span>
                                    <span className="text-sm font-medium tracking-wide whitespace-nowrap">{p.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
};

export default Hero;
