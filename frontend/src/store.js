import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./redux/authSlice"
const store = configureStore({
    reducer: {
        role: authSlice
    }
})
export default store