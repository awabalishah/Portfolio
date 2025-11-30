import { motion } from 'framer-motion';

const services = [
    {
        title: "UI Design",
        description: "Creating beautiful, intuitive interfaces that delight users and solve complex problems.",
        tags: ["App Design", "Web Design", "Design Systems"]
    },
    {
        title: "UX Research",
        description: "Understanding user needs through deep research and data-driven insights.",
        tags: ["User Testing", "Wireframing", "Prototyping"]
    },
    {
        title: "Development",
        description: "Bringing designs to life with modern technologies and pixel-perfect precision.",
        tags: ["React", "Framer", "Webflow"]
    }
];

const Services = () => {
    return (
        <section id="services" className="section bg-zinc-900/20">
            <div className="container">
                <h2 className="text-4xl font-medium mb-16">Services</h2>

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
                            className="p-8 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
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
