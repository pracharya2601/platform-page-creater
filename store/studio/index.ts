import { createSlice } from '@reduxjs/toolkit';
import { form } from "store/studio/editor";

export const studioSlice = createSlice({
    name: 'studio',
    initialState: {
        data: {
            component: "PageWrapper",
            children: [
                form
            ],
            style: {
                all: ["text-gray-900", "border-b-1"],
                tablet: [],
                desktop: [],
            },
            props: {},
        }
    },
    reducers: {
        addComponent(state: any, action: any) {
            return state;
        },
        updateComponent(state: any, action: any) {
            return state;
        },
        deleteComponent(state: any, action: any) {
            return state;
        },
        moveComponent(state: any, action: any) {
            return state;
        }
    }
})

export const { addComponent, updateComponent, deleteComponent, moveComponent } = studioSlice.actions;
export default studioSlice.reducer;