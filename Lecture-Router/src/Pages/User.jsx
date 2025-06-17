import { Link } from "react-router-dom";


const User = () => {

    const users = [
        {
            id: "1",
            name: "John Doe",
            role: "devloper"
        },
        {
            id: "2",
            name: "Jesicc",
            role: "designer"
        },
        {
            id: "3",
            name: "Aryan",
            role: "Devloper"
        },
    ]
    
    localStorage.setItem("User", JSON.stringify(users));

    return (
        <>
            <div className="container mx-auto py-4">
                <h1 className="text-sky-600 font-semibold text-2xl">User</h1>
                <div className="relative  my-5 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                        <td className="px-6 py-3">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-3">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-3">
                                            {user.role}
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link to={`/User/${user.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User