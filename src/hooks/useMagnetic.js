import { useRef, useEffect } from "react";

export default function useMagnetic(strength = 0.4) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };

        const reset = () => {
            element.style.transform = `translate(0px, 0px)`;
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", reset);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", reset);
        };
    }, [strength]);

    return ref;
}
