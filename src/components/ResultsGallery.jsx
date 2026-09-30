import { useRef, useState, useEffect } from 'react';
import { results } from '../data/results';

const Arrow = ({ direction, onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        aria-label={direction === 'prev' ? 'Previous results' : 'Next results'}
        className="w-11 h-11 rounded-full border border-line bg-paper text-ink flex items-center justify-center shadow-soft hover:border-sage-400 hover:text-sage-700 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-default disabled:hover:border-line disabled:hover:text-ink"
    >
        <svg className={`w-5 h-5 ${direction === 'prev' ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    </button>
);

// Screenshots sit side by side in a row that scrolls sideways (swipe on phones,
// arrows on desktop). Each one opens full size on click.
const ResultsGallery = () => {
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateEdges = () => {
        const el = trackRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };

    useEffect(() => {
        updateEdges();
        window.addEventListener('resize', updateEdges);
        return () => window.removeEventListener('resize', updateEdges);
    }, []);

    const scroll = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector('figure');
        const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
        el.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    if (results.length === 0) return null;

    return (
        <section id="results" className="py-20 md:py-28 bg-sand scroll-mt-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
                    <div className="max-w-xl">
                        <span className="eyebrow mb-4">Client Results</span>
                        <h2 className="text-3xl md:text-5xl">
                            Real practices. <span className="accent">Real bookings.</span>
                        </h2>
                        <p className="text-base md:text-lg mt-4">
                            Straight from the ad accounts and inboxes of clinics we work with.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Arrow direction="prev" onClick={() => scroll(-1)} disabled={atStart} />
                        <Arrow direction="next" onClick={() => scroll(1)} disabled={atEnd} />
                    </div>
                </div>
            </div>

            <div
                ref={trackRef}
                onScroll={updateEdges}
                className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 md:px-[max(1rem,calc((100vw-72rem)/2+1rem))] scroll-px-4 md:scroll-px-[max(1rem,calc((100vw-72rem)/2+1rem))]"
            >
                {results.map((result) => (
                    <figure key={result.image} className="card snap-start shrink-0 w-[80vw] sm:w-[340px] overflow-hidden flex flex-col">
                        <a
                            href={result.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block h-[380px] md:h-[420px] bg-cream p-4"
                        >
                            <img
                                src={result.image}
                                alt={result.alt}
                                className="w-full h-full object-contain rounded-lg"
                                loading="lazy"
                            />
                            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-paper/90 text-[11px] font-medium text-body shadow-soft opacity-0 group-hover:opacity-100 transition-opacity">
                                View full size
                            </span>
                        </a>
                        <figcaption className="p-5 border-t border-line">
                            <h3 className="text-xl md:text-2xl">{result.headline}</h3>
                            <p className="text-sm text-mute mt-1.5 leading-snug">{result.caption}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="flex md:hidden justify-center gap-2 mt-6 px-4">
                <Arrow direction="prev" onClick={() => scroll(-1)} disabled={atStart} />
                <Arrow direction="next" onClick={() => scroll(1)} disabled={atEnd} />
            </div>
        </section>
    );
};

export default ResultsGallery;
