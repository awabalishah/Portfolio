import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { RESUME_URL } from '../config/vsl';

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-28 px-4 bg-sand scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
                    <div className="max-w-xl">
                        <span className="eyebrow mb-4">Experience</span>
                        <h2 className="text-3xl md:text-5xl">
                            Where I've <span className="accent">done the work.</span>
                        </h2>
                    </div>
                    {RESUME_URL && (
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost self-start md:self-auto">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                            </svg>
                            Download Resume (PDF)
                        </a>
                    )}
                </div>

                <ol className="relative border-l border-line ml-2 md:ml-3">
                    {experience.map((job, i) => (
                        <motion.li
                            key={`${job.company}-${job.role}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.05 }}
                            className="relative pl-7 md:pl-10 pb-10 last:pb-0"
                        >
                            <span
                                className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-sand ${job.dates.includes('Present') ? 'bg-sage-600' : 'bg-sage-200'}`}
                                aria-hidden="true"
                            ></span>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <h3 className="text-lg md:text-xl">{job.role}</h3>
                                <span className="text-sm font-medium text-mute tabular-nums whitespace-nowrap">{job.dates}</span>
                            </div>
                            <div className="text-sm text-sage-700 font-medium mb-3">
                                {job.company}
                                {job.location && <span className="text-mute font-normal"> · {job.location}</span>}
                            </div>

                            {job.points.length > 0 && (
                                <ul className="space-y-1.5 mb-3">
                                    {job.points.map((point) => (
                                        <li key={point} className="flex gap-2.5 text-sm md:text-[15px] leading-relaxed">
                                            <span className="mt-2 w-1 h-1 rounded-full bg-sage-600 shrink-0" aria-hidden="true"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {job.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5">
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-paper border border-line text-xs text-body">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
