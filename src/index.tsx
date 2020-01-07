import * as React from 'react';
import { render } from 'react-dom';
// import App from './App';

class App extends React.Component {
    public render(): React.ReactNode {
      return (
        <div>
          <h1>React TS HELLO3</h1>
          <p>hi</p>
        </div>
      );
    }
  }

render(<App />, document.getElementById('root'));