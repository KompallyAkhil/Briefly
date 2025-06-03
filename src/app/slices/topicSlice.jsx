import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
    name: "topic",
    initialState: {
        topic: ""
    },
    reducers: {
        setTopic: (state, action) => {
            state.topic = action.payload;
        }
    }
});

export const { setTopic } = topicSlice.actions;
export default topicSlice.reducer;
