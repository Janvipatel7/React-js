import { useEffect, useRef, useState } from "react"

const App = () => {

  const inputRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({
    name: '', age: ''
  })

  const fetchUser = async () => {
    const URL = "http://localhost:8175/users"

    const res = await fetch(URL);
    const data = await res.json();
    setUsers(data);

  }
  useEffect(() => {
    fetchUser()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault();

    if (inputRef.current) {
      await fetch(`http://localhost:8175/users/${inputRef.current}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(input)
      })
      fetchUser()
      setInput({ name: '', age: '' })
      inputRef.current = null;
      return;
    }
    await fetch("http://localhost:8175/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(input)
    });
    setInput({ name: '', age: '' })
    fetchUser();
  }

  const handleDelete = async (id) => {
    const deleteId = await fetch(`http://localhost:8175/users/${id}`, {
      method: "DELETE"
    })
    fetchUser()
  }

  const handleEdit = async (id) => {
    const newUser = await fetch(`http://localhost:8175/users/${id}`)

    const data = await newUser.json();
    setInput(data)
    inputRef.current = id
  }
  console.log(input);
  return (

    <div>
      <div>
        <form onSubmit={handleAdd}>
          <div>
            <label htmlFor="name">Name </label>
            <input type="text" id="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
          </div>

          <br></br>
          <div>
            <label htmlFor="age">Age </label>
            <input type="text" id="age" value={input.age} onChange={(e) => setInput({ ...input, [e.target.id]: e.target.value })} />
          </div>

          <br></br>
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
      {
        users.map((user) => {
          return <div key={user.id}>
            <h3>{user.name} - {user.age}</h3>
            <button onClick={() => handleEdit(user.id)}>edit</button>
            <button onClick={() => handleDelete(user.id)}>delete</button>
          </div>
        })
      }
    </div>
  )
}

export default App