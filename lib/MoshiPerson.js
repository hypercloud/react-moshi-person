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
        <div className="main container">
          <div className="row">
            <div className="col-md-4">
              <div>{this.state.compacted.name}</div>
              <div>{this.state.compacted.jobTitle}</div>
            </div>
            <div className="col-md-8">
              <div>{this.state.compacted.url}</div>
              <div>{this.state.compacted.telephone}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoshiPerson;
