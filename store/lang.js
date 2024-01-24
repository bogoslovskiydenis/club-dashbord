export const state = () => ({
    lang: {
       currentLang: 'EN',
       linkPrefixes: {
        EN: '/',
        RU: '/ru/'
       }
    }
})
export const mutations = {
    setLang(state, payload) {
        state.lang.currentLang = payload
    }
}
export const actions = {
    setLang({commit}, payload) {
        commit('setLang', payload)
    }
}
export const getters = {
    getLang(state){
        return state.lang
    }
}