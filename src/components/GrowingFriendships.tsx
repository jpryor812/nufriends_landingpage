"use client"

import { useEffect, useRef } from 'react';

export default function StartConversation() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      threshold: [0.33, 0.5]
    };

    // Store the current value of videoRef
    const currentVideoRef = videoRef.current;

    // Set playback rate
    if (currentVideoRef) {
      currentVideoRef.playbackRate = 1.15;
    }

    // Handle time update
    const handleTimeUpdate = () => {
      if (currentVideoRef && currentVideoRef.currentTime >= 18) {
        currentVideoRef.currentTime = 0;
      }
    };

    // Add time update listener
    if (currentVideoRef) {
      currentVideoRef.addEventListener('timeupdate', handleTimeUpdate);
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
    <section className="growing-friendships-container">
      <div className="growing-friendships-demo">
        <video
          ref={videoRef}
          className="growing-friendships-demo-video"
          width="100%"
          height="auto"
          playsInline
          muted
          loop
        >
          <source src="/profile_and_friend_best.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="growing-friendships-text">
        Track all of your friendships and see how they compare against everyone else!
      </p>
    </section>
  );
}