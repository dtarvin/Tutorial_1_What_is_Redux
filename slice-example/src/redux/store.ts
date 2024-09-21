import { configureStore } from "@reduxjs/toolkit";
import nameReducer from'@/redux/slices/nameSlice';
import counterReducer from '@/redux/slices/counterSlice';

const store = configureStore({
    reducer: {
        name: nameReducer,
        counter: counterReducer,
    }
})

export default store;