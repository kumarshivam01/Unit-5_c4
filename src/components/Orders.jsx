import { useEffect, useState } from "react";

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux
const [orders,setOrder]=useState([]);

useEffect(()=>{
getData();
},[]);
async function getData(){
const data=await fetch("http://localhost:8080/orders").then((d)=>d.json());
setOrder(data);
console.log(data);
}

  function handleChange(e){

   if(e.target.value=="id"){
const data=[...orders].sort((a,b)=>{
  return a.id-b.id;
})
setOrder(data);
   }
   if(e.target.value=="status"){

   }
   if(e.target.value=="cost"){
    const data=[...orders].sort((a,b)=>{
      return a.cost-b.cost;
    })
    setOrder(data);
  }


}

  return (
    <div>
      <div>
        <div>
          <select onChange={handleChange} className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div><table style={{border:"1px solid black"}} className="orders">
        <thead style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}}>
              <th >ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
        {orders.map((e)=>( 
          
          
          <tbody style={{border:"1px solid black"}}>
            <tr style={{border:"1px solid black"}} className="orders-row">
              <td className="id">{e.id}</td>
              <td className="problem">{e.problem}</td>
              <td className="owner">{e.owner_name}</td>
              <td className="status">{e.status}</td>
              <td className="cost">{e.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}



                {e.status==="Done"?"": <select className="changeStatus" name="changeStatus"  onChange={(val)=>{
                  e.status=val.target.value;
                  console.log(e.status)
                
                }}>
                  <option  value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>}
               
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                {e.status!=="Done"&&e.cost===undefined ?<button>Accept</button>:""  }
             
              </td>
            </tr>
          </tbody>
        ))}</table>
       
      </div>
    </div>
  );
};
