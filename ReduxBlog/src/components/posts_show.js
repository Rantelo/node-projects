import React, { Component, PropTypes } from 'react';
import { fetchPost, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      });
  }

  componentWillMount () {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete this post</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost}, dispatch);
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
