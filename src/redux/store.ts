import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/reducers";


const store = configureStore({
    reducer:{
        users: userReducer
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;