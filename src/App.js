import logo from './logo.svg';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import Homepage from './Homepage';
import Posts from './Posts';
import MyProfile from './MyProfile';
import store from './js/store/index.js'
import Logout from './Logout';
let name = "heba";

class App extends React.Component {
componentDidMount(){


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function (response){
      return response.json()
  }).then(json => {
    var unirest = require("unirest");

    var req = unirest("GET", "https://bing-image-search1.p.rapidapi.com/images/search");
    
    req.query({
      "q": "travel egypt"
    });
    
    req.headers({
      "x-rapidapi-key": "44f636c648msh129060b2b5c5688p134c74jsn330866e5a749",
      "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      "useQueryString": true
    });
    
    req.end(function (res) {
      if (res.error) throw new Error(res.error);
      for(let i=0;i<json.length;i++){
        setTimeout(()=>{
            fetch('https://api.thecatapi.com/v1/images/search')
            .then(function (response){
                return response.json()
            }).then(json => {
                // url = json[0].url
            return json[0].url}).then(url=>{
                json[i] = Object.assign({}, json[i], {
                    // photo: res.body.value[Math.floor(Math.random() * res.body.value.length)].thumbnailUrl,
                    photo: url,
                    date_added: Math.floor(Math.random() * 60),
                    Reactions: []
            })

            
            })
        },10000)
       
    }
    const action = {
      type: "ADD_POSTS",
      payload: {posts: json}
      }
    store.dispatch(action)
    console.log(store.getState())
      console.log(res.body);
    });
      

      })
  


  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(function (response){
      return response.json()
  }).then(json => {
    let action = {
      type: "ADD_COMMENTS",
      payload: { 
        comments: json
      }
    }
      store.dispatch(action)
      console.log(store.getState())

  }   
  )
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response){
      return response.json()
  }).then(json => {
      let newUsers = json.map(user => {
          return Object.assign({}, user, {
              password: "123"
      })
      })
  store.dispatch(
          {
              type: "SAVE_USERS",
              payload: {
                users: newUsers  
              }
          }
      )
      console.log(store.getState())
      // console.log(this.state.posts)
  }   
  )
}
  render() {
    return (
      <Router>
      <div className="App">
      <Route  exact path="/">
          <Navbar name={name}/>
          <Homepage />
        </Route>
        <Route path="/sign-up">
          <Navbar name={name}/>  
          <SignUp />
        </Route>
        <Route path="/login">
          <Navbar name={name}/>
          <Login />
        </Route>
        <Route path="/log-out">
          <Navbar name={name}/>
          <Logout />
        </Route>
        <Route path="/posts">
          <Navbar name={name}/>
          <Posts />
        </Route>
        <Route path="/profiles/:id" render={(props) => <Navbar name={name}/>} />
        <Route path="/profiles/:id" render={(props) => <MyProfile {...props}/>} />
        <div class="footer-dark text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-6 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Animal Help</a></li>
                            <li><a href="#">Volunteering</a></li>
                            <li><a href="#">Training</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-6 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col item social"><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-snapchat"></i></a></div>
                </div>
                <p class="copyright">Petselvanya © 2021</p>
            </div>
        </footer>
    </div>
        <div className="container-fluid">
       
        {/* <h1>Hello {name}</h1>   */}
       
        
      
      
        </div>
        </div>
      </Router>
      
    );
  }
}


export default App;
