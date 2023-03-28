import { configureStore } from "@reduxjs/toolkit";
import userdataSlice from "./userdataSlice";

export const store = configureStore({
    reducer:{
        user: userdataSlice
    }
})