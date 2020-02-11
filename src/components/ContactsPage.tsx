import * as React from 'react';
import { facebookImg, githubImg, twitterImg } from "./iconsList";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => (
  <div className="contacts">
    <h3>CONTACTS:</h3>
    <ContactFields />
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
  </div>
)

export default ContactsPage;