import React, { useRef, useState } from 'react'

const RefCount = () => {
    const [count, setcount] = useState(0);
    let countref = useRef(1)

    return (
        <React.Fragment>
            <h1>Example Re-Render</h1>

            <h2>{count}</h2>
            <h3>Render Count := {countref.current}</h3>
            <button onClick={() => {
                countref.current++;
                setcount(count + 1)
            }}>Click</button>
        </React.Fragment>
    )
}

export default RefCount