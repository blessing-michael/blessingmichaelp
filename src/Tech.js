import { useEffect, useRef } from "react";
import TechSection from "./TechSection";

const skills = [
    { name: "HTML", icon: "/image/html5.svg", class: "html" },
    { name: "CSS", icon: "/image/css.svg", class: "css" },
    { name: "JavaScript", icon: "/image/javascript.svg", class: "js" },
    { name: "React", icon: "/image/react.svg", class: "react" },
    { name: "Redux", icon: "/image/redux.svg", class: "redux" },
    { name: "Tailwind", icon: "/image/tailwind.svg", class: "tailwind" },
    { name: "Bootstrap", icon: "/image/bootstrap.svg", class: "bootstrap" },
    { name: "Webpack", icon: "/image/webpack.svg", class: "webpack" },
    { name: "GitHub", icon: "/image/github.svg", class: "github" },
    { name: "Cypress", icon: "/image/cypress.svg", class: "cypress" },
    { name: "Jira", icon: "/image/jira.svg", class: "jira" },
    { name: "Postman", icon: "/image/postman.svg", class: "testlink" },
    { name: "ShadCN", icon: "/image/shadcn.svg", class: "shadcn" },
    { name: "Vercel", icon: "/image/vercel.svg", class: "vercel" },
];

const Tech = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add("visible");
                }
            },
            { threshold: 0.2 } // when 20% is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="skills-section">
            <div className="project-header-wrapper">
                <span className="project-title">Technologies I Work With</span>
                <div className="project-heading-line full"></div>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className={`skill-item ${skill.class}`} key={index}>
                        <img src={skill.icon} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>

            <TechSection />
        </section>
    );
};

export default Tech;
