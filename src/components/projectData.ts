/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as counterImg from "../images/counter.jpg";
import * as covidImg from "../images/covid.jpg";
import * as icn from "./iconsList";


const objCRM = {
  name: "CRM",
  icons: [[icn.reactImg, "React"], [icn.electronImg, "Electron"], [icn.reduxImg, "Redux"], [icn.herokuImg, "Heroku"], [icn.webpackImg, "Webpack"], [icn.eslintImg, "ESLint"], [icn.jestImg, "Jest"], [icn.postcssImg, "postCSS"], [icn.ieImg, "IE 11 Support"], [icn.reactRouterImg, "React-Router"], [icn.reduxSagaImg, "Redux-Saga"], [icn.babelImg, "Babel"]],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Desktop version: Electron",
    "Framework: React",
    "Store: Redux, Redux Saga",
    "Bundle: Webpack(custom config) and Babel",
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
  icons: [[icn.preactImg, "Preact"], [icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.sassImg, "SAAS"], [icn.postcssImg, "postCSS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"], [icn.eslintImg, "ESLint"]],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Framework: React(Preact)", "Language: TypeScript", "Routing: Vanilla #", "Backend: Express.js", "L10n: i18next", "CSS: postCSS, SASS + Auto dark theme", "Linting: ESLint with Airbnb-TS config"],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
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

const objCovid = {
  name: "COVID-19 STATS & ADVICE",
  icons: [[icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.babelImg, "Babel"], [icn.sassImg, "SAAS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"]],
  linkHub: "https://github.com/maxershov/covid-stats-site",
  linkLive: "https://covidrus.herokuapp.com/",
  idImg: "img-Covid",
  src: covidImg,
  id: "Covid-Site",
  text: ["Framework: React", "Language: TypeScript", "Bundle: Webpack and Babel", "Backend: Express.js", "CSS: SASS", "API: covid-19-api"],
  heroku: "Hosted on Heroku free plan - page may load 5-10 sec"
};


const ruCRM = {
  name: "CRM",
  icons: [[icn.reactImg, "React"], [icn.electronImg, "Electron"], [icn.reduxImg, "Redux"], [icn.herokuImg, "Heroku"], [icn.webpackImg, "Webpack"], [icn.eslintImg, "ESLint"], [icn.jestImg, "Jest"], [icn.postcssImg, "postCSS"], [icn.ieImg, "IE 11 Support"], [icn.reactRouterImg, "React-Router"], [icn.reduxSagaImg, "Redux-Saga"], [icn.babelImg, "Babel"]],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: CRMimg,
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Нативная версия: Electron",
    "Фреймворк: React",
    "Управление состоянием: Redux, Redux Saga",
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
  icons: [[icn.preactImg, "Preact"], [icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.sassImg, "SAAS"], [icn.postcssImg, "postCSS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"], [icn.eslintImg, "ESLint"]],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: siteImg,
  id: "This-Site",
  text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Роутинг: react-router-dom => #", "Сервер: Express.js", "L10n: i18next", "Сборка: Webpack(custom config)", "CSS: postCSS, SASS + Автоматическая тёмная тема", "Линтер: ESLint с Airbnb-TS конфигурацией"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и страница может долго загружаться"
};


const ruCounter = {
  name: "TIME COUNTER",
  icons: [[icn.svelteImg, "Svelte"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"]],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: counterImg,
  id: "Counter",
  text: ["Фреймворк: Svelte", "Сборка: Webpack", "Сервер: Express.js + helmet"],
  heroku: "В ПРОЦЕССЕ РАЗРАБОТКИ"
};

const ruCovid = {
  name: "COVID-19 СТАТИСТИКА & СОВЕТЫ",
  icons: [[icn.reactImg, "React"], [icn.typescriptImg, "TypeScript"], [icn.babelImg, "Babel"], [icn.sassImg, "SAAS"], [icn.webpackImg, "Webpack"], [icn.herokuImg, "Heroku"]],
  linkHub: "https://github.com/maxershov/covid-stats-site",
  linkLive: "https://covidrus.herokuapp.com/",
  idImg: "img-Covid",
  src: covidImg,
  id: "Covid-Site",
  text: ["Фреймворк: React", "Язык: TypeScript", "Сервер: Express.js", "Сборка: Webpack(custom config) и Babel", "CSS: SASS", "API: covid-19-api"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и страница может долго загружаться"
};

export { objCRM, objThis, objCounter, objCovid, ruCRM, ruThis, ruCounter, ruCovid };