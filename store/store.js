import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "react-redux";
import rootReducer from "./reducers/index";

const persistConfig = {
  key: "auth",
  storage,
};

let composeEnhancers;

if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers());

const persistor = persistStore(store);

export { store, persistor };
