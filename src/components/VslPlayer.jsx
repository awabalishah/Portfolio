import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Turns a share link into an embeddable player URL. Returns null for direct video files.
const toEmbedUrl = (src) => {
    if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(src)) return null;

    const youtube = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?rel=0&modestbranding=1&playsinline=1`;

    const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?title=0&byline=0&portrait=0`;

    const wistia = src.match(/wistia\.(?:com|net)\/(?:medias|embed\/iframe)\/(\w+)/);
    if (wistia) return `https://fast.wistia.net/embed/iframe/${wistia[1]}?videoFoam=true`;

    const loom = src.match(/loom\.com\/(?:share|embed)\/(\w+)/);
    if (loom) return `https://www.loom.com/embed/${loom[1]}?hide_owner=true&hide_share=true`;

    return src;
};

const Frame = ({ children }) => (
    <div className="w-full bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-3xl p-2 md:p-3 border border-white/[0.08] shadow-[0_0_80px_rgba(20,184,166,0.12)]">
        <div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-black">
            {children}
        </div>
    </div>
);

const Placeholder = () => (
    <Frame>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.15),transparent_70%)]">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-xl shadow-teal-500/30">
                <svg className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
            <p className="text-sm text-gray-400">Video coming soon</p>
        </div>
    </Frame>
);

const EmbedPlayer = ({ src }) => (
    <Frame>
        <iframe
            src={src}
            title="Video: how I fill clinic calendars"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
        />
    </Frame>
);

// MP4 player: starts muted on loop (browsers block autoplay with sound), then
// restarts from 0:00 with sound on the first tap.
const FilePlayer = ({ src, poster, onWatchTime }) => {
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.muted = true;
        video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, []);

    const startWithSound = () => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = 0;
        video.muted = false;
        video.loop = false;
        video.play().then(() => setIsPlaying(true)).catch(() => {});
        setStarted(true);
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (!started) return startWithSound();
        if (video.paused) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || !started) return;
        if (video.duration) setProgress((video.currentTime / video.duration) * 100);
        onWatchTime?.(video.currentTime);
    };

    return (
        <Frame>
            <video
                ref={videoRef}
                src={src}
                poster={poster || undefined}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                loop
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
            />

            {!started && (
                <button
                    onClick={startWithSound}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/45 hover:bg-black/35 transition-colors cursor-pointer"
                >
                    <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-xl shadow-teal-500/40"
                    >
                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </motion.div>
                    <span className="px-4 py-2 rounded-full bg-black/80 border border-teal-500/30 text-teal-300 text-xs md:text-sm font-semibold">
                        Your video is playing. Tap to hear it
                    </span>
                </button>
            )}

            {started && !isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                    aria-label="Play"
                >
                    <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-xl shadow-teal-500/30">
                        <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </button>
            )}

            {/* Progress only, no scrubbing, so viewers watch the pitch in order */}
            {started && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 pointer-events-none">
                    <div className="h-full bg-teal-400 transition-[width] duration-300" style={{ width: `${progress}%` }} />
                </div>
            )}
        </Frame>
    );
};

const VslPlayer = ({ src, poster, onWatchTime }) => {
    if (!src) return <Placeholder />;
    const embedUrl = toEmbedUrl(src);
    if (embedUrl) return <EmbedPlayer src={embedUrl} />;
    return <FilePlayer src={src} poster={poster} onWatchTime={onWatchTime} />;
};

export const isFileVideo = (src) => Boolean(src) && toEmbedUrl(src) === null;

export default VslPlayer;
