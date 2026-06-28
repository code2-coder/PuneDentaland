import { Smile, Phone, MapPin, Mail, ArrowRight, Facebook, Youtube, Instagram } from "lucide-react";
import { PHONE_NUMBER, NAV_LINKS, WHATSAPP_URL } from "@/constants/index.js";

const outfit = "'Outfit', sans-serif";

export default function Footer({ scrollTo }) {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 lg:py-20 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-sky-400 to-cyan-400 shadow-md">
                                <Smile className="w-6 h-6 text-slate-900" />
                            </div>
                            <span className="font-bold text-white tracking-tight text-lg" style={{ fontFamily: outfit }}>
                                PUNE-DENTALAND
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Experience world-class dental treatments with experienced doctors, modern technology, and a clean, comfortable environment.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors shadow-sm">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6" style={{ fontFamily: outfit }}>Quick Links</h4>
                        <ul className="space-y-4">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <button 
                                        onClick={() => scrollTo(link.href)}
                                        className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6" style={{ fontFamily: outfit }}>Our Services</h4>
                        <ul className="space-y-4">
                            {['Root Canal Treatment', 'Painless Treatment', 'Wisdom Tooth Extraction', 'Dental Consultations'].map(service => (
                                <li key={service} className="text-slate-400 flex items-center gap-2 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6" style={{ fontFamily: outfit }}>Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm">Shop No 8, Ground Floor, Roshani Palace, Bajirao Rd, Shaniwar Peth, Pune</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                                <a href={`tel:${PHONE_NUMBER}`} className="text-slate-400 hover:text-white transition-colors text-sm">+91 {PHONE_NUMBER}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                                <a href="mailto:contact@punedentaland.com" className="text-slate-400 hover:text-white transition-colors text-sm">contact@punedentaland.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} PUNE-DENTALAND. All Rights Reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
