import { createSlice } from "@reduxjs/toolkit";


const menuToggleSlice = createSlice({
    name: 'menuToggled',
    initialState: 'false',
    reducers: {
        setMenuToggle: (state, action) => action.payload,
    }
})

export const { setMenuToggle } = menuToggleSlice.actions;
export default menuToggleSlice.reducer;
