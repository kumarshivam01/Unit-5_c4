import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const  user=useSelector((store)=>store.userStatus)
  const [pastData,setPastdata]=useState([])
  const [newOrder,setNewOrder]=useState({
    problem:"",
    owner_name:user[0].username,
    brand:"",
    cost:"",
    status: "Not Accepted"
  })
  const updateOrder=(data)=>{
    setNewOrder({
 ...newOrder,
    [data.name]:data.value
    })
  }

  useEffect(()=>{
    getData()
  },[])
const getData=async()=>{
  let res=await fetch(`http://localhost:8080/orders?owner_name=${user[0].username}`)
  let data=await res.json()
  setPastdata(data)
  
}
  const setData=async()=>{
    let res=await fetch("http://localhost:8080/orders",{
      method:"POST",
      body:JSON.stringify(newOrder),
      headers:{
        "Content-type": "application/json"
      }

    })
  let data=await res.json()
  getData()
  }
  return (
    <div>
      <div className="form">
        <input
         onChange={(e)=>updateOrder(e.target)}
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
        onChange={(e)=>updateOrder(e.target)}
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
        onChange={(e)=>updateOrder(e.target)}
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button onClick={()=>setData()} className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {pastData.map((e)=>{
   return  <div key={e.id} className="past-orders">
   <span className="id"></span>{e.problem} <span className="problem"></span>{" "}
   <span className="cost">
     {e.status==="accepted" ? "$1234":null }
   </span>
   <p className="status">Status:{e.status} </p>
   <hr />
 </div>
        })
      
        
        }
      </div>
    </div>
 
 
 
 )
}