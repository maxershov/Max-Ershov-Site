import * as React from 'react';
import { useTranslation } from 'react-i18next';


const ContactFields: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts__left">
      <form action="https://formspree.io/xbjowqpg" method="POST">
        <input required minLength={5} name="_replyto" placeholder={t("contacts.placeholderMail")} type="email" />
        <textarea required name="message" placeholder={t("contacts.placeholderMsg")} minLength={5} />
        <button type="submit">{t("contacts.btn")}</button>
      </form>
    </div>
  )
}

export default ContactFields;