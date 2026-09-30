import { motion } from 'framer-motion';

const stats = [
    { value: '20–40', label: 'New appointments a month', description: 'Typically left on the table before we start' },
    { value: '3.8x', label: 'Average return on ad spend', description: 'On high-value treatments' },
    { value: '$180K+', label: 'Added revenue opportunity', description: 'Average per practice, per year' },
];

// Quick proof strip that sits right under the VSL.
const Results = () => {
    return (
        <section className="px-4 pb-20 md:pb-28">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="card p-6 md:p-7 text-center md:text-left"
                    >
                        <div className="font-display text-4xl md:text-[2.75rem] font-semibold text-sage-700 tracking-tight tabular-nums mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm font-semibold text-ink">{stat.label}</div>
                        <div className="text-sm text-mute mt-0.5">{stat.description}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Results;
