import * as React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";
import { topArrowImg } from "./iconsList";

require("./App.scss");

//&#10148;

const App: React.FC = () => (
  <div id="home" className="app">
  <a id="toTop" title="Back to top" href="#home"><img id="topArrowImg" src={topArrowImg}></img></a>
    <Header />
    <MainPage />
    <ProjectsPage />
    <ContactsPage />
  </div>
);

export default App;
