
import React, { useState } from 'react';

interface MessageProps {
    id: string;
    question: string;
    answer: string;
    tm: Date;
  }
  
  const ChatMessage: React.FC<MessageProps> = ({ question, answer, tm }) => {
    return (
      <div className="chat-message">
        <span className="question">{question}: </span>
        <span className="answer">{answer}</span>
      </div>
    );
  };
  
  export default ChatMessage;
  