import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Do I need a GoHighLevel account already?",
        answer: "No. I can set up a new GHL account for you or work inside the one you already have. If you are moving over from another tool like ClickFunnels, HubSpot or Calendly, I can migrate your contacts, pipelines and calendars."
    },
    {
        question: "What can you automate in GoHighLevel?",
        answer: "Lead follow-up by SMS and email, missed-call text back, appointment booking and reminders, pipeline updates, review requests, reactivation campaigns for old leads, and alerts for your team. If you are doing it by hand every week, it can probably be automated."
    },
    {
        question: "Do you build the funnels too?",
        answer: "Yes. I design and build landing pages, opt-in funnels, booking funnels and surveys inside GHL, connected to your calendar and CRM so every lead is tracked from the first click."
    },
    {
        question: "Do you also run the ads?",
        answer: "Yes. I run Meta and Google ads that send traffic into your funnel, and track results all the way to booked calls and sales, so you can see what each lead and appointment actually costs."
    },
    {
        question: "How long does a build take?",
        answer: "Most funnel and automation builds take 1 to 3 weeks, depending on scope. Ads can launch as soon as the funnel is live, and leads usually start coming in within the first few days."
    },
    {
        question: "What types of businesses do you work with?",
        answer: "Any business that sells through calls or appointments: agencies, coaches and consultants, local service businesses, and more. If leads come in and someone has to follow up with them, this system works for you."
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
        <section id="faq" className="py-20 md:py-28 px-4">
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
