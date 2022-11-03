import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Header(props) {
  console.log("Header props::",props)
  function logout(){
    window.localStorage.clear();
    props.dispatch({type:'LOGGEDOUT'})
  }
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/sellers">Sellers</Link>
            </li>
          <li class="nav-item">
            <Link class="nav-link active" to="/addsellers">Apply </Link>
            </li>
            {
              props.level===4 && (<li class="nav-item">
              <Link class="nav-link active" to="/approvesellers">Approve </Link>
            </li>)
            }
            
            <li class="nav-item">
              <Link class="nav-link active" to="/sellerSignup">Seller Signup </Link>
            </li>
            
            {
              props.isLoggedIn===false && (<li class="nav-item">
              <Link class="nav-link active" to="/singin"> Login </Link>
            </li>)
            }
            {
              props.isLoggedIn===true && (<li class="nav-item">
              <button onClick={logout}> Logout </button>
            </li>)
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default connect(store=>store)(Header) 