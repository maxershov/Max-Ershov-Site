import * as React from 'react';
import { useTranslation } from 'react-i18next';
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
            <svg width="1em" height="1em">
            <use xlinkHref="sprite.svg#Twitter" />
          </svg>
              Twitter
          </a>
            <a href="https://www.facebook.com/maksksErshov">
              <svg width="1em" height="1em">
              <use xlinkHref="sprite.svg#Facebook" />
            </svg>
              Facebook
          </a>
            <a href="https://github.com/maxershov">
            <svg id="githubImg" width="1em" height="1em">
            <use xlinkHref="sprite.svg#Github" />
          </svg>
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