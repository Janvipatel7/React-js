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
        <div className="mt-6">
            {filterTasks.map((task) => (
                <div
                    key={task.id}
                    className="flex justify-between items-center bg-white text-black border border-gray-300 rounded-lg px-4 py-3 mb-3 shadow-sm">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 accent-blue-500"
                            checked={task.iscompleted}
                            onChange={() => updateStatus(task.id)}
                        />
                        <span className={`text-lg font-medium ${task.iscompleted ? "line-through text-gray-400" : ""}`}>
                            {task.taskName}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span
                            className={`text-sm font-semibold ${task.iscompleted ? "text-green-600" : "text-yellow-500 cursor-pointer"
                                }`}
                            onClick={() => !task.iscompleted && updateStatus(task.id)}
                        >
                            {task.iscompleted ? "Completed" : "Pending"}
                        </span>

                        
                    </div>
                </div>
            ))}
        </div>
    );

}

export default TableTask