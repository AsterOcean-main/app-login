import React from "react";
/* import background from "../assets/background.png"; // Use your chosen image */
import video from "../assets/wavesvid.mp4";
/* video from https://pixabay.com/videos/wave-water-curve-deep-science-47712/ */

const Main2 = () => {
  return (
    <div className="main2">
      {/* <img src={background} alt="Background" className="background-image" /> */}
      <video src={video} autoPlay loop muted />
      <div className="overlay">
        <div className="header">
          <div className="brand">ASTER OCEAN</div>
          <div className="menu-dots">● ● ●</div>
        </div>
        <div className="login-container">
          <div className="login-box">
            <p className="login-title">LOGIN</p>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
