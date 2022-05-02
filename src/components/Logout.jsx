import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStatus } from "../Redux/actions";
import { useEffect } from "react";
export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage
const dispatch=useDispatch()
const navigate=useNavigate()
  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
useEffect(()=>{
  dispatch(addStatus({}))
navigate("/",{replace:true})
},[])
  return 
};
