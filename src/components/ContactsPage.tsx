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
          <div className="contacts__links">
            <a aria-label="twitter" href="https://twitter.com/MaksksE">
              <svg width="2.5em" height="2.5em">
                <use xlinkHref="sprite.svg#Twitter" />
              </svg>
            </a>
            <a aria-label="facebook" href="https://www.facebook.com/maksksErshov">
              <svg className="project__link" width="2.5em" height="2.5em">
                <use xlinkHref="sprite.svg#Facebook" />
              </svg>
            </a>
            <a aria-label="github" href="https://github.com/maxershov">
              <svg className="project__link" id="githubImg" width="2.5em" height="2.5em">
                <use xlinkHref="sprite.svg#Github" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="footer__year">2019 - 2020</p>
    </footer>
  )
}

export default ContactsPage;