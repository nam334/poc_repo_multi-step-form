import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourseDetails, addUser, delCourse, deleteCourse} from '../userdataSlice'
import AddNewCourse from './AddNewCourse'
import AddThirdCourse from './AddThirdCourse'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';

const CourseDetails = ({backtoggleHandler, setStudentData, studentData}) => {
const [course, setCourse] = useState('')
const [duration, setDuration] = useState('')
const [details, setDetails] = useState('')
const [disabled, setDisabled] = useState(true)
const [addproperty, setAddProperty] = useState(true)
const [secondprop, setSecondProp] = useState(false)
const [thirdprop, setThirdProp] = useState(false)
const [id, setId] = useState('')
const [submitdisabled, setSubmitDisabled] = useState(true)
const [deletecourse, setDeleteCourse] = useState(false)
const iniCourse = useSelector(store => store.user)


//const courses = useSelector(store => store.)
const dispatch = useDispatch()

const courseDetailsHander = (e) => {
 e.preventDefault()
 setAddProperty(false)
 let ids = uuidv4()
 setId(ids)
 let courseDetails = [{course, duration, details, ids}]
 console.log(courseDetails)
 //dispatch(addCourseDetails({courseDetails}))
 setStudentData(prevState => ({...prevState, courseDetails}))
}
const addPropertyHandler = () => {
  setSecondProp(true)
  //studentData!=='' && 
  studentData.courseDetails.length >= 2 && setThirdProp(true)
}
console.log(id)
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

const deleteHandler = (id) => {
  console.log(id)

  dispatch(delCourse(id))
 
}


  return (
    <>
   <div className='mt-10 flex flex-col justify-center items-center'>
  <div>
  <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
  onClick={backtoggleHandler}>
        Back
    </button>
   <button type="button" className={`text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4 w-44 justify-end mx-2 
 ${ addproperty ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }
 `} onClick={addPropertyHandler} 
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
    }>Save only</button>

    <button type="button" className={` text-white text-sm
    py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2
    ${ submitdisabled ?`bg-emerald-200 pointer-events-none` : `bg-emerald-800 cursor-pointer`  }`
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
   {
    secondprop ? <AddNewCourse setAddProperty={setAddProperty} studentData={studentData}  
    setThirdProp={setThirdProp} setDisabled={setDisabled} setSubmitDisabled={setSubmitDisabled}
     setStudentData={setStudentData} />: ""
  }
   {
    thirdprop ? <AddThirdCourse  setAddProperty={setAddProperty} setThirdProp={setThirdProp} studentData={studentData}
  
    
     setStudentData={setStudentData} setDisabled={setDisabled} setSubmitDisabled={setSubmitDisabled}/>: ""
  }
  </div>
</>
  )
}

export default CourseDetails