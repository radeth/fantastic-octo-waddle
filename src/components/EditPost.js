import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class EditPost extends Component {
  constructor() {
    super();
    this.state = { path: "", posts: [] };
  }
  componentDidMount() {
    this.setState({
      path: `/post/${this.props.match.params.id}`
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setState({
        posts: this.props.posts
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Edit Post</h1>
        <h2>{this.props.match.params.id}</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            let editedPost = {
              id: this.props.match.params.id,
              text: this.textInput.value,
              date: this.dateInput.value
            };
            console.log(this.state.posts);
          }}
        >
          <input
            type="text"
            ref={value => {
              this.textInput = value;
            }}
          />
          <input
            type="date"
            ref={value => {
              this.dateInput = value;
            }}
          />
          <input type="submit" />
        </form>

        <Link to={this.state.path}>back</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPost)
);
