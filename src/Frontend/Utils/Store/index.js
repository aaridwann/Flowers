import axios from "axios";
import create from "zustand";
import { devtools, persist } from 'zustand/middleware'
import BASE_URL from "../Constant/Url";
const jwt = require('jsonwebtoken')

const baseUrl = process.env.NEXT_PUBLIC_URL_HOST

const auth = devtools(persist((set) => ({
    state: {
        state: false,
        user: null,
        loading: false,
        error: false,
        message: ''
    },
    fetchUser: async (data) => {
        try {
            const res = await axios.post(`/api/auth/login`, data)
            const { token } = res.data.message
            const decode = jwt.decode(token)
            return set(({ state }) => ({ state: { ...state, token: token, state: true, user: decode } }))
        } catch (error) {
            const message = error?.response?.data?.message
            set(({ state }) => ({ state: { ...state, loading: false, error: true, message: message } }))
            setTimeout(() => {
                set(({ state }) => ({ state: { ...state, token: null, user: null, loading: false, error: false, message: '' } }))
            }, 5000)
        }
    },
    signOut: async () => {
        try {
            await axios.post(`${baseUrl}/auth/logout`)
            set(({ state }) => ({ state: { ...state, message: '', error: false, token: null, user: null, error: false } }))
        } catch (error) {
            set(({ state }) => ({ state: { ...state, message: error.response.data, error: true } }))
        }
    }
}), { name: 'auth' }))

export const AuthStore = create(auth)