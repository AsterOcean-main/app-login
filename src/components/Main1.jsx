import React from "react";
import video from "../assets/video.mp4";

const main1 = () => {
  return (
    <div className="main1">
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default main1;
