import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: [
        { id: "id0", name: "chat1" },
        { id: "id1", name: "chat2" },
    ],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload,
                    },
                ],
            };
        default:
            return state;
    }
};

export default chatsReducer;
