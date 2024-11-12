'use client'

import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play as soon as component mounts
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="phone-container">
        <div className="phone-frame">
      <video
        ref={videoRef}
        autoPlay
        muted           // Must be muted for autoplay to work on most browsers
        playsInline     // Better mobile experience
        loop            // Video will loop
        poster="/hero-video-thumbnail.jpg"
        className="phone-screen"
      >
        <source src="/nufriends-video-demo-v2.mp4" type="video/mp4" />
      </video>
    </div>
    </div>
  )
}