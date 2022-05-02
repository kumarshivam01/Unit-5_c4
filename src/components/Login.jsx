import { useContext, useState, useSyncExternalStore } from "react";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Authcontext";
export const Login = () => {

  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const {handleAuth}=useContext(AuthContext);
  async function getData(username,pass) {
    axios
      .get(`http://localhost:8080/users/?username=${username}&&pass=${pass}`)
      .then(function (response) {
        let userdetails = response.data[0];
        if (userdetails === undefined){
          alert("please check the credentails")
          
        }
          else if(userdetails.role=="admin"){
            
            handleAuth(true);
          (navigate("/orders",{replace:true}))}
          
      }
       )
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is admin take him to /orders page otherwise take him to /neworder */}
      <button
        onClick={() => {
          
        
          getData(search, password);
        }}
        className="submit"
      >
        Login
      </button>
    </div>
  );
};