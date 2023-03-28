import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../userdataSlice'

const AddThirdCourse = ({setStudentData, studentData}) => {
    const [course, setCourse] = useState('')
  const [duration, setDuration] = useState('')
  const [details, setDetails] = useState('')
  const dispatch = useDispatch()
  const courseDetailsHandler = (e) =>{
    e.preventDefault()
    let courses = [{course, duration, details}]
   
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details} ]}))

  }
  useEffect(()=>{
    studentData.courseDetails.length >= 2 && dispatch(addUser(studentData))
  },[studentData, dispatch])
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
      <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
      py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save
    </button>
  </form>
  
    </div>
    </>
  )
}

export default AddThirdCourse