import * as React from 'react';


const ContactFields: React.FC = () => (
  <div className="contacts__left">
    <p>Contact me:</p>
    <form action="https://formspree.io/xbjowqpg" method="POST">
      <input minLength={5} name="_replyto" placeholder="Contact adress" type="email" />
      <textarea name="message" minLength={5} placeholder="Message" />
      <button type="submit">SEND MESSAGE</button>
    </form>
    <button type="button">JUST SAY HI</button>
  </div>
)

export default ContactFields;
