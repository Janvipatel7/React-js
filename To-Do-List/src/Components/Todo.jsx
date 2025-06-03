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
      <div className="min-h-screen py-10 px-4" style={{ backgroundColor: "#ccecf6" }}>
        <h1 className="text-center mt-8 text-4xl font-bold text-[#262d75] drop-shadow-lg">Todo List </h1>
        <div className="container mx-auto mt-8">
          <div className="w-full overflow-x-auto md:w-8/12 lg:w-6/12 mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <div className='border border-gray-300 p-5'>
              <form className="">
                <input
                  ref={inputRef} onChange={(e) => setText(e.target.value)}
                  type="text" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  placeholder="Enter Your Task" required />
                <button
                  onClick={addTask}
                  type="button"
                  className="px-6 py-2 mt-2 w-full bg-[#262d75] w-100 text-white font-semibold rounded-lg"
                >
                  Add
                </button>
              </form>
            </div>

            <div className="flex justify-evenly gap-4 mt-5">
              <button onClick={() => setFilter("all")} className="w-40 p-2  bg-[#262d75] text-white rounded-lg font-semibold">
                All
              </button>
              <button onClick={() => setFilter("pending")} className="w-40 p-2 bg-[#262d75] text-white rounded-lg font-semibold">
                Pending
              </button>
              <button onClick={() => setFilter("completed")} className="w-40 p-2 bg-[#262d75] text-white rounded-lg font-semibold">
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