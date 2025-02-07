import { configureStore } from "@reduxjs/toolkit";
import fetchApidataReducer from "./commonSlice"

const store = configureStore({
    reducer: {
        deeCart: fetchApidataReducer,
    },
});

export default store;