const Tabletask = ({ tasks, setTasks }) => {
    console.log(tasks);
    const updateStatus = (id) =>{
        let updatedTask = tasks.map((task) =>{
            return task.id == id ? {...task , iscompleted : true } : task;
        })
        setTasks(updatedTask)
    }
    

    return (
        <>
            <div className="container mx-auto mt-5">
                <div className="w-6/12 mx-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tasks List
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => {
                                return <tr key={task.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <th className="px-6 py-4">
                                        {task.taskName}
                                    </th>
                                    {task.iscompleted 
                                    ? <td className="px-6 py-4 text-green-600 font-semibold">
                                        Completed
                                        </td> 
                                    : <td className="px-6 py-4 text-yellow-500 font-semibold" onClick={() =>{
                                        updateStatus(task.id)
                                        }}>
                                        Pending
                                        </td>
                                    }

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Tabletask