import * as React from 'react';
import { useTranslation } from 'react-i18next';


const ContactFields: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts__left">
      <form action="/cgi-bin/mail.php" method="POST">
        <label className="hidden" htmlFor="email">Email</label>
        <input required minLength={5} name="email" placeholder={t("contacts.placeholderMail")} type="email" />
        <label className="hidden" htmlFor="message">Message</label>
        <textarea required name="message" placeholder={t("contacts.placeholderMsg")} minLength={5} />
        <button type="submit">{t("contacts.btn")}</button>
      </form>
    </div>
  )
}

export default ContactFields;