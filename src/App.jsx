import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Routes ,Route} from "react-router-dom"
import{Link} from "react-router-dom"
import {useSelector} from "react-redux"

function App() {
  const user=useSelector((store)=>store.userStatus)
  
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
       {user[0] !== undefined ? <Link className="nav-logout" to="/logout">
          Logout
        </Link>:null}
       {user[0] ===undefined ?  <Link className="nav-login" to="/login">
          Login
        </Link>:null
}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
         <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="/neworder" element={<ProtectedRoute><NewOrder /></ProtectedRoute>} />
      
      </Routes>
    </div>
  );
}

export default App;
