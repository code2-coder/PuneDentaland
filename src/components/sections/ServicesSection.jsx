import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function ServicesSection({ scrollTo }) {
    return (
        <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Animated background mesh */}
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent"></div>
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full blur-[120px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #bae6fd 0%, transparent 60%)" }}
            />
            
            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sky-800 text-sm font-bold border border-sky-200 bg-sky-50 shadow-[0_0_15px_rgba(2,132,199,0.1)] mb-5 tracking-wide"
                    >
                        Our Premium Treatments
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-tight"
                        style={{ fontFamily: outfit }}
                    >
                        Comprehensive Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500" style={{ animation: "gradientFlow 4s linear infinite", backgroundSize: "200% auto" }}>Excellence.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        From routine checkups to full-mouth restorations, we offer a complete suite of services designed to give you a stunning, healthy smile in absolute comfort.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {SERVICES.map((svc) => {
                        const Icon = svc.icon;
                        return (
                            <motion.div
                                key={svc.title}
                                variants={fadeUp}
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="group bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-[0_40px_80px_rgba(2,132,199,0.15)] transition-all duration-500 overflow-hidden flex flex-col relative z-10"
                            >
                                {/* Glowing Border Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>

                                {/* Image Banner */}
                                <div className="h-48 sm:h-56 relative overflow-hidden z-10">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img 
                                        src={svc.image} 
                                        alt={svc.title} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-0"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white to-transparent z-20"></div>
                                    
                                    {/* Floating Icon */}
                                    <div
                                        className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg z-30 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_15px_30px_rgba(2,132,199,0.3)] group-hover:scale-110"
                                        style={{
                                            background: `linear-gradient(135deg, ${svc.from}, ${svc.to})`,
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-7 pt-2 flex-1 flex flex-col z-10 bg-white group-hover:bg-transparent transition-colors duration-500">
                                    <h3
                                        className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors"
                                        style={{ fontFamily: outfit }}
                                    >
                                        {svc.title}
                                    </h3>
                                    <p className="text-slate-500 text-[0.95rem] font-medium leading-relaxed mb-6 flex-1 group-hover:text-slate-600 transition-colors">
                                        {svc.description}
                                    </p>
                                    <button
                                        onClick={() => scrollTo("#contact")}
                                        className="flex items-center gap-2 text-sky-600 font-bold group-hover:text-cyan-600 transition-colors w-fit relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">Explore Treatment <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            <style>{`
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
