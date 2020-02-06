import * as React from "react";
import { Link } from "react-router-dom";
import ProjectsPage from "./ProjectsPage";
import ContactsPage from "./ContactsPage";

const MainPage: React.FC = () => {
  return (
    <div className="mainPage-container">
      <h2>Hi</h2>
      <p>
        You`re on my personal site. If you found something weird, please contact
        me on
      </p>
      <Link to="/contacts">contacts page</Link>
      <h3>Who are you?</h3>
      <p>My name is Max. I`m Jr. Frontend developer</p>
      <p>Live in Russia. Moscow</p>
      <ProjectsPage />
      <ContactsPage />
    </div>
  );
};

export default MainPage;
