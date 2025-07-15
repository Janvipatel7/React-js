import { useReducer } from "react"

const initialState = {
    users :[
        { id : 1 , name : "shreya"},
        { id : 2 , name : "anjan"},
        { id : 3 , name : "aryan"}
    ]
}

const reducer = (state , action) => {
  switch (action.type) {
    case  "CLEAR_ALL" :
        return {

          users : []
        }
  }
}

const App = () => {

  const [state , dispatch] = useReducer(reducer , initialState);

  const handleClear = () => {
      dispatch({ type : "CLEAR_ALL"})
  }
  
  const handleDelete = () => {

  }
  
  return (
    <div>
        {
          state.users.map((user) => {
             return <div key={user.id}>
                <h1>{user.name}</h1>
                <button onClick={handleDelete}>x</button>
              </div>
          })
        }

        <br></br>
        <button onClick={handleClear} >clear</button>
        <button>bxsjb</button>
    </div>
  )
}

export default App