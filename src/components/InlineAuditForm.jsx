import { useState } from 'react';
import { motion } from 'framer-motion';

const InlineAuditForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        clinicName: '',
        email: '',
        phone: '',
        specialty: 'Vein Clinic',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Clinic Audit Request: ${formData.specialty} - ${formData.clinicName}`;
        const body = `Name: ${formData.name}%0D%0AClinic Name: ${formData.clinicName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ASpecialty: ${formData.specialty}%0D%0A%0D%0AMessage / Goals:%0D%0A${formData.message}`;
        window.location.href = `mailto:hey@awabalishah.com?subject=${subject}&body=${body}`;
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="audit-form" className="py-16 md:py-20 px-4 bg-zinc-900/20">
            <div className="container max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/[0.08] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Visual details */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    <h2 className="text-3xl font-semibold text-white mb-2 text-center md:text-left">
                        Request a 15-Min Patient Acquisition Audit
                    </h2>
                    <p className="text-gray-400 text-sm mb-8 text-center md:text-left leading-relaxed">
                        We'll run a local search demand check in your ZIP codes, audit your key localized competitors, and show you how to capture the 20-40 appointments currently left on the table.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors text-sm"
                                    placeholder="Dr. John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Clinic Name</label>
                                <input
                                    type="text"
                                    name="clinicName"
                                    required
                                    value={formData.clinicName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors text-sm"
                                    placeholder="Vein & Vascular Center"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Business Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors text-sm"
                                    placeholder="john@clinic.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors text-sm"
                                    placeholder="(555) 000-0000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Clinic Specialization</label>
                            <div className="relative">
                                <select
                                    name="specialty"
                                    value={formData.specialty}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors appearance-none cursor-pointer"
                                    style={{ colorScheme: 'dark' }}
                                >
                                    <option value="Vein Clinic" className="bg-[#111] text-white">Vein Clinic</option>
                                    <option value="Pain Clinic" className="bg-[#111] text-white">Pain Clinic</option>
                                    <option value="Wellness Clinic" className="bg-[#111] text-white">Wellness Clinic</option>
                                    <option value="Multi-Specialty Clinic" className="bg-[#111] text-white">Multi-Specialty Clinic</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Current Challenges / Goals</label>
                            <textarea
                                name="message"
                                required
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 transition-colors resize-none text-sm"
                                placeholder="e.g., We want to increase varicose vein procedures and need to fill the schedule of 2 physicians..."
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-95 transition-opacity text-sm shadow-lg shadow-teal-500/10 cursor-pointer"
                        >
                            {isSubmitted ? "Opening Mail Client..." : "Request My Diagnostic Call"}
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default InlineAuditForm;
