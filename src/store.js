import { configureStore } from "@reduxjs/toolkit";
import menuActiveLinkReducer from "./scenes/global/menuActiveLinkSlice";
import menuToggleReducer from './scenes/global/menuToggleSlice';


export const store = configureStore({
    reducer: {
        menuActiveLink: menuActiveLinkReducer,
        menuToggle: menuToggleReducer,
    },
});