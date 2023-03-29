import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseDetails } from '../userdataSlice'



const AddNewCourse = ({setAddProperty,setSubmitDisabled, setDisabled, setStudentData, studentData}) => {
  const [course, setCourse] = useState('')
  const [duration, setDuration] = useState('')
  const [details, setDetails] = useState('')
  const [disablednewcourse, setDisabledNewCourse] = useState(true)
  const [submitdisablednewcourse, setSubmitDisabledNewCourse] = useState(true) 
  const courseDetails = useSelector(store => store?.user?.courseDetails)
 

  useEffect(()=>{
    setAddProperty(true)
  },[])
  const courseDetailsHandler = (e) => {
    e.preventDefault() 
    setAddProperty(false)
   
    let courses = [{course, duration, details}]
    console.log(courses)
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details} ]}))
  }
  const saveandsubmithandler = () => {
    setAddProperty(true)
    let courseDetails = [{course, duration, details}]
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details} ]}))
    setDisabledNewCourse(true)
    setSubmitDisabledNewCourse(true)
    setSubmitDisabled(true)
    setDisabled(true) 
  }
  useEffect(()=>{
    if(course!=='' && duration!=='' && details!==''){
      setSubmitDisabledNewCourse(false)
      setDisabledNewCourse(false)
    }
    else{
      setSubmitDisabledNewCourse(true)
      setDisabledNewCourse(true)
    }
  },[course, duration, details])

  useEffect(()=>{
    if( studentData.courseDetails.length === 3 )
    {
      setDisabledNewCourse(true)
      setSubmitDisabledNewCourse(true)
    }
  },[courseDetails,studentData])
  // passDataToParent(setDisabledNewCourse,setSubmitDisabledNewCourse)
  //passDataToParent(()=> ({setDisabledNewCourse,setSubmitDisabledNewCourse}))
  return (
    <>
    <div className='flex flex-col'>
    <form className="w-full max-w-lg my-6" onSubmit={courseDetailsHandler}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
          Course Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border  
        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" 
        type="text" placeholder="" value={course} onChange={(e)=> setCourse(e.target.value)}/>
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-blue-900 
        text-xs font-bold mb-2" htmlFor="grid-last-name">
        Duration
        </label>
        <input className="appearance-none block 
        w-full bg-gray-200 text-blue-900 border border-gray-200 rounded 
        py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id="grid-last-name" type="text" placeholder=""  
        value={duration} onChange={(e)=> setDuration(e.target.value)}
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide 
        text-blue-900 text-xs font-bold mb-2" htmlFor="grid-password">
        Why do you want this course?
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border 
        border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
        focus:border-gray-500" id="grid-password" type="text" placeholder=""   
        value={details} onChange={(e)=> setDetails(e.target.value)}
        />
      </div>
    </div>
    <div>
      </div>
      <div>
  <button type="submit" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline
    ${ disablednewcourse ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }`
    }>Save and add more courses</button>

    <button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ submitdisablednewcourse ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }`
    } onClick={saveandsubmithandler} >Save and submit (no more courses)</button>
    </div>
  </form>
  
    </div>
   
    </>
  )
}

export default AddNewCourse