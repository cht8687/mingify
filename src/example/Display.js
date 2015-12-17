import React, { Component } from 'react';
import mingify from '..';

export default class Display extends Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;
    const result = mingify(text);
    return (
      <div>
        <h3> --------明哥体生成结果-----------</h3>
        {result}
      </div>
    );
  }
}