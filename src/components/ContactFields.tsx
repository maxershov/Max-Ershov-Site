import * as React from 'react';
import { useTranslation } from 'react-i18next';


const ContactFields: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts__left">
      <form action="https://formspree.io/xbjowqpg" method="POST">
        <label className="hidden" htmlFor="in-f">Email</label>
        <input id="in-f" required minLength={5} name="_replyto" placeholder={t("contacts.placeholderMail")} type="email" />
        <label className="hidden" htmlFor="ta-f">Message</label>
        <textarea required id="ta-f" name="message" placeholder={t("contacts.placeholderMsg")} minLength={5} />
        <button type="submit">{t("contacts.btn")}</button>
      </form>
    </div>
  )
}

export default ContactFields;