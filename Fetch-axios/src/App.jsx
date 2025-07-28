import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:8175/users"

const App = () => {
  const [users, setUsers] = useState([]);
  const [input , setInput] = useState({
    name : "" , age : ""
  })

  const fetchUser = async () => {
    
    const res = await fetch(URL);
    const data = await res.json();

    setUsers(data);
  }
  
  useEffect(() => {
    fetchUser();
  })

  const handleAdd = async (e) => {
    await axios.post(`${URL}` , input)
    fetchUser()
    setInput({ name: "" , age: ""})
}

const handleDelete = async (id) => {

}
  return (
    <>
      <div>
          <form onSubmit={handleAdd}>
              <div>
                 <label htmlFor="name">Name :</label>
                 <input type="text" id="name" value={input.name} onChange={(e) => setInput({...input , [e.target.id]: e.target.value})}/>
              </div>
              <br />
              <div>
                 <label htmlFor="age">Age :</label>
                 <input type="text" id="age" value={input.age} onChange={(e) => setInput({...input , [e.target.id]: e.target.value})}/>
              </div>
              <br />
              <div>
                <button>Add</button>
              </div>
          </form>
      </div>
      {
        users.map((user) => {
            return <div key={user.id}>
               <h3>{user.name} - {user.age}</h3>
               <button>Edit</button>
               <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
        })
      }
    </>
  )
}

export default App