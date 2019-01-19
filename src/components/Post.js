import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class Post extends React.Component {
  constructor() {
    super();
    this.state = { path: "" };
  }
  componentDidMount() {
    this.setState({
      path: `/post/${this.props.match.params.id}/edit`
    });
  }
  render() {
    return (
      <div>
        <h2>{this.props.posts[this.props.match.params.id].id}</h2>
        <h3>{this.props.posts[this.props.match.params.id].content.date}</h3>
        <h3>{this.props.posts[this.props.match.params.id].content.text}</h3>

        <Link className="mr-2" to="/">
          back
        </Link>
        <Link to={this.state.path}>edit</Link>
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
  )(Post)
);
