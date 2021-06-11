import './Navbar.css';
import React from 'react'
import {
  Link,
} from "react-router-dom";
import store from './js/store/index.js'
class Navbar extends React.Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark nav-bar-styling">
          <Link  className="navbar-brand" to="/" style={{fontSize: 26}}>Petselvanya <i class="fas fa-paw"></i></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/posts">Posts</Link>
      </li>
    </ul>
    <div class="btn-group dropleft" style={{position: "absolute",right: 10,bottom: 10}}>
    <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-user" style={{backgroundColor: "rgba(0, 0, 0, 0.6)",color: "white",padding: 10, borderRadius: 50, fontSize:22}}></i>
    </a>
    <div className="dropdown-menu dropdown-menu-right" style={{left: -140,top: 25}}>
      {!store.getState().currentUserId  &&
      <div>
        <Link className="dropdown-item" to="/login">Login</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/sign-up">Sign-Up</Link>
      </div>
       }
      {store.getState().currentUserId  &&  <div>
        <Link className="dropdown-item" to={"/profiles/"+store.getState().currentUserId}>My Profile</Link>
      <div className="dropdown-divider"></div>
      <Link className="dropdown-item" to="/log-out">Log-out</Link>
      </div>
      }
    </div>
  </div>
  </div>
</nav>
<br></br>
<br></br>
<br></br>
        </div>
      );
    }
  }
  
  
  export default Navbar;
  