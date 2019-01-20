import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
            <div>
              {this.props.posts.map(post => {
                let path = `/post/${post.id}`
                return (
                  <Link className="m-1" key={post.id} to={path}>{post.id}</Link>
                )
              })}
            </div>
        <Link to="/new-post">new post</Link>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
