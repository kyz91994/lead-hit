import {createStore} from 'vuex'
import api from '@/api'

export default createStore({
    state: {
        isAuth: false,
    },
    getters: {},
    mutations: {
        setAuth(state, isAuth) {
            state.isAuth = isAuth
        },
        setLoading(state, bool) {
            state.isAuthLoading = bool
        },
    },
    actions: {
        async requestLead({commit}, payload) {
            try {
                const res = await api.auth.authMe({'Leadhit-Site-Id': payload})
                if (res.data.message === 'ok') {
                    commit('setAuth', true)
                    localStorage.setItem('leadhit-site-id', payload);
                } else {
                    console.log('Неверный ключ')
                }
            } catch (e) {
                console.log('Неверный ключ')
            }
        }
    },
})
