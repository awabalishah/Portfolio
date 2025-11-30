import { motion } from 'framer-motion';

const processSteps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding the problem space, user needs, and business goals through research and stakeholder interviews."
    },
    {
        number: "02",
        title: "Define",
        description: "Synthesizing insights to define the core problem, user personas, and success metrics."
    },
    {
        number: "03",
        title: "Ideate",
        description: "Brainstorming solutions, sketching concepts, and exploring different design directions."
    },
    {
        number: "04",
        title: "Design",
        description: "Creating high-fidelity mockups, prototypes, and design systems with pixel-perfect precision."
    },
    {
        number: "05",
        title: "Test",
        description: "Validating designs through user testing, gathering feedback, and iterating based on insights."
    },
    {
        number: "06",
        title: "Deliver",
        description: "Handing off to development, ensuring implementation quality, and measuring impact."
    }
];

const Process = () => {
    return (
        <section className="section">
            <div className="container max-w-5xl mx-auto px-8">
                <h2 className="text-4xl font-medium mb-16">Process</h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="flex items-start gap-6">
                                <span className="text-5xl font-medium text-gray-800 leading-none">
                                    {step.number}
                                </span>
                                <div className="pt-1">
                                    <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
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
