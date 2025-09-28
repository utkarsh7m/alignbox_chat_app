import React from 'react';
import './ChatHeader.css';
import { BsIncognito, BsPersonFill } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";

const ChatHeader = ({ isAnonymous, onToggle, onLogout }) => {
    return (
        <div className="chat-header">
            <button className="back-btn" onClick={onLogout} title="Back to Login">
                <IoMdArrowBack size={24} />
            </button>
            
            <div className="group-info">
                <img src="/img2.0.jpg" alt="Group Icon" />
                <h1>Fun Friday Group</h1>
            </div>
            
            <button
                className={`toggle-btn ${isAnonymous ? 'anonymous-on' : 'anonymous-off'}`}
                onClick={onToggle}
                title="Toggle Anonymous Mode"
            >
                {isAnonymous ? <BsIncognito size={20} /> : <BsPersonFill size={20} />}
            </button>
        </div>
    );
};

export default ChatHeader;