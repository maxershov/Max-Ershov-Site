import * as React from "react";
import { Link } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";

const MainPage: React.FC = () => (
  <div className="mainPage">
    <div className="mainPage__text _shadow">
      <p>Hi</p>
      <p>Thanks for your visit!</p>
      <p>My name is Max. I`m frontend developer</p>
      <p>Live in Russia. Moscow</p>
      <p>
        You can read about my projects or contact me
        <Link to="/contacts"> here</Link>
      </p>
    </div>
    <ProjectsPage />
    <ContactsPage />
  </div>
);

export default MainPage;
