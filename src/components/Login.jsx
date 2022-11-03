import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

function Login(props) {
  const [user, setUser] = useState({
    username:'',
    password:''
  })
  function login(){
    fetch("http://localhost:4000/login",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      window.localStorage.setItem('token',data.token)
      window.localStorage.setItem('username',data.username)
      window.localStorage.setItem('level',data.level)
      console.log(data)
      if(data.message==='success'){
        props.dispatch({'type':'LOGGEDIN',payload:data})
      }
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <label>Enter Username</label>
      <input type="text" placeholder='Enter username' onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
      <br/>
      <label>Enter Password</label>
      <input type="text" placeholder='Enter password' onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
      <br/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default connect(store=>store)(Login)