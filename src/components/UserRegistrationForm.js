import React, { useEffect, useState } from 'react'

const UserRegistrationForm = ({toggleHandler}) => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [city, setCity] = useState('')
const [state, setState] = useState('')
const [zip, setZip] = useState('')
const [disabled, setDisabled] = useState(true)
const userSubmitToggler = (e) => {
 e.preventDefault()
 let studentData = {firstName, lastName, email, city, state, zip}
 console.log(studentData)
 setFirstName('')
 setLastName('')
 setEmail('')
 setCity('')
 setState('')
 setZip('')
}

useEffect(()=>{
    if(firstName!=='' && lastName!=='' && email!=='' && city!=='' && state!=='' && zip!=='' ){
        setDisabled(false)
    }
    else{
        setDisabled(true)
    }
},[firstName, lastName, email,city, state, zip])

  return (
   <>
   <form className="w-full max-w-lg" onSubmit={userSubmitToggler}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border 
             rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border
             border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500" id="grid-last-name" type="text" placeholder="" 
              value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-password">
              Email 
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900
             border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
              focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="" 
              value={email} onChange={(e)=> setEmail(e.target.value)}/>
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200
             text-blue-900 border border-gray-200 rounded py-3 px-4 
             leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city" type="text" placeholder="" 
              value={city} onChange={(e)=> setCity(e.target.value)} />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-city">
              State
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-900 border
             border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
              focus:border-gray-500" id="grid-city" type="text" placeholder="" 
              value={state} onChange={(e)=> setState(e.target.value)}/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" htmlFor="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full
             bg-gray-200 text-blue-900 border border-gray-200 rounded py-3 px-4 
             leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"
              type="text" placeholder=""  value={zip} onChange={(e)=> setZip(e.target.value)}/>
          </div>
        </div>
     <div>
     <button type="submit"className={`  text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2    
 ${ disabled ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`}`} >
        Save
    </button>
        <button type="button" className={`  text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2    
 ${ disabled ?`bg-blue-200 pointer-events-none` : `bg-blue-800 cursor-pointer`  }

 `}
  onClick={toggleHandler}>
        Next Step
    </button>
    </div>
      </form>
   </>
  )
}

export default UserRegistrationForm