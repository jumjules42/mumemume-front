import React, { useState } from 'react';
import sendMessage from '../functions/sendMessage.js';
import styles from './styles/SendMessage.module.css';

function ControlUser({ actualUser }) {
    const [msg, setMsg] = useState('');

    const handleChange = (event) => {
        setMsg(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputText = document.getElementById('text');
        if (inputText.value) {
            sendMessage({ text: msg, author: actualUser });
            inputText.value = '';
            setMsg('');
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='message'
                    id='text'
                    autoComplete='off'
                    placeholder='Message'
                    onChange={handleChange}
                />
                <input type='submit' value='►' />
            </form>
        </div>
    );
}

export default ControlUser;
