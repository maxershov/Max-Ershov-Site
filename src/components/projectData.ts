/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as counterImg from "../images/counter.jpg";
import * as covidImg from "../images/covid.jpg";
import * as CRMwebp from "../images/crm.webp";
import * as siteWebp from "../images/site.webp";
import * as counterWebp from "../images/counter.webp";
import * as covidWebp from "../images/covid.webp";

const objCRM = {
  name: "CRM",
  icons: ["React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: [CRMimg, CRMwebp],
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
    "Backend: Express.js + helmet, Knex.js",
    "Browserlist: >1% (Internet Explorer 11)"
  ],
  heroku: "Hosted on Heroku free plan - first page load 5 sec"
};

const objThis = {
  name: "PORTFOLIO",
  icons: ["Preact", "React", "TypeScript", "Heroku", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: [siteImg, siteWebp],
  id: "This-Site",
  text: ["Framework: React(Preact)", "Language: TypeScript", "Routing: #", "Backend: Express.js", "L10n: i18next", "CSS: SASS, postCSS, Auto dark theme", "Linting: ESLint with Airbnb-TS config"],
  heroku: "Hosted on Heroku free plan - first page load 5 sec"
};


const objCounter = {
  name: "TIME COUNTER",
  icons: ["Svelte", "Heroku", "Webpack"],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: [counterImg, counterWebp],
  id: "Counter",
  text: ["Framework: Svelte", "Bundle: Webpack", "Backend: Express.js + helmet"],
  heroku: "Hosted on Heroku free plan - first page load 5 sec"
};

const objCovid = {
  name: "COVID-19 STATS",
  icons: ["React", "TypeScript", "Heroku", "Webpack", "SCSS", "Babel"],
  linkHub: "https://github.com/maxershov/covid-stats-site",
  linkLive: "https://covidrus.herokuapp.com/",
  idImg: "img-Covid",
  src: [covidImg, covidWebp],
  id: "Covid-Site",
  text: ["Framework: React", "Language: TypeScript", "Bundle: Webpack and Babel", "Backend: Express.js", "CSS: SCSS", "API: covid-19-api"],
  heroku: "Hosted on Heroku free plan - first page load 5 sec"
};


const ruCRM = {
  name: "CRM",
  icons: ["React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: [CRMimg, CRMwebp],
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
    "Сервер: Express.js + helmet, Knex.js",
    "Поддержка браузеров: >1% и Internet Explorer 11"
  ],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и первая загрузка 5 сек"
};

const ruThis = {
  name: "ПОРТФОЛИО",
  icons: ["Preact", "React", "TypeScript", "Heroku", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maxershov.herokuapp.com/",
  idImg: "img-Site",
  src: [siteImg, siteWebp],
  id: "This-Site",
  text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Роутинг: #", "Сервер: Express.js", "L10n: i18next", "Сборка: Webpack(custom config)", "CSS: postCSS, SASS + Автоматическая тёмная тема", "Линтер: ESLint с Airbnb-TS конфигурацией"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и первая загрузка 5 сек"
};


const ruCounter = {
  name: "TIME COUNTER",
  icons: ["Svelte", "Heroku", "Webpack"],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: [counterImg, counterWebp],
  id: "Counter",
  text: ["Фреймворк: Svelte", "Сборка: Webpack", "Сервер: Express.js + helmet"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и первая загрузка 5 сек"
};

const ruCovid = {
  name: "COVID-19 СТАТИСТИКА",
  icons: ["React", "TypeScript", "Heroku", "Webpack", "SCSS", "Babel"],
  linkHub: "https://github.com/maxershov/covid-stats-site",
  linkLive: "https://covidrus.herokuapp.com/",
  idImg: "img-Covid",
  src: [covidImg, covidWebp],
  id: "Covid-Site",
  text: ["Фреймворк: React", "Язык: TypeScript", "Сервер: Express.js", "Сборка: Webpack(custom config) и Babel", "CSS: SASS", "API: covid-19-api"],
  heroku: "Сайт на бесплатном тарифе Heroku - сервер в спящем режиме и первая загрузка 5 сек"
};

export { objCRM, objThis, objCounter, objCovid, ruCRM, ruThis, ruCounter, ruCovid };