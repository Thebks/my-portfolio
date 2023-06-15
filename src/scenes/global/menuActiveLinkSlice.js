import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuActive: '/',
    menuToggled: false
}

const menuActiveLinkSlice = createSlice({
    name: 'menuActiveLink',
    initialState: initialState,
    reducers: {
        setMenuActive: (state, action) => {
            state.menuActive = action.payload;
        },
        toggleMenu: (state) => {
            state.menuToggled = !state.menuToggled;
        },
    },
});

export const { setMenuActive, toggleMenu } = menuActiveLinkSlice.actions;
export default menuActiveLinkSlice.reducer;


// menuActiveLinkSlice