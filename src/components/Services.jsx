import { motion } from 'framer-motion';

const services = [
    {
        title: "Website Design & Development",
        description: "Building beautiful, high-converting websites with modern aesthetics that turn visitors into customers.",
        tags: ["Full Stack Development", "Responsive Design", "E-commerce"]
    },
    {
        title: "Marketing Funnels",
        description: "Creating custom marketing funnels tailored to your niche that guide prospects through the buyer journey.",
        tags: ["Sales Funnels", "Email Automation", "Landing Pages"]
    },
    {
        title: "Lead Generation & Sales",
        description: "Implementing proven strategies to generate qualified leads and convert them into paying customers.",
        tags: ["SEO", "Paid Ads", "Conversion Optimization"]
    }
];

const Services = () => {
    return (
        <section id="services" className="section bg-zinc-900/20">
            <div className="container max-w-4xl mx-auto px-8">
                <h2 className="text-4xl font-medium mb-16 text-center">Services</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ y: -8 }}
                            className="p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
                        >
                            <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-500"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
