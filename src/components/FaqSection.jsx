import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is this patient acquisition workflow HIPAA-compliant?",
        answer: "Yes, fully. We protect patient privacy by deploying encrypted landing page forms and connecting HIPAA-compliant software (such as CallRail for secure call attribution and HIPAA-enabled GoHighLevel configurations). We handle BAAs where necessary and ensure no sensitive clinical health records (PHI) are transmitted through unsecured channels."
    },
    {
        question: "How quickly do we start seeing new patient bookings?",
        answer: "Typically within 14 to 21 days. The first 10-14 days are spent auditing your geographic search volume, building secure landing pages, writing ads, and setting up integrations. Once campaigns launch, qualified patient inquiries generally begin coming in within the first 48 hours."
    },
    {
        question: "Does this integrate with our existing EHR or scheduling software?",
        answer: "Yes. We connect leads and forms with popular patient appointment portals (Zocdoc, PatientPop, etc.) or clinic CRMs. We can configure automated webhooks to sync contacts directly or set up secure instant SMS alerts for your front desk receptionist."
    },
    {
        question: "How do we filter out unqualified leads or bad insurance?",
        answer: "We build custom candidate pre-screening questionnaires inside the landing page flow. Before requesting an appointment, prospects must verify their treatment need (the condition or service they need) and submit their insurance provider. This filters out low-intent inquiries automatically."
    },
    {
        question: "What is your speed-to-lead automation?",
        answer: "Most patient leads are lost because of delayed follow-ups. We configure automated text auto-responders that text the patient within 2 minutes of submission to secure the booking, while simultaneously triggering an automated phone callback to sync with your front desk."
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
