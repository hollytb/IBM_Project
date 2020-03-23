import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import myVideo from "C:/Third_Year/IBM_project/ibm/client2/src/video.mp4"




class Video extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url= {myVideo}
            width='100%'
            height='115%'
            controls = {true}
             
          />
        </div>
      )
    }
  }

  export default Video;