import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsNew extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h2>Create A New Post</h2>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost}, dispatch);
}

export default reduxForm({
  form: 'PostNewForm',
  fields: ['title','categories','content']
}, null, mapDispatchToProps)(PostsNew);

