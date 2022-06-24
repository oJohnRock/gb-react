import { takeLatest, put, delay } from "redux-saga/effects";
import { AUTHOR } from "../constants/common";
import { ADD_MESSAGE_WITH_SAGA, addMessage } from "./messages/actions";

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message));

    if (action.payload.message.author !== AUTHOR.bot) {
        yield delay(1500);

        yield put(
            addMessage(action.payload.chatId, {
                author: AUTHOR.bot,
                text: `Привет, ${action.payload.message.author}! Как дела?`,
            })
        );
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);
}

export default mySaga;
