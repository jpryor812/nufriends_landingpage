"use client"

import { useEffect, useRef } from 'react';

export default function HelpFromYu() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const options = {
      threshold: [0.33, 0.5]
    };

    // Store the current value of videoRef
    const currentVideoRef = videoRef.current;

    // Handle time update
    const handleTimeUpdate = () => {
      if (currentVideoRef && currentVideoRef.currentTime >= 15.5) {
        currentVideoRef.currentTime = 2;
      }
    };
    
    // Add this new handler
    const handleLoadedData = () => {
      if (currentVideoRef) {
        currentVideoRef.currentTime = 2;
      }
    };

    // Add event listeners
    if (currentVideoRef) {
      currentVideoRef.addEventListener('timeupdate', handleTimeUpdate);
      currentVideoRef.addEventListener('loadeddata', handleLoadedData);
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
        currentVideoRef.removeEventListener('loadeddata', handleLoadedData);
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <section className="help-from-yu-container">
      <div className="help-from-yu-demo">
        <video
          ref={videoRef}
          className="help-from-yu-demo-video"
          width="100%"
          height="auto"
          playsInline
          muted
          loop={false}
        >
          <source src="/yu_suggestions_final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="help-from-yu-text">
        Still not sure what to say, use your AI companion to come up with conversation ideas and suggested messages!
      </p>
    </section>
  );
}