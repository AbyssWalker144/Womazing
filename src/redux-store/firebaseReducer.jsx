const defaultState = {
    jsonObj: "hello41241231",
}

export const firebaseReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return {...state, jsonObj: state.jsonObj + action.firebaseData}
        default:
            return state
    }
 }