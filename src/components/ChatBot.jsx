import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hey there! I'm ARYFLY AI. How can I help you gear up today?", sender: 'ai' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "That's a great choice! Our trending tech section has some amazing deals on that.",
                "I can definitely help with that. Are you looking for Men's or Women's collection items?",
                "Our shipping usually takes 3-5 business days across India. Anything else?",
                "You've got great taste! Don't forget to check out our live deals for a 30% discount.",
                "I'm here to make your shopping experience smooth. Let me know if you need any product recommendations!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setMessages(prev => [...prev, { text: randomResponse, sender: 'ai' }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="chatbot-wrapper" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1100 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="chat-window shadow-lg"
                        style={{
                            width: '350px',
                            height: '450px',
                            backgroundColor: '#141414',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #333',
                            overflow: 'hidden',
                            marginBottom: '20px'
                        }}
                    >
                        <div className="chat-header p-3 bg-dark border-bottom border-secondary d-flex justify-content-between align-items-center">
                            <h5 className="m-0 fw-bold neon-text" style={{ fontSize: '1.1rem' }}>ARYFLY AI</h5>
                            <button onClick={() => setIsOpen(false)} className="btn-close btn-close-white btn-sm"></button>
                        </div>

                        <div className="chat-messages p-3 flex-grow-1 overflow-auto d-flex flex-column gap-3">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                                    <div
                                        className={`p-2 px-3 rounded-4 shadow-sm ${msg.sender === 'user' ? 'bg-danger text-white' : 'bg-secondary text-white'}`}
                                        style={{ maxWidth: '80%', fontSize: '0.9rem' }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="d-flex justify-content-start">
                                    <div className="p-2 px-3 rounded-4 bg-secondary text-white-50" style={{ fontSize: '0.8rem' }}>
                                        AI is thinking...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSend} className="chat-input p-3 bg-dark border-top border-secondary">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-dark text-white border-secondary"
                                    placeholder="Ask me anything..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    style={{ fontSize: '0.9rem' }}
                                />
                                <button type="submit" className="btn btn-danger btn-sm px-3">Send</button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-danger rounded-circle shadow-lg p-0 d-flex align-items-center justify-content-center"
                style={{ width: '60px', height: '60px' }}
            >
                {isOpen ? (
                    <span className="fs-3">×</span>
                ) : (
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm1 10h-2v2h2v-2zm0-8h-2v6h2V6z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;
