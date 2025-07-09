import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserCircleIcon, PhoneIcon, HomeIcon, AtSymbolIcon} from '@heroicons/react/24/solid'

const OneUser = () => {
  const [data, setData] = useState([])
  const params = useParams()
  const getOneData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    setData(res.data)

  }
  useEffect(() => {
    getOneData()
  }, [])
  return (
    <div className="w-full flex items-center justify-center p-10"> 
      <div className="flex flex-col bg-gray-100 rounded-xl px-7 py-5 w-1/3 inset-shadow-sm">
        <div className="flex items-center justify-center gap-1 mb-3"><UserCircleIcon className="size-6 text-blue-700"/><h1 className="text-xl text-blue-700 text-center">{data.username}</h1></div>
        <h1 className="text-2xl font-semibold text-gray-700">{data.name}</h1>
        <div className="flex items-center justify-start gap-1 mb-2"><AtSymbolIcon className="size-4 text-gray-500"/><h1 className="text-gray-500">{data.email}</h1></div>
        <div className="flex items-center justify-start gap-2 mb-1"><PhoneIcon className="size-5"/><h1 className="text-lg text-gray-800">{data.phone}</h1></div>
        <div className="flex items-center justify-start gap-2 mb-5"><HomeIcon className="size-5"/><h1 className="text-lg text-gray-700 font-semibold">{data.address?.street}, {data.address?.city}</h1></div>
        <button className="cursor-pointer bg-blue-400 rounded font-semibold text-white px-2 py-1 hover:bg-transparent hover:text-blue-400 hover:outline-2 transition duration-350 ease-in-out">View Website</button>
      </div>
    </div>
  )
}

export default OneUser
