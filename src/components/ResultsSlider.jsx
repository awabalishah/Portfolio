import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { results } from '../data/results';

// Draft slides show locally and on Vercel previews, never on the live site.
const isLive = import.meta.env.VITE_VERCEL_ENV === 'production';
const slides = results.filter((r) => !(r.draft && isLive));

const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const Arrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        aria-label={direction === 'prev' ? 'Previous result' : 'Next result'}
        className="w-11 h-11 rounded-full border border-line bg-paper text-ink flex items-center justify-center shadow-soft hover:border-sage-400 hover:text-sage-700 transition-colors cursor-pointer"
    >
        <svg className={`w-5 h-5 ${direction === 'prev' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    </button>
);

const Media = ({ media }) => {
    if (media.type === 'video') {
        return (
            <video
                src={media.src}
                className="w-full h-full object-cover bg-ink"
                controls
                playsInline
                preload="metadata"
            />
        );
    }
    // Proof screenshots are shown whole (never cropped) and open full size on click.
    return (
        <a href={media.src} target="_blank" rel="noopener noreferrer" className="group relative block w-full h-full p-4 md:p-6" draggable={false}>
            <img
                src={media.src}
                alt={media.alt || ''}
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
                draggable={false}
            />
            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-paper/90 text-[11px] font-medium text-body shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
                View full size
            </span>
        </a>
    );
};

const Slide = ({ result }) => {
    const hasMedia = Boolean(result.media);

    return (
        <div className={`card overflow-hidden grid ${hasMedia ? 'md:grid-cols-2' : ''}`}>
            {hasMedia && (
                <div className="h-[360px] md:h-auto md:min-h-[480px] bg-sand/70 border-b md:border-b-0 md:border-r border-line">
                    <Media media={result.media} />
                </div>
            )}

            <div className={`flex flex-col p-6 md:p-10 ${hasMedia ? '' : 'md:px-16 md:py-14'}`}>
                {result.draft && (
                    <span className="self-start mb-4 px-2.5 py-0.5 rounded-md bg-blush text-[11px] font-semibold uppercase tracking-wider text-ink/70">
                        Draft · hidden on live site
                    </span>
                )}

                {result.period && (
                    <span className="self-start mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-sage-600">
                        {result.period}
                    </span>
                )}

                <h3 className="text-2xl md:text-[1.9rem] mb-4">{result.headline}</h3>

                {result.summary && (
                    <p className="text-base leading-relaxed mb-6">{result.summary}</p>
                )}

                {result.quote && (
                    <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-body mb-8">
                        “{result.quote}”
                    </blockquote>
                )}

                {result.metrics?.length > 0 && (
                    <div className={`grid gap-3 mb-8 ${result.metrics.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                        {result.metrics.map((m) => (
                            <div key={m.label} className="rounded-2xl bg-sage-50 border border-sage-100 px-3 sm:px-4 py-3">
                                <div className="font-display text-lg sm:text-2xl md:text-3xl font-semibold text-sage-700 tabular-nums">{m.value}</div>
                                <div className="text-xs text-mute mt-0.5 leading-snug">{m.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto flex items-center gap-3 pt-5 border-t border-line">
                    <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-700 flex items-center justify-center font-display font-semibold shrink-0">
                        {result.client.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() || '•'}
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-ink">{result.client}</div>
                        <div className="text-xs text-mute">{result.practice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResultsSlider = () => {
    const [[index, direction], setState] = useState([0, 0]);
    const count = slides.length;

    if (count === 0) return null;

    const go = (dir) => setState(([i]) => [(i + dir + count) % count, dir]);
    const jump = (i) => setState(([cur]) => [i, i > cur ? 1 : -1]);

    return (
        <section id="results" className="py-20 md:py-28 px-4 bg-sand scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
                    <div className="max-w-xl">
                        <span className="eyebrow mb-4">Client Results</span>
                        <h2 className="text-3xl md:text-5xl">
                            Real practices. <span className="accent">Real bookings.</span>
                        </h2>
                    </div>
                    {count > 1 && (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-mute tabular-nums">
                                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                            </span>
                            <div className="flex gap-2">
                                <Arrow direction="prev" onClick={() => go(-1)} />
                                <Arrow direction="next" onClick={() => go(1)} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative overflow-hidden -mx-1 px-1 pb-2">
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            drag={count > 1 ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -80) go(1);
                                else if (info.offset.x > 80) go(-1);
                            }}
                        >
                            <Slide result={slides[index]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {count > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => jump(i)}
                                aria-label={`Go to result ${i + 1}`}
                                className={`h-2 rounded-full transition-all cursor-pointer ${i === index ? 'w-8 bg-sage-700' : 'w-2 bg-ink/15 hover:bg-ink/30'}`}
                            />
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <a href="#book" className="btn-primary">Get results like these</a>
                </div>
            </div>
        </section>
    );
};

export default ResultsSlider;
