// src/TechSection.js
// import React from "react";
// import "./TechSection.css";

// const technologies = [
//     { name: "HTML", icon: "/image/html.svg", color: "#E44D26" },
//     { name: "CSS", icon: "/image/css.svg", color: "#264DE4" },
//     { name: "JavaScript", icon: "/image/javascript.svg", color: "#F7DF1E" },
//     { name: "React", icon: "/image/react.svg", color: "#61DAFB" },
//     { name: "Node.js", icon: "/image/node.svg", color: "#68A063" },

// ];

// export default function TechSection() {
//     return (
//         <div className="tech-section">
//             <div className="tech-slider">
//                 {}
//                 {[...technologies, ...technologies].map((tech, index) => (
//                     <div className="tech-item" key={index}>
//                         <img src={tech.icon} alt={tech.name} />
//                         <span style={{ color: tech.color }}>{tech.name}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// src/components/TechSlider.jsx
import React, { useRef, useEffect, useState } from "react";
// import "./TechSlider.css";

const skillsBase = [
    { name: "HTML", icon: "/image/html5.svg", color: "#E44D26" },
    { name: "CSS", icon: "/image/css.svg", color: "#264DE4" },
    { name: "JavaScript", icon: "/image/javascript.svg", color: "#F7DF1E" },
    { name: "React", icon: "/image/react.svg", color: "#61DAFB" },
    { name: "HTML", icon: "/image/html5.svg", color: "#E44D26" },
    { name: "CSS", icon: "/image/css.svg", color: "#264DE4" },
    { name: "JavaScript", icon: "/image/javascript.svg", color: "#F7DF1E" },
    { name: "React", icon: "/image/react.svg", color: "#61DAFB" },
    { name: "HTML", icon: "/image/html5.svg", color: "#E44D26" },
    { name: "CSS", icon: "/image/css.svg", color: "#264DE4" },
    { name: "JavaScript", icon: "/image/javascript.svg", color: "#F7DF1E" },
    { name: "React", icon: "/image/react.svg", color: "#61DAFB" },
    // { name: "Node.js", icon: "/image/node.svg", color: "#68A063" },
    // { name: "TypeScript", icon: "/image/typescript.svg", color: "#3178C6" },
    // add more...
];

export default function TechSlider({ speed = 0.06 /* px per ms */ }) {
    const trackRef = useRef(null);
    const frameRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [singleWidth, setSingleWidth] = useState(0);

    // duplicate array for seamless loop
    const skills = [...skillsBase, ...skillsBase];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Measure width of one set (half of full scrollWidth)
        const measure = () => {
            // total scroll width of track (both sets)
            const totalWidth = track.scrollWidth;
            const half = totalWidth / 2;
            setSingleWidth(half);
        };

        // Measure initially and on resize
        measure();
        const ro = new ResizeObserver(() => measure());
        ro.observe(track);

        return () => {
            ro.disconnect();
        };
    }, [skillsBase.length]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let px = 0;
        let last = performance.now();

        const step = (now) => {
            if (isPaused) {
                last = now;
                frameRef.current = requestAnimationFrame(step);
                return;
            }

            const dt = now - last;
            last = now;

            // advance px by dt * speed
            px += dt * speed;

            if (singleWidth > 0) {
                // wrap without jump
                if (px >= singleWidth) {
                    px -= singleWidth;
                }
            }

            // apply transform
            track.style.transform = `translateX(-${px}px)`;
            frameRef.current = requestAnimationFrame(step);
        };

        frameRef.current = requestAnimationFrame(step);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [singleWidth, isPaused, speed]);

    return (
        <div
            className="skills-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="slide-track" ref={trackRef}>
                {skills.map((skill, i) => (
                    <div className="slide" key={i}>
                        <img src={skill.icon} alt={skill.name} />
                        <span className="skill-name" style={{ color: skill.color }}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

