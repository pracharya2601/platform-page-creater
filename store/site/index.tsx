import { createSlice } from '@reduxjs/toolkit';

export const studioSlice = createSlice({
    name: 'site',
    initialState: {
        component: "something",
        other: 'lksjklds'
    },
    reducers: {
        defaultUpdate(state){
            return state;
        }
    }
})

export const {defaultUpdate} = studioSlice.actions;
export default studioSlice.reducer;