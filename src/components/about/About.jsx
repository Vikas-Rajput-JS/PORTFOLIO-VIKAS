import React from "react";
import "./About.css";
import Me from "../../assets/Me4.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export default function About() {
  return (
    <section id="about">
      <h5 className="headtag" style={{marginTop:'10vh'}}>Get To Know</h5>
      <h5>About Me</h5>
      <div className="container about__container">
        <div className="about_me myimage" >
          <div className="about__me-image">
            <img src={Me} alt="about-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>50+ Local</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Hy Friend. I'm A MERN DEVELOPER. And I'm ready to work on A responsive Project using  my  best skills in Reactjs And Nodejs.
            I have worked on 20+ Freelance Projects on Upwork and Freelance. I have mentioned Some of My Projects in Project section in my  portfolio.
            Check it Out. Curently I'm in my learing zone and i will keep updated with new technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
