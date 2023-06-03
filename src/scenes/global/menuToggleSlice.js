import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuToggled: false,
}

const menuToggleSlice = createSlice({
    name: 'menuToggle',
    initialState,
});

// console.log(menuToggleSlice);

export default menuToggleSlice.reducer  