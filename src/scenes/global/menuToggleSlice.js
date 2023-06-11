import { createSlice } from "@reduxjs/toolkit";


const isMenuToggledSlice = createSlice({
    name: 'isMenuToggled',
    initialState: 'false',
    reducers: {
        setIsMenuToggled: (state, action) => action.payload,
    }
})

export const { setIsMenuToggled } = isMenuToggledSlice.actions;
export default isMenuToggledSlice.reducer;
