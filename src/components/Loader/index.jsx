import React, { useState, useEffect } from "react";
import "./index.css";

const Loader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setLoading(false), 500);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [setLoading]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <div className={`loader-container ${isExiting ? "loader-fade-out" : ""}`}>
      {/* Ambient background glow */}
      <div className="loader-ambient-glow"></div>

      <div className="loader-card">
        <div className="loader-logo-ring">
          <div className="loader-ring-pulse"></div>
          <span className="loader-logo-text">NY</span>
        </div>

        <h1 className="loader-name">NITISH KUMAR YADAV</h1>
        <p className="loader-subtitle">Full Stack Developer & MERN Specialist</p>

        <div className="loader-progress-track">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="loader-footer-row">
          <span className="loader-status">
            {progress < 40
              ? "Initializing components..."
              : progress < 80
              ? "Optimizing UI assets..."
              : "Ready to launch..."}
          </span>
          <span className="loader-percent font-mono">{progress}%</span>
        </div>

        <button className="loader-skip-btn" onClick={handleSkip}>
          Enter Portfolio ↗
        </button>
      </div>
    </div>
  );
};

export default Loader;