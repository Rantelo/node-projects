import React, { Component } from 'react';
import TeamSelection        from './team_selection';
import VersionSelection     from './version_selection';
import ContributionChart    from './contribution_chart';


export default class App extends Component {
  render() {
    return (
      <div className="row" style={{marginTop: '10px'}}>
        <TeamSelection holi="hey"/>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <VersionSelection />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <ContributionChart />
          </div>
        </div>
      </div>
    );
  }
}
