import { Activity, Zap, Shield, Smile, Heart, DollarSign, Award, Users } from "lucide-react";

export const WHATSAPP_NUMBER = "917559356392";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "07559356392";

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Patient Feedback", href: "#testimonials" }
];

export const SERVICES = [
    {
        icon: Activity,
        title: "Precision Root Canals",
        description: "Advanced endodontic treatment utilizing 3D imaging to save your natural tooth with absolutely zero discomfort.",
        image: "https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#0ea5e9",
        to: "#06b6d4"
    },
    {
        icon: Zap,
        title: "Painless Dentistry",
        description: "Experience stress-free procedures with our state-of-the-art numbing techniques and calming clinic environment.",
        image: "https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#06b6d4",
        to: "#0d9488"
    },
    {
        icon: Shield,
        title: "Wisdom Tooth Surgery",
        description: "Safe, rapid, and painless wisdom tooth extraction performed by our elite oral and maxillofacial surgeons.",
        image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#0369a1",
        to: "#0ea5e9"
    },
    {
        icon: Smile,
        title: "Cosmetic Restoration",
        description: "Complete smile makeovers including premium veneers, professional whitening, and aesthetic composite fillings.",
        image: "https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#0891b2",
        to: "#0d9488"
    },
    {
        icon: Heart,
        title: "Preventive Care",
        description: "Personalized consultations, deep cleaning, and expert guidance to maintain a flawless, lifelong healthy smile.",
        image: "https://images.pexels.com/photos/3779708/pexels-photo-3779708.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#0369a1",
        to: "#06b6d4"
    },
    {
        icon: DollarSign,
        title: "Affordable Excellence",
        description: "World-class treatments accessible to everyone with 100% transparent pricing and absolutely no hidden fees.",
        image: "https://images.pexels.com/photos/3845556/pexels-photo-3845556.jpeg?auto=compress&cs=tinysrgb&w=600",
        from: "#0284c7",
        to: "#0891b2"
    }
];

export const TESTIMONIALS = [
    {
        name: "Rahul Sharma",
        role: "Software Engineer, Pune",
        rating: 5,
        text: "Very professional doctor. The root canal treatment was completely painless. The clinic is spotlessly clean and the staff made me feel welcome immediately."
    },
    {
        name: "Priya Patil",
        role: "Teacher, Pune",
        rating: 5,
        text: "Clean clinic and excellent guidance. Highly recommended. The doctor took time to explain everything clearly before starting treatment — I felt at ease throughout."
    },
    {
        name: "Amit Kulkarni",
        role: "Business Owner, Pune",
        rating: 5,
        text: "I was nervous about my extraction, but the doctor explained every step clearly. Great experience overall. Will absolutely return for future care."
    },
    {
        name: "Sneha Deshmukh",
        role: "Marketing Manager, Pune",
        rating: 5,
        text: "The best dental clinic in Pune. Modern equipment and genuinely painless procedures. I have already recommended PUNE-DENTALAND to all my colleagues."
    }
];

export const STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "1000+", label: "Happy Patients" },
    { value: "100%", label: "Patient Care" },
    { value: "15+", label: "Services" }
];

export const WHY_CHOOSE = [
    {
        icon: Award,
        title: "Elite Specialists",
        description: "Our doctors possess years of rigorous clinical experience and are continuously trained in global best practices."
    },
    {
        icon: Heart,
        title: "Zero-Anxiety Environment",
        description: "From our soothing waiting room to our painless techniques, your comfort is our absolute priority."
    },
    {
        icon: Shield,
        title: "100% Sterile & Hygienic",
        description: "We employ hospital-grade sterilisation protocols to guarantee a safe, infection-free treatment environment."
    },
    {
        icon: Users,
        title: "Bespoke Treatment Plans",
        description: "We don't do one-size-fits-all. Every patient receives a tailored solution designed for their unique oral structure."
    }
];
