import React, { useRef, useState } from 'react';

const Review = () => {
    const [input, setInput] = useState({
        name: '', message: '', date: '', rate: ''
    });

    const [errors, setErrors] = useState({});

    const formRef = useRef(null);

    const[card , setCard] = useState(false);

    const[allData , setAllData] = useState([]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let reviewError = {};

        if (input.name.trim() === "") {
            reviewError.name = "Enter Valid Name!";
        }
        if (input.message.trim() === "") {
            reviewError.message = "Enter Valid Review!";
        }
        if (input.date.trim() === "") {
            reviewError.date = "Select Valid Date!";
        }
        if (input.rate.trim() === "") {
            reviewError.rate = "Select Rating!";
        }

        setErrors(reviewError);
        if(Object.keys(reviewError).length === 0){
            setCard(true);
            setAllData([...allData , input]);
        }
       
    };

    return (
        <div className='container mx-auto my-5 px-4'>
            <form ref={formRef} onSubmit={handleSubmit} className="mx-auto bg-white border p-8 rounded-xl shadow-2xl max-w-lg w-full">
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                    <input type="text" value={input.name} onChange={handleChange} id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Name" />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" value={input.message} onChange={handleChange} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Leave a comment..." />
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                        <input type="date" id="date" value={input.date} onChange={handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        {errors.date && <p className="mt-2 text-sm text-red-600">{errors.date}</p>}
                    </div>

                    <div>
                        <label htmlFor="rate" className="block mb-2 text-sm font-medium text-gray-900">Rate</label>
                        <select id="rate" value={input.rate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                            <option value="">----Select Rate----</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        {errors.rate && <p className="mt-2 text-sm text-red-600">{errors.rate}</p>}
                    </div>
                </div>

                <div className='mt-5'>
                    <button type="submit" className="text-white bg-[#b4857d] hover:bg-white hover:text-[#b4857d] transition-all duration-300 ease-in-out border border-[#b4857d] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Submit
                    </button>
                </div>
            </form>

            <div>
                <div className='flex flex-wrap gap-5 justify-center'>
                    {allData.map((review , index) =>{
                        
                    })}
                </div>
            </div>
        </div>
    );
};

export default Review;
