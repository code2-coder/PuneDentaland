import { motion } from "motion/react";
import { STATS, WHY_CHOOSE } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 lg:py-32 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)",
            }}
        >
            {/* Background Accents */}
            <div className="absolute top-40 left-0 w-72 h-72 bg-sky-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-[120px] opacity-70"></div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left: Premium Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] sm:h-[600px] w-full"
                    >
                        {/* Primary Image */}
                        <div
                            className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[2rem] overflow-hidden border-8 border-white z-10"
                            style={{ boxShadow: "0 30px 60px rgba(15, 23, 42, 0.08)" }}
                        >
                            <img
                                src="https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Happy patient with a perfect smile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Secondary Image */}
                        <div
                            className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden border-8 border-white z-20"
                            style={{ boxShadow: "0 30px 60px rgba(15, 23, 42, 0.12)" }}
                        >
                            <img
                                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="Modern dental equipment"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 sm:-left-10 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-white z-30 flex flex-col gap-5">
                            {STATS.slice(0, 2).map((s) => (
                                <div key={s.label} className="text-center">
                                    <p
                                        className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-500"
                                        style={{ fontFamily: outfit }}
                                    >
                                        {s.value}
                                    </p>
                                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <motion.span
                                variants={fadeUp}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-800 text-sm font-bold border border-sky-200/60 bg-sky-50 shadow-sm mb-5"
                            >
                                Why Pune Dentaland?
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15]"
                                style={{ fontFamily: outfit }}
                            >
                                Redefining Dental Care With{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                                    Compassion & Precision.
                                </span>
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="mt-6 text-slate-500 text-lg leading-relaxed font-medium"
                            >
                                We don't just treat teeth; we restore confidence. Our clinic is designed to completely eliminate dental anxiety by pairing world-class specialists with the most advanced, painless technology available today.
                            </motion.p>
                        </div>

                        <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6 mt-4">
                            {WHY_CHOOSE.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-[0_15px_30px_rgba(2,132,199,0.08)] hover:-translate-y-1 transition-all duration-300 group"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                                            }}
                                        >
                                            <Icon className="w-6 h-6 text-sky-600" />
                                        </div>
                                        <h3
                                            className="font-extrabold text-slate-800 mb-2 text-base"
                                            style={{ fontFamily: outfit }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
