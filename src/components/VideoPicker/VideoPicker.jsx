import React from 'react';
import { useState } from 'react';
import Menu from "./Menu";
import Video from './Video';

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

// export default class VideoPicker extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { src: VIDEOS.fast };
//     this.chooseVideo = this.chooseVideo.bind(this);
//   }

//   chooseVideo(newVideo) {
//     this.setState({
//       src: VIDEOS[newVideo],
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Video Player</h1>
//         <Menu chooseVideo={this.chooseVideo} />
//         <Video src={this.state.src} />
//       </div>
//     );
//   }
// }

export default function VideoPicker() {
  const [video, setVideo] = useState({ src: VIDEOS.fast });

  function chooseVideo(newVideo) {
    setVideo({
      src: VIDEOS[newVideo],
    });
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} />
      <Video src={video.src} />
    </div>
  );
}
