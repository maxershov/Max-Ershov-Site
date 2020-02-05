import * as React from 'react';
import * as CRMimg from "../images/CRM.png";
import * as siteImg from "../images/site.png";

const Project: React.FC = () => {
  return (
    <>
      <div className="object-container">
        <h3>CRM</h3>
        <a href="https://github.com"><img id="CRM-img" alt="CRM-img" src={CRMimg} /></a>
        <ul>
          <li>Desktop version: Electron with React and Redux</li>
          <li>Bundle and compilation: Webpack with custom config and Babel</li>
          <li>Routing: React-router-dom</li>
          <li>CSS: postCSS(variables, autoprefixer)</li>
          <li>Linting: ESLint with Airbnb config</li>
          <li>Testing: Jest, Puppeteer</li> 
          <li>Backend: Express.js</li>
          <li>Browserlist: >1% and IE11</li>
        </ul>
        <div className="anchor-container">
          <a href="https://react-crm-maxe.herokuapp.com/main">Live Web version</a>
          <a href="https://github.com">GitHub repo</a>
          {/* <a href="https://github.com">Code for Electron App</a> */}
        </div>
        <p>Hosted on Heroku free App deploy - page may load 5-10 sec</p>
      </div>
      <div className="object-container">
        <h3>This Site</h3>
        <a href="https://github.com"><img id="site-img" alt="site-img" src={siteImg} /></a>
        <p>React, TypeScript, react-router-dom</p>
        <div className="anchor-container">
          <a href="https://react-crm-maxe.herokuapp.com/main">Live Web version</a>
          <a href="https://github.com">GitHub repo</a>
        </div>
      </div>
    </>
  )
}

/** 
 * 8 props + 2?
<div className="object-container">
        <h3>name</h3>
        <a href="gitHub"><img id="imgId" alt="imgId" src={imgSrc} /></a>
        <ul>
          <li>stack</li>
        </ul>
        <div className="anchor-container">
          <a href="liveHref">Live Web version</a>
          <a href="gitHub">GitHub repo</a>
          <a href="gitHubElectron">Code for Electron App</a>
        </div>
        <p>Hosted on Heroku<p>
*/
export default Project;