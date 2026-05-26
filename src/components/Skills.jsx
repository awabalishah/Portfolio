import { motion } from 'framer-motion';

const skillGroups = [
    {
        category: "Ad Platforms",
        skills: ["Google Search Ads", "Meta Ads Manager", "Google Local Service Ads", "YouTube Video Ads", "ZIP-Code Targeting"]
    },
    {
        category: "Clinic CRMs & Booking",
        skills: ["GoHighLevel", "CallRail Attribution", "ActiveCampaign", "EHR Syncing", "SMS Intake Automations"]
    },
    {
        category: "Funnels & Compliance",
        skills: ["HIPAA-Compliant Forms", "Webflow Clinic Sites", "Conversion-Focused Funnels", "Lead Vetting Flows", "A/B Testing"]
    },
    {
        category: "Local Map Pack & SEO",
        skills: ["Google Business Optimization", "Patient Review loops", "Citation Building", "SEMrush", "Medical Content Writing"]
    },
    {
        category: "Growth & Targeting Strategy",
        skills: ["Patient Psychology Copy", "Vein Treatment Targeting", "Chronic Pain Targeting", "Competitor Geofencing"]
    },
    {
        category: "Development Stack",
        skills: ["React", "Node.js", "Tailwind CSS", "WordPress Medical Themes", "Custom API Syncs"]
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
                        className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4"
                    >
                        Clinic Growth Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl font-medium"
                    >
                        Patient Acquisition Stack
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="text-gray-500 text-sm mt-3"
                    >
                        Integrations and systems used to fill your clinic's appointment calendar
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
                                <span className="text-xs font-semibold tracking-widest uppercase text-teal-400/70">
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
                                        className="px-4 py-2 bg-zinc-800/80 text-white rounded-full text-sm font-medium hover:bg-zinc-700 hover:text-teal-300 transition-all cursor-default border border-white/[0.05] hover:border-teal-500/20"
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
