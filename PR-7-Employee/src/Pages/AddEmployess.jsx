import React, { useState } from 'react'

const AddEmployess = () => {
    const [employee , setEmployee] = useState({
        name : "", salary : "" , department: ""
    });

    const handelChange = () => {
        setEmployee({...employee , [employee.target.id]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-3xl font-semibold text-teal-800 my-10'>Add Employee Here......</h1>
                <form>
                    <div className="flex flex-wrap items-center">
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="employeeName" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                            <input type="text" id="employeeName" onChange={handelChange} value={employee.value}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md" placeholder="John" required />
                        </div>
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                            <input type="number" id="salary" onChange={handelChange} value={employee.salary} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md" placeholder="Doe" required />
                        </div>
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                            <select id="department" onChange={handelChange} value={employee.department} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md">
                            <option value="">Choose a Department</option>
                            <option value="1">Designing</option>
                            <option value="2">Development</option>
                            <option value="3">Finance</option>
                            <option value="4">Sales And Marketing</option>
                        </select>
                        </div>
                        <div className='w-6/12 px-3 mb-0'>
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