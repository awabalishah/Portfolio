import { motion } from 'framer-motion';

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
        <section className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >
                    {/* Profile Image - Prominent Border */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-10"
                    >
                        <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                            <motion.div
                                className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-blue-500/30 shadow-xl shadow-blue-500/20"
                                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <img
                                    src="/Profile-picture-website.jpg"
                                    alt="Awab Ali Shah"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
                            </motion.div>
                            <div className="absolute -z-10 inset-0 bg-blue-500/30 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* Heading - More Prominent */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-4"
                    >
                        I'm Awab Ali Shah,<br />
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">Full Stack Web & Marketing Expert</span><br />
                        <span className="text-gray-400 text-base md:text-lg font-normal">based in Pakistan, working worldwide.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-sm md:text-base text-gray-300 leading-relaxed mb-5 max-w-lg"
                    >
                        I build high-converting websites and marketing funnels that generate leads and drive sales for businesses.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        variants={itemVariants}
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
