import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function ServicesSection({ scrollTo }) {
    return (
        <section id="services" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-14"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-700 text-sm font-semibold border border-sky-100 mb-4"
                        style={{ background: "#f0f9ff" }}
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
                        style={{ fontFamily: outfit }}
                    >
                        Our Dental Services
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-4 text-slate-500 text-lg max-w-xl mx-auto"
                    >
                        Complete Dental Solutions For Your Healthy Smile
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SERVICES.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <motion.div
                                key={svc.title}
                                variants={fadeUp}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.2 },
                                }}
                                className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                                style={{
                                    "--hover-shadow": "0 20px 48px rgba(3,105,161,0.1)",
                                }}
                            >
                                <div
                                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                                    style={{
                                        background: `linear-gradient(90deg, ${svc.from}, ${svc.to})`,
                                    }}
                                />
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-200"
                                    style={{
                                        background: `linear-gradient(135deg, ${svc.from}, ${svc.to})`,
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3
                                    className="text-base font-bold text-slate-800 mb-2"
                                    style={{ fontFamily: outfit }}
                                >
                                    {svc.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {svc.description}
                                </p>
                                <button
                                    onClick={() => scrollTo("#contact")}
                                    className="mt-5 flex items-center gap-1 text-sky-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200"
                                >
                                    Book now <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
