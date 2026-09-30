import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What kind of role are you looking for?",
        answer: "A media buying role where I manage Meta and Google ad accounts, at an agency or in-house. I'm open to full-time, part-time and contract positions, working remotely from the UAE."
    },
    {
        question: "Where are you based, and what hours do you work?",
        answer: "I'm based in the UAE and work on US Eastern Time (EST), so I'm online during your business hours for calls, launches and campaign changes."
    },
    {
        question: "Which ad platforms do you run?",
        answer: "Meta (Facebook and Instagram) and Google Ads. That covers campaign setup, audiences, budgets, creative testing, conversion tracking with the Pixel and Conversions API, and reporting in GA4."
    },
    {
        question: "Can you work inside our existing ad accounts and GoHighLevel?",
        answer: "Yes. I can work in your agency's or your clients' ad accounts and GHL sub-accounts with whatever access you give me, and follow your naming conventions, processes and reporting setup."
    },
    {
        question: "Do you handle ad creative?",
        answer: "I write ad copy and creative briefs and plan the creative tests: which hooks, angles and formats to try and when to cut or scale them. I work closely with designers and video editors to get the assets made."
    },
    {
        question: "What do you report on?",
        answer: "Spend, cost per lead, cost per booked call and return on ad spend, plus what changed that week and what I'm testing next. The goal is numbers the team can actually act on."
    },
    {
        question: "Why does GoHighLevel experience matter for a media buyer?",
        answer: "Because ads only pay off if the leads get followed up. I can tell when the real problem is the funnel or the follow-up rather than the ads, and fix it myself instead of just raising the budget."
    }
];

const FaqItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-line last:border-b-0 py-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left gap-6 font-display text-base md:text-lg font-semibold text-ink hover:text-sage-700 transition-colors duration-200 cursor-pointer"
            >
                <span>{faq.question}</span>
                <span className={`shrink-0 text-sage-600 font-light text-2xl leading-none transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm md:text-base mt-3 leading-relaxed max-w-3xl pb-2">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => {
    return (
        <section id="faq" className="py-20 md:py-28 px-4 bg-sand">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="eyebrow mb-4">Common Questions</span>
                    <h2 className="text-3xl md:text-5xl">
                        Questions, <span className="accent">answered.</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="card px-6 md:px-10 py-2 md:py-4">
                    {faqs.map((faq, index) => (
                        <FaqItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
