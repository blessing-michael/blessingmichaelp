import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function GlowBlob() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSmooth = useSpring(x, { stiffness: 20, damping: 40 });
    const ySmooth = useSpring(y, { stiffness: 20, damping: 40 });

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    return (
        <motion.div
            style={{
                position: "fixed",
                width: 350,
                height: 350,
                background: "radial-gradient(circle, rgba(41,171,135,0.35), transparent 70%)",
                borderRadius: "50%",
                filter: "blur(80px)",
                pointerEvents: "none",
                zIndex: 1,
                translateX: xSmooth,
                translateY: ySmooth,
            }}
        />
    );
}
