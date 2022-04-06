import { configureStore } from "@reduxjs/toolkit";
import  allDataReducer from './allSlice'
const store=configureStore({
    reducer:{
        allData:allDataReducer
    }
})

export default store