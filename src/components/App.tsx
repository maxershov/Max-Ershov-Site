import * as React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MainPage } from "./MainPage";
import { ContactsPage } from "./ContactsPage";

const App = () => {
        return (
          <Router>
            <div>
              <nav>
                <Link to="/main">Main Page</Link>
                <Link to="/contacts">Contacts Page</Link>
              </nav>
              <Switch>
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/contacts" component={ContactsPage} />
              </Switch>
            </div>
          </Router>
        );
}

export default App;