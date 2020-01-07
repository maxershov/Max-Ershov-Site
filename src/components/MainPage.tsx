import * as React from 'react';

export interface MainPageProps {
    title?: string
}

export function MainPage ({
    title = "prop from MainPage",
}: MainPageProps){
    return (
      <div>
        {title}
        <p>Hi from Main Page</p>
      </div>
    )
}
