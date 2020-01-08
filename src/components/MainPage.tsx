import * as React from 'react';
import { Link } from 'react-router-dom';

const  MainPage: React.FC = () => {
    return (
      <div>
        <h2>Hi</h2>
        <h2>My name is Max and this is my page</h2>
        <h3>Where Am I?</h3>
        <p>You`re on my personal site. If you found something weird, please contact me on </p>
        <Link to="/contacts">contacts page</Link>
      </div>
    )
}

export default MainPage;
