import React from "react";
import './index.css'
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-part">
        <h2 className="about-heading">About Me</h2>

        <p className="about-paragraph">
            Hi, I’m <strong className="strong-about">Nitish Kumar Yadav</strong>, a passionate{" "}
            <strong className="strong-about">React Developer</strong> from Ranchi, Jharkhand. I build modern,
            interactive, and user-friendly web applications.
        </p>

        <p className="about-paragraph">
            I specialize in <strong className="strong-about">React.js</strong> and modern web technologies,
            and I enjoy creating clean UI/UX designs, web apps, and games with smooth
            performance.
        </p>
      </div>

      <section className="education-section">
        <div className="about-part">
          <h3 className="education-heading">Education</h3>
          <ul className="education-list">
            <li className="education-item">
              <strong>B.Tech (Computer Science & Engineering)</strong> <br />
              RKDF University, Ranchi <br />
              <span>Currently Studying</span>
            </li>
            <li className="education-item">
              <strong>12th(ISc)</strong> <br />
              Geeta Inter College , hazaribag <br />
              <span>2020 - 2022</span>
            </li>
            <li className="education-item">
              <strong>10th</strong> <br />
              Lal Bihari Mahto Divine Public School Naitand, Bandiyabad,Giridih <br />
              <span>2018 - 2020</span>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default About;
