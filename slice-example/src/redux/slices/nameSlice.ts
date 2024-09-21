import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {
        names: ["David"],
    },
    reducers: {
        addName: (state, action) => {
            state.names.push(action.payload);
        },
        removeName: (state, action) => {
            state.names = state.names.filter((item) => item !== action.payload);
        },
    },
});

export const { addName, removeName } = nameSlice.actions;
export default nameSlice.reducer;