import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import Root from "./reducer/Root";

const store = createStore(Root, applyMiddleware(thunk));

export default store;
