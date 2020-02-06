import * as React from 'react';
import * as twitterLogo from "../images/Twitter_Social_Icon_Circle_Color.png";
import * as facebookLogo from "../images/f_logo_RGB-Blue_58.png";
import * as githubLogo from "../images/GitHub-Mark-32px.png";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => {
  return (
    <div className="contacts">
      <h3>Contact me:</h3>
      <div className="anchors">
        <a href="https://twitter.com/">
          <img style={{ height: "1em" }} alt="twitterLogo" src={twitterLogo} />
      Twitter
        </a>
        <a href="https://facebook.com/">
          <img style={{ height: "1em" }} alt="facebookLogo" src={facebookLogo} />
      Facebook
        </a>
      
        <a href="https://github.com/">
          <img style={{ height: "1em" }} alt="githubLogo" src={githubLogo} />
      Github
        </a>
      </div>
      <ContactFields />
      <p>or just say HI</p>
      <button type="button">SAY HI</button>
    </div>
  )
};

export default ContactsPage;