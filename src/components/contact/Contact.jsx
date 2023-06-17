import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact_section">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMarkEmailUnread className="contact_option-icons" />
            <h4>Email</h4>
            <h5>v384695@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHxjhdWdmpzqQgbfnjGDMrQkRlGPSQmQQHHqsxLxVhZLznKBsGPHjDNtHkXHzjcrFMsNsGV" target="_blank">
              Send A Message
            </a>
          </article>
         
          <article className="contact_option">
            <FaDiscord className="contact_option-icons"  />
            <h4>Discord</h4>
            <h5>Join Us</h5>
            <a href="https://discord.gg/g8T5jrwk" target="_blank">
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <SiLinkedin className="contact_option-icons" />
            <h4>LinkedIn</h4>
            <h5>Vikas Rajput</h5>
            <a href="https://www.linkedin.com/in/vikas-rajput-38b1ba194/" target="_blank">
              Send A Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
