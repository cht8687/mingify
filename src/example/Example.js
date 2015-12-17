import React, { Component } from 'react';
import { render } from 'react-dom';
import Display from './Display';

class App extends Component {

  

  render() {

    return (
      <div>
        <Display
          text={text}
        />
      </div>
    );
  }

}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  