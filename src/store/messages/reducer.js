import { ADD_MESSAGE } from "./actions";

const initialState = {
    messageList: {
        id0: [
            {
                id: "id0",
                author: "Admin",
                text: "admin message 123",
            },
            {
                id: "id1",
                author: "Admin",
                text: "admin message 3445",
            },
        ],
        id1: [
            {
                id: "id0",
                author: "Admin",
                text: "admin message chat 2",
            },
            {
                id: "id1",
                author: "Admin",
                text: "admin message chat 2 ",
            },
        ],
    },
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const { chatId, message } = action.payload;
            const messages = state.messageList[chatId] || [];

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...messages,
                        {
                            id: `id${messages.length}`,
                            author: message.author,
                            text: message.text,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};

export default messagesReducer;
