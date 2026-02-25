import React, { useState, useEffect } from "react";
import "./index.css";
import myPhoto from "../../assets/myphoto.png";
import me1 from "../../assets/MyPhotos/me1.jpeg";
import me2 from "../../assets/MyPhotos/me2.jpeg";
import me3 from "../../assets/MyPhotos/me3.jpeg";
import me4 from "../../assets/MyPhotos/me4.jpeg";
import me5 from "../../assets/MyPhotos/me5.jpeg";
import me6 from "../../assets/MyPhotos/me6.jpeg";
import me7 from "../../assets/MyPhotos/me5.png";
import me8 from "../../assets/MyPhotos/me6.png";

const Loader = ({ setLoading }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [showThanksPopup, setShowThanksPopup] = useState(false);

  const images = [myPhoto, me1, me2, me3, me4, me5, me6, me7, me8];
  const imageNames = [
    "Me",
    "Photo 1",
    "Photo 2",
    "Photo 3",
    "Photo 4",
    "Photo 5",
    "Photo 6",
    "Photo 7",
    "Photo 8",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleYes = () => {
    setShowThanksPopup(true);
  };

  const handleNo = () => {
    setShowLoadingScreen(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const goToImage = (index) => setCurrentImage(index);

  return (
    <div className="loader-wrapper">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />

      <div className="loader-overlay" />

      {/* THANK YOU POPUP */}
      {showThanksPopup && (
        <div className="thanks-popup">
          <div className="popup-box">
            <h2>Thanks for knowing about me ❤️</h2>
            <button onClick={() => setShowThanksPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showLoadingScreen && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="big-spinner"></div>
            <h2>Loading your portfolio...</h2>
          </div>
        </div>
      )}

      {!showLoadingScreen && (
        <>
          <div className="loader-container">
            <div className="logo-section">
              <div className="logo-placeholder">NY</div>
            </div>

            <h1 className="loader-heading">Creative Full Stack Developer</h1>

            <div className="loader-content">
              <p className="loader-par">Do You Know About Me?</p>

              <div className="button-group">
                <button className="loader-yes" onClick={handleYes}>
                  Yes
                </button>

                <button className="loader-no" onClick={handleNo}>
                  No
                </button>
              </div>
            </div>
          </div>

          <div className="image-indicator">
            {images.map((_, index) => (
              <div
                key={index}
                className={`indicator-dot ${
                  index === currentImage ? "active" : ""
                }`}
                onClick={() => goToImage(index)}
                title={imageNames[index]}
              />
            ))}
          </div>

          <div className="image-label">{imageNames[currentImage]}</div>
        </>
      )}
    </div>
  );
};

export default Loader;