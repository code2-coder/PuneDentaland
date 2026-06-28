import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function CtaSection({ scrollTo }) {
    return (
        <section
            className="py-24 lg:py-32 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #075985 0%, #0284c7 50%, #0891b2 100%)",
            }}
        >
            {/* Animated Mesh Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-white/10 blur-[120px]" 
                />
                <motion.div 
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-cyan-300/15 blur-[100px]" 
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
                        style={{ fontFamily: outfit }}
                    >
                        Ready For Your Best & Healthiest Smile?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-sky-100 text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
                    >
                        Book your appointment today and experience the difference of
                        gentle, professional, and advanced dental care at PUNE-DENTALAND.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-sky-800 font-extrabold text-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">Book Appointment <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" /></span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-sky-100/50 to-transparent z-0"></div>
                        </button>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-extrabold text-lg hover:bg-white/10 hover:border-white hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm group"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            WhatsApp Us
                        </a>
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
