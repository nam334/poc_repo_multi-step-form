import React, { useEffect, useState } from 'react'
import AddNewCourse from './AddNewCourse';
import CourseDetails from './CourseDetails';

import UserRegistrationForm from './UserRegistrationForm';

const MultiStepForm = () => {
  const steps = ['Enter registration details', 'Enter property details'];
  const [toggleStep, setToggleStep] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [studentData, setStudentData] = useState('') 

  const toggleHandler = () => {
    setToggleStep(toggle => !toggle)
    setDisabled(true)
  }
  const backtoggleHandler = () => {
    setToggleStep(toggle => !toggle)
    setDisabled(false) 
  }
  
  console.log(steps.length)
  useEffect(()=>{
  },[])
  //console.log("Student data", studentData)
  return (
    <>
    
<ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
   {
    steps.map(((step,index) => (
        <li className="flex items-center" key={step}>
        <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border        
        border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {index + 1}
        </span>
        <span className={`hidden sm:inline-flex sm:ml-2 
         ${ index + 1 !== steps.length ? !disabled ?`text-blue-900` : `text-gray-300`  :  disabled ?`text-blue-900` : `text-gray-300`  }` }>{step}</span>
        <svg aria-hidden="true" className="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    )))
   }
</ol>
<div className='flex flex-col justify-center items-center h-screen'>
    {
        toggleStep ? <UserRegistrationForm toggleHandler={toggleHandler} setStudentData={setStudentData} /> : 
        <CourseDetails backtoggleHandler={backtoggleHandler}  setStudentData={setStudentData} 
        studentData={studentData} />
    }
{/* {
    secondprop ? <AddNewCourse/>: ""
} */}


</div>
    </>
  )
}

export default MultiStepForm