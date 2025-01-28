import React from "react";
import "./hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/ppee.png";

export const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I am Vishal Gautam,</span>
        Software developer based in India
      </h1>
      <p>
        "Welcome to my portfolio website! I’m a passionate software developer
        based in Delhi, India, eager to bring innovative ideas to life. As a
        fresher, I specialize in crafting efficient, scalable, and user-friendly
        solutions. Explore my projects, skills, and journey as I grow in the
        tech world. Let’s build something amazing together!"
      </p>
      <div className="hero-action">
        {/* <div className="hero-connect">Connect with me</div> */}
        <AnchorLink className="hero-connect" href="#contact">
          Connect with me
        </AnchorLink>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
