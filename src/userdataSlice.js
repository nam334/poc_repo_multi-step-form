import { createSlice } from "@reduxjs/toolkit"; 

const userDataSlice = createSlice({
    name:'user',
    initialState:{
        user:[]
    },
    reducers:{
        addUser:(state, action) => {
          // console.log(action.payload)
           state = state.user.splice(0,1,action.payload)
            //state.user.push(action.payload)
        },
        addCourseDetails:(state, action) => {
            state.user.push(action.payload)
        },
        delCourse:(state, action) => {
          console.log(action.payload)
            let arr = state?.user[0]
            console.log(typeof arr)
           state.user[0].courseDetails = state?.user[0]?.courseDetails.filter(course => course.ids !== action.payload )
        }
    }
})

export const {addUser, addCourseDetails, delCourse} = userDataSlice.actions 
export default userDataSlice.reducer