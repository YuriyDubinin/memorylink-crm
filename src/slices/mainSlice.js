import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: true,
    customSettings: {},
};

export const mainSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setCustomSettings: (state, action) => {
            state.customSettings = action.payload;
        },
    },
});

export const {setIsAuth, setCustomSettings} = mainSlice.actions;

export const selectIsAuth = (state) => state.general.isAuth;
export const selectCustommSettings = (state) => state.general.customSettings;

export default mainSlice.reducer;
