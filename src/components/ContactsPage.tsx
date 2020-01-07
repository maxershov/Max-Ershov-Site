import * as React from 'react';

export interface ContactsPageProps {
    title?: string
}

export function ContactsPage ({
    title = "contacts page prop",
}: ContactsPageProps){
    return (
      <div>
        {title}
        <p>Hi from inside contacts page</p>
      </div>
    )
}
