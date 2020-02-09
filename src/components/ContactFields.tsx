import * as React from 'react';


const ContactFields: React.FC = () => {
  return (
    <>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Contact adress" type="text" />
        <textarea placeholder="Message" />
        <button type="submit">Send message</button>
      </form>
      <p>or just say HI</p>
      <button type="button">HI</button>
    </>
  )
}

export default ContactFields;
