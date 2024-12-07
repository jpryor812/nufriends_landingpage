"use client"

import { useEffect, useRef } from 'react';

export default function AnswerQuestions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);  // Move useRef to top level

  useEffect(() => {
    const options = {
      threshold: [0.33, 0.5]
    };
  
    // Store the current value of videoRef in a variable
    const currentVideoRef = videoRef.current;
  
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
  
    // Use the stored reference in cleanup
    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  return (
    <section className="answer-questions-container">
      <div className="AQ-demo">
        <video
          ref={videoRef}
          className="AQ-demo-video"
          width="100%"
          height="auto"
          playsInline
          muted
          loop
        >
          <source src="/found_friend.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="AQ-text">
        Answer questions to help your AI companion get to know you and find your most compatible friends!
      </p>
    </section>
  );
}