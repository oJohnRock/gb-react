import { AUTHOR } from "../../constants/common";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

export const addMessageWithThunk =
    (chatId, message) => (dispatch, getState) => {
        dispatch(addMessage(chatId, message));

        console.log(AUTHOR);

        if (message.author !== AUTHOR.bot) {
            setTimeout(
                () =>
                    dispatch(
                        addMessage(chatId, {
                            author: AUTHOR.bot,
                            text: `Привет, ${message.author}! Как дела?`,
                        })
                    ),
                1500
            );
        }
    };

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: {
        chatId,
        message,
    },
});
