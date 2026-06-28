export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
    }
};

export const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

export const floatAnimation = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const glowPulse = {
    animate: {
        boxShadow: [
            "0 0 0px 0px rgba(14, 165, 233, 0)",
            "0 0 20px 5px rgba(14, 165, 233, 0.15)",
            "0 0 0px 0px rgba(14, 165, 233, 0)"
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
