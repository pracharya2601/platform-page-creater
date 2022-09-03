import { createSlice } from '@reduxjs/toolkit';
import {form} from "store/studio/editor";

export const studioSlice = createSlice({
    name: 'studio',
    initialState: {
        data: { 
            component: "PageWrapper",
            children: [
                form
            ],
            style: {},
            props: {},
        }
    },
    reducers: {
        addComponent(state, action){
            return state;
        },
        updateComponent(state, action) {
            return state;
        },
        deleteComponent(state, action){
            return state;
        },
        moveComponent(state, action) {
            return state;
        }
    }
})

export const {addComponent, updateComponent, deleteComponent, moveComponent} = studioSlice.actions;
export default studioSlice.reducer;