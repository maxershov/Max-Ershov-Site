import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";

require("./App.scss");


const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app__links _shadow">
          <Redirect exact from="/" to="/main" />
          <Link to="/main">Main Page</Link>
          <Link to="/dev">ProjectsPage</Link>
          <Link to="/contacts">Contacts Page</Link>
        </nav>
        <Switch>
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/dev" component={ProjectsPage} />
          <Route exact path="/contacts" component={ContactsPage} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
