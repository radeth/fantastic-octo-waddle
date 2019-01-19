import React from "react"
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class Post extends React.Component{

    render(){
        return(
            <div>
            
            <h2>{this.props.posts[this.props.match.params.id].id}</h2>
            <h3>{this.props.posts[this.props.match.params.id].date}</h3>
            <h3>{this.props.posts[this.props.match.params.id].text}</h3>
            
            <Link to="/">back</Link>
            <Link to="">edit</Link>
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