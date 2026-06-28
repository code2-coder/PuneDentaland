import { Activity, Zap, Shield, Smile, Heart, DollarSign, Award, Users } from "lucide-react";

export const WHATSAPP_NUMBER = "917559356392";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_NUMBER = "07559356392";

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Patient Feedback", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
];

export const SERVICES = [
    {
        icon: Activity,
        title: "Root Canal Treatment",
        description: "Advanced root canal treatment designed to save your natural tooth with minimal discomfort.",
        from: "#0ea5e9",
        to: "#06b6d4"
    },
    {
        icon: Zap,
        title: "Painless Dental Treatment",
        description: "Modern techniques ensuring stress-free and comfortable dental procedures.",
        from: "#06b6d4",
        to: "#0d9488"
    },
    {
        icon: Shield,
        title: "Wisdom Tooth Extraction",
        description: "Safe and efficient wisdom tooth removal by experienced dental professionals.",
        from: "#0369a1",
        to: "#0ea5e9"
    },
    {
        icon: Smile,
        title: "Dental Issues Treatment",
        description: "Complete solutions for cavities, tooth pain, gum problems, and oral health concerns.",
        from: "#0891b2",
        to: "#0d9488"
    },
    {
        icon: Heart,
        title: "Dental Guidance",
        description: "Personalized consultation and proper guidance for maintaining your dental health.",
        from: "#0369a1",
        to: "#06b6d4"
    },
    {
        icon: DollarSign,
        title: "Affordable Treatment Cost",
        description: "Transparent pricing with quality dental care accessible for everyone.",
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
        title: "Experienced Doctors",
        description: "Professional dental expertise with years of clinical experience and continuing education."
    },
    {
        icon: Heart,
        title: "Gentle Treatment Approach",
        description: "We focus on patient comfort and use the latest techniques for painless procedures."
    },
    {
        icon: Shield,
        title: "Clean & Hygienic Clinic",
        description: "Strict sterilisation and hygiene protocols to ensure safe, infection-free dental care."
    },
    {
        icon: Users,
        title: "Patient First Approach",
        description: "We listen, understand, and provide personalised treatment plans tailored to you."
    }
];
