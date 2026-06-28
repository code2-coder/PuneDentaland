import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Smile, ArrowRight } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBER } from "@/constants/index.js";

const outfit = "'Outfit', sans-serif";

export default function Navbar({ scrolled, mobileOpen, setMobileOpen, scrollTo }) {
    return (
        <nav
            className={`fixed inset-x-0 z-50 transition-all duration-500 ease-out ${
                scrolled ? "top-3 sm:top-5 px-4 sm:px-6" : "top-0 py-4 px-4 sm:px-8"
            }`}
        >
            <div
                className={`mx-auto transition-all duration-500 ease-out flex items-center justify-between ${
                    scrolled
                        ? "max-w-5xl bg-white/75 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 rounded-full px-6 h-16"
                        : "max-w-7xl bg-transparent h-20"
                }`}
            >
                {/* Logo Area */}
                <button
                    onClick={() => scrollTo("#home")}
                    className="flex items-center gap-3 group relative"
                >
                    <div
                        className="w-10 h-10 rounded-[14px] flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-lg relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4), 0 4px 12px rgba(2, 132, 199, 0.2)"
                        }}
                    >
                        <Smile className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                    <span
                        className="font-extrabold text-slate-800 tracking-tight text-lg transition-colors group-hover:text-sky-700"
                        style={{ fontFamily: outfit }}
                    >
                        PUNE DENTALAND
                    </span>
                </button>
                
                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollTo(link.href)}
                            className="text-slate-600 hover:text-slate-900 font-semibold transition-all text-sm px-4 py-2 rounded-full hover:bg-slate-100/80 active:scale-95"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Action Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex items-center gap-2 text-slate-600 text-sm font-bold bg-white hover:bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-md hover:border-sky-200 active:scale-95 group"
                    >
                        <Phone className="w-4 h-4 text-sky-500 group-hover:text-sky-600" />
                        {PHONE_NUMBER}
                    </a>
                    <button
                        onClick={() => scrollTo("#contact")}
                        className="px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-[0_8px_20px_rgba(2,132,199,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(2,132,199,0.35)] active:scale-95 relative overflow-hidden group flex items-center gap-2"
                        style={{
                            background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                        }}
                    >
                        <span className="relative z-10">Book Now</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-700 bg-white/50 hover:bg-slate-100 rounded-full transition-colors border border-slate-200/50 backdrop-blur-sm"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden absolute top-full left-4 right-4 mt-3"
                    >
                        <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-1 ring-1 ring-slate-900/5">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-left text-slate-700 font-bold py-3.5 px-5 rounded-2xl hover:bg-slate-50 transition-all active:bg-slate-100 flex items-center justify-between group"
                                >
                                    {link.label}
                                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors" />
                                </button>
                            ))}
                            
                            <div className="h-px w-full bg-slate-100 my-3"></div>
                            
                            <div className="flex flex-col gap-3">
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="flex items-center justify-center gap-2 py-3.5 w-full rounded-2xl bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200/60 hover:bg-slate-100 transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-sky-500" />
                                    Call {PHONE_NUMBER}
                                </a>
                                <button
                                    onClick={() => scrollTo("#contact")}
                                    className="w-full py-4 rounded-2xl text-white font-bold text-sm shadow-[0_8px_20px_rgba(2,132,199,0.25)] flex items-center justify-center gap-2"
                                    style={{
                                        background: "linear-gradient(135deg, #0284c7, #06b6d4)",
                                    }}
                                >
                                    Book Appointment Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
