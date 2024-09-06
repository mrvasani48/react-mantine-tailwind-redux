import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        is_login:false
    },
    reducers:{
        SET_LOGIN:(state,action)=>{
           state.is_login=action.payload
        },
        SET_LOGOUT:(state,action)=>{
            state.is_login=action.payload
         },
    }
})

export const { SET_LOGIN, SET_LOGOUT} = authSlice.actions;

export default authSlice.reducer;
