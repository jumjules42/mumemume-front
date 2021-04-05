import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import { setLocalStorage, getLocalStorage } from '../functions/localStorage.js';
import { Redirect } from 'react-router-dom';
import sendMessage from '../functions/sendMessage.js';
import ControlUser from './SendMessage.jsx';
import styles from './styles/Messages.module.css';

function Messages() {
    const [messages, setMessages] = useState([]);
    const [errors, setErrors] = useState(false);
    const myUsername = getLocalStorage('username');

    const getAllMessages = async () => {
        try {
            const userMessages = await axios.get(
                'http://localhost:9000/api/messages'
            );
            setMessages(userMessages.data);
        } catch (err) {
            console.log(err.message);
            setErrors(true);
        }
    };

    useEffect(() => {
        const socket = socketIOClient('http://localhost:9000', {
            withCredentials: true,
        });
        socket.on('connect', () => {
            console.log('Connected to sockets!');
        });
        const isConnected = getLocalStorage('connected');
        if (!isConnected.isConnected) {
            sendMessage({
                text: `${myUsername} has connected to MumeMume!`,
                author: 'Server',
            });
            setLocalStorage('connected', {
                isConnected: true,
                user: myUsername,
            });
        }

        getAllMessages();
        const interval = setInterval(() => {
            getAllMessages();
        }, 1000);
        return () => clearInterval(interval);
    }, [myUsername]);

    return (
        <div className='over-hidden container-fluid bg-msg'>
            <div className={styles.container}>
                {errors ? <Redirect to='/errorHandler' /> : <></>}
                {messages.map((msg) => (
                    <div className={styles.eachMessage} key={msg.id}>
                        <strong>{msg.author}</strong>
                        <em>{msg.text}</em>
                        <p>{new Date(msg.id).toLocaleString().slice(0, -3)}</p>
                    </div>
                ))}
                <br />
                <ControlUser actualUser={myUsername} />
            </div>
        </div>
    );
}

export default Messages;
