import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     menuActive: '',
// }

const menuActiveLinkSlice = createSlice({
    name: 'menuActiveLink',
    initialState: '/',
    reducers: {
        setMenuActive: (state, action) => action.payload,
    }
});


// console.log(menuToggleSlice);
export const { setMenuActive } = menuActiveLinkSlice.actions;
export default menuActiveLinkSlice.reducer;