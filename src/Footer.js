import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="underline"></div>

      <div className="footer">
        <div className="footer-icon">
          <a
            className="footer-a"
            href="https://github.com/blessing-michael?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillGithub />
          </a>
          <a
            className="footer-a"
            href="https://www.linkedin.com/in/blessing-asuquo-4509981a2/https://github.com/blessing-michael?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillLinkedin />
          </a>
          <a
            className="footer-a"
            href="https://dev.to/blessingmichael"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaDev />
          </a>
          <a
            className="footer-a"
            href="https://twitter.com/toonmystory"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <AiFillTwitterCircle />
          </a>
        </div>

        <p className="footer-p">
          Built with React.js by{" "}
          <span className="footer-span">Blessing Michael</span>{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;
