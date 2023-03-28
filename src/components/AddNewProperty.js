import React from 'react'

const AddNewProperty = () => {
  return (
    <>
    <div className='flex flex-col'>
    <form className="w-full max-w-lg my-6">
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-blue-900 text-xs font-bold mb-2" for="grid-first-name">
          District
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-blue-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
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
   
     
      </div>
      <button type="button" className="bg-blue-800 hover:bg-blue-900 text-white text-sm
 py-2 px-4 rounded focus:outline-none focus:shadow-outline"  
>
        Save
    </button>
  </form>
    </div>
   
    </>
  )
}

export default AddNewProperty