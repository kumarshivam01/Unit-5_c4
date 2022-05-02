import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {addStatus} from "../Redux/actions"
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:"",
    password:""
  })

  const updateData=(target)=>{
    setData({
      ...data,
      [target.name]:target.value
    })
  }
  const user=useSelector((store)=>store.userStatus)
 
  const getUser=async()=>{
    let res=await fetch(`http://localhost:8080/users?username=${data.username}&pass=${data.password}`)
    let userData=await res.json()
    dispatch(addStatus(userData))
    
    if(userData[0].role==="admin"){
     navigate("/orders",{replace:true})
    }
    else{
      navigate("/neworder",{replace:true})
    }
  }
  return (
    <div>
      <input onChange={(e)=>updateData(e.target)}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input onChange={(e)=>updateData(e.target)}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={()=>getUser()} className="submit">Login</button>
    </div>
  );
};
