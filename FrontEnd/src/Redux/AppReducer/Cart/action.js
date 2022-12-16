import * as types from "./actionType";
import axios from "axios";

//GET DATA
const get_failure = () =>{
    return {
    type: types.GET_FAILURE_DATA
    }
}
    



const get_success = (payload) =>{
   return{
    type:types.GET_SUCCESS_DATA,
    payload: payload
   }
}

const get_request = ()=>{
    return{
    type : types.GET_REQUEST_DATA
    }
}


//POST ACTION
const post_failure = () =>({
    type: types.POST_FAILURE_DATA
})

// const post_success =()=>({
//     type:types.POST_SUCCESS_DATA,
// })

const post_request = ()=>({
    type : types.POST_REQUEST_DATA
})

//UPDATE ACTION

const update_failure = () =>({
    type: types.UPDATE_FAILURE_DATA
})


const update_success =()=>({
    type:types.UPDATE_SUCCESS_DATA,
})

const update_request = ()=>({
    type : types.UPDATE_REQUEST_DATA
})

//DELETE ACTION
const delete_failure = () =>({
    type: types.DELETE_FAILURE_DATA
})


const delete_success =()=>({
    type:types.DELETE_SUCCESS_DATA,
   
})

const delete_request = ()=>({
    type : types.DELETE_REQUEST_DATA
})



// export const postdata =(dispatch)=>(payload, token)=>{
//     dispatch(post_request)
//     axios({
//         method:"post",
//         baseURL:"http:localhost:8080",
//         url:"/notes/create",
//         headers: {"Authorization":`${token}`},
//         data:payload
//     }).then((response) => {
//         console.log(response);
//     }).catch((err)=>{
//         dispatch(post_failure(err))
//     })
// }

export  {get_request,get_failure,get_success,delete_request,delete_failure,delete_success}