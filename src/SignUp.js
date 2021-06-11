import React from 'react'
import './SignUp.css';
import {
  Link,Redirect
} from "react-router-dom";
import bg from './images/bg.png';
import store from './js/store/index.js'
var $ = require('jquery')
require("jquery-html5-validity")($);
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    } 
  }
  handleClickSignup(event){
   if($('#signUpForm').isValid()){
    let nameFromInput =event.target.parentElement.children[0].children[1].value
    let emailFromInput =event.target.parentElement.children[1].children[1].value
    let passwordFromInput=event.target.parentElement.children[2].children[1].value
    let userObject ={
      email:emailFromInput,
      password:passwordFromInput,
      id:store.getState().users.length+1,
      name:nameFromInput
      
    }
    const action ={
       type: "SIGNUP_USER",
       payload: userObject
    }
    console.log(action)
    store.dispatch(action)
    console.log(store.getState())
    this.setState((state, props) => ({
      loggedIn: true
    }))
   }else {
     console.log(event.target.parentElement)
   }
  
  }
    render() {
      return (
        <div className="row">
          
          {store.getState().currentUserId !== "" && <Redirect to='/posts' />}
          {this.state.loggedIn === true && <Redirect to='/posts' />}
        <div className="col-10 mx-auto" style={
    {
      marginTop: 150,
      marginBottom: 150,
      }
      }>
        <br></br>
        <br></br>
        <img className="img-fluid  animate__animated animate__fadeInDown" style={{width: "25rem",position: "absolute",top: -130
      ,marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center"
      }} src={bg}></img>
        <div className="container" style={
    {
      border: "2px solid rgba(0,0,0,0.2)",
      borderRadius: 20,
      padding: 50,
      backgroundColor: "white"
      }
      }>
        
      <h1 className="text-center" style={{fontSize: 48}}>Sign Up</h1>
      <br></br>
      
<div className="d-block mx-auto">
  <form id="signUpForm" onSubmit={(event)=> {return event.preventDefault();}}>
      <div className="form-group">
        <label for="exampleInputName" style={{fontSize: 22}}>Name</label>
        <input type="text" className="form-control input-styles" id="exampleInputName" placeholder="Enter Name" required></input>
      </div>
      <div className="form-group">
        <label for="exampleInputEmail1" style={{fontSize: 22}}>Email</label>
        <input type="email" className="form-control input-styles" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1" style={{fontSize: 22}}>Password</label>
        <input type="password" className="form-control input-styles" id="exampleInputPassword1" placeholder="Password" required></input>
      </div>
      <p className="text-right">Already have an account?  <Link to="/login">LOGIN</Link></p>
      <button onClick={(event)=>{return this.handleClickSignup(event)}} type="submit" className="btn d-block mx-auto" style={{fontSize: 26,backgroundColor: "#9c5d41",color: "white"}}>Sign Up</button>
 </form>
</div>
   
  </div>
          </div>
        </div>

      );
    }
  }
  
  
  export default SignUp;