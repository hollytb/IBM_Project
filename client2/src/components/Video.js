import React, { Component } from "react";
import ReactPlayer from "react-player";
import myVideo from "../video.mp4";

//Video display
class Video extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player fixed-bottom"
          url={myVideo}
          width="100%"
          height="115%"
          controls={true}
          playing={true}
        />
      </div>
    );
  }
}

export default Video;
