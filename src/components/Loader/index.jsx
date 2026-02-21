import React from "react";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-logo">My-Portfolio</div>
      <div className="loader-bar">
        <div className="loader-progress"></div>
      </div>
    </div>
  );
};

export default Loader;