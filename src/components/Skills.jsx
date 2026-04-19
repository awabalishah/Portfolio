import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: "Advertising",
        skills: ["Google Ads", "Meta Ads", "TikTok Ads", "LinkedIn Ads", "YouTube Ads"]
    },
    {
        category: "Email & Automation",
        skills: ["Klaviyo", "Mailchimp", "HubSpot", "ActiveCampaign", "Drip"]
    },
    {
        category: "Funnels & CRO",
        skills: ["ClickFunnels", "GoHighLevel", "Webflow", "Landing Pages", "A/B Testing"]
    },
    {
        category: "SEO & Analytics",
        skills: ["Technical SEO", "Google Analytics", "SEMrush", "Ahrefs", "Content Marketing"]
    },
    {
        category: "Growth & Strategy",
        skills: ["Copywriting", "Lead Generation", "Marketing Strategy", "Funnel Architecture", "E-commerce"]
    },
    {
        category: "Development",
        skills: ["Full Stack Dev", "React", "Node.js", "Shopify", "WordPress"]
    }
];

const Skills = () => {
    return (
        <section className="section bg-zinc-900/20">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">

                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4"
                    >
                        Tech Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl font-medium"
                    >
                        Marketing Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-gray-500 text-sm mt-3"
                    >
                        Tools & platforms I use to drive results
                    </motion.p>
                </div>

                <div className="space-y-8">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: groupIndex * 0.07 }}
                            className="flex flex-col sm:flex-row sm:items-start gap-4"
                        >
                            <div className="sm:w-40 shrink-0 pt-0.5">
                                <span className="text-xs font-semibold tracking-widest uppercase text-orange-400/70">
                                    {group.category}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.35,
                                            delay: groupIndex * 0.06 + skillIndex * 0.04,
                                        }}
                                        whileHover={{ scale: 1.05, y: -1 }}
                                        className="px-4 py-2 bg-zinc-800/80 text-white rounded-full text-sm font-medium hover:bg-zinc-700 hover:text-orange-300 transition-all cursor-default border border-white/[0.05] hover:border-orange-500/20"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
