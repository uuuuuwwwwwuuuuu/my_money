import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/reducerApp";

const store = configureStore({
    devTools: true,
    reducer: {
        app: appReducer
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch