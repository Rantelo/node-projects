import React, {Component} from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines'

export default class ContributionChart extends Component {
  render () {
    return (
      <Sparklines height={220} width={180} margin={2} data={[2,3,5,4,3,6]}>
        <SparklinesBars height={220} width={180} margin={4} />
      </Sparklines>
    );
  }
}
