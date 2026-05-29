import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoTestimonial = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showPlayOverlay, setShowPlayOverlay] = useState(false);

    useEffect(() => {
        // Attempt to autoplay
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        console.log("Autoplay was prevented, starting paused:", error);
                        setIsPlaying(false);
                    });
            }
        }
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.pause();
            setIsPlaying(false);
            // Highlight play button briefly
            setShowPlayOverlay(true);
            setTimeout(() => setShowPlayOverlay(false), 800);
        } else {
            video.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => console.error("Error playing video:", err));
        }
    };

    const stopVideo = (e) => {
        e.stopPropagation(); // Prevent triggering togglePlay from parent container
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        video.currentTime = 0;
        setIsPlaying(false);
        setProgress(0);
    };

    const toggleMute = (e) => {
        if (e) e.stopPropagation(); // Prevent triggering togglePlay
        const video = videoRef.current;
        if (!video) return;

        video.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;
        setCurrentTime(video.currentTime);
        if (video.duration) {
            setProgress((video.currentTime / video.duration) * 100);
        }
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) {
            setDuration(video.duration);
        }
    };

    const handleProgressChange = (e) => {
        const video = videoRef.current;
        if (!video || !duration) return;

        const newProgress = parseFloat(e.target.value);
        const newTime = (newProgress / 100) * duration;
        video.currentTime = newTime;
        setCurrentTime(newTime);
        setProgress(newProgress);
    };

    const formatTime = (timeInSeconds) => {
        if (isNaN(timeInSeconds)) return '0:00';
        const mins = Math.floor(timeInSeconds / 60);
        const secs = Math.floor(timeInSeconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <section id="testimonial" className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505] border-t border-b border-white/[0.03] overflow-hidden">
            <div className="container max-w-5xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
                        Client Proof
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                        Hear from our partners
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg mx-auto">
                        Watch how automation and target marketing helped scale patient volume, reduce lost bookings, and streamline operations.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* Left Column: Client Details */}
                    <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/20 p-6 md:p-8 rounded-3xl border border-white/[0.05] relative overflow-hidden group">
                            
                            {/* Decorative Glow */}
                            <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-500"></div>
                            
                            {/* Quote Icon */}
                            <div className="text-teal-500/20 text-6xl font-serif absolute top-2 right-6 select-none pointer-events-none">“</div>
                            
                            {/* Doctor Avatar / Details Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/25 shrink-0">
                                    {/* Premium Stethoscope/Medical Icon in SVG */}
                                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4.8 2.3c.6 0 1.2.3 1.5.8.6.9 1.8 1.4 3 1.4h5.4c1.2 0 2.4-.5 3-1.4.3-.5.9-.8 1.5-.8h0c1 0 1.8.8 1.8 1.8V7c0 5.5-4.5 10-10 10S1 12.5 1 7V4.1c0-1 .8-1.8 1.8-1.8h2z" />
                                        <path d="M12 17v4" />
                                        <circle cx="12" cy="21" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white leading-tight">Clinic Partner Review</h4>
                                    <p className="text-xs text-teal-400 font-medium">Verified Medical Practice Founder</p>
                                </div>
                            </div>

                            {/* Quote Body */}
                            <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6 relative z-10">
                                "The speed-to-lead system Awab implemented caught leads that used to sit in our inbox overnight. Booking them within two minutes completely solved our scheduling leakage."
                            </blockquote>

                            <hr className="border-white/[0.05] my-5" />

                            {/* Metrics Breakdown */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-white/[0.02] border border-white/[0.03] rounded-2xl">
                                    <div className="text-xl md:text-2xl font-bold text-white">+40+</div>
                                    <div className="text-xs text-gray-500 mt-1">Appointments Leak Solved</div>
                                </div>
                                <div className="p-3 bg-white/[0.02] border border-white/[0.03] rounded-2xl">
                                    <div className="text-xl md:text-2xl font-bold text-teal-400">3.8x</div>
                                    <div className="text-xs text-gray-500 mt-1">Avg. ROAS Achieved</div>
                                </div>
                            </div>
                        </div>

                        {/* Integration Assurance */}
                        <div className="flex items-center gap-3 px-6 py-4 bg-teal-500/5 rounded-2xl border border-teal-500/10">
                            <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                            <p className="text-xs text-teal-300 font-medium tracking-wide uppercase">
                                HIPAA Compliant video delivery & secure patient routing
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Custom Video Player */}
                    <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
                        <div className="w-full max-w-xl bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-3xl p-3 border border-white/[0.06] shadow-[0_0_50px_rgba(20,184,166,0.05)] hover:shadow-[0_0_50px_rgba(20,184,166,0.1)] transition-all duration-500 relative group">
                            
                            {/* Inner player container */}
                            <div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-black/90 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
                                <video
                                    ref={videoRef}
                                    src="/VID-20260530-WA0001.mp4"
                                    className="w-full h-full object-contain"
                                    loop
                                    playsInline
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedMetadata={handleLoadedMetadata}
                                />

                                {/* Play Overlay Feedback */}
                                <AnimatePresence>
                                    {showPlayOverlay && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.6 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.2 }}
                                            className="absolute bg-teal-500/80 text-white p-5 rounded-full z-20 pointer-events-none"
                                        >
                                            {isPlaying ? (
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                                </svg>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Play indicator overlay when paused */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-colors group-hover:bg-black/50">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white shadow-xl shadow-teal-500/30"
                                        >
                                            <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}

                                {/* Pulsing sound toggle prompt on top when muted and playing */}
                                {isPlaying && isMuted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
                                        onClick={(e) => e.stopPropagation()} // Stop togglePlay
                                    >
                                        <button
                                            onClick={toggleMute}
                                            className="flex items-center gap-2 px-4 py-2 bg-black/80 hover:bg-black/90 border border-teal-500/30 text-teal-400 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/40 animate-pulse cursor-pointer whitespace-nowrap transition-colors"
                                        >
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                                            </span>
                                            🔈 Video Muted - Click to Hear Audio
                                        </button>
                                    </motion.div>
                                )}

                                {/* Custom Glassmorphic Controls Bar */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-8 flex flex-col gap-3 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10 pointer-events-auto"
                                    onClick={(e) => e.stopPropagation()} // Stop clicking controls from pausing
                                >
                                    {/* Timeline Slider */}
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={progress}
                                            onChange={handleProgressChange}
                                            className="w-full h-1 bg-white/20 hover:h-1.5 rounded-lg appearance-none cursor-pointer accent-teal-400 transition-all focus:outline-none"
                                            style={{
                                                background: `linear-gradient(to right, #14b8a6 ${progress}%, rgba(255,255,255,0.2) ${progress}%)`
                                            }}
                                        />
                                    </div>

                                    {/* Control Buttons */}
                                    <div className="flex items-center justify-between text-white text-xs">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            {/* Play/Pause */}
                                            <button 
                                                onClick={togglePlay}
                                                className="p-1 text-gray-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
                                                title={isPlaying ? "Pause" : "Play"}
                                            >
                                                {isPlaying ? (
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                )}
                                            </button>

                                            {/* Stop/Restart */}
                                            <button 
                                                onClick={stopVideo}
                                                className="p-1 text-gray-300 hover:text-red-400 transition-colors cursor-pointer focus:outline-none"
                                                title="Stop & Reset"
                                            >
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M6 6h12v12H6z" />
                                                </svg>
                                            </button>

                                            {/* Time Display */}
                                            <span className="font-mono text-gray-400 select-none">
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </span>
                                        </div>

                                        {/* Audio Mute/Unmute */}
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={toggleMute}
                                                className="p-1 text-gray-300 hover:text-teal-400 transition-colors cursor-pointer focus:outline-none"
                                                title={isMuted ? "Unmute" : "Mute"}
                                            >
                                                {isMuted ? (
                                                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="none" />
                                                        <line x1="23" y1="9" x2="17" y2="15" />
                                                        <line x1="17" y1="9" x2="23" y2="15" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="none" />
                                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default VideoTestimonial;
