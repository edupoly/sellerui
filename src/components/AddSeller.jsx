import React from 'react'
import {useNavigate} from 'react-router-dom'
function AddSeller() {
  var navig = useNavigate();
  const [newseller, setNewseller] = React.useState({
    sellername:'',
    GSTIN:'',
    addressLine1:'',
    addressLine2:'',
    pincode:'',
    city:''
  })
  function addSeller(){
    fetch("http://localhost:4000/addSeller",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newseller)
    })
    .then(res=>{
      alert("Please wait for the approval... your request in in processing");
      navig("/sellers")
    })
  }
  return (
    <div>
      <h1>Add Seller</h1>

        <input type="text" placeholder="sellername" name="sellername" onChange={(e)=>{setNewseller({...newseller,sellername:e.target.value})}}/><br/>
        <input type="text" placeholder="GSTIN" name="GSTIN" onChange={(e)=>{setNewseller({...newseller,GSTIN:e.target.value})}}/><br/>
        <input type="text" placeholder="addressLine1" name="addressLine1" onChange={(e)=>{setNewseller({...newseller,addressLine1:e.target.value})}}/><br/>
        <input type="text" placeholder="addressLine2" name="addressLine2" onChange={(e)=>{setNewseller({...newseller,addressLine2:e.target.value})}}/><br/>
        <input type="text" placeholder="pincode" name="pincode" onChange={(e)=>{setNewseller({...newseller,pincode:e.target.value})}}/><br/>
        <input type="text" placeholder="city" name="city" onChange={(e)=>{setNewseller({...newseller,city:e.target.value})}}/><br/>
        <button onClick={addSeller}>Apply</button>

    </div>
  )
}

export default AddSeller
