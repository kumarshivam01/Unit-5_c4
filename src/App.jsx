import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import { Routes,Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./Contexts/Authcontext";




function App() {



  const {isAuth}=useContext(AuthContext);
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to={isAuth ? "/logout":"/login"}>
          {isAuth? "Logout":"Login"}
        </Link>
       
      </div>

      <Routes>


        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/neworder" element={<NewOrder/>}></Route>


          
        
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
