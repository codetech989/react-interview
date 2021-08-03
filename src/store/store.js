import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
    compose
} from "@reduxjs/toolkit";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import {applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";

import pizzaSlice from "./slices/pizzaSlice"
import cartSlice from "./slices/cartSlice"

const persistConfig = {
    key: "root",
    storage,
};
const reducers = combineReducers({
    pizzas: pizzaSlice,
    cart: cartSlice


})
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        },
        composeEnhancers(applyMiddleware(thunk))),
});

export default store;
