/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as javaImg from "../images/javaprg.jpg";
import * as icn from "./iconsList";

// JSXprops: (<li>CSS: <img src={postcssImg} />postCSS(variables, autoprefixer)</li>)

const objCRM = {
  name: "CRM",
  icons: [icn.reactImg, icn.electronImg, icn.reduxImg, icn.herokuImg, icn.webpackImg, icn.eslintImg, icn.jestImg, icn.puppeteerImg, icn.ieImg, icn.reactRouterImg, icn.babelImg ],
  linkHub: "https://github.com/maxershov/Web-React-CRM",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Desktop version: Electron",
    "Framework: React",
    "Store: Redux",
    "Bundle and compilation: Webpack with custom config and Babel",
    "Routing: react-router-dom",
    "CSS: postCSS(variables, autoprefixer)",
    "Linting: ESLint with Airbnb config",
    "Testing: Jest, Puppeteer, Enzyme",
    "Backend: Express.js + helmet",
    "Browserlist: >1% and IE11"
  ],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
};

const objThis = {
  name: "PROJECTS SITE",
  icons: [icn.reactImg, icn.typescriptImg, icn.reactRouterImg, icn.sassImg, icn.webpackImg, icn.herokuImg, icn.eslintImg],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Framework: React", "Language: TypeScript", "Routing: react-router-dom", "Backend: Express.js", "CSS: SASS + Dark theme support", "Linting: ESLint with Airbnb-TS config"],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
};

const objJava = {
  name: "PDF WRITER",
  icons: [icn.javaImg],
  linkHub: "https://github.com/maxershov/java-pdf-writer",
  idImg: "img-Java",
  src: javaImg,
  id: "Java",
  text: ["Language: Java", "GUI: Java Swing", "Library: Apache PDFBox"],
  heroku: "My first work project. Desktop program that takes input data, write it to PDF and print. Bundled with JRE"
};
export { objCRM, objThis, objJava };