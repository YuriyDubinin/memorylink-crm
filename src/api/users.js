import axios from 'axios';

export const createUser = (query) => {
    return axios
        .post('http://localhost:3305/users/user', query)
        .then((resp) => resp)
        .catch((err) => console.log(err));
};
