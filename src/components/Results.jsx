import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 40, suffix: '+', prefix: '20-', label: 'Appointments Leak', description: 'Left on the table monthly before audit' },
    { value: 15, suffix: ' Min', prefix: '', label: 'Diagnostic Call', description: 'To pinpoint calendar leaks' },
    { value: 3.8, suffix: 'x', prefix: '', label: 'Average ROAS', description: 'Return on ad spend for high-value treatments' },
    { value: 180, suffix: 'K+', prefix: '+$', label: 'Revenue Opportunity', description: 'Avg. yearly value added per clinic' },
];

const useCountUp = (target, duration = 1800, shouldStart) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!shouldStart) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(parseFloat(start.toFixed(1)));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, shouldStart]);
    return count;
};

const StatCard = ({ stat, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const count = useCountUp(stat.value, 1800, inView);

    const displayValue = Number.isInteger(stat.value)
        ? Math.round(count)
        : count.toFixed(1);

    // Prevent visual range glitch during count-up (e.g. showing "20-0", "20-5" etc)
    const isCompleted = count >= stat.value;
    const displayPrefix = isCompleted 
        ? stat.prefix 
        : (stat.prefix === '20-' ? '' : stat.prefix);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 border border-white/[0.07] hover:border-teal-500/30 transition-all group"
        >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/[0.04] transition-colors duration-500 pointer-events-none"></div>

            <div className="text-4xl md:text-5xl font-bold mb-1 shimmer-gradient tabular-nums leading-none">
                {displayPrefix}{displayValue}{stat.suffix}
            </div>
            <div className="text-base md:text-lg font-semibold text-white mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
        </motion.div>
    );
};

const Results = () => {
    return (
        <section id="results" className="py-16 md:py-20 px-4">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
                        Proven Outcomes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Measurable patient acquisition for clinics
                    </h2>
                    <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                        Actual results driven through targeted local search and social advertising campaigns.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
