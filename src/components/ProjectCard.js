import React from "react";
import "../App.css";

export const ProjectCard = ({ imgUrl, hoverImgUrl, title, description, githubLink }) => {
  return (
    <div className="proj-imgbx">
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt="Project" className="main-img" />
        <img src={hoverImgUrl} alt="Project Hover" className="hover-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </div>
  );
};
