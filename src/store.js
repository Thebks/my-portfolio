import { configureStore } from "@reduxjs/toolkit";
import menuToggleReducer from "./scenes/menuToggleSlice";

export const store = configureStore({
    reducer: {
        menuToggle: menuToggleReducer
    },
});