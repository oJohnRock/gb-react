import { TOGGLE_NAME, TOGGLE_CHECKBOX } from "./actions";

const initialState = {
    showName: false,
    name: "Max",
    checkbox: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: !state.showName,
            };
        case TOGGLE_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox,
            };
        default:
            return state;
    }
};

export default profileReducer;
