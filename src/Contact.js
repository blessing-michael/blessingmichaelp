import React from "react";
import { BsSend } from "react-icons/bs";
// import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
// import {FaDev } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="contact-p">what's next?</p>
      <h2 className="contact-h2">Get in touch</h2>
      <p className="contact-p">
        I'm interested in internship opportunities- especially opportunities
        that involves large projects. However, my inbox is always open if you
        have any questions or want to say hi.
      </p>
      <div className="form">
        <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="off" />
          <input type="email" placeholder="Your Email" name="email"  autoComplete="off"/>
          <textarea
            className="textarea"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="contact-btn" type="submit">
            Send Message <BsSend />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
