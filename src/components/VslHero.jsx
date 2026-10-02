import { motion } from 'framer-motion';
import VslPlayer from './VslPlayer';
import { VSL_VIDEO_SRC, VSL_POSTER, RESUME_URL, CONTACT } from '../config/vsl';

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
                        src="/awab-ali-shah.jpg"
                        alt="Awab Ali Shah"
                        className="w-16 h-16 rounded-full object-cover border-[3px] border-paper shadow-soft"
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
                        <div className="text-xs text-mute mt-0.5">Remote · Available US &amp; UK hours</div>
                    </div>
                </motion.div>

                {/* Wraps to two lines on phones, one line from sm up */}
                <motion.span variants={itemVariants} className="eyebrow mb-6 flex-wrap justify-center text-center !rounded-2xl sm:!rounded-full py-1.5 sm:py-1 gap-x-2 gap-y-0.5">
                    <span>Media Buyer · Meta &amp; Google Ads</span>
                    <span className="hidden sm:inline" aria-hidden="true">·</span>
                    <span>GHL Automations</span>
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
                    className="text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    5+ years running Meta, Google and TikTok Ads for agencies and local businesses, with 10+ accounts and $50K+ in monthly spend at a time. I launch and scale the campaigns, then build the GoHighLevel funnels and follow-up automations that turn those clicks into booked calls.
                </motion.p>

                {/* Only shown once an intro video is set in src/config/vsl.js */}
                {VSL_VIDEO_SRC && (
                    <motion.div variants={itemVariants} className="w-full max-w-3xl mt-10 md:mt-12">
                        <VslPlayer src={VSL_VIDEO_SRC} poster={VSL_POSTER} />
                    </motion.div>
                )}

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-10">
                    <a href="#contact" className="btn-primary !px-8 !py-4 !text-base">
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
                    <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-6 !py-4 !text-base" aria-label="LinkedIn profile">
                        <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                        </svg>
                        LinkedIn
                    </a>
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
