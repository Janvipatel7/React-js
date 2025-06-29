

const UserList = ({ users , deleteUser}) => {

  const handleDelete = (userId) => {
      deleteUser(userId);
  }

  return (
    <div className='container mx-auto my-4 md:px-0 px-10'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-md text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, idx) => {
                return <tr key={user.id} className="odd:bg-white  even:bg-gray-50 text-black border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {user.name}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    {user.course}
                  </td>
                  <td className="px-6 py-4">
                    {user.gender}
                  </td>
                  <td className="px-6 py-4">
                    {user.password}
                  </td>
                  <td className="px-6 py-4 flex gap-5">
                    <button href="#" className="font-medium text-blue-600  hover:underline">Edit</button>
                    <button href="#" className="font-medium text-blue-600  hover:underline"
                     onClick={() => handleDelete(user.id)}>
                      Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList