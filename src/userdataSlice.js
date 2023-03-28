import { createSlice } from "@reduxjs/toolkit"; 

const userDataSlice = createSlice({
    name:'user',
    initialState:{
        user:[]
    },
    reducers:{
        addUser:(state, action) => {
           // console.log(action.payload)
            state.user.push(action.payload)
        },
        addCourseDetails:(state, action) => {
            state.user.push(action.payload)
        }
    }
})

export const {addUser, addCourseDetails} = userDataSlice.actions 
export default userDataSlice.reducer