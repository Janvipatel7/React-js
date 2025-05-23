import React, { useEffect, useState } from 'react'

const GithubAPI = () => {
    const [userName, setuserName] = useState('');
    const [query, setQuery] = useState('');
    const [userData, setUserData] = useState('');

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
                <div>
                    <div className="container mx-auto flex justify-center items-center pt-6">
                        <div>

                            <div className="flex justify-between items-center">
                                <h1 className="text-white font-semibold text-xl my-6">GitHub Username</h1>
                                <span className="text-white">
                                    <i className="bi bi-github"></i>
                                </span>
                            </div>


                            <div className="relative py-4">
                                <input
                                    type="text"
                                    className="text-white w-full py-3 pr-24 pl-4 bg-[#251e37] rounded-lg focus:outline-none"
                                    onChange={(e) => {
                                        setuserName(e.target.value);
                                    }}
                                />
                                <button
                                    className="bg-[#02bfcf] py-2 px-4 text-white mx-3 rounded-3xl absolute top-5 right-2"
                                    onClick={() => {
                                        setQuery(userName);
                                    }}
                                >
                                    Search
                                </button>
                            </div>


                            <div className="w-full py-3  pl-4">
                                <div className="bg-[#2c2541] text-white p-6 rounded-2xl shadow-lg max-w-sm w-full relative">
                                    <div className="flex justify-center">
                                        <img
                                            src={userData.avatar_url || "/public/image/octocat.webp"}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full border-4 border-[#1f1b2e] shadow-md"
                                        />
                                    </div>


                                    <div className="text-center mt-4">
                                        <h2 className="text-xl font-semibold">{userData.name || "Ricky Park"}</h2>
                                        <p className="text-sm text-gray-400">{userData.location || "New York"}</p>
                                        <p className="mt-2 text-sm text-gray-300">
                                            {userData.bio || "User interface designer and front-end developer"}
                                        </p>
                                    </div>

                                    <div className="flex justify-around mt-6 text-center">
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.public_repos}</h4>
                                            <p className="text-sm text-gray-400">Repos</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.followers}</h4>
                                            <p className="text-sm text-gray-400">Followers</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{userData.following}</h4>
                                            <p className="text-sm text-gray-400">Following</p>
                                        </div>
                                    </div>


                                    <div className="flex justify-center mt-6 gap-3">
                                        <button className="bg-[#02bfcf] text-white px-4 py-2 rounded-xl hover:bg-[#00a3b0] transition">
                                            Message
                                        </button>
                                        <button className="border border-[#02bfcf] text-[#02bfcf] px-4 py-2 rounded-xl hover:bg-[#02bfcf] hover:text-white transition">
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-white text-center mt-4">
                    <h2>{userData.name}</h2>
                    <img src={userData.avatar_url} alt="" width={100} className="mx-auto" />
                </div>
            </React.Fragment>


        </React.Fragment >

    )
}




export default GithubAPI