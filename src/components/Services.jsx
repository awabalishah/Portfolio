import { motion } from 'framer-motion';

const services = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: "Targeted Patient Ads",
        description: "Google Search & Meta Campaigns engineered specifically to attract high-value patients looking for treatment (veins, pain therapies, joint care, and wellness services) within 15-30 miles of your clinic.",
        tags: ["Google Search Ads", "Meta Local Ads", "Google LSAs", "ZIP-Code Targeting"],
        accent: "teal"
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Intake Speed Automation",
        description: "Smart SMS and email auto-responders that follow up with new leads within 5 minutes. We connect inquiries directly to your front desk CRM so no prospective patient gets left behind.",
        tags: ["Instant Callbacks", "SMS Lead Nurture", "EHR Syncing", "GoHighLevel CRM"],
        accent: "blue"
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: "HIPAA-Compliant Funnels",
        description: "High-converting landing pages that verify candidate suitability and insurance coverage while fully adhering to patient privacy guidelines. Maximizing consultation bookings safely.",
        tags: ["Secure Forms", "Patient Verification", "CRO Audit", "Intake Flow Design"],
        accent: "purple"
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
        title: "Local SEO & Reputation",
        description: "Optimizing Google Business Profiles and launching patient review acquisition loops. Command Google Map searches to ensure your clinic is the top local choice for vein and pain relief.",
        tags: ["Google Maps SEO", "Review Acquisition", "Medical Content", "Patient Psychology Copy"],
        accent: "green"
    }
];

const accentMap = {
    teal: {
        border: "hover:border-teal-500/40",
        shadow: "hover:shadow-teal-500/10",
        icon: "text-teal-400 bg-teal-500/10 border-teal-500/20",
        tag: "bg-teal-500/10 text-teal-400/70 border-teal-500/10",
    },
    blue: {
        border: "hover:border-blue-500/40",
        shadow: "hover:shadow-blue-500/10",
        icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        tag: "bg-blue-500/10 text-blue-400/70 border-blue-500/10",
    },
    purple: {
        border: "hover:border-purple-500/40",
        shadow: "hover:shadow-purple-500/10",
        icon: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        tag: "bg-purple-500/10 text-purple-400/70 border-purple-500/10",
    },
    green: {
        border: "hover:border-emerald-500/40",
        shadow: "hover:shadow-emerald-500/10",
        icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        tag: "bg-emerald-500/10 text-emerald-400/70 border-emerald-500/10",
    },
};

const Services = () => {
    return (
        <section id="services" className="section bg-zinc-900/20">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">

                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4"
                    >
                        What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl font-medium"
                    >
                        Services
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const colors = accentMap[service.accent];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{ y: -6 }}
                                className={`p-8 bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 rounded-2xl border border-white/[0.07] ${colors.border} hover:shadow-lg ${colors.shadow} transition-all`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-5 ${colors.icon}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-5 leading-relaxed text-sm">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`text-xs px-3 py-1 rounded-full border ${colors.tag}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
