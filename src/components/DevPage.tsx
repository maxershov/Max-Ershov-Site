import * as React from 'react';


const  DevPage: React.FC = () => {
    return (
      <div>
        <h3>Used in this page:</h3>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>react-router-dom</li>
          <li>ESLint</li>
        </ul>
        <h3>You can found all the source code in my </h3>
        <a href="https://github.com/">github repository</a>
      </div>
    )
}

export default DevPage;
