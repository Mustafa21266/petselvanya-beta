import './Posts.css';
import React from 'react'
import {
  Link,
} from "react-router-dom";
import store from './js/store/index.js'
var $ = require('jquery')
require("jquery-html5-validity")($);
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   currentUserId: '',
        //   currentUserData: {},
          posts: [],
          users: [],
          photos: [],
          comments: [],
        //   redirect: false
        }
        // this.HandleSignInButton = this.HandleSignInButton.bind(this);
        
        
      }
    componentDidMount(){
        console.log(store.getState())
        // response => response.json()
       

    }
    
    handleOnClickPostComment(event,postIdFromJSX){
        if($('#postCommentForm'+postIdFromJSX).isValid()){
            let commentFromTextArea =event.target.parentElement.parentElement.parentElement.children[1].value
            console.log(commentFromTextArea)
            let commentObject ={
              body: commentFromTextArea,
              email:store.getState().currentUserData.email,
              name: "",
              id:store.getState().comments.length+1,
              postId: postIdFromJSX
              
            }
            const action ={
               type: "POST_COMMENT",
               payload: {comment: commentObject}
            }
            console.log(action)
            store.dispatch(action)
            console.log(store.getState())
            event.target.parentElement.parentElement.parentElement.children[1].value = ""
            this.forceUpdate();
           }else {
            //  console.log(event.target.parentElement)
           }
    }
    handleOnClickeDeletePost(event,postIdFromJSX){
        let postObject ={
            id: postIdFromJSX,
            userId: store.getState().currentUserId
          }
        const action ={
            type: "DELETE_POST",
            payload: {post: postObject}
         }
         console.log(action)
         store.dispatch(action)
         console.log(store.getState())
         this.forceUpdate();
    }
    handleOnClickeDeleteComment(event,commentIdFromJSX){
        let commentObject ={
            id: commentIdFromJSX,
            email: store.getState().currentUserData.email
          }
        const action ={
            type: "DELETE_COMMENT",
            payload: {comment: commentObject}
         }
         console.log(action)
         store.dispatch(action)
         console.log(store.getState())
         this.forceUpdate();
    }
    handleOnClickPostEditiedComment(event,commentIdFromJSX){
        if($('#editCommentForm').isValid()){
            let commentFromTextArea = document.getElementById("editCommentText"+commentIdFromJSX).value
            console.log(commentFromTextArea)
            let commentObject ={
              body: commentFromTextArea,
              commentId: commentIdFromJSX
            }
            const action ={
               type: "POST_EDITIED_COMMENT",
               payload: {comment: commentObject}
            }
            console.log(action)
            store.dispatch(action)
            console.log(store.getState())
            document.getElementById("editCommentText"+commentIdFromJSX).setAttribute("readonly","true")
            document.getElementById("editCommentText"+commentIdFromJSX).style.backgroundColor = "#DCDCDC"
            document.getElementById("editCommentText"+commentIdFromJSX).nextSibling.style.display = "none"
            // event.target.parentElement.parentElement.parentElement.children[1].value = ""
            this.forceUpdate();
           }else {
            //  console.log(event.target.parentElement)
           }
    }
    handleOnClickeEditComment(event,commendId){
        let editCommentTextArea = document.getElementById("editCommentText"+commendId)
        editCommentTextArea.style.backgroundColor = "white"
        editCommentTextArea.nextSibling.style.display = "block"
        editCommentTextArea.removeAttribute("readonly")
    }
    handleOnClickPost(event){
        let createPostTextArea = document.getElementById("createPostTextArea").value
        let postObject = {
            body: createPostTextArea,
            date_added: "0",
            photo: "https://cdn2.thecatapi.com/images/dcs.jpg",
            id: store.getState().posts.length+1,
            userId: store.getState().currentUserId,
            Reactions: []
        }
        const action = {
            type: "CREATE_POST",
            payload: { 
                post: postObject
            }
        }
        store.dispatch(action)
        console.log(store.getState())
        document.getElementById("createPostTextArea").value = ""
        this.forceUpdate();
    }
    handleOnClickEditPost(event,postIdFromJSX){
        //createElement
        //setAttribute
        //removeAttribute
        //appendChild
        //removeChild
        //insertBefore
        //textContent
        let textAreaForEdit = document.createElement("textarea")
        textAreaForEdit.className = "w-100"
        textAreaForEdit.id = "textAreaForEdit"
        textAreaForEdit.style.borderRadius = 10
        textAreaForEdit.style.padding = 10
        textAreaForEdit.style.backgroundColor = "#DCDCDC"
        textAreaForEdit.defaultValue = store.getState().posts.filter(post => post.id === postIdFromJSX)[0].body
        textAreaForEdit.placeholder = "Edit the post"
        textAreaForEdit.setAttribute("required","true")
        // <textarea className="w-100" id="textAreaForEdit" style={{borderRadius: 10,padding: 10,backgroundColor: "#DCDCDC"}} defaultValue={store.getState().posts.filter(post => post.id === postIdFromJSX)[0].body} placeholder="Edit the post" required="true"></textarea>
        let postBodyDiv = document.getElementById("postBodyDiv"+postIdFromJSX)
        postBodyDiv.children[1].children[0].children[0].style.display = "block"
        // postBodyDiv.appendChild(textAreaForEdit)
        postBodyDiv.children[0].style.display = "none"
        postBodyDiv.insertBefore(textAreaForEdit,postBodyDiv.children[1])
    }
    handleOnClickApplyEditPost(event,postIdFromJSX){
        let editiedText = document.getElementById("textAreaForEdit").value
        let postBodyDiv = document.getElementById("postBodyDiv"+postIdFromJSX)
        postBodyDiv.children[0].style.display = "block"
        postBodyDiv.children[0].innerHTML = editiedText
        postBodyDiv.children[1].style.display = "none"
        postBodyDiv.children[2].style.display = "none"
        let postObject = {
            body: editiedText,
            postId: postIdFromJSX
        }
        const action = {
            type: "EDIT_POST",
            payload: { 
                post: postObject
            }
        }
        store.dispatch(action)
        console.log(store.getState())
        this.forceUpdate();
    }
    handleClickLike(event,postIdFromJSX){
        console.log(event.target.children[0])
        if(store.getState().currentUserId !== ""){
            //classList
            //.add
            //.remove
            //.toggle
            //.contains
            if(event.target.classList.contains("loved")){
                event.target.classList.remove("loved")
                event.target.classList.add("not-loved")
                const action = {
                    type: "REMOVE_REACTION",
                    payload: { 
                        userId: store.getState().currentUserId,
                        postId: postIdFromJSX
                    }
                }
                store.dispatch(action)
                console.log(store.getState())
                this.forceUpdate();
                // posts {
                //     ....,
                //     Reactions: [""]
                // }
            }else {
                event.target.classList.add("loved")
                event.target.classList.remove("not-loved")
                const action = {
                    type: "ADD_REACTION",
                    payload: { 
                        userId: store.getState().currentUserId,
                        postId: postIdFromJSX
                    }
                }
                store.dispatch(action)
                console.log(store.getState())
                this.forceUpdate();
            }
        }else{

        }
        
    }
    render() {
        return (
            <div className="row">
         <div className="col-12 col-lg-8 mx-auto animate__animated animate__fadeIn animate__delay-2s" style={{padding: 50}}>
         {store.getState().currentUserId && 
         <div className="create-post">
         <div className="row">
<div className="col-12">
<img className="img-fluid" src="https://i.pravatar.cc/250" style={{width: 70,height: 70,borderRadius: "50%",marginRight: 20}}></img>
         <h4 className="d-inline-block"><Link  style={{color: "white"}} to={"/profiles/"+store.getState().currentUserId}>{store.getState().currentUserData.name}</Link>
         </h4>

</div>
</div>
<br></br>
<div className="row">
    <div className="col-12">
    <textarea id="createPostTextArea" className="w-100" style={{borderRadius: 10,padding: 10}} rows="5" placeholder="What's up?"></textarea>
    <br></br>
    <br></br>
    <div className="row">
        <div className="col-12 d-flex justify-content-end">
            <button class="btn btn-outline-primary" style={{width: 100}} onClick={(event)=>{ return this.handleOnClickPost(event) }}>Post</button>
        </div>
    </div>
    <br></br>
    <div className="d-block border-top border-bottom">
        <div className="row">
            <div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
                <button class="btn w-100 border-right border-left" style={{background: "transparent",color: "white"}}>Live <i class="fas fa-video"></i></button>
            </div>
            <div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
<button class="btn w-100 border-right"  style={{background: "transparent",color: "white"}}>Photo <i class="fas fa-images"></i></button>
</div>
<div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
                        <button class="btn w-100 border-right" style={{background: "transparent",color: "white"}}>Feeling <i class="fas fa-smile"></i></button>
                    </div>      
        </div>
    </div>
    <br></br>

    </div>

</div>  
         </div>
         
         }
         {!store.getState().currentUserId && <div className="w-100">
                <h1 className="text-center" style={{color:"white"}}>Please log-in to post <Link to="/login" style={{textDecoration: "none"}}>Login</Link></h1>
             </div>}
             <br></br>
             <br></br>
                {store.getState().posts[0] && store.getState().posts.reverse().map(post => {
                    return (<div className="post" key={post.id}>
                <div className="row">
                    {/* <div className="col-3 col-lg-2 d-flex justify-content-center">
                    
                    </div> */}
                    <div className="col-3 col-md-2 col-xl-1 d-flex justify-content-center">
                    <img className="img-fluid mx-auto" src="https://i.pravatar.cc/350" style={{width: 70,height: 70,borderRadius: "50%",marginRight: 20}}></img>
                    </div>
<div className="col-9 col-md-10 col-xl-11">

<div className="d-inline-block w-100">
<h4 className="d-inline-block" style={{width: "100%"}}>{store.getState().users[0] && <Link style={{color: "white"}} to={"/profiles/"+store.getState().users.filter(user => user.id === post.userId)[0].id}>{store.getState().users.filter(user => user.id === post.userId)[0].name}</Link>}
                <p className="d-block" style={{fontSize: 16,color: "white"}}>{post.date_added}h ago 
                {store.getState().currentUserId && store.getState().currentUserId === post.userId  && <div class="btn-group dropleft" style={{position: "absolute",right: 25,top: 0}}>
    <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-pen" style={{fontSize:12}}></i>
    </a>
    <div className="dropdown-menu dropdown-menu-right" style={{left: -140,top: 25}}>
     
      <div style={{paddingLeft: 10,paddingRight: 10}}>
          <a style={{cursor: "pointer"}} onClick={(event)=>{return this.handleOnClickEditPost(event,post.id)}}>Edit</a>
          <div className="dropdown-divider"></div>
          <a style={{cursor: "pointer"}} onClick={(event)=>{ return this.handleOnClickeDeletePost(event,post.id)}}>Delete</a>
      </div>
       
    </div>
  </div>
} 
                
                </p>
                </h4>          
</div>
               
<p className="w-100 text-right">{store.getState().users[1] && 
                    <span><i class="fas fa-location" style={{marginRight: 5}}></i>
                        <span>{store.getState().users.filter(user => user.id === post.userId)[0].address && store.getState().users.filter(user => user.id === post.userId)[0].address.street} ,</span>
                        <span>{store.getState().users.filter(user => user.id === post.userId)[0].address && store.getState().users.filter(user => user.id === post.userId)[0].address.city}</span>
                    </span>
             }
             </p>
</div>
</div>
<br></br>

<div className="row">
<div className="col-12">
<p>{store.getState().users[1] && 
        <div id={"postBodyDiv"+post.id}>
            <span>{store.getState().users.map(user => {
                if(user.id === post.userId){
                    return post.body
                }
            })}
        </span>
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button class="btn btn-primary" style={{display: "none"}} onClick={(event)=>{ return this.handleOnClickApplyEditPost(event,post.id) }}>Confirm</button>
            </div>
        </div>

    </div>
}
</p>
                <img className="img-fluid d-block" src={post.photo} style={{width: "100%",height: "21.5rem"}}></img>
                <br></br>
<div className="d-block border-top border-bottom">
<div className="row">
<div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
<button className={store.getState().posts.filter(postFilter => postFilter.id === post.id)[0].Reactions && store.getState().posts.filter(postFilter => postFilter.id === post.id)[0].Reactions.find(id => id === store.getState().currentUserId) ? "btn w-100 border-right border-left loved": "btn w-100 border-right border-left not-loved"} style={{background: "transparent"}} onClick={(event)=>{return this.handleClickLike(event,post.id)}}>({store.getState().posts.filter(postFilter => postFilter.id === post.id)[0].Reactions.length}) Love <i class="fa fa-heart" aria-hidden="true"></i></button>
</div>
<div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
<button className="btn w-100 border-right not-loved"  style={{background: "transparent"}}>Comment <i class="fas fa-comment"></i></button>
</div>
<div className="col-4 d-flex justify-content-center" style={{padding: 5}}>
<button className="btn w-100 border-right not-loved" style={{background: "transparent"}}>Share <i class="fas fa-share"></i></button>
</div>
</div>
</div>
<br></br>
<div className="d-block">
<div className="row">
<div className="col-12">
{/* //block elements
//inline-elements */}
{store.getState().comments[0] && store.getState().comments.map(comment => {
    if(comment.postId === post.id){
        return (
        <div className="row" key={comment.id}>
            <div className="col-2 col-lg-1 d-flex justify-content-center" style={{paddingRight: 0}}>
            <img src={"https://ui-avatars.com/api/?background=0D8ABC&color=fff&name="+comment.email} style={{width: 50,height:50,borderRadius: "50%"}}></img>
            </div>
                <div className="col-10 col-lg-11">
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)",padding: 10,marginBottom: 5,borderRadius: 20}}>
            <p className="w-100 d-flex justify-content-between">
            {store.getState().users.filter(user => user.email === comment.email)[0] && <Link  style={{color: "white"}} to={"/profiles/"+store.getState().users.filter(user => user.email === comment.email)[0].id}>{comment.email}</Link>}
            {!store.getState().users.filter(user => user.email === comment.email)[0] &&  <span><strong>{comment.email}</strong></span> }
                   </p>
              
                   
   {store.getState().currentUserId && store.getState().currentUserData.email === comment.email  && <div class="btn-group dropleft" style={{position: "absolute",right: 25,top: 0}}>
    <a type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-pen" style={{fontSize:12}}></i>
    </a>
    <div className="dropdown-menu dropdown-menu-right" style={{left: -140,top: 25}}>
     
      <div style={{paddingLeft: 10,paddingRight: 10}}>
          <a style={{cursor: "pointer"}} onClick={(event)=>{return this.handleOnClickeEditComment(event,comment.id)}}>Edit</a>
          <div className="dropdown-divider"></div>
          <a style={{cursor: "pointer"}}  onClick={(event)=>{ return this.handleOnClickeDeleteComment(event,comment.id)}}>Delete</a>
          
      </div>
       
    </div>
  </div>
} 
                   <form id={"editCommentForm"+comment.id} onSubmit={(event)=> {return event.preventDefault();}}>
                <textarea className="w-100" id={"editCommentText"+comment.id} style={{borderRadius: 10,padding: 10,backgroundColor: "#DCDCDC"}} defaultValue={comment.body.slice(0,40)} rows="2" placeholder="Write a comment" required readOnly></textarea>
                <div className="row" style={{display: "none"}}>
            
            <div className="col-12">
                <button className="btn btn-primary float-right" type="submit" onClick={(event)=> {return this.handleOnClickPostEditiedComment(event,comment.id)}}>Confirm</button>
            </div>
           
                </div>  
                </form>
                
                </div>
            </div>
            </div>
            
        )
    }
})}





{store.getState().currentUserId && <div className="create-comment">
<div className="row">
            <div className="col-2 col-lg-1 d-flex justify-content-center" style={{paddingRight: 0}}>
            <img src="https://i.pravatar.cc/250" style={{width: 50,height:50,borderRadius: "50%"}}></img>
            </div>
                <div className="col-10 col-lg-11">
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.2);",padding: 10,marginBottom: 5,borderRadius: 20}}>
                <form id={"postCommentForm"+post.id} onSubmit={(event)=> {return event.preventDefault();}}>
                <p><strong>{store.getState().currentUserId && <span>{store.getState().currentUserData.email}</span>}</strong></p>
                <textarea className="w-100" style={{borderRadius: 10,padding: 10}} rows="2" placeholder="Write a comment" required></textarea>
                <div className="row">
            
            <div className="col-12">
                <button className="btn btn-primary float-right" type="submit" onClick={(event)=> {return this.handleOnClickPostComment(event,post.id)}}>Post</button>
            </div>
           
                </div>  
                </form>
     
                </div>
            </div>
            </div>
            
         </div>}


</div>
</div>
</div>
</div>

</div>     

                </div>)
                })
                
                }

                {/* <div className="post">
                <div className="row">
<div className="col-12">
<img className="img-fluid" src="https://i.pravatar.cc/500" style={{width: 70,height: 70,borderRadius: "50%",marginRight: 20}}></img>
                <h4 className="d-inline-block"  style={{width: "90%"}}>Salma Galal
                <p className="d-block" style={{fontSize: 16,color: "grey"}}>3h ago <span className="float-right"><i class="fas fa-location" style={{marginRight: 5}}></i>11 Elkhamseen street, smouha</span></p>
                </h4>

</div>
</div>
<br></br>
<div className="row">
<div className="col-12">
<p>oh my god! what a beautiful day i had today with this cat</p>
                <img className="img-fluid d-block" src="http://placekitten.com/1000/900" style={{width: "100%",height: "21.5rem"}}></img>
                <br></br>
<div className="d-block border-top border-bottom">
<div className="row">
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right border-left" style={{background: "transparent"}}>Like <i class="fas fa-thumbs-up"></i></button>
</div>
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right"  style={{background: "transparent"}}>Comment <i class="fas fa-comment"></i></button>
</div>
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right" style={{background: "transparent"}}>Share <i class="fas fa-share"></i></button>
</div>
</div>
</div>
</div>

</div>     
                </div>
                <div className="post">
                <div className="row">
<div className="col-12">
<img className="img-fluid" src="https://i.pravatar.cc/600" style={{width: 70,height: 70,borderRadius: "50%",marginRight: 20}}></img>
                <h4 className="d-inline-block"  style={{width: "90%"}}>Ahmed Alaa
                <p className="d-block" style={{fontSize: 16,color: "grey"}}>5h ago <span className="float-right"><i class="fas fa-location" style={{marginRight: 5}}></i>11 Elkhamseen street, smouha</span></p>
                </h4>

</div>
</div>
<br></br>
<div className="row">
<div className="col-12">
<p>can someone help it please?</p>
                <img className="img-fluid d-block" src="http://placekitten.com/1000/900" style={{width: "100%",height: "21.5rem"}}></img>
                <br></br>
<div className="d-block border-top border-bottom">
<div className="row">
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right border-left" style={{background: "transparent"}}>Like <i class="fas fa-thumbs-up"></i></button>
</div>
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right"  style={{background: "transparent"}}>Comment <i class="fas fa-comment"></i></button>
</div>
<div className="col-4 d-flex justify-content-center">
<button class="btn w-100 border-right" style={{background: "transparent"}}>Share <i class="fas fa-share"></i></button>
</div>
</div>
</div>
</div>

</div>     
                </div> */}
                <p className="text-center">
                <a className="text-center" style={{color: "#0066CC",cursor: "pointer"}}>Load More</a>
                </p>
               
            </div>
            </div>
            
            );
        }
      }
      
      
export default Posts;