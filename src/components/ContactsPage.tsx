import * as React from 'react';
import { githubImg, twitterImg } from "./iconsList";
// import * as facebookLogo from "../images/f_logo_RGB-Blue_58.png";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => {
  return (
    <div className="contacts">
      <h3>Contact me:</h3>
      <div className="anchors">
        <a href="https://twitter.com/">
          <img style={{ height: "1em" }} alt="twitterLogo" src={twitterImg} />
      Twitter
        </a>
        <a href="https://facebook.com/">
          {/* <img style={{ height: "1em" }} alt="facebookLogo" src={facebookLogo} /> */}
      Facebook
        </a>
      
        <a href="https://github.com/">
          <img style={{ height: "1em" }} alt="githubLogo" src={githubImg} />
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