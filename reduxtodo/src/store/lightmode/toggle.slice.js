import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode : "light"
}

const modeSlice = createSlice({
    name : 'lightmode',
    initialState,
    reducers : { 
       change(state, payload)  {
        state.mode = state.mode == 'light' ? 'dark' : "light"
            
        }
    }
})

export const {change} = modeSlice.actions
export default modeSlice.reducer