import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContributors,
         fetchContributorsVersion,
         changeVersion,
         changeTeam
       } from '../actions/index';

import FilterTeam from './filterTeam';
import FilterVersion from './filterVersion';
import Chart from './chart';

class Demo extends Component {
  componentWillMount() {
    this.props.changeVersion(-1);
    this.props.changeTeam(-1);
    this.props.fetchContributors();
  }

  componentWillUnmount() {
  }

  render () {
    return (
      <div>
        <div className="text-xs-right">
        </div>
        <h1>Demo Redux</h1>
        <h3>Contributors app</h3>
        <div className="row">
          <FilterTeam />
          <div className="row">
            <FilterVersion changeFilter={this.props.changeVersion}/>
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { contributors: state.demo.contributors};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContributors,
                              fetchContributorsVersion,
                              changeVersion,
                              changeTeam
                            }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
