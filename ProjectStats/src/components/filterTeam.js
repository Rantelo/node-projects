import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTeam }  from '../actions/index';

class FilterTeam extends Component{
  constructor(props) {
    super(props);
  }
  handleChange(team) {
    this.props.changeTeam(team);
  }

  render () {
    return (
      <div className="col-md-12" style={{marginBottom: '30px'}} >
        <form>
          <label className="radio-inline">
            <input type="radio"
                   name="optradio"
                   onChange={this.handleChange.bind(this,-1)}
                   defaultChecked="checked" /> Todos
          </label>
          <label className="radio-inline">
            <input type="radio"
                   name="optradio"
                   onChange={this.handleChange.bind(this,1)}/> Team A
          </label>
          <label className="radio-inline">
            <input type="radio"
                   name="optradio"
                   onChange={this.handleChange.bind(this,2)}/> Team B
          </label>
          </form>
      </div>
    )
  };
}

function mapStateToProps( state ) {
  return { team: state.demo.team };
}
function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ changeTeam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTeam);
