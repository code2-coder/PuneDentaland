import { motion } from "motion/react";
import { Star, ArrowRight, Phone, CheckCircle, Activity, Users, Heart } from "lucide-react";
import { PHONE_NUMBER } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function HeroSection({ scrollTo }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #ecfeff 100%)",
                }}
            />
            <div
                className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)",
                }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-28 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={fadeUp}>
                            <span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-700 text-sm font-semibold border"
                                style={{
                                    background: "#e0f2fe",
                                    borderColor: "#bae6fd",
                                }}
                            >
                                <Star className="w-4 h-4 fill-sky-500 text-sky-500" />
                                Trusted Dental Care In Pune
                            </span>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <h1
                                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.12]"
                                style={{ fontFamily: outfit }}
                            >
                                Advanced Dental{" "}
                                <span
                                    className="block"
                                    style={{
                                        background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Treatment With A
                                </span>
                                Gentle Touch
                            </h1>
                            <p className="mt-3 text-base font-semibold text-sky-700 tracking-wide">
                                Painless & Comfortable Dental Care
                            </p>
                        </motion.div>
                        <motion.p
                            variants={fadeUp}
                            className="text-slate-500 text-lg leading-relaxed max-w-lg"
                        >
                            Experience world-class dental treatments with experienced
                            doctors, modern technology, and a clean, comfortable environment.
                        </motion.p>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="px-7 py-3.5 rounded-xl text-white font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
                                style={{
                                    background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                                    boxShadow: "0 8px 24px rgba(3, 105, 161, 0.25)",
                                }}
                            >
                                Book Appointment <ArrowRight className="w-4 h-4" />
                            </button>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="px-7 py-3.5 rounded-xl border-2 border-sky-200 text-sky-700 font-semibold hover:bg-sky-50 transition-all duration-200 flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex items-center gap-2">
                            <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <span className="text-slate-500 text-sm font-medium">
                                Patient Satisfaction — 1000+ Reviews
                            </span>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            className="grid grid-cols-2 gap-2"
                        >
                            {[
                                "Experienced Doctors",
                                "Painless Treatment",
                                "Modern Equipment",
                                "Clean Clinic Environment",
                            ].map((feat) => (
                                <div
                                    key={feat}
                                    className="flex items-center gap-2 text-slate-600 text-sm"
                                >
                                    <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                                    {feat}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.15,
                        }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-md lg:max-w-none">
                            <div
                                className="relative rounded-3xl overflow-hidden border border-sky-100"
                                style={{ boxShadow: "0 24px 64px rgba(3, 105, 161, 0.15)" }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&h=800&fit=crop&auto=format"
                                    alt="Professional dentist performing treatment at PUNE-DENTALAND"
                                    className="w-full h-[420px] lg:h-[520px] object-cover bg-sky-100"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(3,105,161,0.15), transparent 60%)",
                                    }}
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -left-8 top-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-100 flex items-center gap-3"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "#e0f2fe" }}
                                >
                                    <Activity className="w-5 h-5 text-sky-600" />
                                </div>
                                <div>
                                    <p
                                        className="font-bold text-slate-800 text-sm"
                                        style={{ fontFamily: outfit }}
                                    >
                                        Root Canal
                                    </p>
                                    <p className="text-sky-600 text-xs">Specialist</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 9, 0] }}
                                transition={{
                                    duration: 3.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6,
                                }}
                                className="absolute -right-6 top-1/3 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-100 flex items-center gap-3"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "#ecfeff" }}
                                >
                                    <Users className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                    <p
                                        className="font-bold text-slate-800 text-sm"
                                        style={{ fontFamily: outfit }}
                                    >
                                        1000+
                                    </p>
                                    <p className="text-cyan-600 text-xs">Happy Patients</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -7, 0] }}
                                transition={{
                                    duration: 4.1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute -left-4 bottom-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-sky-100 flex items-center gap-3"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "#f0fdfa" }}
                                >
                                    <Heart className="w-5 h-5 text-teal-500" />
                                </div>
                                <div>
                                    <p
                                        className="font-bold text-slate-800 text-sm"
                                        style={{ fontFamily: outfit }}
                                    >
                                        Gentle
                                    </p>
                                    <p className="text-teal-500 text-xs">Treatment</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
