import { configureStore } from "@reduxjs/toolkit";
// import menuActiveLinkReducer from "./scenes/global/menuActiveLinkSlice";
// import menuToggleReducer from './scenes/global/menuToggleSlice';
import menuActiveLinkReducer from './scenes/global/menuActiveLinkSlice';


export const store = configureStore({
    reducer: {
        menuActiveLink: menuActiveLinkReducer,
    },
});
// menuActiveLink: menuActiveLinkReducer,
// menuToggle: menuToggleReducer,