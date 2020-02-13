import * as React from 'react';


const ContactFields: React.FC = () => (
  <div className="contacts__left">
    <p>Contact me:</p>
    <form action="https://formspree.io/xbjowqpg" method="POST">
      <input required minLength={5} name="_replyto" placeholder="Contact adress" type="email" />
      <textarea required name="message" minLength={5} placeholder="Message" />
      <button type="submit">SEND MESSAGE</button>
    </form>
  </div>
)

export default ContactFields;
