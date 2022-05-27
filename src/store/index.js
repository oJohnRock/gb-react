import { createStore } from "redux";
import profileReducer from "./profile/reducer";

const store = createStore(
    profileReducer,
    window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
);

export default store;
