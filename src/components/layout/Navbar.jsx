import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Smile } from "lucide-react";
import { NAV_LINKS, PHONE_NUMBER } from "@/constants/index.js";

const outfit = "'Outfit', sans-serif";

export default function Navbar({ scrolled, mobileOpen, setMobileOpen, scrollTo }) {
    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-sky-100/70"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <button
                        onClick={() => scrollTo("#home")}
                        className="flex items-center gap-2.5"
                    >
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                            style={{
                                background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                            }}
                        >
                            <Smile className="w-5 h-5 text-white" />
                        </div>
                        <span
                            className="font-bold text-sky-900 tracking-tight text-[1.05rem]"
                            style={{ fontFamily: outfit }}
                        >
                            PUNE-DENTALAND
                        </span>
                    </button>
                    <div className="hidden lg:flex items-center gap-7">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className="text-slate-600 hover:text-sky-700 font-medium transition-colors text-sm"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="flex items-center gap-1.5 text-sky-700 text-sm font-medium hover:text-sky-900 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            {PHONE_NUMBER}
                        </a>
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-200"
                            style={{
                                background: "linear-gradient(135deg, #0369a1, #06b6d4)",
                            }}
                        >
                            Book Appointment
                        </button>
                    </div>
                    <button
                        className="lg:hidden p-2 text-slate-700"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-white/96 backdrop-blur-md border-b border-sky-100 overflow-hidden"
                    >
                        <div className="px-6 py-5 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-left text-slate-700 font-medium py-1 border-b border-slate-100 last:border-0"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo("#contact")}
                                className="mt-2 w-full py-3 rounded-xl text-white font-semibold text-sm"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #0369a1, #06b6d4)",
                                }}
                            >
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
