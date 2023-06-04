import { configureStore } from "@reduxjs/toolkit";
import menuActiveLinkReducer from "./scenes/global/menuActiveLinkSlice";

export const store = configureStore({
    reducer: {
        menuActiveLink: menuActiveLinkReducer,
    },
});