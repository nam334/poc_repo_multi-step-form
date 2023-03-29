import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseDetails, addUser} from '../userdataSlice'
import AddNewCourse from './AddNewCourse'
import AddThirdCourse from './AddThirdCourse'

const CourseDetails = ({backtoggleHandler, setStudentData, studentData}) => {
const [course, setCourse] = useState('')
const [duration, setDuration] = useState('')
const [details, setDetails] = useState('')
const [disabled, setDisabled] = useState(true)
const [addproperty, setAddProperty] = useState(true)
const [secondprop, setSecondProp] = useState(false)
const [thirdprop, setThirdProp] = useState(false)
const [submitdisabled, setSubmitDisabled] = useState(true)
//const courses = useSelector(store => store.)
const dispatch = useDispatch()
//console.log("Student", studentData.courseDetails.length)
const courseDetailsHander = (e) => {
 e.preventDefault()
 setAddProperty(false)
 let courseDetails = [{course, duration, details}]
 //dispatch(addCourseDetails({courseDetails}))
 setStudentData(prevState => ({...prevState, courseDetails}))
}
const addPropertyHandler = () => {
  setSecondProp(true)
  //studentData!=='' && 
  studentData.courseDetails.length >= 2 && setThirdProp(true)
}

const saveandsubmithandler = () => {
  setSecondProp(false)
  let courseDetails = [{course, duration, details}]
  setStudentData(prevState => ({...prevState, courseDetails}))
  setSubmitDisabled(true)
  setDisabled(true) 
}
useEffect(()=>{
  if(course!=='' && duration!=='' && details!==''){
    setDisabled(false)
    setSubmitDisabled(false)
  }
  else{
    setDisabled(true)
    setSubmitDisabled(true)
  }
},[course, duration, details])

//console.log(course)
  return (
    <>
   <div className='flex flex-col'>
  <div>
  <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
  onClick={backtoggleHandler}>
        Back
    </button>
   <button type="button" className={`text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4 w-44 justify-end mx-2 
 ${ addproperty ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }
 `}
 onClick={addPropertyHandler} 
 >
        Add another course
    </button>
  </div>
  
    <form className="w-full max-w-lg mb-4" onSubmit={courseDetailsHander}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Course Name
      </label>
      <input 
      className="appearance-none block w-full bg-gray-200 text-blue-900 border  
      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="grid-first-name"
       type="text" placeholder="" value={course} 
       onChange={(e)=> setCourse(e.target.value)} />
     
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-last-name">
       Duration
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-blue-900 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-last-name" type="text" placeholder="" 
        value={duration} onChange={(e)=> setDuration(e.target.value)} />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-password">
       Why do you want this course?
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-blue-900 border
       border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500" id="grid-password" type="text" placeholder=""  
        value={details} onChange={(e)=> setDetails(e.target.value)}/>
    
    </div> 
  </div>
  <div>
  <button type="submit" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline
    ${ disabled ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }`
    }>Save and add more courses</button>

    <button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ submitdisabled ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }`
    } onClick={saveandsubmithandler} >Save and submit (no more courses)</button>
    </div>
   </form>
   {
    secondprop ? <AddNewCourse setAddProperty={setAddProperty} studentData={studentData} 
    setThirdProp={setThirdProp} 
     setStudentData={setStudentData} />: ""
  }
   {
    thirdprop ? <AddThirdCourse setAddProperty={setAddProperty} setThirdProp={setThirdProp} studentData={studentData}
     setStudentData={setStudentData} />: ""
  }
  </div>
</>
  )
}

export default CourseDetails