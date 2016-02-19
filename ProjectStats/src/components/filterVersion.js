import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeVersion, fetchContributorsVersion, fetchContributors } from '../actions/index';

class FilterVersion extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(version) {
    this.props.changeFilter(version);
    if ( version === -1 )
      this.props.fetchContributors();
    else
      this.props.fetchContributorsVersion(version);
  }
  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{paddingLeft: '30px'}}>
        <h3>Application versions</h3>
        <form>
          <div className="radio">
            <label> <input type="radio"
                           name="optradio"
                           onChange={this.handleChange.bind(this,-1)}
                           defaultChecked="checked" /> Todas
            </label>
          </div>
          <div className="radio">
            <label> <input type="radio"
                           name="optradio"
                           onChange={this.handleChange.bind(this,1)} /> v1
            </label>
          </div>
          <div className="radio">
            <label> <input type="radio"
                           name="optradio"
                           onChange={this.handleChange.bind(this,2)} /> v2
            </label>
          </div>
          <div className="radio">
            <label> <input type="radio"
                           name="optradio"
                           onChange={this.handleChange.bind(this,3)} /> v3
            </label>
          </div>
          </form> 
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { contributors_version: state.demo.contributors_version, contributors: state.demo.contributors};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeVersion, fetchContributors, fetchContributorsVersion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterVersion);
