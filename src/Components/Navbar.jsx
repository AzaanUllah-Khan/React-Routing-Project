import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="px-10 py-3 flex justify-between items-center bg-gray-100">
      <h1 className="text-xl font-bold">FetchUsers</h1>
      <div className="flex justify-end items-center gap-7">
        <Link to="/" className="hover:text-blue-500 font-semibold">Home</Link>
        <Link to="/users" className="hover:text-blue-500 font-semibold">Users</Link>
      </div>
    </div>
  )
}

export default Navbar
