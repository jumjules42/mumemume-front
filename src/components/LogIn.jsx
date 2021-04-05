import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUsername, addUsername } from '../actions/actions.js';
import { setLocalStorage } from '../functions/localStorage.js';
import styles from './styles/Login.module.css';

function LogIn(props) {
    const { setUsername, addUsername } = props;
    const [error, setError] = useState('Username is missing');
    const [user, setUser] = useState('');

    function handleChange(event) {
        const input = event.target.value;
        if (input === '') {
            setError('Username is missing');
        } else if (input.length < 4) {
            setError('Username must have more than 3 chars');
        } else {
            setError('');
        }
        setUser(input);
    }
    function handleSubmit(e) {
        addUsername(user);
        setUsername(user);
        setLocalStorage('connected', { isConnected: false, user: user });
    }

    return (
        <div className={styles.container}>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
                action='/messages'
            >
                <img src='https://bit.ly/3rNDH1m' alt='User icon.' />
                <input
                    autoComplete='off'
                    id='username'
                    name='username'
                    onChange={handleChange}
                    placeholder='Username'
                    type='text'
                    value={user}
                />
                {error.length > 0 && <label htmlFor='username'>{error}</label>}
                <input
                    type='submit'
                    className={styles.button}
                    disabled={error !== ''}
                    value='Registrarse'
                    id='login'
                />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        actualUser: state.actualUser,
        usersRegistered: state.usersRegistered,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (data) => dispatch(setUsername(data)),
        addUsername: (data) => dispatch(addUsername(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
