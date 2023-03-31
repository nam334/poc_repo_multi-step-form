import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, delCourse } from '../userdataSlice'
import { v4 as uuidv4 } from 'uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddThirdCourse = ({setStudentData, studentData, setAddProperty, setDisabled, setSubmitDisabled}) => {
  const [course, setCourse] = useState('')
  const [duration, setDuration] = useState('')
  const [details, setDetails] = useState('')
  const [disabledthirdcourse, setDisabledThirdCourse] = useState(true)
  const [submitdisabledthirdourse, setSubmitDisabledThirdCourse] = useState(true) 
  const [deletecourse, setDeleteCourse] = useState(false)
  const [id, setId] = useState('')

  const dispatch = useDispatch()
  const courseDetailsHandler = (e) =>{
    e.preventDefault()
   
    let id = uuidv4();
    let courses = [{course, duration, details, id}]
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details} ]}))

  }
  const saveandsubmithandler = () => {
    setAddProperty(true)
   // setDeleteCourse(false)
   let ids = uuidv4()
   setId(ids)
    let courseDetails = [{course, duration, details}]
    setStudentData(prevState => ({...prevState,courseDetails:[...prevState.courseDetails,{course, duration, details, ids} ]})) 
    setDisabledThirdCourse(true)
    setSubmitDisabledThirdCourse(true)
    setDisabled(true)
    setSubmitDisabled(true)
    // setSubmitDisabled(true)
    // setDisabled(true) 
  }

  const deleteHandler = (id) => {
    console.log(id)
  
    dispatch(delCourse(id))
    setCourse('')
    setDuration('')
    setDetails('')
  }

  useEffect(()=>{
    studentData.courseDetails.length >= 2 && dispatch(addUser(studentData))
  },[studentData, dispatch])

  useEffect(()=>{
    if(course!=='' && duration!=='' && details!==''){
      setDisabledThirdCourse(false)
      setSubmitDisabledThirdCourse(false)
      setDeleteCourse(false)
    }
    else{
      setDisabledThirdCourse(true)
      setSubmitDisabledThirdCourse(true)
      setDeleteCourse(true)
    }
  },[course, duration, details])

  return (
    <>
     <div className='flex flex-col'>
    <form className="w-full max-w-lg my-6" >
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
  {/* <button type="submit" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline
    ${ disabledthirdcourse ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }`
    }>Save and add more courses</button> */}

    <button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ submitdisabledthirdourse ?`bg-emerald-200 pointer-events-none` : `bg-emerald-800 cursor-pointer`  }`
    } onClick={saveandsubmithandler} >Save and submit (no more courses)</button>

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

export default AddThirdCourse