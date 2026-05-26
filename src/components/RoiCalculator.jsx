import { useState } from 'react';
import { motion } from 'framer-motion';

const RoiCalculator = () => {
    const [patientValue, setPatientValue] = useState(1500); // default patient LTV
    const [leakedAppointments, setLeakedAppointments] = useState(30); // default appointments left on table

    const monthlyOpportunity = patientValue * leakedAppointments;
    const annualOpportunity = monthlyOpportunity * 12;

    return (
        <section id="calculator" className="py-16 md:py-20 px-4 bg-zinc-950/40 border-t border-b border-white/[0.03]">
            <div className="container max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full mb-4">
                        Revenue Leak Audit
                    </span>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        Calculate your clinic's hidden growth opportunity
                    </h2>
                    <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
                        See how much annual revenue your practice is leaving on the table by missing out on local vein and pain appointments.
                    </p>
                </div>

                {/* Calculator Grid */}
                <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-6 md:p-10 rounded-3xl border border-white/[0.07] relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-500/[0.01] pointer-events-none"></div>

                    {/* Inputs */}
                    <div className="space-y-8 relative z-10">
                        {/* Slide 1: Patient Lifetime Value */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                    Average Patient Value
                                </label>
                                <span className="text-lg font-bold text-teal-400 font-mono">
                                    ${patientValue.toLocaleString()}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="10000"
                                step="500"
                                value={patientValue}
                                onChange={(e) => setPatientValue(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                            />
                            <div className="flex justify-between text-[11px] text-gray-500 mt-1.5 font-medium">
                                <span>$500</span>
                                <span>$5,000 (Specialized Vein/Pain)</span>
                                <span>$10,000+</span>
                            </div>
                        </div>

                        {/* Slide 2: Leaked Appointments */}
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                                    Monthly Appointment Leaks
                                </label>
                                <span className="text-lg font-bold text-teal-400 font-mono">
                                    {leakedAppointments} /mo
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10"
                                max="50"
                                step="5"
                                value={leakedAppointments}
                                onChange={(e) => setLeakedAppointments(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
                            />
                            <div className="flex justify-between text-[11px] text-gray-500 mt-1.5 font-medium">
                                <span>10 leaks</span>
                                <span>30 (Average US Clinic)</span>
                                <span>50+ leaks</span>
                            </div>
                        </div>
                    </div>

                    {/* Outputs / Calculations */}
                    <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-zinc-950/50 rounded-2xl border border-white/[0.05] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none"></div>

                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                            Estimated Monthly Loss
                        </span>
                        <div className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 font-mono">
                            ${monthlyOpportunity.toLocaleString()}
                        </div>

                        <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-1.5">
                            Annual Revenue Leakage
                        </span>
                        <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-400 bg-clip-text mb-6 font-mono tracking-tight animate-pulse">
                            ${annualOpportunity.toLocaleString()}
                        </div>

                        <p className="text-xs text-gray-500 max-w-[260px] leading-relaxed mb-6">
                            Based on local searches in your ZIP codes. Let's build a HIPAA-compliant funnel to recapture this leak.
                        </p>

                        <a href="#audit-form" className="w-full">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 text-sm cursor-pointer"
                            >
                                Recover My Lost Revenue
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoiCalculator;
