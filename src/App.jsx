import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar.jsx";
import HeroSection from "@/components/sections/HeroSection.jsx";
import ServicesSection from "@/components/sections/ServicesSection.jsx";
import AboutSection from "@/components/sections/AboutSection.jsx";
import TestimonialsSection from "@/components/sections/TestimonialsSection.jsx";
import CtaSection from "@/components/sections/CtaSection.jsx";
import ContactSection from "@/components/sections/ContactSection.jsx";
import { TESTIMONIALS, WHATSAPP_NUMBER } from "@/constants/index.js";

const dmSans = "'DM Sans', sans-serif";

export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [testimonialIdx, setTestimonialIdx] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        service: "",
        message: "",
    });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const scrollTo = (href) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const handleFormChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const msg = encodeURIComponent(
            `Hello PUNE-DENTALAND!\n\nI'd like to book an appointment.\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    };

    return (
        <div
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
            style={{ fontFamily: dmSans }}
        >
            <Navbar
                scrolled={scrolled}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                scrollTo={scrollTo}
            />
            <HeroSection scrollTo={scrollTo} />
            <ServicesSection scrollTo={scrollTo} />
            <AboutSection />
            <TestimonialsSection
                testimonialIdx={testimonialIdx}
                setTestimonialIdx={setTestimonialIdx}
            />
            <CtaSection scrollTo={scrollTo} />
            <ContactSection
                formData={formData}
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}
