import { motion } from 'framer-motion';

const processSteps = [
    {
        number: "01",
        title: "Research & Discovery",
        description: "Understanding your business, target audience, niche, and competitors to identify the best opportunities for growth."
    },
    {
        number: "02",
        title: "Strategy & Planning",
        description: "Creating a custom marketing strategy with clear goals, funnel design, and conversion optimization plan."
    },
    {
        number: "03",
        title: "Design & Development",
        description: "Building beautiful, high-converting websites and landing pages with modern aesthetics and user experience."
    },
    {
        number: "04",
        title: "Funnel Creation",
        description: "Setting up automated marketing funnels with email sequences, retargeting, and lead nurturing systems."
    },
    {
        number: "05",
        title: "Launch & Deploy",
        description: "Going live with your website, funnels, and marketing campaigns across all channels."
    },
    {
        number: "06",
        title: "Optimize & Scale",
        description: "Analyzing data, A/B testing, and continuously improving performance to maximize leads and sales."
    }
];

const Process = () => {
    return (
        <section className="section">
            <div className="container max-w-4xl mx-auto px-8">
                <h2 className="text-4xl font-medium mb-16 text-center">Process</h2>

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
