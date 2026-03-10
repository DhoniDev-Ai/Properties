"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,           // Drag / deceleration feel — higher = more floaty
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo-out — feels silky
            smoothWheel: true,
            wheelMultiplier: 0.9,    // Slightly dampened for that premium, restrained feel
            touchMultiplier: 1.5,    // Natural on mobile
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    // This component renders nothing — it only runs the side effect
    return null;
}
