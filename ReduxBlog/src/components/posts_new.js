import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static contextTypes = {
    // This will tell react to give me access to the context of a parent component
    // In this case, we want access to router's context
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post was created
        // we navigate by calling this.context.router.push with the new path to navigate to
        this.context.router.push('/');
      });
  }
  render () {
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2>Create A New Post</h2>
        <div className={`form-group ${(title.touched && title.invalid) ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>
        <div className={`form-group ${(categories.touched && categories.invalid) ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">{categories.touched ? categories.error : ''}</div>
        </div>
        <div className={`form-group ${(content.touched && content.invalid) ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">{content.touched ? content.error : ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  let errors = {};
  if(!values.title)      errors.title      = "Enter a title";
  if(!values.categories) errors.categories = "Enter a categories";
  if(!values.content)    errors.content    = "Enter a content";

  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost}, dispatch);
}

export default reduxForm({
  form:    'PostNewForm',
  fields: ['title','categories','content'],
  validate
}, null, mapDispatchToProps)(PostsNew);

