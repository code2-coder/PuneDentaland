import { motion } from "motion/react";
import { WHATSAPP_URL } from "@/constants/index.js";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.939 6.937 0 3.825-3.114 6.939-6.939 6.943z" />
    </svg>
);

export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center justify-end">
            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-3.5 sm:p-4 rounded-full shadow-[0_12px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.5)] transition-shadow duration-300 cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                {/* Outer pulsing rings for attention */}
                <div className="absolute inset-0 rounded-full border border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60"></div>
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#25D366] animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30 delay-150"></div>

                {/* Animated Icon */}
                <div className="relative z-10 flex items-center justify-center drop-shadow-md">
                    <motion.div
                        variants={{
                            hover: { 
                                rotate: [0, -15, 15, -15, 15, 0], 
                                transition: { duration: 0.5, ease: "easeInOut" } 
                            }
                        }}
                    >
                        <WhatsAppIcon />
                    </motion.div>
                </div>

                {/* Expanding Text on Hover */}
                <motion.div
                    className="overflow-hidden whitespace-nowrap hidden sm:block"
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    variants={{
                        hover: { width: "auto", opacity: 1, marginLeft: 12 }
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="font-extrabold text-[0.95rem] tracking-wide pr-3 drop-shadow-sm">Chat with us</span>
                </motion.div>
            </motion.a>
        </div>
    );
}
