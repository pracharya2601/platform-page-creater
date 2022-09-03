import { createSlice } from '@reduxjs/toolkit';
import studio from 'store/studio';

const initialData = {};

export const editorSlice = createSlice({
    name: "editor",
    initialState: {
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