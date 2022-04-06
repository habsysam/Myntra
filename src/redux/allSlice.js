import { createSlice } from "@reduxjs/toolkit";

const allSlice=createSlice({
    name:'allData',
    initialState:{
        login:false
    },
    reducers:{
        changeLoginHover:(state,action)=>{
            state.login=action.payload
        }
    }
})

export const {changeLoginHover}=allSlice.actions
export default allSlice.reducer