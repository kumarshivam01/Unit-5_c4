import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";

export const Logout = () => {
  const navigate=useNavigate();
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order


  const {handleAuth}=useContext(AuthContext);

  return <button
  onClick={()=>{
    handleAuth(false)
    navigate("/",{replace:true})
  }}>Logout</button>;
};
