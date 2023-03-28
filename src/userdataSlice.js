import { createSlice } from "@reduxjs/toolkit"; 

const userDataSlice = createSlice({
    name:'user',
    initialState:{
        user:[]
    },
    reducers:{
        addUser:(state, action) => {

        }
    }
})

export const {addUser} = userDataSlice.actions 
export default userDataSlice.reducer