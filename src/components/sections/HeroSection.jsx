import { motion } from "motion/react";
import { Star, ArrowRight, Phone, CheckCircle, Activity, Users, ShieldCheck } from "lucide-react";
import { PHONE_NUMBER } from "@/constants/index.js";
import { fadeUp, stagger, floatAnimation, glowPulse } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function HeroSection({ scrollTo }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            <div
                className="absolute inset-0 bg-slate-50"
                style={{
                    background:
                        "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #ecfeff 100%)",
                }}
            />
            
            {/* Animated Background Orbs */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-40 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #7dd3fc 0%, transparent 70%)",
                }}
            />
            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-[5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-7 relative z-20"
                    >
                        <motion.div variants={fadeUp}>
                            <motion.span
                                variants={glowPulse}
                                animate="animate"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-800 text-sm font-bold border border-sky-200/60 shadow-sm relative overflow-hidden group cursor-default"
                                style={{
                                    background: "rgba(224, 242, 254, 0.7)",
                                    backdropFilter: "blur(8px)"
                                }}
                            >
                                <ShieldCheck className="w-4 h-4 text-sky-600" />
                                Pune's Premier Dental Destination
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                            </motion.span>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <h1
                                className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-slate-900 leading-[1.1] tracking-tight"
                                style={{ fontFamily: outfit }}
                            >
                                Experience Dentistry {" "}
                                <span
                                    className="block mt-2"
                                    style={{
                                        background: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #0ea5e9 100%)",
                                        backgroundSize: "200% auto",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        animation: "gradientFlow 4s linear infinite"
                                    }}
                                >
                                    Beyond Expectations.
                                </span>
                            </h1>
                            <p className="mt-5 text-lg font-medium text-slate-600 leading-relaxed max-w-lg">
                                We combine state-of-the-art technology with an uncompromising commitment to your comfort. Achieve a flawless smile in a completely pain-free, luxurious environment.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="px-8 py-4 rounded-full text-white font-bold text-base shadow-[0_8px_24px_rgba(2,132,199,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(2,132,199,0.5)] active:scale-95 flex items-center gap-2 group relative overflow-hidden"
                                style={{
                                    background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2">Book Your Visit <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                            </button>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="px-8 py-4 rounded-full border-2 border-slate-200/80 text-slate-700 bg-white font-bold text-base shadow-sm hover:border-sky-300 hover:bg-sky-50 transition-all duration-300 active:scale-95 flex items-center gap-2 group hover:shadow-[0_8px_20px_rgba(14,165,233,0.15)] relative overflow-hidden"
                            >
                                <Phone className="w-5 h-5 text-sky-500 group-hover:text-sky-600 transition-colors" />
                                Emergency Call
                            </a>
                        </motion.div>
                        
                        <div className="h-px w-full max-w-md bg-gradient-to-r from-slate-200 to-transparent mt-2"></div>
                        
                        <motion.div variants={fadeUp} className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[
                                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
                                    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
                                    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
                                    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
                                ].map((img, i) => (
                                    <motion.img 
                                        whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
                                        key={i} 
                                        src={img} 
                                        alt="Patient" 
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm cursor-pointer relative" 
                                    />
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="font-bold text-slate-800 ml-1">5.0</span>
                                </div>
                                <span className="text-slate-500 text-sm font-medium">
                                    Trusted by 2,000+ happy patients
                                </span>
                            </div>
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
                        className="relative flex justify-center lg:justify-end z-10"
                    >
                        <div className="relative w-full max-w-md lg:max-w-[500px]">
                            {/* Main Hero Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative rounded-[2rem] overflow-hidden border-[6px] border-white/80 z-10"
                                style={{ boxShadow: "0 30px 60px rgba(2, 132, 199, 0.15)" }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Modern dental clinic interior at Pune Dentaland"
                                    className="w-full h-[450px] lg:h-[600px] object-cover"
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(2,132,199,0.2), transparent 50%)",
                                    }}
                                />
                            </motion.div>

                            {/* Floating Badge 1 */}
                            <motion.div
                                variants={floatAnimation}
                                animate="animate"
                                className="absolute -left-6 lg:-left-12 top-20 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white flex items-center gap-4 z-20 cursor-default hover:scale-105 transition-transform"
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100 opacity-100 group-hover:opacity-0 transition-opacity"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <Activity className="w-6 h-6 text-sky-600 group-hover:text-white relative z-10 transition-colors" />
                                </div>
                                <div>
                                    <p
                                        className="font-extrabold text-slate-800 text-base"
                                        style={{ fontFamily: outfit }}
                                    >
                                        Painless RCT
                                    </p>
                                    <p className="text-sky-600 text-sm font-medium">Advanced Care</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute -right-4 lg:-right-8 bottom-24 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-white flex items-center gap-4 z-20 cursor-default hover:scale-105 transition-transform"
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-100 opacity-100 group-hover:opacity-0 transition-opacity"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CheckCircle className="w-6 h-6 text-emerald-600 group-hover:text-white relative z-10 transition-colors" />
                                </div>
                                <div>
                                    <p
                                        className="font-extrabold text-slate-800 text-base"
                                        style={{ fontFamily: outfit }}
                                    >
                                        100% Sterile
                                    </p>
                                    <p className="text-emerald-600 text-sm font-medium">ISO Certified</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
