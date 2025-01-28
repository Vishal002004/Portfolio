import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src="" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I’m a third-year BCA (Bachelor of Computer Applications)
              student, passionate about technology and software development.
              With a strong foundation in programming and problem-solving, I am
              constantly exploring new tools and technologies to enhance my
              skills. My academic journey has equipped me with knowledge in web
              development, database management, and software engineering.
            </p>
            <p>
              I’m eager to apply my learning to real-world projects and grow as
              a professional in the tech industry. Based in Delhi, India, I’m
              driven by curiosity and a commitment to innovation.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills">
              <div className="about-skill">
                <p>C++</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>Html and CSS</p>
                <hr style={{ width: "80%" }} />
              </div>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
