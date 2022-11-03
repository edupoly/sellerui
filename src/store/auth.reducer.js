function getInitialState(){
  if(window.localStorage.getItem('token')){
    return {
      isLoggedIn:true,
      level:Number(window.localStorage.getItem('level')),
      username:window.localStorage.getItem('username'),
    }
  }
  else{
    return {
      isLoggedIn:false,
      level:0,
      username:'',
    }
  }
}

const initialState = getInitialState();
function authReducer(state=initialState,action){
  if(action.type==='LOGGEDIN'){
    return {...state,isLoggedIn:true,level:action.payload.level,username:action.payload.username}
  }
  if(action.type==='LOGGEDOUT'){
    return {...getInitialState()}
  }
  return {...state}
}
export default authReducer;