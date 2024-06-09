import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import pageSlice from "./slices/pageSlice";

const store = configureStore({
    reducer: {
        nav: navSlice,
        page : pageSlice,
    }
});

export default store;