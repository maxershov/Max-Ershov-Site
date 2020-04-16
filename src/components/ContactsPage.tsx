import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { facebookImg, githubImg, twitterImg } from "./iconsList";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="contacts" className="contacts">
      <h3>{t("contacts.title")}</h3>
      <div className="contacts__container">
        <ContactFields />
        <div className="contacts__right">
          <div className="anchors">
            <a href="https://twitter.com/MaksksE">
              <img style={{ height: "1em" }} alt="twitterLogo" src={twitterImg} />
              Twitter
          </a>
            <a href="https://www.facebook.com/maksksErshov">
              <img style={{ height: "1em" }} alt="facebookLogo" src={facebookImg} />
              Facebook
          </a>
            <a href="https://github.com/maxershov">
              <img id="darkImg" style={{ height: "1em" }} alt="githubLogo" src={githubImg} />
              Github
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage;