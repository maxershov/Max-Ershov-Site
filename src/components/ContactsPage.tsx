import * as React from 'react';
import { facebookImg, githubImg, twitterImg } from "./iconsList";
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
          <img style={{ height: "1em" }} alt="facebookLogo" src={facebookImg} />
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