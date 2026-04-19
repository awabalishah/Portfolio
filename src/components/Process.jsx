import { motion } from 'framer-motion';

const processSteps = [
    {
        number: "01",
        title: "Audit & Research",
        description: "Deep-dive into your current funnel, ad accounts, analytics, and competitors to pinpoint exactly where money is being left on the table.",
        accent: "text-orange-500"
    },
    {
        number: "02",
        title: "Strategy & Positioning",
        description: "Custom growth roadmap with clear channel mix, messaging, targeting, and KPI targets — built around your specific business model and goals.",
        accent: "text-orange-500"
    },
    {
        number: "03",
        title: "Campaign Build",
        description: "Creating ads, landing pages, email sequences, and automations. Every asset is conversion-optimised before anything goes live.",
        accent: "text-orange-500"
    },
    {
        number: "04",
        title: "Multi-Channel Launch",
        description: "Coordinated go-live across paid, organic, and email — timed for maximum impact and with contingency tracking in place from day one.",
        accent: "text-orange-500"
    },
    {
        number: "05",
        title: "Track & Analyse",
        description: "Real-time dashboards, attribution modelling, and weekly reporting so you always know exactly what's performing and why.",
        accent: "text-orange-500"
    },
    {
        number: "06",
        title: "Scale & Optimise",
        description: "Double down on winning campaigns, cut losers fast, and systematically scale revenue — continuous iteration driven by data.",
        accent: "text-orange-500"
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
                        className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4"
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
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-300 transition-colors duration-300">{step.title}</h3>
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
