import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagicCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const ringX = useMotionValue(-100);
    const ringY = useMotionValue(-100);

    const spring = { damping: 20, stiffness: 150 };
    const ringXSmooth = useSpring(ringX, spring);
    const ringYSmooth = useSpring(ringY, spring);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            ringX.set(e.clientX - 15);
            ringY.set(e.clientY - 15);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY, ringX, ringY]);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="cursor-dot"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="cursor-ring"
                style={{
                    translateX: ringXSmooth,
                    translateY: ringYSmooth,
                }}
            />
        </>
    );
}
