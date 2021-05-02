import axios from 'axios'

export const setUser = (users, user) => ({
    type: 'SET_USER',
    users,
    user
})

export const logout = () => ({
    type: 'LOG_OUT',
})

export const login = (email,password) => {
    return dispatch => {
        axios.get('http://localhost:3001/users')
            .then((response) => {
                dispatch(setUser(response.data, { email, password }));
        });
    }
}

export const register = (fullname,email,password) => {
    return dispatch => {
        axios.post('http://localhost:3001/users', { fullname, email, password })
            .then((response) => {
                alert('Пользователь успешно зарегистрирован!')
        });
    }
}



