import React, { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState({
        name: '', email: '', phone: '', password: '', confirmPassword: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationError = {}

        if (fname.value.trim() == "") {
            validationError.fname = "Please Enter valid First Name....";
        }

        if (lname.value.trim() == "") {
            validationError.lname = "Please Enter valid Last Name...."
        }

        if (password.value.trim() == "" || password.value <= 8) {
            validationError.password = "Please Enter Strong Password...."
        }

        if (confirmPassword.value.trim() == "" || password.value == confirmPassword.value) {
            validationError.confirmPassword = "Match Password...."
        }

        setErrors(validationError)
    }
    return (
        <>
            <div className='container mx-auto my-5 md:px-3 p-10'>
                <h1 className='text-4xl font-semibold text-center my-10'>Form Validation</h1>
                <form onClick={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input onChange={handleChange} value={input.name} type="text" id="name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 `} placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                            <select id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value={""}>Choose a course</option>
                                <option value="1">Full Stack Devlopment</option>
                                <option value="2">UI/UX Design</option>
                                <option value="3">Data Anayltics</option>
                            </select>
                        </div>
                        <div>
                            <div className="flex">
                                <div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio"  name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 ">Default</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input  id="default-radio-2" type="radio"  name="gender" className="w-4 h-4 bg-gray-100 border-gray-300 0 " />
                                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 ">Checked</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input onChange={handleChange} value={input.email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5" placeholder="john.doe@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input onChange={handleChange} value={input.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5" placeholder="•••••••••" required />

                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input onChange={handleChange} value={input.confirmPassword} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5" placeholder="•••••••••" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form >
            </div>
        </>
    )
}

export default Form