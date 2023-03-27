import React, { useEffect, useState } from 'react'

const MultiStepForm = () => {
  const steps = ['Enter registration details', 'Enter property details'];
  const [toggleStep, setToggleStep] = useState(true)
  const [disabled, setDisabled] = useState(false)
  const [secondprop, setSecondProp] = useState(false)
  const toggleHandler = () => {
    setToggleStep(toggle => !toggle)
    setDisabled(true)
  }
  const backtoggleHandler = () => {
    setToggleStep(toggle => !toggle)
    setDisabled(false)
  }
  const addPropertyHandler = () => {
    setSecondProp(true)
  }
  console.log(steps.length)
  useEffect(()=>{

  },[])
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
        toggleStep ? <form className="w-full max-w-lg ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-password">
              Email 
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" />
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-city">
              State
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
      
            {/* <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-blue-900 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-900">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div> */}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="" />
          </div>
        </div>
     <div>
        <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
  onClick={toggleHandler}>
        Next Step
    </button>
    </div>
      </form> : 
<form className="w-full max-w-lg mb-4">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-first-name">
        District
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-blue-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-last-name">
        Local Body
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-password">
       Road Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" />
      {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  <div>
  <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
  onClick={backtoggleHandler}>
        Back
    </button>
    <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-3" 
 onClick={addPropertyHandler} 
 >
        Add another property
    </button>
    </div>
</form>

    }
{
    secondprop ? <form className="w-full max-w-lg my-6">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-first-name">
          District
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-last-name">
          Local Body
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-password">
         Road Name
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" />
        {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
      </div>
    </div>
    <div>
   
      <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
   py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-3"  
   >
          Add another property
      </button>
      </div>
  </form>: ""
}


</div>
    </>
  )
}

export default MultiStepForm