import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseDetails, delCourse } from '../userdataSlice'
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddNewCourse = ({setAddProperty,setSubmitDisabled, setDisabled, setStudentData, studentData}) => {
  const [course, setCourse] = useState('')
  const [duration, setDuration] = useState('')
  const [details, setDetails] = useState('')
  const [disablednewcourse, setDisabledNewCourse] = useState(true)
  const [submitdisablednewcourse, setSubmitDisabledNewCourse] = useState(true) 
  const courseDetails = useSelector(store => store?.user?.courseDetails)
  const [id, setId] = useState('')
  const [deletecourse, setDeleteCourse] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=>{
    setAddProperty(true)
  },[])
  const courseDetailsHandler = (e) => {
    e.preventDefault() 
    setDeleteCourse(false)
    setAddProperty(false)
    let ids = uuidv4()
      setId(ids)
    let courses = [{course, duration, details, ids}]
    console.log(courses)
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details,ids} ]}))
  }
  const saveandsubmithandler = () => {
    setAddProperty(true)
    let ids = uuidv4()
    setId(ids)
    let courseDetails = [{course, duration, details, ids}]
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details,ids} ]}))
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
      setDeleteCourse(true)
    }
  },[course, duration, details])

  const deleteHandler = (id) => {
    console.log(id)
  
    dispatch(delCourse(id))
    setCourse('')
    setDuration('')
    setDetails('')
  }

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
    }>Save only</button>

    <button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ submitdisablednewcourse ?`bg-emerald-200 pointer-events-none` : `bg-emerald-800 cursor-pointer`  }`
    } onClick={saveandsubmithandler} >Save and submit</button>

<Popup
    trigger={<button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ deletecourse ?`bg-red-200 pointer-events-none` : `bg-red-800 cursor-pointer`  }`
    }>Delete course</button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="block uppercase tracking-wide 
        text-blue-900 text-md font-bold mb-2 p-2">Do you really want to delete the course?</div>
        <div className="content">
          <button className='text-white text-sm
    py-1 px-4 rounded focus:outline-none focus:shadow-outline mx-2 bg-green-600' 
    onClick={()=>deleteHandler(id)}>Yes</button>
          <button className='text-white text-sm
    py-1 px-4 rounded focus:outline-none focus:shadow-outline mx-2 bg-red-600' 
    onClick={close}
    >No</button>
        </div>
      </div>
    )} 
  </Popup>


    </div>
  </form>
  
    </div>
   
    </>
  )
}

export default AddNewCourse