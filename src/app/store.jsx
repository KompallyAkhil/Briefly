import { configureStore } from "@reduxjs/toolkit";
import { topicSlice } from "./slices/topicSlice";
import { dataSlice } from "./slices/dataSlice";
export default configureStore({
    reducer:{
        topic : topicSlice.reducer,
        data : dataSlice.reducer
    }
})