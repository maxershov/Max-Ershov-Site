import * as React from 'react';


const ContactFields: React.FC = () => {
  return (
    <div>
      <h3>Send msg to author</h3>
      <form>
        <input type="text" />
        <input type="text" />
        <textarea />
        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default ContactFields;
