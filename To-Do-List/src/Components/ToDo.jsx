import React from 'react'

const ToDo = () => {
  return (
    <div>
      <h1 className='text-center text-2xl my-3'>✅ To Do List</h1>
      <div className="container mx-auto">
        <div className="w-8/12 mx-auto">
          <form className="flex items-center mx-auto">
            <div className='flex mx-auto'>
              <div className="relative">
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5" placeholder="Add Your Task..." required />
              </div>
              <button type="submit" className=" items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Search</button>
            </div>

          </form>

        </div>


      </div>


    </div>
  )
}

export default ToDo