import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { BOOKING_URL, CONTACT, RESUME_URL } from '../config/vsl';

// Calendly accepts theme params in the URL; other providers ignore them.
const themedUrl = (url) => {
    if (!url.includes('calendly.com')) return url;
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}hide_gdpr_banner=1&background_color=fcfaf6&text_color=211e1a&primary_color=43634f`;
};

const whatsappLink = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`;

const icons = {
    email: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    whatsapp: <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 8 20.1L3 21zM9 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1-1 .8a4 4 0 0 1-2.3-2.3l.8-1-1-2L9 9.5z" />,
    linkedin: <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7M4 4h16v16H4z" />,
};

const ContactCard = ({ icon, label, value, href, action }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="card p-5 md:p-6 flex flex-col"
    >
        <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {icons[icon]}
            </svg>
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-mute mb-1">{label}</div>
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="font-display text-base md:text-lg font-semibold text-ink hover:text-sage-700 transition-colors break-all"
        >
            {value}
        </a>
        {action && <div className="mt-auto pt-4">{action}</div>}
    </motion.div>
);

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${text}`;
        }
    };

    return (
        <button onClick={copy} className="text-sm font-medium text-sage-700 hover:text-sage-800 cursor-pointer">
            {copied ? 'Copied ✓' : 'Copy email'}
        </button>
    );
};

const ContactSection = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="contact" className="py-20 md:py-28 px-4 bg-sand scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 md:mb-12">
                    <span className="eyebrow mb-4">Contact</span>
                    <h2 className="text-3xl md:text-5xl">
                        Let's talk about <span className="accent">the role.</span>
                    </h2>
                    <p className="text-base md:text-lg mt-4 max-w-xl mx-auto">
                        Hiring a media buyer? Reach me directly on any of these. I work remotely and am available during US and UK hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <ContactCard
                        icon="email"
                        label="Email"
                        value={CONTACT.email}
                        href={`mailto:${CONTACT.email}`}
                        action={<CopyButton text={CONTACT.email} />}
                    />
                    <ContactCard
                        icon="whatsapp"
                        label="WhatsApp"
                        value={CONTACT.whatsapp}
                        href={whatsappLink}
                        action={<a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sage-700 hover:text-sage-800">Message on WhatsApp →</a>}
                    />
                    <ContactCard
                        icon="linkedin"
                        label="LinkedIn"
                        value="in/awab-ali"
                        href={CONTACT.linkedin}
                        action={<a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sage-700 hover:text-sage-800">View profile →</a>}
                    />
                </div>

                {BOOKING_URL ? (
                    <div className="mt-12">
                        <h3 className="text-xl md:text-2xl text-center mb-6">Or book a 15-minute intro call</h3>
                        <div className="card overflow-hidden">
                            <iframe
                                src={themedUrl(BOOKING_URL)}
                                title="Book an intro call"
                                className="w-full h-[720px] md:h-[760px] border-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <button onClick={() => setIsContactOpen(true)} className="btn-primary">
                            Send a message about a role
                        </button>
                        {RESUME_URL && (
                            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                                Download Resume
                            </a>
                        )}
                    </div>
                )}
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </section>
    );
};

export default ContactSection;
