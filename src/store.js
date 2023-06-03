import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "./scenes/global/menuToggleSlice";

export const store = configureStore({
    reducer: {
        menuToggle: menuToggleReducer
    },
});