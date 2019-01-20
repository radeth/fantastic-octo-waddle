import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import editPost from "./../actions/editPost"

class EditPost extends Component {
  constructor() {
    super();
    this.state = { path: "",};
  }
  componentDidMount() {
    this.setState({
      path: `/post/${this.props.match.params.id}`
    });
  }
  
  render() {
    return (
      <div>
        <h1>Edit Post</h1>
        <h2>{this.props.match.params.id}</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.editPost(this.props.match.params.id,{
              text: this.textInput.value,
              date: this.dateInput.value
            })
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
  return {
    editPost: (id,content)=>{
      dispatch(editPost(id,content))
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPost)
);
