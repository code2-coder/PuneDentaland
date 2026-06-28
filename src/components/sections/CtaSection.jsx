import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function CtaSection({ scrollTo }) {
    return (
        <section
            className="py-20 lg:py-24 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #075985 0%, #0369a1 40%, #0891b2 100%)",
            }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative max-w-3xl mx-auto px-5 text-center">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                        style={{ fontFamily: outfit }}
                    >
                        Ready For Your Best & Healthiest Smile?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto"
                    >
                        Book your appointment today and experience the difference of
                        gentle, professional, and advanced dental care at PUNE-DENTALAND.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-sky-800 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Book Appointment <ArrowRight className="w-5 h-5" />
                        </button>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
