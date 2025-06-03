import React, { useState } from 'react'

const Review = () => {
    const [input, setInput] = useState({
        name: '', message: '', date: '', rate: ''
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let reviewError = {}

        if (name.value.trim() == "") {
            reviewError.name = "Please Enter Valid Name...."
        }
        if (message.value.trim() == "") {
            reviewError.name = "Please Enter Valid Name...."
        }
    }
    console.log(input)

    return (
        <>
            <div className='container mx-auto my-5 md:p px-4'>
                <form onClick={handleSubmit} className=" mx-auto bg-white border p-8 rounded-xl shadow-2xl max-w-lg w-full">

                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                        <input type="text" onChange={handleChange} id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" onChange={handleChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-50" placeholder="Leave a comment..." defaultValue={""} />
                    </div>
                    <div className='grid gap-6 mb-6 md:grid-cols-2'>
                        <div className="mb-5">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date</label>
                            <input type="date" id="date" onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label for="rate" class="block mb-2 text-sm font-medium text-gray-900 ">Rate</label>
                            <select id="rate" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value={""}>----Select Rate----</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button type="submit" className="text-white bg-[#b4857d] hover:bg-white hover:text-[#b4857d] transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 focus:border focus:border-[#b4857d] border border-[#b4857d] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Submit
                        </button>
                    </div>

                </form>
            </div>


        </>
    )
}

export default Review