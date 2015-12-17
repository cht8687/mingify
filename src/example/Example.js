import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from './Display';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Angular'
    }
  }

  render() {

    const { text } = this.state;

    return (
      <div>
        <input 
          type="text"
          defaultValue={text}
          onChange={this.valueChange.bind(this)}
          />
        <Display
          text={text}
        />
      </div>
    );
  }

  valueChange(e) {
    this.setState({
      text: e.currentTarget.value
    });
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  