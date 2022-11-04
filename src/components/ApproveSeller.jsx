import React from 'react'
import { useState,useEffect } from 'react'
function ApproveSeller() {
  const [sellers, setSellers] = useState([])
  useEffect(()=>{
    getSellers()
  },[])
  function getSellers(){
    fetch("http://localhost:4000/sellerList")
    .then(res=>res.json())
    .then(sellers=>setSellers(sellers))
    .catch(err=>console.log("err",err))
  }
  function approveSeller(GSTIN){
    var token = window.localStorage.getItem('token')
    fetch(`http://localhost:4000/approveSeller/${GSTIN}/${token}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.message==='notauthorised'){
        alert("You are not authorised.....")
      }
      else{
        getSellers();
      }
    })
    .catch((err)=>{console.log("err::",err)})
  }
  return (
    <div>
      <h1>Approve Sellers</h1>
      {
        sellers && sellers.map((seller)=>{
          return <li>
            {seller.sellername} &nbsp;&nbsp;&nbsp;&nbsp;
            {seller.status?seller.status:<button onClick={()=>{approveSeller(seller.GSTIN)}}>Approve</button>}
          </li>
        })
      }
    </div>
  )
}

export default ApproveSeller