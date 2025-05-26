import React, { useEffect, useRef, useState } from 'react'
import domtoimage from 'dom-to-image';

const GithubAPI = () => {
    const captureRef = useRef(null);


    const [userName, setuserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState('');


    const handleCaptureClick = () => {
        if (captureRef.current) {
            domtoimage.toPng(captureRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'github-user.png';
                    link.click();
                })
                .catch((error) => {
                    console.error('Error capturing image:', error);
                });
        }
    };

    useEffect(() => {
        if (!query) return;
        const fetchUser = async () => {
            const res = await fetch(`https://api.github.com/users/${query}`);
            const data = await res.json();
            setUserData(data);
            console.log(data);
        }
        fetchUser();
    }, [query])


    return (
        <React.Fragment>
            <React.Fragment>
                <div className="container mx-auto flex justify-center items-center pt-6">
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-white font-semibold text-xl my-6">GitHub Username</h1>
                            <span className="text-white">
                                <i className="bi bi-github"></i>
                            </span>
                        </div>
                        <div className="relative py-4">
                            <input type="text"className="text-white w-full py-3 pl-4 bg-[#251e37] rounded-3xl focus:outline-none" onChange={(e) => {setuserName(e.target.value)}}/>
                            <button className="bg-[#02bfcf] py-2 px-4 text-white  rounded-3xl absolute top-5 right-2 cursor-pointer" onClick={() => { setQuery(userName) }}>Search</button>
                        </div>
                        <div className='bg-[#251e37] rounded-2xl px-10 py-3 '>
                            <div className="w-full py-5  pl-4 pr-4 rounded-lg">
                                <div className="bg-[#2c2541] text-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative" ref={captureRef}>
                                    <div className="flex justify-center p-4">
                                        <img
                                            src={userData.avatar_url || "/public/image/octocat.webp"}
                                               alt="Profile"
                                            className="w-32 h-32 rounded-full p-1 border-2  border-[#02bfcf] shadow-md" />
                                    </div>
                                    <div className="text-center mt-4">
                                                <h2 className="text-2xl font-semibold">{userData.name}</h2>
                                        <p className="text-md text-gray-400">{userData.location}</p>
                                        <p className="text-md text-gray-400">{userData.bio}</p>

                                    </div>
                                    <div className="flex justify-around mt-6 gap-5 text-center">
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.public_repos}</h4>
                                            <p className="text-md text-gray-400">Repos</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.followers}</h4>
                                            <p className="text-md text-gray-400">Followers</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.following}</h4>
                                            <p className="text-md text-gray-400">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-6 gap-3">

                                    <button className=" bg-[#02bfcf] text-[#fff] px-4 py-2 rounded-xl hover:bg-[transparent] hover:outline hover:text-[#02bfcf] transition cursor-pointer"
                                        onClick={handleCaptureClick}>
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </React.Fragment>


        </React.Fragment >

    )
}




export default GithubAPI