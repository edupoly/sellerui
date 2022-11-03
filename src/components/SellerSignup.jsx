import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function SellerSignup() {
  const [gstin, setGstin] = useState('');
  const [approvalstate, setApprovalstate] = useState('')
  function checkGstin(){
    fetch(`http://localhost:4000/checkSeller/${gstin}`)
    .then(res=>res.json())
    .then(data=>{
      setApprovalstate(data.message)
    })
    .catch(err=>console.log("err",err))
  }
  return (
    <div>
      <h1>SellerSignup</h1>
      <input type="text" placeholder='Enter GSTIN' name='gstin' onChange={(e)=>{setGstin(e.target.value)}}/>
      <button onClick={checkGstin}>Check</button>
      {
        approvalstate==='approved'&&(
          <div>
            <input type="text" placeholder='Enter your new password'/>&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder='confirm your new password'/>&nbsp;&nbsp;&nbsp;
          </div>
        )
      }
      {
        approvalstate==='please apply' && <Link to="/addsellers">Click here to apply as seller</Link>
      }
      {
        approvalstate==='please wait for approval' && <h1>please wait for approval</h1>
      }
    </div>
  )
}

export default SellerSignup