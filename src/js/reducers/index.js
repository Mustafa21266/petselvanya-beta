import { GET_USERS } from "../constants/action-types";
import { LOGIN_USER } from "../constants/action-types";
import { LOGOUT_USER } from "../constants/action-types";
import { GET_QUESTIONS } from "../constants/action-types";
import { SAVE_ANSWER } from "../constants/action-types";
import { ADD_QUESTION } from "../constants/action-types";
import { SET_ROUTE } from "../constants/action-types";
import { RESET_ROUTE } from "../constants/action-types";
import { UPDATE_USER } from "../constants/action-types";
import { UPDATE_USER_QUESTION } from "../constants/action-types";
const initialState = {
  currentUserId: '',
  currentUserData: {},
  users: [],
  posts:[],
  comments: []
};
  function rootReducer(state = initialState, action) {
    if (action.type === "SAVE_USERS") {
        return Object.assign({}, state, {
            users: action.payload.users
        });
    }
    else if (action.type === "LOGIN_USER"){
      let userObject = state.users.filter(user =>user.email === action.payload.email && user.password === action.payload.password)
      if(userObject[0]){
        return Object.assign({}, state, {
          currentUserId: userObject[0].id,
          currentUserData: userObject[0]
      });
      }
      

    }
    else if (action.type === "LOGOUT_USER"){
      return Object.assign({}, state, {
        currentUserId:"",
        currentUserData:{}
    });

    }
    else if (action.type === "ADD_POSTS") {
      return Object.assign({}, state, {
          posts: action.payload.posts
      });

    }
    else if (action.type === "SIGNUP_USER"){
      return Object.assign({}, state, {
        users:state.users.concat(action.payload),
        currentUserId: action.payload.id,
        currentUserData: action.payload 
    });
    }
    else if (action.type === "ADD_COMMENTS"){
      return Object.assign({}, state, {
        comments: action.payload.comments,

    });
    }
    else if (action.type === "POST_COMMENT"){
      return Object.assign({}, state, {
        comments: state.comments.concat(action.payload.comment),

    });
    }
    else if (action.type === "POST_EDITIED_COMMENT"){
      let commentFiltered = state.comments.filter(comment => comment.id === action.payload.comment.commentId)
      console.log(commentFiltered)
      return Object.assign({}, state, {
        comments: state.comments.map(comment =>
          {
          if(action.payload.comment.commentId === comment.id){
            comment.body = action.payload.comment.body
            return comment
          }
          return comment}
          ),

    });
    }
    else if (action.type === "DELETE_POST"){
      return Object.assign({}, state, {
        posts: state.posts.filter(post => action.payload.post.id !== post.id),
    });
    }
    else if (action.type === "DELETE_COMMENT"){
      return Object.assign({}, state, {
        comments: state.comments.filter(comment => action.payload.comment.id !== comment.id),
    });
    }
    else if (action.type === "CREATE_POST"){
      return Object.assign({}, state, {
        posts: state.posts.concat(action.payload.post),
    });
    }
    else if (action.type === "EDIT_POST"){
      return Object.assign({}, state, {
        posts: state.posts.map(post => 
          {
            if(action.payload.post.postId === post.id){
              post.body = action.payload.post.body
              return post
            }
          return post
        }
          ),
    });
    }
    else if (action.type === "ADD_REACTION"){
      let post = state.posts.filter(post => post.id === action.payload.postId)
      return Object.assign({}, state, {
        posts: state.posts.map(post => {
          if(post.id === action.payload.postId){
            post = Object.assign({}, post, {
              Reactions: post.Reactions.concat(action.payload.userId)
          })
          return post
          }
          return post
        }),
    });
    }
    else if (action.type === "REMOVE_REACTION"){
      let post = state.posts.filter(post => post.id === action.payload.postId)
      return Object.assign({}, state, {
        posts: state.posts.map(post => {
          if(post.id === action.payload.postId){
            post = Object.assign({}, post, {
              Reactions: post.Reactions.filter(id => id !== action.payload.userId)
          })
          return post
          }
          return post
        }),
    });
    }
    return state;
  };
  
  export default rootReducer;



  // else if (action.type === LOGIN_USER){
  //   return Object.assign({}, state, {
  //     currentUserId: action.payload.currentUserId,
  //     currentUserData: Object.entries(state.users).find(user => 
  //       user[0] === action.payload.currentUserId
  //     )[1]
  //   });
  // }
  // else if (action.type === LOGOUT_USER){
  //   return Object.assign({}, state, {
  //     currentUserId: '',
  //     currentUserData: ''
  //   });
  // }
  // else if (action.type === GET_QUESTIONS){
  //   return Object.assign({}, state, {
  //     questions: action.payload.questions
  //   });
  // }
  // else if (action.type === SAVE_ANSWER){
  //   return Object.assign({}, state, {
  //     questions: Object.entries(state.questions).map(question => {
  //       if(question[0] === action.payload.question.id){
  //         question[1] = action.payload.question
  //         return question[1]
  //       }
  //       return question[1]
  //     })
  //   });
  // }
  // else if (action.type === ADD_QUESTION){
  //   return Object.assign({}, state, {
  //     questions: Object.entries(state.questions).concat(action.payload.question)
  //   });
  // }
  // else if (action.type === SET_ROUTE){
  //   return Object.assign({}, state, {
  //     prevRoute: action.payload.prevRoute,
  //     toGoRoute: action.payload.toGoRoute,
  //   });
  // }
  // else if (action.type === RESET_ROUTE){
  //   return Object.assign({}, state, {
  //     prevRoute: '',
  //     toGoRoute: '',
  //   });
  // }
  // else if (action.type === UPDATE_USER){
  //   return Object.assign({}, state, {
  //     users : Object.entries(state.users).map(user => {
  //       if(user[1].id === action.payload.currentUserId){
  //         user[1].answers[action.payload.answer.id]= action.payload.answer.option
  //         return user[1]
          
  //       }
  //       return user[1]
  //     })
  //   });
  // }
  // else if (action.type === UPDATE_USER_QUESTION){
  //   return Object.assign({}, state, {
  //     users : Object.entries(state.users).map(user => {
  //       if(user[1].id === action.payload.currentUserId){
  //         user[1].questions = user[1].questions.concat(action.payload.answer.id)
  //         return user[1]
  //       }
  //       return user[1]
  //     })
  //   });
  // }