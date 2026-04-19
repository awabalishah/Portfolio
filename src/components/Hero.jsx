import { motion } from 'framer-motion';

const platforms = [
    { label: 'Google Ads' },
    { label: 'Meta Ads' },
    { label: 'TikTok Ads' },
    { label: 'Klaviyo' },
    { label: 'HubSpot' },
    { label: 'ClickFunnels' },
    { label: 'SEO' },
    { label: 'Webflow' },
    { label: 'Email Automation' },
    { label: 'LinkedIn Ads' },
    { label: 'Shopify' },
    { label: 'Google Analytics' },
];

const Hero = () => {
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
                                className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-orange-500/30 shadow-xl shadow-orange-500/20"
                                whileHover={{ scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <img
                                    src="/Profile-picture-website.jpg"
                                    alt="Awab Ali Shah"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-500/10 pointer-events-none"></div>
                            </motion.div>
                            <div className="absolute -z-10 inset-0 bg-orange-500/25 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 mb-7"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                        <span className="text-xs font-medium text-orange-300 tracking-wide uppercase">Digital Marketing Expert</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-5"
                    >
                        I'm Awab Ali Shah,<br />
                        <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent font-bold">
                            I turn traffic into revenue.
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-gray-400 leading-relaxed mb-8 max-w-xl"
                    >
                        I build high-converting marketing funnels, paid ad campaigns, and automated
                        growth systems that generate measurable results for businesses worldwide.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-3 mb-6"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </div>
                            <span className="text-xs md:text-sm font-medium text-white">Available for new projects</span>
                        </motion.div>

                        <a
                            href="https://www.upwork.com/freelancers/awabalishah"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#14a800]/10 rounded-full border border-[#14a800]/30 hover:bg-[#14a800]/20 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#14a800]">
                                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.866-3.06 1.51 0 2.732 1.217 2.732 2.72-.001 1.502-1.222 2.685-2.76 2.685zm0-8.201c-2.69 0-4.923 1.9-5.728 4.947-.832-1.479-1.459-3.249-1.816-4.75H7.442v6.184c0 1.409-1.156 2.568-2.567 2.568-1.411 0-2.567-1.155-2.567-2.567V5.154H0v6.184c0 2.764 2.262 5.029 5.031 5.029s5.031-2.265 5.031-5.029v-1.032A8.84 8.84 0 0011.862 14c1.296 1.604 3.119 2.493 5.025 2.493 3.677 0 6.113-2.905 6.113-6.194C23 6.876 21.094 4.957 18.561 4.957z" />
                                </svg>
                                <span className="text-xs md:text-sm font-medium text-[#14a800]">View Upwork Profile</span>
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
                                className="flex items-center gap-2 mx-8 text-gray-500 hover:text-orange-400 transition-colors shrink-0 cursor-default"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 shrink-0"></span>
                                <span className="text-sm font-medium tracking-wide whitespace-nowrap">{p.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
