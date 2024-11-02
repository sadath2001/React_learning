import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        // currentValue=state
        increment: (state) => state + 1,
        decrement: (state) => state - 1

    }
})

// reducers => events
export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer;