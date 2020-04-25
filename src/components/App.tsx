import * as React from "react";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";

require("./App.scss");


const App: React.FC = () => (
  <main id="home" className="app">
    <a id="toTop" title="Back to top" href="#home"><svg id="topArrowImg" width="1em" height="1em"><use xlinkHref="sprite.svg#TopArrow" /></svg></a>
    <Header />
    <MainPage />
    <ProjectsPage />
    <ContactsPage />
  </main>
);

export default App;
