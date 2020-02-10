import * as React from "react";
import { Link } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";

const MainPage: React.FC = () => (
  <div className="mainPage">
    <div className="mainPage__text _shadow">
      <h3>HI</h3>
      <h3>I'M MAX. I'M A FRONTEND DEVELOPER</h3>
      <p>Live in Russia. Moscow</p>
      <p>
        You can read about my projects or contact me
        <Link to="/contacts"> here</Link>
      </p>
      <p>Thanks for your visit!</p>
    </div>
    <ProjectsPage />
    <ContactsPage />
  </div>
);

export default MainPage;
