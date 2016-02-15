/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

import React from 'react';

class MoshiPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'compacted': {}
    };
  }

  componentDidMount() {
    let data = this.props.data;
    this.setState({
      'compacted': data
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.compacted.name}</div>
        <div>{this.state.compacted.jobTitle}</div>
        <div>{this.state.compacted.url}</div>
        <div>{this.state.compacted.telephone}</div>
      </div>
    );
  }
}

export default MoshiPerson;
