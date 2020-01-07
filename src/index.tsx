/* eslint-disable react/prefer-stateless-function */
import * as React from "react";

import { render } from "react-dom";
import {TestComponent} from "./components/TestComponent"

class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <TestComponent title="Hi from test component title" />
        <h1>React Type Script app</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
