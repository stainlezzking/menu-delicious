import {createSlice} from "@reduxjs/toolkit"


const UIREDUCER = createSlice({
    //  create slice helps you mutate the state
    name : "UIreducer",
    initialState : {
        homeRoute : false
    },
    reducers : {
      
        switchRoute : (state)=>{
            state.homeRoute = !state.homeRoute
        }
    }
})

export const {switchRoute} = UIREDUCER.actions

export default UIREDUCER.reducer