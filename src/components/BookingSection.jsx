import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { BOOKING_URL } from '../config/vsl';

// Calendly accepts theme params in the URL; other providers ignore them.
const themedUrl = (url) => {
    if (!url.includes('calendly.com')) return url;
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}hide_gdpr_banner=1&background_color=fcfaf6&text_color=211e1a&primary_color=43634f`;
};

const steps = [
    { title: 'Pick a time', text: 'Choose a 15-minute slot that works for you.' },
    { title: 'I review your setup', text: 'Before the call, I look at your current funnel, CRM and ads.' },
    { title: 'Get your plan', text: 'You leave with a clear list of what to build, fix or automate first.' },
];

const BookingSection = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="book" className="py-20 md:py-28 px-4 bg-sand scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="eyebrow mb-4">Next Step</span>
                    <h2 className="text-3xl md:text-5xl">
                        Book your free <span className="accent">strategy call.</span>
                    </h2>
                    <p className="text-base md:text-lg mt-4 max-w-xl mx-auto">
                        I work with a small number of clients at a time, so every build gets my full attention.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {steps.map((step, i) => (
                        <div key={step.title} className="card p-6">
                            <div className="font-serif italic text-2xl text-sage-600 mb-2">0{i + 1}</div>
                            <h3 className="text-lg mb-1.5">{step.title}</h3>
                            <p className="text-sm leading-relaxed">{step.text}</p>
                        </div>
                    ))}
                </div>

                <div className="card overflow-hidden">
                    {BOOKING_URL ? (
                        <iframe
                            src={themedUrl(BOOKING_URL)}
                            title="Book a strategy call"
                            className="w-full h-[720px] md:h-[760px] border-0"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex flex-col items-center text-center gap-4 px-6 py-16">
                            <p className="text-base max-w-md">
                                Tell me a bit about your business and I will send you a time for your call.
                            </p>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="btn-primary"
                            >
                                Request My Call
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </section>
    );
};

export default BookingSection;
