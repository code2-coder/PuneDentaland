import { motion } from "motion/react";
import { Phone, MapPin, Smile, ArrowRight } from "lucide-react";
import { PHONE_NUMBER, SERVICES } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function ContactSection({ formData, handleFormChange, handleFormSubmit }) {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-sky-200" 
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16"
                >
                    <div>
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-700 text-sm font-semibold border border-sky-200 mb-6"
                            style={{ background: "#e0f2fe" }}
                        >
                            Book Appointment
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                            style={{ fontFamily: outfit }}
                        >
                            Start Your Journey To A Healthier Smile
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-slate-500 text-lg leading-relaxed mb-10"
                        >
                            Fill out the form to request an appointment. Our team will
                            contact you shortly to confirm your visit.
                        </motion.p>

                        <motion.div variants={stagger} className="flex flex-col gap-6">
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: "linear-gradient(135deg, #e0f2fe, #ecfeff)",
                                    }}
                                >
                                    <Phone className="w-6 h-6 text-sky-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">
                                        Call Us (Emergency Available)
                                    </p>
                                    <p
                                        className="font-bold text-slate-900 text-lg"
                                        style={{ fontFamily: outfit }}
                                    >
                                        +91 {PHONE_NUMBER}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: "linear-gradient(135deg, #f0fdfa, #ccfbf1)",
                                    }}
                                >
                                    <MapPin className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">
                                        Visit Clinic
                                    </p>
                                    <p
                                        className="font-bold text-slate-900 text-lg"
                                        style={{ fontFamily: outfit }}
                                    >
                                        Pune, Maharashtra
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeUp}>
                        <form
                            onSubmit={handleFormSubmit}
                            className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-xl border border-sky-50"
                        >
                            <h3
                                className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2"
                                style={{ fontFamily: outfit }}
                            >
                                <Smile className="w-6 h-6 text-sky-500" />
                                Patient Details
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-5 mb-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        required
                                        value={formData.mobile}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                                        placeholder="Enter mobile no."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Email Address (Optional)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                                    placeholder="Enter email address"
                                />
                            </div>

                            <div className="space-y-2 mb-5">
                                <label className="text-sm font-semibold text-slate-700">
                                    Select Service
                                </label>
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none"
                                >
                                    <option value="">Select Treatment Type</option>
                                    {SERVICES.map((s) => (
                                        <option key={s.title} value={s.title}>
                                            {s.title}
                                        </option>
                                    ))}
                                    <option value="General Checkup">
                                        General Dental Checkup
                                    </option>
                                </select>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-sm font-semibold text-slate-700">
                                    Message / Current Issue
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                                    placeholder="Briefly describe your problem..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-[0_20px_40px_rgba(3,105,161,0.25)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                                style={{
                                    background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                                }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">Confirm Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/></span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}
