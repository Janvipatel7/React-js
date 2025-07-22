import NavLinks from "./NavLinks"


const Navbar = () => {
  return (
    <div className="py-4">
        <div className="container d-flex justify-content-between">
            <div>
                LOGO
            </div>
            <div>
                <NavLinks/>
            </div>
        </div>
    </div>
  )
}

export default Navbar