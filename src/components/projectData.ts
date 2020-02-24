/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as javaImg from "../images/javaprg.jpg";
import * as icn from "./iconsList";

// JSXprops: (<li>CSS: <img src={postcssImg} />postCSS(variables, autoprefixer)</li>)

const objCRM = {
  name: "CRM",
  icons: [[icn.reactImg, "React"], [icn.electronImg, "Electron"], [icn.reduxImg, "Redux"], [icn.herokuImg, "Heroku"], [icn.webpackImg, "Webpack"], [icn.eslintImg, "ESLint"], [icn.jestImg, "Jest"], [icn.puppeteerImg, "Puppeteer"], [icn.ieImg, "IE 11 Support"], [icn.reactRouterImg, "React-Router"], [icn.babelImg, "Babel"]],
  linkHub: "https://github.com/maxershov/Web-React-CRM",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Desktop version: Electron",
    "Framework: React",
    "Store: Redux",
    "Bundle: Webpack with custom config and Babel",
    "Routing: react-router-dom",
    "CSS: postCSS(variables, autoprefixer)",
    "Linting: ESLint with Airbnb config",
    "Testing: Jest, Puppeteer, Enzyme",
    "Backend: Express.js + helmet",
    "Browserlist: >1% and Internet Explorer 11"
  ],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
};

const objThis = {
  name: "PORTFOLIO",
  icons: [[icn.preactImg, "Preact"], [icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.reactRouterImg, "React-Router"], [icn.sassImg, "SAAS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"], [icn.eslintImg, "ESLint"]],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Framework: React(Preact)", "Language: TypeScript", "Routing: react-router-dom", "Backend: Express.js", "CSS: SASS + Dark theme support", "Linting: ESLint with Airbnb-TS config"],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
};

const objJava = {
  name: "PDF WRITER",
  icons: [[icn.javaImg, "Java"]],
  linkHub: "https://github.com/maxershov/java-pdf-writer",
  idImg: "img-Java",
  src: javaImg,
  id: "Java",
  text: ["Language: Java", "GUI: Java Swing", "Library: Apache PDFBox"],
  heroku: "My first work project. Desktop program that takes input data, write it to PDF and print. Bundled with JRE"
};



const ruCRM = {
  name: "CRM",
  icons: [[icn.reactImg, "React"], [icn.electronImg, "Electron"], [icn.reduxImg, "Redux"], [icn.herokuImg, "Heroku"], [icn.webpackImg, "Webpack"], [icn.eslintImg, "ESLint"], [icn.jestImg, "Jest"], [icn.puppeteerImg, "Puppeteer"], [icn.ieImg, "IE 11 Support"], [icn.reactRouterImg, "React-Router"], [icn.babelImg, "Babel"]],
  linkHub: "https://github.com/maxershov/Web-React-CRM",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Нативная версия: Electron",
    "Фреймворк: React",
    "Управление состоянием: Redux",
    "Бандл: Webpack с  custom config and Babel",
    "Роутинг: react-router-dom",
    "CSS: postCSS(variables, autoprefixer)",
    "Линтер: ESLint с Airbnb конфигурацией",
    "Тестирование: Jest, Puppeteer, Enzyme",
    "Сервер: Express.js + helmet",
    "Поддержка браузеров: >1% и Internet Explorer 11"
  ],
  heroku: "Сайт использует бесплатный тариф Heroku - страница может долго загружаться"
};

const ruThis = {
  name: "Портфолио",
  icons: [[icn.preactImg, "Preact"], [icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.reactRouterImg, "React-Router"], [icn.sassImg, "SAAS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"], [icn.eslintImg, "ESLint"]],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Роутинг: react-router-dom", "Сервер: Express.js", "CSS: SASS + Поддержка темной темы", "Линтер: ESLint с Airbnb-TS конфигурацией"],
  heroku: "Сайт использует бесплатный тариф Heroku - страница может долго загружаться"
};

const ruJava = {
  name: "Печать PDF документов",
  icons: [[icn.javaImg, "Java"]],
  linkHub: "https://github.com/maxershov/java-pdf-writer",
  idImg: "img-Java",
  src: javaImg,
  id: "Java",
  text: ["Язык: Java", "GUI: Java Swing", "Библиотека: Apache PDFBox"],
  heroku: "Первый проект для работы. Программа собирает введенные данные, подставляет в PDF заготовку и печатает. Запаковал программу и JRE в .exe файл"
};

export { objCRM, objThis, objJava, ruCRM,ruThis, ruJava };