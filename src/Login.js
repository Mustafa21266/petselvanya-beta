import './Login.css';
import React from 'react'
import {
  Link,Redirect
} from "react-router-dom";
import bg from './images/bg.png';
import store from './js/store/index.js'
var $ = require('jquery')
require("jquery-html5-validity")($);
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    } 
  }
    componentDidMount(){
      console.log(store.getState())
    }
    handleClickLogin(event){
      //previousSibling
      //nextSibling
      if($('#logInForm').isValid()){
        let emailValue = event.target.parentElement.children[0].children[1].value
        let passwordValue = event.target.previousSibling.previousSibling.children[1].value
        store.dispatch({
          type: "LOGIN_USER",
          payload: {
            email: emailValue,
            password: passwordValue
          }
        })
        this.setState((state, props) => ({
          loggedIn: true
        }))
        console.log(store.getState())
       }else {
         console.log(event.target.parentElement)
       }
      
      
    }
    render() {
      return (
        <div>
        <div className="row">
         
          {store.getState().currentUserId && <Redirect to='/posts' />}
          {this.state.loggedIn && <Redirect to='/posts' />}
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
              
            <h1 className="text-center" style={{fontSize: 48}}>Login</h1>
            <br></br>
            <div className="d-block mx-auto">
            <form id="logInForm" onSubmit={(event)=> {return event.preventDefault();}}>
            <div className="form-group">
              <label for="exampleInputEmail1" style={{fontSize: 22}}>Email</label>
              <input type="text" className="form-control input-styles" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
            </div>
            <br></br>
            <div className="form-group">
              <label for="exampleInputPassword1" style={{fontSize: 22}}>Password</label>
              <input type="password" className="form-control input-styles" id="exampleInputPassword1" placeholder="Password" required></input>
            </div>
            <p className="text-right">Doesn't have an account?  <Link to="/sign-up">Sign Up</Link></p>
            <button onClick={(event)=>{return this.handleClickLogin(event)}} type="submit" className="btn d-block mx-auto" style={{fontSize: 26,backgroundColor: "#9c5d41",color: "white"}}>Login</button>
          </form>
            </div>
         
        </div>
                </div>
              </div>
              </div>
      );
    }
  }
  
  
  export default Login;
