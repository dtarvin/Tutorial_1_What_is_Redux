import { DECREMENT, INCREMENT } from "./constants";

const initialState: RootState = {
    value: 0,
    name: "constant name",
    profile_url: "random_url"
};

const reducer = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }
        default:
            return state
    }
}

export default reducer;