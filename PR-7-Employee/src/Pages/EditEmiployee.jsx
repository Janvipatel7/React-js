import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";

export const EditEmiployee = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "", salary: "", department: ""
    });
     
    const [error, setError] = useState({});

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employees")) || []
        const data = employees.find((emp) => {
            return emp.id == id;
        })

        if (data) {
            setInput(data)
        } else {
            toast.error("No Employee Found With This ID....")
            navigate("/employees")
        }

    }, [id])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

     const handleUpdate = (e) => {
        e.preventDefault();

         let tempObj = {};
        if (input.name.trim() === "") {
            tempObj.name = "Please Enter the Name";
        }
        setError(tempObj);

        if (Object.keys(tempObj).length > 0) {
            return;
        }

         const employees = JSON.parse(localStorage.getItem("employees")) || [];

         const updatedData = employees.map((emp) => {
                return emp.id == id ? {
                    ...emp, ...input
                } : emp;
         })

         localStorage.setItem("employees" , JSON.stringify(updatedData));
         toast.success("Employee Details Updated Successfully....")
         setInput({  name: "", salary: "", department: ""});
         navigate('/employees')
    };


    return (
        <div className="container mx-auto">
            <h1 className='text-3xl font-semibold text-teal-800 my-10'>Edit Employee Here......</h1>
            <form onSubmit={handleUpdate}>
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
                            Update
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
