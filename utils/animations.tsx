'use client';

import React from 'react';
import { motion, Variants } from "framer-motion";

export const revealFromTop: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: (custom = {}) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", ...custom }
    })
};

export const revealFromBottom: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = {}) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", ...custom }
    })
};

export const revealFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom = {}) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut", ...custom }
    })
};

export const revealFromRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (custom = {}) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut", ...custom }
    })
};

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: 'top' | 'bottom' | 'left' | 'right' | 'default';
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
    amount?: number | "some" | "all";
}

export function ScrollReveal({
    children,
    variant = 'default',
    className = '',
    delay = 0,
    duration = 0.8,
    once = true,
    amount = 0.2
}: ScrollRevealProps) {

    const variantsMap = {
        top: revealFromTop,
        bottom: revealFromBottom,
        left: revealFromLeft,
        right: revealFromRight,
        default: revealFromBottom,
    };

    const selectedVariant = variantsMap[variant];

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={selectedVariant}
            custom={{ delay, duration }}
        >
            {children}
        </motion.div>
    );
}