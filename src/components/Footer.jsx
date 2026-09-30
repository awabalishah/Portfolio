const links = [
    { href: 'https://www.upwork.com/freelancers/awabalishah', label: 'Upwork' },
    { href: 'https://www.linkedin.com/in/awab-ali/', label: 'LinkedIn' },
    { href: 'https://x.com/Awabalishah', label: 'X (Twitter)' },
    { href: 'http://github.com/awabalishah/', label: 'GitHub' },
    { href: 'mailto:hey@awabalishah.com', label: 'Email' },
];

const Footer = () => {
    return (
        <footer className="border-t border-line py-14 px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <div className="font-display text-lg font-bold tracking-tight text-ink">
                        AWAB <span className="text-sage-600">ALI</span>
                    </div>
                    <p className="text-sm text-mute mt-1">Media buyer · Meta &amp; Google Ads · GoHighLevel</p>
                    <p className="text-xs text-mute mt-1">Based in UAE · Available on EST hours</p>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-body hover:text-sage-700 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            <p className="text-xs text-mute text-center mt-10">
                © {new Date().getFullYear()} Awab Ali Shah. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
