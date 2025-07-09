import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import OneUser from "./Pages/OneUser"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<OneUser/>} />
    </Routes>
    </>
  )
}

export default App