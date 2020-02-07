import * as React from 'react';


const ContactFields: React.FC = () => {
  return (
    <div>
      <h3>Send message to author</h3>
      <form>
        <input placeholder="Name" type="text" />
        <input placeholder="Contact adress" type="text" />
        <textarea placeholder="Message" />
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default ContactFields;
