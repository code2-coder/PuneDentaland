import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants/index.js";
import { fadeUp, stagger } from "@/utils/animations.js";

const outfit = "'Outfit', sans-serif";

export default function TestimonialsSection({ testimonialIdx, setTestimonialIdx }) {
    return (
        <section id="testimonials" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sky-700 text-sm font-semibold border border-sky-100 mb-4"
                        style={{ background: "#f0f9ff" }}
                    >
                        Patient Feedback
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900"
                        style={{ fontFamily: outfit }}
                    >
                        What Our Patients Say
                    </motion.h2>
                </motion.div>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${testimonialIdx * 100}%` }}
                        transition={{
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="min-w-full px-2">
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="max-w-2xl mx-auto rounded-[2rem] p-8 lg:p-12 border border-sky-100 text-center relative overflow-hidden group shadow-sm hover:shadow-[0_20px_50px_rgba(2,132,199,0.12)] transition-shadow duration-300 bg-white"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                    <div className="flex justify-center gap-1 mb-6">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star
                                                key={j}
                                                className="w-6 h-6 fill-amber-400 text-amber-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                                        “{t.text}”
                                    </p>
                                    <div>
                                        <p
                                            className="font-bold text-slate-900 text-base"
                                            style={{ fontFamily: outfit }}
                                        >
                                            {t.name}
                                        </p>
                                        <p className="text-sky-600 text-sm mt-1">{t.role}</p>
                                    </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() =>
                            setTestimonialIdx(
                                (i) =>
                                    (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                            )
                        }
                        className="w-10 h-10 rounded-full border border-sky-200 flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setTestimonialIdx(i)}
                                className="h-2.5 rounded-full transition-all duration-300"
                                style={{
                                    width: i === testimonialIdx ? "1.5rem" : "0.625rem",
                                    background:
                                        i === testimonialIdx ? "#0369a1" : "#bae6fd",
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() =>
                            setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)
                        }
                        className="w-10 h-10 rounded-full border border-sky-200 flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
