import { Link } from "react-router-dom"

const Card = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 px-5 py-3 rounded-lg cursor-pointer hover:scale-97 hover:inset-shadow-sm">
      <h1 className="text-gray-700 text-xl font-semibold">{props.name}</h1>
      <Link to={`/users/${props.id}`} className="text-gray-600 hover:text-blue-600">{props.username}</Link>
    </div>
  )
}

export default Card
