import { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const URL = "http://localhost:8175/users"

      try {
        const res = await fetch(URL);
        const data = await res.json();
        setUsers(data);
      } catch{
        console.log(err)
      }
    }

    fetchUser()
  }, [])
  return (
    <div>
        {
          users.map((user) => {
            return <div>
              <h1>{user.name}</h1>
              <p>{user.age}</p>
            </div>
          })
        }
    </div>
  )
}

export default App