import { useRef, useState } from 'react'
import Tabletask from './TableTask';

const Todo = () => {

  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

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
      <h1 className="text-center mt-3 text-3xl font-semibold">Todo List</h1>
      <div className="container mx-auto">
        <div className="w-6/12 mx-auto">
          <form className="flex items-center max-w-lg mx-auto">
            <div className="flex mt-4 w-full">
              <input ref={inputRef} onChange={(e) => {
                setText(e.target.value)
              }} type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-8/12 p-2.5" placeholder="Enter Your Tasks" required />
              <button onClick={addTask} type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Add Task
              </button>
            </div>
          </form>


          <div class="text-center rounded-md shadow-xs mt-5" role="group">
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Profile
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Settings
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              Messages
            </button>
          </div>

          <Tabletask tasks={task} setTasks={setTask} />
        </div>
      </div>
    </>

  )
}

export default Todo