import * as React from 'react';


const ContactFields: React.FC = () => (
  <>
    <p>Contact me:</p>
    <form>
      <input placeholder="Contact adress" type="text" />
      <textarea placeholder="Message" />
      <button type="submit">Send message</button>
    </form>
    <button type="button">or just say HI</button>
  </>
)

export default ContactFields;
