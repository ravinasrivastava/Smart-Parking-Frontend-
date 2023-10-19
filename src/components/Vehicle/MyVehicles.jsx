import React from 'react'
import Tables from "./Tables";
import Sidebar from "../sidebar/Sidebar";
function MyVehicles() {
  return (
    <div>
      < Sidebar/> 
     <div style ={{marginBottom:"1%", textAlign:"center"}} className="title"> 
     <h2>List of Vehicles</h2>
     <Tables/>
     </div>
    </div>
  )
}

export default MyVehicles;