import { useEffect, useState } from "react";

const TableTask = ({ tasks, setTasks, filter }) => {
    const [filterTasks, setFilterTasks] = useState([]);
    const updateStatus = (id) => {
        let updatedTask = tasks.map((task) => {
            return task.id == id ? { ...task, iscompleted: true } : task;
        })
        setTasks(updatedTask)
    }

    useEffect(() => {
        let filterTask = tasks.filter((task) => {
            return filter == "pending" ? !task.iscompleted : filter == "completed" ? task.iscompleted : true;
        })
        setFilterTasks(filterTask)
    }, [tasks, filter])



    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="w-full mx-auto">
                    <div className="w-full mx-auto overflow-x-auto mt-9">
                        <div className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <div className="text-xs text-gray-700 uppercase bg-gray-50">
                            </div>
                            <div>
                                {filterTasks.map((task) => {
                                    return <div key={task.id} className="odd:bg-white flex items-center justify-between gap-3 pr-10 border my-4 rounded-lg even:bg-gray-50 border-b border-gray-200">
                                        <div className="px-6 hello py-4 text-xl text-[#262d75] overflow-auto">
                                            {task.taskName}
                                        </div>
                                        {task.iscompleted ?
                                            <div className="text-center ">
                                                <button className="cursor-pointer px-3 py-1 text-center text-white rounded bg-green-600  font-semibold"> Completed
                                                </button> </div>
                                            : <div className="text-center ">
                                                <button className="cursor-pointer px-3 py-1 rounded text-center text-white font-semibold bg-yellow-500" onClick={() => {
                                                    updateStatus(task.id)
                                                }}>Pending</button>
                                            </div>
                                        }

                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TableTask