import axios from 'axios';

const sendMessage = async (payload) => {
    try {
        axios.post('http://localhost:9000/api/messages', payload);
    } catch (err) {
        console.log(err.message);
    }
};

export default sendMessage;
