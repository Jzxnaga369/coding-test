import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAIAnswer, setQuestion } from '../../store/slices/ai';
import chatBubbleIcon from '../../assets/images/chat-bubble-icon.png';
import Image from 'next/image';

const Chatbox = () => {
  const dispatch = useDispatch();
  const { question, answer, based_on_data, loading: aiLoading, error: aiError } = useSelector((state) => state.ai);
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAskQuestion = () => {
    if (question.trim() === '') return;
    const userMessage = {
      sender: 'user',
      text: question,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    dispatch(fetchAIAnswer({ question, based_on_data }));
  };

  const openModal = () => {
    setIsModalOpen(true);
    const initialMessage = {
      sender: 'ai',
      text: "I'm an AI, what can I help you with today?",
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([initialMessage]);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (answer) {
      const aiMessage = {
        sender: 'ai',
        text: answer,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }
  }, [answer]);

  return (
    <>
      {!isModalOpen && (
        <button className="open-chatbox-button" onClick={openModal}>
          <Image src={chatBubbleIcon} alt="AI Chatbox" />
          <span>AI Chatbox</span>
        </button>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="chatbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="chatbox-header">
              <h2>Ask a Question</h2>
              <button onClick={closeModal} className="close-button">X</button>
            </div>
            <div className="chatbox-body">
              <div className="messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    <div className="message-content">{msg.text}</div>
                    <div className="message-timestamp">{msg.timestamp}</div>
                  </div>
                ))}
                {aiLoading && (
                  <div className="message ai">
                    <div className="message-content">...</div>
                    <div className="message-timestamp">{new Date().toLocaleTimeString()}</div>
                  </div>
                )}
                {aiError && (
                  <div className="message error">
                    <div className="message-content">Error: {aiError}</div>
                    <div className="message-timestamp">{new Date().toLocaleTimeString()}</div>
                  </div>
                )}
              </div>
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Enter your question..."
                  value={question}
                  onChange={(e) => dispatch(setQuestion(e.target.value))}
                />
                <button onClick={handleAskQuestion}>Send</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbox;