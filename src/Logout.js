import './Logout.css';
import React from 'react'
import {
  Link,Redirect
} from "react-router-dom";
import store from './js/store/index.js'
class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    } 
  }
    componentDidMount(){
      console.log(store.getState())
       store.dispatch({
        type: "LOGOUT_USER",
        payload: {
          
        }
      })
      this.setState((state, props) => ({
        loggedOut: true
      }))
      console.log(store.getState())
    }
      //previousSibling
      //nextSibling
     
      
    
    render() {
      return (
        <div className="row">
          {store.getState().currentUserId && <Redirect to='/' />}
          {this.state.loggedOut && <Redirect to='/' />}

        </div>
           
      );
    }
  }
  
  
  export default Logout;
