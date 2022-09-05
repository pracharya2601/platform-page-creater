import { createSlice } from '@reduxjs/toolkit';
import studio from 'store/studio';

const initialData = {};

export const editorSlice = createSlice({
    name: "editor",
    initialState: {
        viewDimension: {
            type: 'desktop',
            x: 1220,
            y: 800,
        },
        hello: '',
    },
    reducers: {
        selectComponent(state: any, action: any) {
            return state;
        }
    }
});

export const { selectComponent } = editorSlice.actions;
export default editorSlice.reducer;