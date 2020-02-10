import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";

require("./App.scss");

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/home" component={MainPage} />
        <Route exact path="/dev" component={ProjectsPage} />
        <Route exact path="/contacts" component={ContactsPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
