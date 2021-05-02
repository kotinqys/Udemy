import produce from "immer"

const initialState = {
    id: null,
    fullname: null,
    email: null,
    isAuth: false,
    error:false,
}

const auth = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'SET_USER':
                //Проверка users на совпадение которое ввел пользователь
                action.users.forEach(user => {
                    if (user.email === action.user.email && user.password === action.user.password) {
                        draft.id = user.id
                        draft.fullname = user.fullname
                        draft.email = user.email
                        draft.isAuth = true
                    }
                });
                if (!draft.id) {
                    draft.error= true
                }
                break
            case 'LOG_OUT':
                //обнуляет все значение
                draft.id = null
                draft.fullname = null
                draft.email = null
                draft.isAuth = null
                draft.error = null
                break
            default:
                return state
    }
    })
}

export default auth