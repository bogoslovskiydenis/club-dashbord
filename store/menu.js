export const state = () => ({
    menu: {
       isOpen: false
    }
})
export const mutations = {
    stateMenu(state, payload) {
       state.menu.isOpen = payload
    }
}
export const actions = {
    setStateMenu({commit}, payload) {
        commit('stateMenu', payload)
    }
}
export const getters = {
    getStateMenu(state){
        return state.menu
    }
}