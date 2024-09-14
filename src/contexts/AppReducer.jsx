
export default (state, action) => {
    switch(action.type) {
        case "ADD-TRANSACTION":
            return {
                ...state,
                transaction: [...state.transaction, action.payload],
            }
        default:
            return state
    }

}