import React from 'react';
import backgroundVideo from '../assets/videos/levi-ackerman-dark.mp4';
import '../css/VideoBackground.css';

export default function VideoBackground() {
  return (
    <video
      className="video-bg"
      src={backgroundVideo}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
