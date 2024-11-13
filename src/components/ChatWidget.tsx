"use client";

import { useState } from 'react';
import Image from 'next/image';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-widget">
      <button className="chat-button" onClick={toggleChat}>
        <span className="chat-label">Questions?</span>
      </button>
      
      <div className={`chat-content ${isOpen ? 'active' : ''}`}>
        <div className="chat-header">
          <h3>Get in Touch</h3>
          <button className="close-button" onClick={toggleChat}>×</button>
        </div>
        <div className="chat-body">
          <p>Have questions? Message me, Justin, and I&apos;ll get back to you as soon as I can!</p>
          <Image src="/profile picture.jpg" alt="Justin" width={40} height={40} className="justin-image" />
          <p>📧 Email me at: <a href="mailto:justin@nufriends.app">justin@nufriends.app</a></p>
          <p>⏰ Response time: Usually within *30 minutes</p>
          <div className="chat-disclaimer">
            <p>*If message is sent between 8:00am and 10:00pm est.</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ChatWidget;