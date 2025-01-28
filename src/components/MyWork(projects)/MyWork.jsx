import React from "react";
import "./MyWork.css";
import portfolio from "../../assets/portfolio.png";
import recipe_search from "../../assets/recipe-search.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        <div className="work-item">
          <img src={portfolio} alt="Personal Portfolio Website" />
          <p>Personal Portfolio Website</p>
          <a
            href="https://youtu.be/AbdeWbNR82o"
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            Watch Me Explain
          </a>
        </div>
        <div className="work-item">
          <img src={recipe_search} alt="Recipe Searching Platform" />
          <p>Recipe Searching Platform</p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            Watch Me Explain
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
