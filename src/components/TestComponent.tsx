import * as React from 'react';

export interface TestComponentProps {
    title?: string
}

export function TestComponent ({
    title = "default value",
}: TestComponentProps){
    return (
      <div>
        {title}
        <p>Hi from inside test compon</p>
      </div>
    )
}
