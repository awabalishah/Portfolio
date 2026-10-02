import { motion } from 'framer-motion';

const mediaBuying = [
    'Campaign structure, audiences and budgets on Meta and Google',
    'Creative testing: hooks, angles and formats, killed or scaled on data',
    'Pixel, Conversions API and conversion tracking set up properly',
    'Scaling winners without tanking cost per result',
    'Clear weekly reporting on spend, cost per lead and cost per booking',
];

const supporting = [
    {
        title: 'GoHighLevel funnels',
        text: 'Landing pages, opt-in and booking funnels, surveys and calendars built inside GHL, so ad traffic lands somewhere built to convert.',
    },
    {
        title: 'Automations',
        text: 'SMS and email follow-up, missed-call text back, reminders, pipeline updates and lead reactivation, so no lead from the ads goes cold.',
    },
];

const steps = [
    { title: 'Audit & tracking', text: 'Review the account, offer and funnel. Fix tracking before spending a dollar.' },
    { title: 'Launch & test', text: 'Launch structured campaigns and test creatives and audiences quickly.' },
    { title: 'Scale what works', text: 'Move budget to winners and cut losers based on cost per booking, not clicks.' },
    { title: 'Report & improve', text: 'Weekly numbers the team can act on, and a funnel that keeps getting better.' },
];

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
};

const Expertise = () => {
    return (
        <section id="skills" className="py-20 md:py-28 px-4 bg-sand scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-2xl mb-10 md:mb-12">
                    <span className="eyebrow mb-4">What I Bring</span>
                    <h2 className="text-3xl md:text-5xl">
                        Media buying first. <span className="accent">The full funnel behind it.</span>
                    </h2>
                    <p className="text-base md:text-lg mt-4">
                        Most media buyers stop at the ad. I also build the funnel and follow-up, so your team gets booked calls instead of a spreadsheet of leads.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                    <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="card md:col-span-3 p-7 md:p-9 bg-sage-800 border-sage-800">
                        <div className="text-xs font-semibold uppercase tracking-[0.12em] text-sage-200 mb-3">Main skill</div>
                        <h3 className="text-2xl md:text-3xl !text-cream mb-5">Media buying</h3>
                        <ul className="space-y-3">
                            {mediaBuying.map((item) => (
                                <li key={item} className="flex gap-3 text-sm md:text-base text-sage-100">
                                    <svg className="w-4 h-4 mt-1 text-sage-200 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-7">
                            {['Meta Ads Manager', 'Google Ads', 'TikTok Ads', 'Conversions API', 'Google Tag Manager'].map((tool) => (
                                <span key={tool} className="px-3 py-1 rounded-full bg-sage-700 text-xs text-sage-100">{tool}</span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="md:col-span-2 grid gap-4">
                        {supporting.map((item, i) => (
                            <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.08 * (i + 1) }} className="card p-6 md:p-7">
                                <h3 className="text-xl mb-2">{item.title}</h3>
                                <p className="text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 md:mt-20">
                    <h3 className="text-2xl md:text-3xl mb-8">
                        How I run <span className="accent">an ad account</span>
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {steps.map((step, i) => (
                            <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.06 }} className="card p-6">
                                <div className="font-serif italic text-2xl text-sage-600 mb-2">0{i + 1}</div>
                                <h4 className="text-lg mb-1.5">{step.title}</h4>
                                <p className="text-sm leading-relaxed">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
