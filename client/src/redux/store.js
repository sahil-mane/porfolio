import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import pageSlice from "./slices/pageSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        nav : navSlice,
        page : pageSlice,
        user : userSlice,
    }
});

export default store;