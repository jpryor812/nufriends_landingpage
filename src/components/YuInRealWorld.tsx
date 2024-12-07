"use client"

import { useEffect, useRef } from 'react';

export default function YuInRealWorld() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      threshold: [0.33, 0.5]
    };

    // Store the current value of videoRef
    const currentVideoRef = videoRef.current;

    // Handle time update
    const handleTimeUpdate = () => {
      if (currentVideoRef && currentVideoRef.currentTime >= 17.25) {
        currentVideoRef.currentTime = 1; // Reset to beginning
        currentVideoRef.play(); // Add this to restart playback
      }
    };

    // Add time update listener
    if (currentVideoRef) {
      currentVideoRef.addEventListener('timeupdate', handleTimeUpdate);
    }

    if (currentVideoRef) {
      currentVideoRef.playbackRate = 1.25;
    }

    // Intersection Observer setup
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!currentVideoRef) return;
        
        if (entry.intersectionRatio >= 0.33) {
          currentVideoRef.play();
        } else {
          currentVideoRef.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    // Cleanup
    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('timeupdate', handleTimeUpdate);
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <section className="yu-in-real-world-container">
      <p className="yu-in-real-world-text">
        You can also chat with your AI companion for help in real-world social situations!
      </p>
      <div className="yu-in-real-world-demo">
        <video
          ref={videoRef}
          className="yu-in-real-world-demo-video"
          width="100%"
          height="auto"
          playsInline
          muted
          loop={false}
        >
          <source src="/messaging_yu_final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}