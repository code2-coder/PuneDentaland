import { motion } from "motion/react";
import { STATS, WHY_CHOOSE } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-20 lg:py-28"
            style={{
                background:
                    "linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #ecfeff 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden border border-sky-100 bg-sky-100"
                            style={{ boxShadow: "0 20px 60px rgba(3,105,161,0.12)" }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=640&h=700&fit=crop&auto=format"
                                alt="State-of-the-art dental equipment at PUNE-DENTALAND clinic"
                                className="w-full h-[450px] object-cover"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(3,105,161,0.25), transparent 55%)",
                                }}
                            />
                        </div>
                        <div className="absolute -right-4 sm:-right-8 bottom-8 bg-white rounded-2xl p-5 shadow-xl border border-sky-100">
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                {STATS.map((s) => (
                                    <div key={s.label} className="text-center">
                                        <p
                                            className="text-2xl font-bold text-sky-700"
                                            style={{ fontFamily: outfit }}
                                        >
                                            {s.value}
                                        </p>
                                        <p className="text-slate-500 text-xs mt-0.5 whitespace-nowrap">
                                            {s.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <motion.span
                            variants={fadeUp}
                            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full text-sky-700 text-sm font-semibold border border-sky-200"
                            style={{ background: "#e0f2fe" }}
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-slate-900 leading-tight"
                            style={{ fontFamily: outfit }}
                        >
                            Why Choose{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                PUNE-DENTALAND?
                            </span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-slate-500 text-base leading-relaxed"
                        >
                            At PUNE-DENTALAND, we believe dental treatment should be
                            comfortable, safe, and stress-free. Our clinic focuses on
                            advanced technology, experienced doctors, and patient-friendly
                            care.
                        </motion.p>
                        <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
                            {WHY_CHOOSE.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-200"
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #e0f2fe, #ecfeff)",
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-sky-600" />
                                        </div>
                                        <h3
                                            className="font-bold text-slate-800 mb-1.5 text-sm"
                                            style={{ fontFamily: outfit }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
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
