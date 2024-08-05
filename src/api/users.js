import axios from 'axios';
import toast from 'react-hot-toast';

export const createUser = (data) => {
    return axios
        .post('http://localhost:3305/users/user', data)
        .then((resp) => {
            toast('Пользователь создан', {
                icon: '✅️',
                duration: 1500,
            });
            return resp;
        })
        .catch((error) => {
            console.error(error.response.data);
            toast(`Пользователь не создан\n${error.message}`, {
                icon: '🚫',
                duration: 1500,
            });
        });
};

export const updateUser = (data) => {
    return axios
        .put('http://localhost:3305/users/user', data)
        .then((resp) => {
            toast('Пользователь обновлён', {
                icon: '✅️',
                duration: 1500,
            });
            return resp;
        })
        .catch((error) => {
            console.error(error.response.data);
            toast(`Пользователь не обновлён\n${error.message}`, {
                icon: '🚫',
                duration: 1500,
            });
        });
};

export const deleteUser = (data) => {
    return axios
        .delete('http://localhost:3305/users/user/key', {params: data})
        .then((resp) => {
            toast('Пользователь удален', {
                icon: '✅️',
                duration: 1500,
            });
            return resp;
        })
        .catch((error) => {
            console.error(error.response.data);
            toast(`Пользователь не удален\n${error.message}`, {
                icon: '🚫',
                duration: 1500,
            });
        });
};
