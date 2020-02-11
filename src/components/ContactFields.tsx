import * as React from 'react';


const ContactFields: React.FC = () => (
  <div className="contacts__left">
    <p>Contact me:</p>
    <form>
      <input minLength={5} placeholder="Contact adress" type="text" />
      <textarea minLength={5} placeholder="Message" />
      <button type="submit">SEND MESSAGE</button>
    </form>
    <button type="button">JUST SAY HI</button>
  </div>
)

export default ContactFields;
