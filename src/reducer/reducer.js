import {
    SET_USERNAME,
    ADD_USERNAME,
    GET_MESSAGES,
    SEND_MESSAGE,
} from '../actions/actions.js';

import { setLocalStorage } from '../functions/localStorage.js';

const initialState = {
    actualUser: null,
    messages: [],
    usersRegistered: ['asdasd', 'sdsdsad'],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            setLocalStorage('username', action.payload.trim());
            return {
                ...state,
                actualUser: action.payload.trim(),
            };

        case ADD_USERNAME:
            if (!action.payload) break;
            const newUser = action.payload.trim();
            let addNewUser = {
                ...state,
                usersRegistered: state.usersRegistered.concat(newUser),
            };
            return addNewUser;

        case GET_MESSAGES:
            setLocalStorage('allMessages', action.payload);
            return {
                ...state,
                messages: state.messages.concat(action.payload),
            };

        case SEND_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload),
            };
        default:
            return state;
    }
}

export default rootReducer;
