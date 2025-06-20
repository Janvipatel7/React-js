import React from 'react'

const AddEmployess = () => {
    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-3xl font-semibold text-teal-800 my-10'>Add Employee Here......</h1>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 items-center content-center">
                        <div>
                            <label htmlFor="employeeName" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input type="text" id="employeeName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                            <input type="text" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="Flowbite" required />
                        </div>
                        <div>
                            <button type="button" className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                                 Submit
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </>
    )
}

export default AddEmployess