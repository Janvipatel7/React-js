import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployess = () => {
    const [input, setInput] = useState({
        name: "", salary: "", department: ""
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempObj = {};
        if (input.name.trim() === "") {
            tempObj.name = "Please Enter the Name";
        }
        setError(tempObj);

        if (Object.keys(tempObj).length > 0) {
            return;
        }

        const employeeDetail = { id: Date.now(), ...input };
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employeeDetail);

        localStorage.setItem("employees", JSON.stringify(employees));
        setInput({ name: "", salary: "", department: "" });
        navigate("/employess");
        console.log(employees);
    };

    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-3xl font-semibold text-teal-800 my-10'>Add Employee Here......</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center">
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                            <input
                                type="text"
                                id="name"
                                onChange={handleChange}
                                value={input.name}
                                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md ${error.name ? "border-red-300" : "border-gray-300"}`}
                                placeholder="John"
                                required
                            />
                            {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                        </div>
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                            <input
                                type="number"
                                id="salary"
                                onChange={handleChange}
                                value={input.salary}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md"
                                placeholder="Enter salary amount"
                                required
                            />
                        </div>
                        <div className='w-6/12 px-3 mb-6'>
                            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                            <select
                                id="department"
                                onChange={handleChange}
                                value={input.department}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 w-full p-2.5 transition-all duration-200 hover:bg-gray-100 focus:bg-white focus:shadow-md"
                            >
                                <option value="">Choose a Department</option>
                                <option value="1">Designing</option>
                                <option value="2">Development</option>
                                <option value="3">Finance</option>
                                <option value="4">Sales And Marketing</option>
                            </select>
                        </div>
                        <div className='w-6/12 px-3 mb-0'>
                            <button
                                type="submit"
                                className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEmployess;
