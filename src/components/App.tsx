import * as React from "react";
import MainPage from "./MainPage";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import Header from "./Header";
import { topArrowImg } from "./iconsList";

require("./App.scss");


const App: React.FC = () => (
  <main id="home" className="app">
    <a id="toTop" title="Back to top" href="#home"><img id="topArrowImg" src={topArrowImg}></img></a>
    <Header />
    <MainPage />
    <ProjectsPage />
    <ContactsPage />
  </main>
);

export default App;
