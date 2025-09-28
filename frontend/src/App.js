import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import './App.css';

import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

const SOCKET_SERVER_URL = "http://localhost:3001";
const socket = io(SOCKET_SERVER_URL);

function App() {
    const [messages, setMessages] = useState([]);
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if (currentUser) {
            const fetchMessages = async () => {
                try {
                    const response = await axios.get(`${SOCKET_SERVER_URL}/messages`);
                    setMessages(response.data);
                } catch (error) {
                    console.error("Failed to fetch messages", error);
                }
            };
            fetchMessages();

            socket.on('newMessage', (newMessage) => {
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            });

            return () => {
                socket.off('newMessage');
            };
        }
    }, [currentUser]);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const handleSendMessage = (messageText) => {
        const messageData = {
            sender_name: currentUser,
            message_text: messageText,
            is_anonymous: isAnonymous,
        };
        socket.emit('sendMessage', messageData);
    };

    const toggleAnonymity = () => {
        if (!isAnonymous) {
            setShowNotification(true);
        }
        setIsAnonymous(prev => !prev);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();
        if (nameInput.trim()) {
            setCurrentUser(nameInput.trim());
        }
    };

    const handleLogout = () => {
        setCurrentUser('');
    };

    if (!currentUser) {
        return (
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <h1>Join the Chat</h1>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                    <button type="submit">Join</button>
                </form>
            </div>
        );
    }

    return (
        <div className="chat-container">
            {showNotification && (
                <div className="notification">
                    You are now appearing as Anonymous
                </div>
            )}
            
            <ChatHeader 
                isAnonymous={isAnonymous} 
                onToggle={toggleAnonymity} 
                onLogout={handleLogout} 
            />
            
            <MessageList messages={messages} currentUser={currentUser} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default App;