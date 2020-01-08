import * as React from 'react';
import ContactFields from "./ContactFields";

const  ContactsPage: React.FC = () => {
  return (
    <div className="Contact">
      <h3>Contact me:</h3>
      {/* < TODO Add small logos> */}
      <a href="https://twitter.com/">Twitter</a>
      <a href="https://facebook.com/">Facebook</a>
      <a href="https://github.com/">Github</a>
      <ContactFields />
      <p>or just say HI</p>
      <button type="button">SAY HI</button>
    </div>
  )
};

export default ContactsPage;