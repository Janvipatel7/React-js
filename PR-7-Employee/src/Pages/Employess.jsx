import React from 'react'
import EmployessTable from '../Components/EmployessTable'
import { useNavigate } from 'react-router-dom'

const Employess = () => {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className="flex items-center justify-between my-10">
                        <h1 className="text-3xl font-semibold text-teal-800">Employees Details</h1>
                        <button onClick={() => navigate("/add-employess")} type="button" className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                            <i className="ri-add-fill"></i>Add Employess
                        </button>
                    </div>
                    <div>
                        <EmployessTable />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employess