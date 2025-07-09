import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Users = () => {
  const [data, setData] = useState([])
  const getData = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setData(res.data)
    console.log(data);
  }
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="p-10 flex justify-center items-start gap-5 flex-wrap">
      {data.map(function(elem,idx){
        return <Card key={idx} name={elem.name} username={elem.username} id={elem.id} />
      })}
    </div>
  )
}

export default Users
