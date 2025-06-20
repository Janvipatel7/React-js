import { Link } from "react-router-dom"


const EmployessTable = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-md text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Salary
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white  even:bg-gray-50  border-gray-200 text-sm">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    Silver
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    Laptop
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    $2999
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium flex gap-6">
                    <Link href="#" className="font-medium text-blue-600  hover:underline">Edit</Link>
                    <Link href="#" className="font-medium text-red-600  hover:underline">Delete</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default EmployessTable