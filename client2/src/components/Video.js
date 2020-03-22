import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import myVideo from "C:/Users/alans/Desktop/ibm_project/client2/src/video.mp4"




class Video extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= {myVideo}
            width='100%'
            height='110%'
            controls = {true}
             
          />
        </div>
      )
    }
  }

  export default Video;