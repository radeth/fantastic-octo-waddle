import { createStore } from "redux";
import post from "./Reducers/postReducer";

export default createStore(post, { posts: [{id:0,text:'post one',date: "2000-01-18"},{id:1,text:'some other post',date: "2039-01-18"}] });
