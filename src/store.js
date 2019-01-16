import {createStore} from "redux"
import post from "./Reducers/postReducer"

export default createStore(post,{posts:[]})