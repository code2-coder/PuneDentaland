import { motion } from "motion/react";
import { fadeUp, stagger } from "@/utils/animations.js";
import { Maximize2 } from "lucide-react";

const outfit = "'Outfit', sans-serif";

const GALLERY_IMAGES = [
    {
        src: "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Modern Clinic Interior",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        src: "https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Patient Smiling",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Dental Care Setup",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg?auto=compress&cs=tinysrgb&w=800",
        alt: "Advanced Technology",
        span: "col-span-1 md:col-span-2 row-span-1"
    }
];

export default function GallerySection() {
    return (
        <section id="gallery" className="py-24 lg:py-32 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sky-800 text-sm font-bold border border-sky-100 bg-white shadow-sm mb-5 tracking-wide"
                    >
                        Clinic Tour
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight"
                        style={{ fontFamily: outfit }}
                    >
                        A Glimpse Inside Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">Facility.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Explore our state-of-the-art clinic designed specifically to provide a relaxing, premium, and stress-free environment for you and your family.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4 lg:gap-6">
                    {GALLERY_IMAGES.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden group cursor-pointer border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 border border-white/50">
                                    <Maximize2 className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-white font-bold text-lg" style={{ fontFamily: outfit }}>{img.alt}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
