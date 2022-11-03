import React from 'react'
import { useEffect,useState } from 'react'

function Sellers() {
  const [sellers, setSellers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/sellerList")
    .then(res=>res.json())
    .then(sellers=>setSellers(sellers))
    .catch(err=>console.log("err",err))
  },[])
  return (
    <div>
      <h1>Sellers</h1>
      {
        sellers && sellers.map((seller)=>{
          return <li>{seller.sellername}</li>
        })
      }
    </div>
  )
}

export default Sellers