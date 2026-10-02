import { motion } from 'framer-motion';
import { STATS } from '../config/vsl';

// Headline numbers recruiters scan for, right under the hero.
const Results = () => {
    return (
        <section className="px-4 pb-20 md:pb-28">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {STATS.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="card p-5 md:p-6"
                    >
                        <div className="font-display text-3xl md:text-4xl font-semibold text-sage-700 tracking-tight tabular-nums mb-1.5">
                            {stat.value}
                        </div>
                        <div className="text-sm font-semibold text-ink leading-snug">{stat.label}</div>
                        <div className="text-xs md:text-sm text-mute mt-0.5">{stat.description}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Results;
