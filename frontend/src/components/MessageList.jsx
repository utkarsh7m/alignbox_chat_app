import React, { useRef, useEffect } from 'react';

const MessageList = ({ messages, currentUser }) => {
    const endOfMessagesRef = useRef(null);

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="message-list">
            {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender_name === currentUser ? 'sent' : 'received'}`}>
                    {msg.sender_name !== currentUser && (
                        <div className="sender">
                            {msg.is_anonymous ? 'Anonymous' : msg.sender_name}
                        </div>
                    )}
                    <div className="text">{msg.message_text}</div>
                    <div className="time">{formatTime(msg.timestamp)}</div>
                </div>
            ))}
            <div ref={endOfMessagesRef} />
        </div>
    );
};

export default MessageList;