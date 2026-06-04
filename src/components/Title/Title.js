import React from "react";
import "./Title.css";

const Title = ({ title, desc }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Title;