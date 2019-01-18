import React from "react"
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class Post extends React.Component{
    render(){
        return(
            <div>
            {console.log(this.props.match.params.id)}
            {this.props.posts.map(post=>{
              if (post.id = this.props.match.params.id){
                return(
                  <div>
                  {post.id}<br/>
                    {post.date}<br />
                    {post.text}<br />
                  </div>
                )
              }
            })}
            <Link to="/">back</Link>
            </div>
            
        )
    }

}
const mapStateToProps = state =>{
  return{
    posts: state.posts

  }
}
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Post))