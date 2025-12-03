const Footer = () => {
    return (
        <footer className="bg-zinc-900/50 border-t border-white/5 py-16">
            <div className="container max-w-4xl mx-auto px-8">
                <div className="flex flex-col items-center gap-8 mb-12">
                    <div className="text-center">
                        {/* Handwritten Style Logo */}
                        <h3 className="text-4xl md:text-5xl font-light mb-3" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                            Awab Ali.
                        </h3>
                        <p className="text-gray-500 text-sm">Full Stack Web & Marketing Expert</p>
                    </div>

                    <div className="flex gap-8">
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
