import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.props.posts.map(post => {
          return (
            <div>
              {post.text}
              {post.date}
            </div>
          );
        })}
        <Link to="/new-post">new post</Link>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {};
};
const mapStateToProps = state => {
  console.log(state);
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
