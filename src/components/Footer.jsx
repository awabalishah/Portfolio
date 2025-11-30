import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="section pb-12">
            <div className="container">
                <div className="border-t border-white/10 pt-20">
                    <div className="grid-12">
                        <div className="col-span-12 md:col-span-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-7xl font-medium tracking-tight mb-12"
                            >
                                Let's work <br />
                                <span className="text-gray-500">together.</span>
                            </motion.h2>
                            <motion.a
                                href="mailto:hey@awabalishah.com"
                                className="inline-flex items-center gap-2 text-xl hover:text-gray-400 transition-colors"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                hey@awabalishah.com
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </motion.a>
                        </div>

                        <div className="col-span-12 md:col-span-4 flex flex-col justify-between mt-12 md:mt-0">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-sm text-gray-500 uppercase tracking-wider">Socials</h3>
                                <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                            </div>

                            <p className="text-sm text-gray-600 mt-12">
                                &copy; {new Date().getFullYear()} Awab Ali Shah
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
