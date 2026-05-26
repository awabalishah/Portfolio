import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        clinicName: '',
        email: '',
        phone: '',
        specialty: 'Vein Clinic',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Clinic Strategy Call: ${formData.specialty} - ${formData.clinicName}`;
        const body = `Name: ${formData.name}%0D%0AClinic Name: ${formData.clinicName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ASpecialty: ${formData.specialty}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:hey@awabalishah.com?subject=${subject}&body=${body}`;
        onClose();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                        className="fixed left-1/2 top-1/2 w-full max-w-lg z-[70] p-4"
                    >
                        <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                             </button>

                            <h2 className="text-3xl font-medium text-white mb-2">Book a 15-Min Call</h2>
                            <p className="text-gray-400 mb-6">Let's audit your current patient acquisition and show you how to capture the 20-40 appointments left on the table.</p>

                            <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
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

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Email</label>
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
                                            <option value="Vein Clinic" className="bg-[#1a1a1a] text-white py-2">Vein Clinic</option>
                                            <option value="Pain Clinic" className="bg-[#1a1a1a] text-white py-2">Pain Clinic</option>
                                            <option value="Wellness Clinic" className="bg-[#1a1a1a] text-white py-2">Wellness Clinic</option>
                                            <option value="Multi-Specialty Clinic" className="bg-[#1a1a1a] text-white py-2">Multi-Specialty Clinic</option>
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
                                        placeholder="e.g., We have open calendar slots and want to fill them with vein/pain patients through targeted ads..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-teal-500/20 cursor-pointer"
                                >
                                    Schedule My Diagnostic Call
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ContactModal;
