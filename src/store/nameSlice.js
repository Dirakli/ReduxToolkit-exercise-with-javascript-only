import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {
        value: "Givi"
    },
    reducers: {
        updatename(state, action) {
            state.value = action.payload
        },
        clearname(state, action) {
            state = ""
        }
    }
})

export const { updatename, clearname } = nameSlice.actions;
export default nameSlice.reducer;