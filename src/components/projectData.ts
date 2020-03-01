/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as javaImg from "../images/javaprg.jpg";
import * as counterImg from "../images/counter.jpg";
import * as icn from "./iconsList";


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
    "Browserlist: >1% (Internet Explorer 11)"
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
  text: ["Framework: React(Preact)", "Language: TypeScript", "Routing: react-router-dom", "Backend: Express.js", "L10n: i18next", "CSS: SASS + Dark theme support", "Linting: ESLint with Airbnb-TS config"],
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

const objCounter = {
  name: "TIME COUNTER",
  icons: [[icn.svelteImg, "Svelte"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"]],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: counterImg,
  id: "Counter",
  text: ["Framework: Svelte", "Bundle: Webpack", "Backend: Express.js + helmet"],
  heroku: "WORK IN PROGRESS"
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
    "Сборка: Webpack(custom config) и Babel",
    "Роутинг: react-router-dom",
    "CSS: postCSS(variables, autoprefixer)",
    "Линтер: ESLint с Airbnb конфигурацией",
    "Тестирование: Jest, Puppeteer, Enzyme",
    "Сервер: Express.js + helmet",
    "Поддержка браузеров: >1% и Internet Explorer 11"
  ],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и страница может долго загружаться"
};

const ruThis = {
  name: "ПОРТФОЛИО",
  icons: [[icn.preactImg, "Preact"], [icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.reactRouterImg, "React-Router"], [icn.sassImg, "SAAS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"], [icn.eslintImg, "ESLint"]],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Роутинг: react-router-dom", "Сервер: Express.js", "L10n: i18next", "Сборка: Webpack(custom config)", "CSS: SASS + Поддержка темной темы", "Линтер: ESLint с Airbnb-TS конфигурацией"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и страница может долго загружаться"
};

const ruJava = {
  name: "PDF WRITER",
  icons: [[icn.javaImg, "Java"]],
  linkHub: "https://github.com/maxershov/java-pdf-writer",
  idImg: "img-Java",
  src: javaImg,
  id: "Java",
  text: ["Язык: Java", "GUI: Java Swing", "Библиотека: Apache PDFBox"],
  heroku: "Первый проект для работы. Программа подставляет введенные данные в PDF заготовку и печатает документ на принтере. JRE и .jar файлы запакованы в .exe файл"
};

const ruCounter = {
  name: "TIME COUNTER",
  icons: [[icn.svelteImg, "Svelte", icn.webpackImg, "Webpack"]],
  linkHub: "https://github.com/maxershov/",
  idImg: "img-Counter",
  src: counterImg,
  id: "Counter",
  text: ["Фреймворк: Svelte", "Сборка: Webpack", "Сервер: Express.js + helmet"],
  heroku: "В ПРОЦЕССЕ РАЗРАБОТКИ"
};

export { objCRM, objThis, objJava, objCounter, ruCRM, ruThis, ruJava, ruCounter };