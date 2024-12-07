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
      currentVideoRef.playbackRate = 1.25;
    }

    // Handle time update
    const handleTimeUpdate = () => {
      if (currentVideoRef && currentVideoRef.currentTime >= 14.25) {
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
    <section className="start-conversation-container">
      <p className="start-conversation-text">
        You and your friend&apos;s AI companions will start the conversation with a few messages for you, so no need to worry about the cold start! You can just jump right in!
      </p>
      <div className="start-conversation-demo">
        <video
          ref={videoRef}
          className="start-conversation-demo-video"
          width="100%"
          height="auto"
          playsInline
          muted
          loop={false}
        >
          <source src="/loading_messages_final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}