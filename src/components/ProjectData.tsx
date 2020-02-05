import * as CRMimg from "../images/CRM.png";
import * as siteImg from "../images/site.png";

const objCRM = {
  name: "CRM",
  linkHub: "https://github.com",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  idImg: "img-CRM",
  text: [
    "Desktop version: Electron with React and Redux",
    "Bundle and compilation: Webpack with custom config and Babel",
    "Routing: React-router-dom",
    "CSS: postCSS(variables, autoprefixer)",
    "Linting: ESLint with Airbnb config",
    "Testing: Jest, Puppeteer",
    "Backend: Express.js",
    "Browserlist: >1% and IE11"
  ],
  heroku: "Hosted on Heroku free App deploy - page may load 5-10 sec"
};

const objThis = {
  name: "This Site",
  linkHub: "https://github.com",
  linkLive: "",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["React, TypeScript, react-router-dom"],
  heroku: "Hosted on Heroku free App deploy - page may load 5-10 sec"
};
export { objCRM, objThis };
