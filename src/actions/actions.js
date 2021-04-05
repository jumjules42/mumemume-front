const SET_USERNAME = 'SET_USERNAME';
const ADD_USERNAME = 'ADD_USERNAME';
const GET_MESSAGES = 'GET_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

function setUsername(payload) {
    return {
        type: SET_USERNAME,
        payload,
    };
}

function addUsername(payload) {
    return {
        type: ADD_USERNAME,
        payload,
    };
}

function getMessages() {
    return async function (dispatch) {
        return await fetch('http://localhost:9000/api/messages')
            .then((response) => response.json())
            .then((listOfMessages) => {
                dispatch({ type: GET_MESSAGES, payload: listOfMessages });
            })
            .catch((error) => console.log(error));
    };
}

function sendMessage(payload) {
    return {
        type: SEND_MESSAGE,
        payload,
    };
}

export {
    SET_USERNAME,
    ADD_USERNAME,
    GET_MESSAGES,
    SEND_MESSAGE,
    setUsername,
    addUsername,
    getMessages,
    sendMessage,
};
