import React, { useEffect, useState } from 'react'

const GithubAPI = () => {
    const [userName , setuserName] = useState('');
    const [query , setQuery] = useState('');
    const [userData , setUserData] = useState('');

    useEffect(() =>{
        if(!query) return;
        const fetchUser = async ()=>{
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        console.log(data);
        }
        fetchUser();
    }, [query])

    
  return (
    <React.Fragment>
        <div className="container mx-auto">
            <input type="text" className='border-2 rounded py-1' onChange={(e) =>{
                setuserName(e.target.value);
            }}/>
            <button className='bg-violet-400 py-1 px-4 text-white mx-3 rounded' onClick={() =>{
                setQuery(userName)
            }}>Search</button>
        </div>


    </React.Fragment>
    
  )
}




export default GithubAPI