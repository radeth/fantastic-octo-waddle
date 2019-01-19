import React from "react";
import { Link, withRouter } from "react-router-dom";
import addPost from "../actions/addPost";
import { connect } from "react-redux";

class NewPost extends React.Component {
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            let post = {
              id: parseInt(this.props.coutner, 10),
              text: this.input.value,
              date: this.date.value
            };
            this.props.addPost(post);
          }}
        >
          <input ref={value => (this.input = value)} type="text" />
          <input ref={value => (this.date = value)} type="date" />
          <input type="submit" />
        </form>
        <Link to="/">back</Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    coutner: Object.keys(state.posts).length
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addPost: post => {
      dispatch(addPost(post));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewPost)
);
