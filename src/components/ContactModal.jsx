import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        specialty: 'Agency',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Strategy Call: ${formData.specialty} - ${formData.businessName}`;
        const body = `Name: ${formData.name}%0D%0ABusiness Name: %0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ABusiness Type: ${formData.specialty}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
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
                        className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                        exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
                        className="fixed left-1/2 top-1/2 w-full max-w-lg z-[70] p-4"
                    >
                        <div className="bg-paper border border-line rounded-3xl p-8 shadow-lift relative overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-mute hover:text-ink transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                             </button>

                            <h2 className="text-3xl mb-2">Book a 15-Min Call</h2>
                            <p className="text-body mb-6">Let's look at your funnel, CRM and ads, and find where leads are slipping through.</p>

                            <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors text-sm"
                                        placeholder="Dr. John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Business Name</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        required
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors text-sm"
                                        placeholder="Acme Marketing"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors text-sm"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors text-sm"
                                            placeholder="(555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Business Type</label>
                                    <div className="relative">
                                        <select
                                            name="specialty"
                                            value={formData.specialty}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 text-sm bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors appearance-none cursor-pointer"
                                            
                                        >
                                            <option value="Agency" className="bg-paper text-ink py-2">Agency</option>
                                            <option value="Coach / Consultant" className="bg-paper text-ink py-2">Coach / Consultant</option>
                                            <option value="Local Service Business" className="bg-paper text-ink py-2">Local Service Business</option>
                                            <option value="E-commerce" className="bg-paper text-ink py-2">E-commerce</option>
                                            <option value="SaaS" className="bg-paper text-ink py-2">SaaS</option>
                                            <option value="Other" className="bg-paper text-ink py-2">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-mute">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-mute mb-1.5">Current Challenges / Goals</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 bg-cream border border-line rounded-xl text-ink placeholder:text-mute focus:outline-none focus:border-sage-600 transition-colors resize-none text-sm"
                                        placeholder="e.g., Leads come in from our ads but nobody follows up fast enough, and we want it automated in GHL..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full !rounded-xl"
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
