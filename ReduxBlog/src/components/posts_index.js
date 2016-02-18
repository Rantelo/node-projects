import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, clearPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillUnmount() {
    this.props.clearPosts();
  }

  renderPosts() {
    const { posts } = this.props;

    if (!posts) {
      return <li className="list-group-item" key="1">Loading...</li>;
    }
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title ? post.title : "No title :("}</strong>
          </Link>
        </li>
      );
    });
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h1> List of blog posts </h1>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, clearPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
