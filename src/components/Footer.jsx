const Footer = () => {
    return (
        <footer className="bg-zinc-900/50 border-t border-white/5 py-16">
            <div className="container max-w-4xl mx-auto px-8">
                <div className="flex flex-col items-center gap-8 mb-12">
                    <div className="text-center">
                        {/* Name + Tagline */}
                        <h3 className="text-4xl md:text-5xl font-light mb-3" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                            Awab Ali.
                        </h3>
                        <p className="text-gray-500 text-sm">Digital Marketing Strategist & Growth Expert</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://www.upwork.com/freelancers/awabalishah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-400 hover:text-[#14a800] transition-colors text-sm"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.866-3.06 1.51 0 2.732 1.217 2.732 2.72-.001 1.502-1.222 2.685-2.76 2.685zm0-8.201c-2.69 0-4.923 1.9-5.728 4.947-.832-1.479-1.459-3.249-1.816-4.75H7.442v6.184c0 1.409-1.156 2.568-2.567 2.568-1.411 0-2.567-1.155-2.567-2.567V5.154H0v6.184c0 2.764 2.262 5.029 5.031 5.029s5.031-2.265 5.031-5.029v-1.032A8.84 8.84 0 0011.862 14c1.296 1.604 3.119 2.493 5.025 2.493 3.677 0 6.113-2.905 6.113-6.194C23 6.876 21.094 4.957 18.561 4.957z" />
                            </svg>
                            Upwork
                        </a>
                        <a
                            href="https://www.linkedin.com/in/awab-ali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://x.com/Awabalishah"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            X (Twitter)
                        </a>
                        <a
                            href="http://github.com/awabalishah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:hey@awabalishah.com"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                            Email
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        © {new Date().getFullYear()} Awab Ali Shah. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 text-xs text-gray-600">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
