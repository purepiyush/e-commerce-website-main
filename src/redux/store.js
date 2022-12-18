import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice';
const store = configureStore({
    reducer: basketReducer
})

export default store;