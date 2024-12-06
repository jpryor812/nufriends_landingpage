"use client"

import { useEffect, useRef } from 'react';

export default function AnswerQuestions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);  // Move useRef to top level

  useEffect(() => {
    const options = {
      threshold: [0.25, 0.5]
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!videoRef.current) return;
        
        if (entry.intersectionRatio >= 0.25) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
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