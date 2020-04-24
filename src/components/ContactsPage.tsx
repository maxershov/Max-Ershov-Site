import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { facebookImg, twitterImg } from "./iconsList";
import ContactFields from "./ContactFields";


const ContactsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer id="contacts" className="contacts">
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
              <svg id="githubImg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 432 416" focusable="false" width="1.04em" height="1em"><path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" /></svg>
              Github
          </a>
          </div>
        </div>
      </div>
      <p className="footer__year">2019 - 2020</p>
    </footer>
  )
}

export default ContactsPage;