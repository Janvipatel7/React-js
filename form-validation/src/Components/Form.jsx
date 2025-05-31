import React, { useState } from 'react'

const Form = () => {

    const [input , setInput] = useState({
        fname:'',lname:'', email:'',phone:'',password:'',confirmPassword:''
    })

    const [errors , setErrors] = useState({})

    const handleChange = (e) =>{
        console.log(e.target.value)
        setInput({...input , [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        let validationError = {}

        if(fname.value.trim() == ""){
            validationError.fname = "Please Enter valid First Name....";
        }

        if(lname.value.trim() == ""){
            validationError.lname = "Please Enter valid Last Name...."
        }

        if(password.value.trim() == "" || password.value <= 8){
            validationError.password = "Please Enter Strong Password...."
        }

        if(confirmPassword.value.trim() == "" || password.value == confirmPassword.value){
            validationError.confirmPassword = "Match Password...."
        }

        setErrors(validationError)
         
    }
    console.log(input)
    return (
        <>
            <div className='container mx-auto my-5 md:px-3 p-10'>
                <h1 className='text-4xl font-semibold text-center my-10'>Form Validation</h1>
                <form onClick={handleSubmit}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="fname" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input onChange={handleChange} value={input.fname}  type="text" id="fname" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ${errors.fname ? "bg-red-50 border border-red-500" : ""}` } placeholder="John" required />
                            {
                                errors.fname && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{errors.fname}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="lname" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                            <input onChange={handleChange} value={input.lname} type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Doe" required />
                            {
                                errors.lname && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{errors.lname}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                            <input onChange={handleChange} value={input.email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="john.doe@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input onChange={handleChange} value={input.phone} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input onChange={handleChange} value={input.password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required />
                            {
                                errors.password && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{errors.password}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                            <input onChange={handleChange} value={input.confirmPassword} type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="•••••••••" required />
                            {
                                errors.confirmPassword && <p class="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">{errors.confirmPassword}</p>
                            }
                        </div>

                    </div>


                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </>
    )
}

export default Form