import * as React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";

require("./App.scss");

// <a id="back2Top" title="Back to top" href="#app">&#10148;</a>

const App: React.FC = () => (
  <div id="home" className="app">
    <Header />
    <MainPage />
    <ProjectsPage />
    <ContactsPage />
  </div>
);

export default App;
