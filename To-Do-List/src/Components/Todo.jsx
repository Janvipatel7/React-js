import { useRef, useState } from 'react'
import Tabletask from './TableTask';

const Todo = () => {

  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);
  const [filter, setFilter] = useState("all");



  const addTask = () => {
    if (text.trim() == "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      taskName: text,
      iscompleted: false,
    }
    setTask([...task, newTask]);
    inputRef.current.value = "";
    setText("")
  }



  return (
    <>
      <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#d4edfe" }}>
        <h1 className="text-center mt-8 text-4xl font-bold text-[#224ebd] drop-shadow-lg">Todo List </h1>
        <div className="container mx-auto mt-8">
          <div className="w-full overflow-x-auto md:w-8/12 lg:w-6/12 mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <div className="border border-gray-300 p-5 rounded-xl bg-white">
              <form className="my-6">
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-full max-w-xl mx-auto shadow-sm focus-within:ring focus-within:ring-blue-200 transition duration-200">
                  <input ref={inputRef} onChange={(e) => setText(e.target.value)}
                    type="text"
                    value={text}
                    className="flex-grow bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-sm"
                    placeholder="Enter your task..."
                    required
                  />
                  <button type="button"  onClick={addTask}
                    className="ml-2 bg-gradient-to-tr from-blue-700 to-blue-400 text-white w-10 h-10 rounded-xl shadow-md hover:scale-105 transition duration-200 flex items-center justify-center">
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
              </form>
            </div>


            <div className="flex justify-evenly gap-4 mt-5">
              <button onClick={() => setFilter("all")} className="w-40 p-2  bg-gradient-to-tr from-blue-900 to-blue-500 text-white rounded-lg font-semibold">
                All
              </button>
              <button onClick={() => setFilter("pending")} className="w-40 p-2 bg-gradient-to-tr from-blue-900 to-blue-500 text-white rounded-lg font-semibold">
                Pending
              </button>
              <button onClick={() => setFilter("completed")} className="w-40 p-2 bg-gradient-to-tr from-blue-900 to-blue-500 text-white rounded-lg font-semibold">
                Completed
              </button>
            </div>


            <div className="mt-6n ">
              <Tabletask tasks={task} setTasks={setTask} filter={filter} />
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default Todo;