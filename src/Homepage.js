import React from 'react'
import { Link } from 'react-router-dom';
import './Homepage.css';
import imageOne from './images/homepage-1.jpg';
import imageTwo from './images/homepage-2.png';
import imageThree from './images/homepage-3.jpg';
import imageFour from './images/homepage-4.png';
class Homepage extends React.Component {

  
    render() {
      return (
        <div className="App">
          <div className="container-fluid">
          <br></br>
                <br></br>
          <div id="tv" className="row animate__animated animate__backInDown  animate__delay-1s">
          {/* <div id="tv"></div> */}
            <div className="col-6 col-lg-6 d-flex align-items-center justify-content-end">
           
            <div className="animate__animated animate__backInDown  animate__delay-3s">
                <div id="talkbubble">
                <h2 style={{textAlign: "center"}}>Hey there human!</h2>
              <h2 style={{textAlign: "center"}}>I love you...</h2>
              <h2 style={{textAlign: "center"}}>Do you?</h2>
                </div>
                </div>
            
            </div>
            <div className="col-6 col-lg-6 d-flex align-items-center justify-content-start">
            <img className="img-fluid animate__animated animate__backInDown  animate__delay-2s" style={{width: "30rem"}} src={imageFour}/>

              
              {/* <div className="w-100 homepage-top-div">
                <h1 style={{fontSize: 58}}>Save An Innocent Soul NOW...</h1>
                <br></br>
                <br></br>
                <br></br>
                
                <p className="text-center" style={{fontSize: 22}}>help reduce the number of stray animals in our society by providing them with the care they never had.</p>
                <br></br>
            <button className="btn btn-lg btn-block" style={{backgroundColor: "#ef959d"}}>Start Contributing</button>
                </div> */}
            </div>
              </div>
              <br></br>
                <br></br>
              <div className="row">
              <div className="col-12 col-lg-12">
            <div id="circle"></div>
            <div className="d-flex justify-content-center" style={{position: "relative",zIndex: 2,width: "100%"}}> 
            <img className="img-fluid mx-auto animate__animated animate__backInUp animate__delay-3s" style={{height: 500,width: 700,background: "transparent",backgroundBlendMode: "multiply"}} src={imageTwo}/>
            </div>
            <div id="rectangle"></div>
            </div>
              
           
            
              </div>
              <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="animate__animated animate__backInUp animate__delay-3s" style={{padding: 20}}>
                <div id="flag"></div>
              <div style={{position: "relative",zIndex: 1}}> 
                      <h1 className="text-left" style={{color: "white"}}>Our Goal</h1>
                <p className="text-left" style={{fontSize: 22,color: "white"}} >We aim to reduce the number of stray animals on the streets of our society by providing shelter for those poor beautiful creatures, helping them feel more loved and cared for and spread awareness about the importance of taking care of all animals in our society.</p>
                <p className="text-left" style={{fontSize: 22,color: "white"}} >With your help we can achieve that goal, only if you take seconds of your time to contact us and report a stray animal that needs help and care, every contribution brings us closer to our goal which is <strong>No More Stray Animals That Are UNCARED FOR.</strong></p>
                </div>
                </div>

               
            </div>
              </div>
              <br></br>
                <div className="row" style={{margin: 10}}>
              
            <div className="col-12 col-lg-4 animate__animated animate__fadeInLeftBig animate__delay-4s"  style={{padding: 20}}>
            <div id="burstEight"></div>
            <div style={{position: "relative",zIndex: 2}}> 
            <img className="img-fluid w-100" style={{height: 300}} src={imageThree}/>
            </div>
            </div>
            <div className="col-12 col-lg-8  animate__animated animate__fadeInRightBig animate__delay-4s" style={{padding: 20}}>
            <div id="flag"></div>
            <div style={{position: "relative",zIndex: 1}}> 
            <h1 className="text-left" style={{color: "white"}}>How Can I Help?</h1>
                <p className="text-left" style={{fontSize: 22,color: "white"}} >You can help by using any of the following methods:</p>
                <ul>
                    <li className="text-left" style={{color: "white"}}>Taking a picture of the stray animal and posting on the website timeline (requires registration).</li>
                    <li className="text-left" style={{color: "white"}}>Calling our hotline: "19191".</li>
                    <li className="text-left" style={{color: "white"}}>Sending an email to: "example@gmail.com".</li>
                    <li className="text-left" style={{color: "white"}}>Visiting our headquarters and reporting the animal directly.</li>
                </ul>
                <p className="text-left" style={{fontSize: 21,color: "white"}} ><strong>You can even volunteer to either care for a stray animal/take it home with you or donate animal food,medicine etc... or both.</strong></p>
                </div>
                
            
            </div>
              </div>
              <br></br>
              <br></br>
              <h1 style={{fontSize: 58,textAlign: "center",color: "white"}}>Users Reviews</h1>
              <br></br>
              <br></br>
              <br></br>

                <div className="row">
            <div className="col-12 text-center col-lg-4 animate__animated animate__fadeIn animate__delay-4s">
            <img className="img-fluid" style={{height: 200,width:200,borderRadius: "50%"}} src="https://i.pravatar.cc/300"/>
            <br></br>
            <br></br>
            <h4 style={{color: "white"}}><strong>The best community ever!</strong></h4>
            <p style={{color: "white"}}>i love the using the website and its so rewarding to contribute to this cause!</p>
            </div>
            <div className="col-12 text-center  col-lg-4 animate__animated animate__fadeIn animate__delay-4s">
            <img className="img-fluid" style={{height: 200,width:200,borderRadius: "50%"}}  src="https://i.pravatar.cc/400"/>
            <br></br>
            <br></br>
            <h4 style={{color: "white"}}><strong>Love it!</strong></h4>
            <p style={{color: "white"}}>keep it up guys society needs you!</p>
            </div>
            <div className="col-12 text-center  col-lg-4 animate__animated animate__fadeIn animate__delay-4s">
            <img className="img-fluid" style={{height: 200,width:200,borderRadius: "50%"}}  src="https://i.pravatar.cc/600"/>
            <br></br>
            <br></br>
            <h4 style={{color: "white"}}><strong>Amazing!</strong></h4>
            <p style={{color: "white"}}>one of my favourite websites on the internet!</p>
            </div>
              </div>
              <br></br>
            <br></br>
            <div className="row">
              <div className="col-12 col-xl-8" style={{padding: 0}}>
                <img className="img-fluid w-100" style={{height: 502}} src={imageOne}/>
            </div>
            <div className="col-12 col-xl-4 d-flex align-items-center" style={{padding: 0}}>
            <div id="triangleTopright"></div>
                <div className="w-100 homepage-top-div">
                <h1>Save An Innocent Soul NOW...</h1>
                <br></br>
                <br></br>
                <br></br>
                
                <p className="text-center" style={{fontSize: 22}}>help reduce the number of stray animals in our society by providing them with the care they never had.</p>
                <br></br>
                <Link className="btn btn-lg btn-block" style={{backgroundColor: "white",color: "black"}} to="/posts">Start Contributing</Link>
                </div>
            
            </div>
              </div>
         
          </div>

        </div>

        
      );
    }
  }
  
  
  export default Homepage;