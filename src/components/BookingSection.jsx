import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { BOOKING_URL } from '../config/vsl';

// Calendly accepts theme params in the URL; other providers ignore them.
const themedUrl = (url) => {
    if (!url.includes('calendly.com')) return url;
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}hide_gdpr_banner=1&background_color=0a0a0a&text_color=f3f3f3&primary_color=14b8a6`;
};

const steps = [
    { title: 'Pick a time', text: 'Choose a 15-minute slot that works for you.' },
    { title: 'We audit your market', text: 'Before the call, I look at search demand and competitors near your clinic.' },
    { title: 'Get your plan', text: 'You leave with a clear picture of how many appointments you are missing and how to get them.' },
];

const BookingSection = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <section id="book" className="py-16 md:py-24 px-4 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12"
                >
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
                        Next Step
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        Book your free strategy call
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
                        I only take on a few clinics at a time, one per local market, so your competitors are not using the same system.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {steps.map((step, i) => (
                        <div key={step.title} className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-800/30 border border-white/[0.06]">
                            <div className="text-teal-400 text-sm font-bold mb-2 tabular-nums">0{i + 1}</div>
                            <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_60px_rgba(20,184,166,0.08)]">
                    {BOOKING_URL ? (
                        <iframe
                            src={themedUrl(BOOKING_URL)}
                            title="Book a strategy call"
                            className="w-full h-[720px] md:h-[760px] border-0"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex flex-col items-center text-center gap-4 px-6 py-16">
                            <p className="text-gray-400 text-sm md:text-base max-w-md">
                                Tell me a bit about your clinic and I will send you a time for your call.
                            </p>
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full font-semibold text-white shadow-lg shadow-teal-500/25 hover:opacity-90 transition-opacity cursor-pointer"
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
