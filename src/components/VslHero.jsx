import { motion } from 'framer-motion';
import VslPlayer from './VslPlayer';
import { VSL_VIDEO_SRC, VSL_POSTER, RESUME_URL } from '../config/vsl';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const channels = ['Meta Ads', 'Google Ads', 'GoHighLevel', 'Funnels', 'Automations'];

const VslHero = () => {
    return (
        <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-sage-100/70 blur-[120px] pointer-events-none"></div>
            <div className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blush/60 blur-[120px] pointer-events-none"></div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
                className="relative max-w-4xl mx-auto flex flex-col items-center text-center"
            >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                    <img
                        src="/Profile-picture-website.jpg"
                        alt="Awab Ali Shah"
                        className="w-12 h-12 rounded-full object-cover object-top border-2 border-paper shadow-soft"
                    />
                    <div className="text-left">
                        <div className="font-display text-sm font-semibold text-ink">Awab Ali Shah</div>
                        <div className="flex items-center gap-1.5 text-xs text-sage-700 font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-600"></span>
                            </span>
                            Open to full-time &amp; contract roles
                        </div>
                    </div>
                </motion.div>

                <motion.span variants={itemVariants} className="eyebrow mb-6">
                    Media Buyer · Meta &amp; Google Ads
                </motion.span>

                <motion.h1
                    variants={itemVariants}
                    className="text-[2.1rem] md:text-6xl lg:text-[4rem] mb-6"
                >
                    A media buyer who also builds{' '}
                    <span className="accent">what happens after the click.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-2xl"
                >
                    I plan, launch and scale Meta and Google campaigns, then build the GoHighLevel funnels and follow-up automations that turn those clicks into booked calls. Watch my short intro to see how I work.
                </motion.p>

                <motion.div variants={itemVariants} className="w-full max-w-3xl">
                    <VslPlayer src={VSL_VIDEO_SRC} poster={VSL_POSTER} />
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-10">
                    <a href="#book" className="btn-primary !px-8 !py-4 !text-base">
                        Book an Interview
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                    {RESUME_URL ? (
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-7 !py-4 !text-base">
                            Download Resume
                        </a>
                    ) : (
                        <a href="#results" className="btn-ghost !px-7 !py-4 !text-base">
                            See Campaign Results
                        </a>
                    )}
                </motion.div>

                <motion.ul variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-8">
                    {channels.map((channel) => (
                        <li key={channel} className="px-3 py-1 rounded-full border border-line bg-paper text-xs md:text-sm text-body">
                            {channel}
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
};

export default VslHero;
