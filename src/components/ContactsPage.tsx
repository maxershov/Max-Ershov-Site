import * as React from 'react';
import * as twitterLogo from "../images/Twitter_Social_Icon_Circle_Color.png";
import * as facebookLogo from "../images/f_logo_RGB-Blue_58.png";
import * as githubLogo from "../images/GitHub-Mark-32px.png";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => {
  return (
    <div className="Contact">
      <h3>Contact me:</h3>
      <img style={{ height: "1em" }} alt="twitterLogo" src={twitterLogo} />
      <a href="https://twitter.com/">Twitter</a>
      <img style={{ height: "1em" }} alt="facebookLogo" src={facebookLogo} />
      <a href="https://facebook.com/">Facebook</a>
      <img style={{ height: "1em" }} alt="githubLogo" src={githubLogo} />
      <a href="https://github.com/">Github</a>
      <ContactFields />
      <p>or just say HI</p>
      <button type="button">SAY HI</button>
    </div>
  )
};

export default ContactsPage;