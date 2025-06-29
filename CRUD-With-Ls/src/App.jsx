import { useEffect, useState } from "react"
import Form from "./components/Form"
import UserList from "./components/UserList";



const App = () => {
    const [users , setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users , user])
    }

    const deleteUser = (userId) =>{
        const newUsers = users.filter((user) => {
          return  user.id !== userId;
        })
        setUsers(newUsers);
    }

    useEffect(() => {
       let oldUsers = JSON.parse(localStorage.getItem("userData")) || [];
       setUsers(oldUsers);
    }, []);
    useEffect(() => {
      localStorage.setItem("userData" , JSON.stringify(users));
    } , [users])
  return (
    <>
        <Form addUser={addUser}/>
        <UserList users={users} deleteUser={deleteUser}/>
    </>
  )
}

export default App