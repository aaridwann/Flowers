import { createSlice } from '@reduxjs/toolkit'

const jwt = require('jsonwebtoken')

const initialState = {
    state: false,
    user: null,
    token: null,
    error: false,
    message: ''
}

export const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { payload } = action
            const { user, token } = payload
            // const nextState = {...state,user:user,token:token,state:trur}
            return ({ ...state, state: true, user: user, token: token })
        },
        removeUser: (state, actions) => {
            return ({ ...state, state: false, user: null, token: null })
        },
        errorUser: (state, action) => {
            const { payload } = action
            return ({ ...state, error: true, message: payload.message })
        },
        updateUser: (state, action) => {
            const { payload } = action
            return ({ ...state, ...payload })
        }
    }
})

export const { addUser, removeUser, errorUser, updateUser } = userSlice.actions
export default userSlice.reducer