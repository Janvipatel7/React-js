import React, { useRef, useState } from 'react'

const Inputref = () => {
  const [name, setName] = useState(" ");
  let inputref = useRef(null);

  return (
    <React.Fragment>
      <h1>Example 1</h1>
      <input ref={inputref} type="text" onChange={(e) => {
        setName(e.target.value)
      }} />

      
      <h2>{name}</h2>
      <button onClick={() => {
        inputref.current.value = ""
      }}>Click Me</button>
    </React.Fragment>
  )
}

export default Inputref