/* eslint-disable import/no-unresolved */
import * as CRMimg from "../images/crm.jpg";
import * as siteImg from "../images/site.jpg";
import * as counterImg from "../images/counter.jpg";
import * as githubDashboardImg from "../images/githubDashboard.jpg";
import * as telegramImg from "../images/telegram.jpg";
import * as bazaImg from "../images/baza.jpg";
import * as CRMwebp from "../images/crm.webp";
import * as siteWebp from "../images/site.webp";
import * as counterWebp from "../images/counter.webp";
import * as githubDashboardWebp from "../images/githubDashboard.webp";
import * as telegramWebp from "../images/telegram.webp";
import * as bazaWebp from "../images/baza.webp";

interface Project {
  name: string;
  icons: string[];
  linkHub:  string | undefined;
  linkLive: string | undefined;
  idImg: string;
  src: string[];
  id: string;
  text: string[];
}



const objCRM: Project = {
  name: "CRM",
  icons: ["Preact", "React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: [CRMimg, CRMwebp],
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Framework: React, Electron (desktop)",
    "Store: Redux, Redux Saga",
    "Bundle: Webpack(custom config) and Babel",
    "Routing: react-router-dom",
    "Styles: postCSS, dark theme",
    "Linting: ESLint with Airbnb config",
    "Testing: Jest, Puppeteer, Enzyme",
    "Backend: Express.js + helmet, Knex.js, SQLite",
    "Browserslist: >1% (Internet Explorer 11)",
    "Case: Used in crossfit club (accounting, RFID cards tracking, profiles sorting and search)"
  ]
};

const objThis: Project = {
  name: "PORTFOLIO",
  icons: ["Preact", "React", "TypeScript", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maksershov.ru/",
  idImg: "img-Site",
  src: [siteImg, siteWebp],
  id: "This-Site",
  text: ["Framework: Preact", "Language: TypeScript", "Backend: Express.js", "L10n: i18next", "Styles: SASS, postCSS, Auto dark theme", "Linting: ESLint with Airbnb-TS config"]
};


const objCounter: Project = {
  name: "TIME COUNTER",
  icons: ["Svelte", "Heroku", "Webpack"],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: [counterImg, counterWebp],
  id: "Counter",
  text: ["Framework: Svelte", "Bundle: Webpack", "Backend: Express.js + helmet"]
};

const objGithub: Project = {
  name: "GITHUB DASHBOARD",
  icons: ["Preact", "React", "Github", "Heroku", "Webpack", "Babel", "PostCSS", "IE11", "React-router"],
  linkHub: "https://github.com/maxershov/gitHubDashboard",
  linkLive: "https://max-github-dashboard.herokuapp.com/",
  idImg: "img-GithubDashboard",
  src: [githubDashboardImg, githubDashboardWebp],
  id: "GithubDashboard",
  text: ["Framework: Preact", "State: react-router to save state between pages in URL", "Bundle: Webpack and Babel", "Browserslist: >1% (Internet Explorer 11)", "Backend: Express.js", "API: Github API"]
};

const objTelegram: Project = {
  name: "TELEGRAM MUSIC BOT",
  icons: ["Telegram", "Puppeteer"],
  linkHub: "https://github.com/maxershov/telegram-youtube-bot",
  linkLive: undefined,
  idImg: "img-Telegram",
  src: [telegramImg, telegramWebp],
  id: "Telegram",
  text: ["API: Node Telegram Bot API", "Backend: Puppeteer", "About: Control YouTubeMusic playback by multiple people", "Case: Used in crossfit club. Clips playing on TV in the gym, employees change track/volume/list with bot"]
};

const objBaza: Project = {
  name: "KBTEAM PAGE",
  icons: ["Pug", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: undefined,
  linkLive: "https://kbteam.ru/",
  idImg: "img-Baza",
  src: [bazaImg, bazaWebp],
  id: "Baza-page",
  text: ["Preprocessor: Pug", "Styles: SASS, postCSS", "Linting: Pug-lint", "Case: Lightweight landing page for crossfit club"]
};


const ruCRM: Project = {
  name: "CRM",
  icons: ["React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  linkHub: "https://github.com/maxershov/webcrm",
  linkLive: "https://react-crm-maxe.herokuapp.com/",
  src: [CRMimg, CRMwebp],
  id: "CRM",
  idImg: "img-CRM",
  text: [
    "Фреймворк: React, Electron",
    "Управление состоянием: Redux, Redux Saga",
    "Сборка: Webpack(custom config) и Babel",
    "Роутинг: react-router-dom",
    "Стили: postCSS, тёмная тема",
    "Линтер: ESLint с Airbnb конфигурацией",
    "Тестирование: Jest, Puppeteer, Enzyme",
    "Backend: Express.js + helmet, Knex.js, SQLite",
    "Поддержка браузеров: >1% (Internet Explorer 11)",
    "Кейс: Используется в кроссфит клубе (учёт авансов, посещений, сроков, сканер RFID карт, сортировка и поиск)"
  ]
};

const ruThis: Project = {
  name: "ПОРТФОЛИО",
  icons: ["Preact", "React", "TypeScript", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  linkLive: "https://maksershov.ru/",
  idImg: "img-Site",
  src: [siteImg, siteWebp],
  id: "This-Site",
  text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Сервер: Express.js", "L10n: i18next", "Сборка: Webpack(custom config)", "Стили: postCSS, SASS + тёмная тема", "Линтер: ESLint с Airbnb-TS конфигурацией"]
};


const ruCounter: Project = {
  name: "TIME COUNTER",
  icons: ["Svelte", "Heroku", "Webpack"],
  linkHub: "https://github.com/maxershov/svelte-time-counter",
  linkLive: "https://development-counter.herokuapp.com/",
  idImg: "img-Counter",
  src: [counterImg, counterWebp],
  id: "Counter",
  text: ["Фреймворк: Svelte", "Сборка: Webpack", "Сервер: Express.js + helmet"]
};

const ruGithub: Project = {
  name: "GITHUB DASHBOARD",
  icons: ["Preact", "React", "Github", "Heroku", "Webpack", "Babel", "PostCSS", "IE11", "React-router"],
  linkHub: "https://github.com/maxershov/gitHubDashboard",
  linkLive: "https://max-github-dashboard.herokuapp.com/",
  idImg: "img-GithubDashboard",
  src: [githubDashboardImg, githubDashboardWebp],
  id: "GithubDashboard",
  text: ["Фреймворк: Preact", "Управление состоянием: URL-параметры react-router", "Сервер: Express.js", "Сборка: Webpack и Babel", "Поддержка браузеров: >1% (Internet Explorer 11)", "API: GitHub API"]
};


const ruTelegram: Project = {
  name: "TELEGRAM MUSIC BOT",
  icons: ["Telegram", "Puppeteer"],
  linkHub: "https://github.com/maxershov/telegram-youtube-bot",
  linkLive: undefined,
  idImg: "img-Telegram",
  src: [telegramImg, telegramWebp],
  id: "Telegram",
  text: ["API: Node Telegram Bot API", "Backend: Puppeteer", "О проекте: Telegram бот для контроля проигрываемой музыки", "Кейс: Используется в кроссфит клубе (вывод видео на ТВ в зал, сотрудники контролируют трек/плейлист/громкость через бот)"]
};

const ruBaza: Project = {
  name: "KBTEAM PAGE",
  icons: ["Pug", "PostCSS", "Webpack", "ESLint", "SCSS"],
  linkHub: undefined,
  linkLive: "https://kbteam.ru/",
  idImg: "img-Baza",
  src: [bazaImg, bazaWebp],
  id: "Baza-page",
  text: ["Препроцессор: Pug", "Стили: SASS, postCSS", "Линтер: Pug-lint", "Кейс: Быстрый лендинг для кроссфит клуба"]
};


export { objCRM, objThis, objCounter, objGithub, objBaza, ruCRM, ruThis, ruCounter, ruGithub, objTelegram, ruTelegram, ruBaza };