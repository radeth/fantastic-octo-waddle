import React from "react";
import { Link } from "react-router-dom";
import addPost from "../actions/addPost"
import { connect } from "react-redux";

class NewPost extends React.Component {
  render() {
    return(
      <div>
       <form onSubmit={e=>{
         e.preventDefault()
         console.log()
       }}>
         <input ref={value =>(this._date = value)} type='text'></input>
         <input ref={value => (this._input = value)} type='date'></input>
         <input type='submit'></input>
       </form>
        <Link to="/">back</Link>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{}
}
const mapDispatchToProps = dispatch =>{
  return{
    addPost: post =>{
      dispatch(addPost(post))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewPost);
