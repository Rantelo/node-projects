import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeVersion, fetchContributorsVersion } from '../actions/index';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.renderChart = this.renderChart.bind(this);
    this.graph       = this.graph.bind(this);
  }

  graph(count) {
    count = (count / 100) * 22;
    let bar = "";
    for( let i = 0; i < count; i++) {
      bar = bar.concat("▆");
    }
    return bar;
  }

  renderChart() {

    if(!this.props.contributors) {
      return (<tr><td>{"loading.."}</td></tr>);
    }

    if (this.props.team === -1 ) {
      const ans = this.props.contributors.map((e) => {
        return (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{this.graph(e.contribution_count)}</td>
          </tr>
        );
      });
      return ans;
    }
    if (this.props.team === 1) {
      const ans = this.props.contributors.map((e) => {
        if (e.team === "teamA") {
          return (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{this.graph(e.contribution_count)}</td>
            </tr>
          );
        }
      });
      return ans;
    }
    else {
      const ans = this.props.contributors.map((e) => {
        if (e.team === "teamB") {
          return (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{this.graph(e.contribution_count)}</td>
            </tr>
          );
        }
      });
      return ans;
    }
  }

  render() {
    const chart = this.renderChart();
    return (
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8" style={{paddingLeft: '30px'}}>
        <h3>Commits por usuario </h3>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {chart}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {
  return { contributors: state.demo.contributors.data, team: state.demo.team };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContributorsVersion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
