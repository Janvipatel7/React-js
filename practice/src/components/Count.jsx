import React, { useState } from 'react'

const Count = () => {

    const [count , setCount] = useState(1)
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn btn-danger' onClick={()=>{
            setCount(count + 1)
        }}>Click Me</button>
    </div>
  )
}

export default Count