import { motion } from 'framer-motion';

const processSteps = [
    {
        number: "01",
        title: "Clinic Diagnostic & Audit",
        description: "We analyze localized search volume for vein & pain treatments in your ZIP codes and audit competitor ad strategies to locate exactly where patient opportunities are lost.",
        accent: "text-teal-500"
    },
    {
        number: "02",
        title: "Treatment Journey Mapping",
        description: "We align high-value procedures (e.g., varicose vein removal, joint pain relief, regenerative wellness) with targeted demographic searches to construct patient journeys.",
        accent: "text-teal-500"
    },
    {
        number: "03",
        title: "HIPAA-Compliant Build",
        description: "We build secure landing pages, interactive diagnostic funnel questionnaires, and ad creatives designed to vet prospective patients while preserving privacy.",
        accent: "text-teal-500"
    },
    {
        number: "04",
        title: "Hyper-Local Launch",
        description: "We deploy Google Search Ads, local Map Pack SEO, and local Meta Ads within a tight 15-30 mile radius around your physical clinic locations.",
        accent: "text-teal-500"
    },
    {
        number: "05",
        title: "Front-Desk CRM Syncing",
        description: "We connect lead captures directly to your staff's scheduling console (GoHighLevel, EHRs) and configure instant SMS alerts for rapid intake callback.",
        accent: "text-teal-500"
    },
    {
        number: "06",
        title: "Intake Audit & Scaling",
        description: "We track response times, optimize scripts for front desk booking rates, and scale budgets targeting the highest-converting geographic zones.",
        accent: "text-teal-500"
    }
];

const Process = () => {
    return (
        <section id="process" className="section">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">

                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4"
                    >
                        How I Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl font-medium"
                    >
                        Process
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.09 }}
                            className="relative group"
                        >
                            <div className="flex items-start gap-5">
                                <span className={`text-5xl font-bold leading-none ${step.accent} opacity-30 group-hover:opacity-60 transition-opacity duration-300 tabular-nums`}>
                                    {step.number}
                                </span>
                                <div className="pt-1">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-300 transition-colors duration-300">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
