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

// const isMenuToggledSlice = createSlice({
//     name:'isMenuToggled',
//     initialState:'false',
//     reducers:{
//         setIsMenuToggled:(state, action) => action.payload,
//     }
// })

// console.log(menuToggleSlice);
export const { setMenuActive, setIsMenuToggled } = menuActiveLinkSlice.actions;
export default menuActiveLinkSlice.reducer;
// export default isMenuToggledSlice.reducer;