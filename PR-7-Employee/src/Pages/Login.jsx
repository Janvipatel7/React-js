import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = ({ setIsLoggedin }) => {
    const [input, setInput] = useState({
        email: "", password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            localStorage.setItem("isLoggedin", JSON.stringify(true))
            setIsLoggedin(true)
            navigate("/employess")
            toast.success("Logged In Succesfully..")
        } else {
            toast.error("Email Or Password Not Valid!!!!")
        }
    }

    return (
        <>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600  block w-full p-2.5 " required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-600">Forgot password?</a>
                                </div>

                                <div className="flex items-center justify-between">
                                </div>
                                <button type="submit" className="w-full text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login