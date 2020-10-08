import React, { useContext } from 'react';
import ContactFields from "./ContactFields";
import * as sprite from "../images/sprite.svg";
import Context from './Context';

const ContactsPage: React.FC = () => {
  const t = useContext(Context);

  return (
    <footer id="contacts" className="contacts">
      <h3>{t?.contacts?.title}</h3>
      <div className="contacts__container">
        <ContactFields />
        <div className="contacts__right">
          <div className="contacts__links">
            <a aria-label="twitter" href="https://twitter.com/MaksksE">
              <svg width="2.5em" height="2.5em">
                <use xlinkHref={`${sprite}#Twitter`} />
              </svg>
            </a>
            <a aria-label="facebook" href="https://www.facebook.com/maksksErshov">
              <svg className="project__link" width="2.5em" height="2.5em">
                <use xlinkHref={`${sprite}#Facebook`} />
              </svg>
            </a>
            <a aria-label="github" href="https://github.com/maxershov">
              <svg className="project__link" id="githubImg" width="2.5em" height="2.5em">
                <use xlinkHref={`${sprite}#Github`} />
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