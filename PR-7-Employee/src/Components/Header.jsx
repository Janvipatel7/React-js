import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


const Header = ({ isLoggedin, setIsLoggedin }) => {

    const navigate = useNavigate();

    const { pathname } = useLocation();

    const handleClick = () => {
        setIsLoggedin(false);
        localStorage.setItem("isLoggedin", JSON.stringify(false))
        toast.success("Logged Out Succesfully..")
        navigate("/");
    }

    function handleLogin() {
        navigate("/Login")
    }

    console.log(isLoggedin);

    return (
        <>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to={"/"}  className={`${pathname == "/" ? " text-teal-600 " : "text-gray-900 " }`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/about"} className={`${pathname == "/about" ? " text-teal-600 " : "text-gray-900 " }`}>About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname == "/contact" ? " text-teal-600 " : "text-gray-900 " }`}>Contact</Link>
                            </li>
                            {
                                isLoggedin && (<Link to={"/employess"} className={`${pathname == "/employess" || pathname == "add-employess" ? " text-teal-600 " : "text-gray-900 " }`}>Employess</Link>)
                            }
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    {
                        isLoggedin ? (
                            <button
                                onClick={handleClick}
                                type="button"
                                className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={handleLogin}
                                type="button"
                                className="text-white bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                                Login
                            </button>
                        )
                    }

                </div>
            </nav>
        </>
    )
}

export default Header