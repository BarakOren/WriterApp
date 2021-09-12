import storage from "redux-persist/lib/storage";
import { webVersionReducer } from "./web-version/web-version.reducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["webVersionReducer"]
}

const rootReducer = combineReducers({
    webVersionReducer
})

export default persistReducer(persistConfig, rootReducer);