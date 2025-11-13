import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: { value: 20, density: { enable: true, value_area: 1200 } },
      color: { value: ["#fdc14c", "#fd5c4c", "#48bb0f"] },
      shape: { type: "circle" },
      size: { value: 8, random: true, anim: { enable: true, speed: 1 } },
      opacity: { value: 0.35 },
      move: { enable: true, speed: 0.8, direction: "right", out_mode: "out" },
      line_linked: { enable: false },
    },
    interactivity: { events: { onhover: { enable: false }, onclick: { enable: false } } },
    retina_detect: true,
  };

  const { scrollY } = useScroll();
  const floatSideY = useTransform(scrollY, [0, 600], [0, -18]);
  const smoothEase = [0.19, 0.68, 0.37, 1];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        display: "grid",
        paddingTop: "100px",
        placeItems: "center",  // centers both horizontally and vertically
        // backgroundColor: "#000",

      }}
    >
      {/* Particles (background) */}
      <Particles
        id="particles-crafto"
        className="position-absolute top-0 left-0 w-100 h-100"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* ===== MAIN WRAPPER ===== */}
      <div
        className="hero-wrapper"
        style={{
          // background: "green",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          width: "80%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 50px",
          borderRadius: "10px",

        }}
      >


        {/* LEFT COLUMN (text) */}
        <div
          style={{
            flex: "1 1 0",
            minWidth: 280,
            color: "#fff",
            boxSizing: "border-box",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: smoothEase }}
            style={{ fontSize: "3.2rem", lineHeight: 1, marginBottom: 8 }}
          >
            <span
              style={{
                WebkitTextStroke: "0.8px #fff",
                color: "transparent",
                fontSize: "4rem",
                letterSpacing: "1px",
              }}
            >
              Blessing
            </span>{" "}
            <i style={{ marginLeft: 12 }} />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: smoothEase }}
            style={{ fontSize: "3.2rem", margin: 0 }}
          >
            Michael
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: smoothEase }}
            style={{ marginTop: 18, maxWidth: 520 }}
          >
            <span
              style={{
                display: "inline-block",
                background: "#000",
                color: "#fff",
                padding: "8px 18px",
                fontSize: 12,
                letterSpacing: 1,
                textTransform: "uppercase",
                borderRadius: 3,
                marginBottom: 14,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Front-end developer
            </span>

            <p style={{ color: "#e6e6e6", fontSize: 16, marginTop: 12 }}>
              A frontend developer crafting modern, accessible, and{" "}
              <strong style={{ color: "#fff" }}>pixel-perfect web experiences.</strong>
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (image) */}
        <div
          style={{
            flex: "1 1 0",
            minWidth: 280,
            maxWidth: 420,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Glow circle */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(253,193,76,0.25) 0%, rgba(0,0,0,0) 70%)",
                boxShadow: "0 0 80px rgba(253,193,76,0.18)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* Profile image */}
            <motion.img
              src="/image/profile-photo.png"
              alt="Blessing Michael"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "70%",
                height: "70%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,0.35)",
                boxShadow: "0 0 30px rgba(253,193,76,0.22)",
                zIndex: 2,
                position: "relative",
              }}
            />
          </div>
        </div>
      </div>

      {/* RESPONSIVE FLEX FOR SMALL SCREENS */}
      <style>
        {`
          @media (max-width: 992px) {
            .hero-wrapper {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
}
