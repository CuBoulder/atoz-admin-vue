export const state = () => ({
    currentDepartment: null
})
  
export const mutations = {
    SET_CURR_DEPT(state, payload){
        state.currentDepartment = payload;
    }
}
  
export const actions = {
}