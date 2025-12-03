import { motion } from 'framer-motion';

const skills = [
    "Full Stack Development",
    "Marketing Strategy",
    "Funnel Building",
    "Lead Generation",
    "Conversion Optimization",
    "SEO & SEM",
    "Email Marketing",
    "Landing Page Design",
    "Web Analytics",
    "A/B Testing",
    "Copywriting",
    "Social Media Marketing",
    "Paid Advertising",
    "E-commerce"
];

const Skills = () => {
    return (
        <section className="section bg-zinc-900/20">
            <div className="container max-w-4xl mx-auto px-8">
                <h2 className="text-4xl font-medium mb-12 text-center">Skills</h2>

                <div className="flex flex-wrap gap-3 justify-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.03,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-6 py-3 bg-zinc-800 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skills.length * 0.03 + 0.2 }}
                        className="px-6 py-3 text-gray-500 text-sm font-medium cursor-pointer hover:text-gray-300 transition-colors"
                    >
                        + More
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
