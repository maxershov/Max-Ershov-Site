async function updateL18n(language) {
  let newData = {};
  if (language === 'ru') {
    const data = await getProjectData("ru");
    ruData.projects = data;
    newData = ruData;
  } else {
    const data = await getProjectData("en");
    enData.projects = data;
    newData = enData;
  }
  return newData;
}



async function getProjectData(language) {
  let query = '';
  let projectDir = ''
  const enQuery = `{
    projects {
      nodes {
        projectsFields {
          id
          icons
          imgid
          linkhub
          linklive
          name
          text
          imgjpg {
            sourceUrl
            altText
          }
          imgwebp {
            altText
            sourceUrl
          }
        }
      }
    }
}`
  const ruQuery = `{
  ruprojects {
    nodes {
      projectsFields {
        id
        icons
        imgid
        linkhub
        linklive
        name
        text
        imgjpg {
          sourceUrl
          altText
        }
        imgwebp {
          altText
          sourceUrl
        }
      }
    }
  }
}`

  if (language === 'ru') {
    projectDir = 'ruprojects'
    query = ruQuery
  } else {
    projectDir = 'projects'
    query = enQuery
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  };

  // const raw = await fetch(`http://localhost/mypage/graphql/`, options)
  const raw = await fetch(`/dt/graphql/`, options)
  const res = await raw.json();
  const data = await res.data[projectDir].nodes.map((value) => value.projectsFields);
  return data;
}

const enData = {
  "title": {
    "a": "HI",
    "b": "I'M MAX. I'M A FRONTEND DEVELOPER",
    "c": "Live in Russia. Moscow",
    "d": "Thanks for your visit!"
  },
  "modal": {
    "header": "Hey",
    "text": "The page hosted on Heroku free plan and first loading can take up to 15 seconds",
    "wait": "Thanks for your waiting"
  },
  "projectsName": "MY PROJECTS",
  "links": {
    "home": "HOME",
    "projects": "PROJECTS",
    "contacts": "CONTACTS",
    "login": "LOG IN",
    "dark": "DARK THEME",
    "light": "LIGHT THEME",
    "menu": "Open menu"
  },
  "contacts": {
    "title": "CONTACT ME",
    "placeholderMail": "E-mail address",
    "placeholderMsg": "Message",
    "btn": "SEND MESSAGE"
  }
  // projects: [
  //   {
  //     name: "CRM",
  //     icons: ["Preact", "React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  //     linkHub: "https://github.com/maxershov/webcrm",
  //     linkLive: "https://react-crm-maxe.herokuapp.com/",
  //     src: [CRMimg, CRMwebp],
  //     id: "CRM",
  //     idImg: "img-CRM",
  //     text: [
  //       "Framework: React, Electron (desktop)",
  //       "Store: Redux, Redux Saga",
  //       "Bundle: Webpack(custom config) and Babel",
  //       "Routing: react-router-dom",
  //       "Styles: postCSS, dark theme",
  //       "Linting: ESLint with Airbnb config",
  //       "Testing: Jest, Puppeteer, Enzyme",
  //       "Backend: Express.js + helmet, Knex.js, SQLite",
  //       "Browserslist: >1% (Internet Explorer 11)",
  //       "Case: Used in crossfit club (accounting, RFID cards tracking, profiles sorting and search)"
  //     ]
  //   },
  //   {
  //     name: "PORTFOLIO",
  //     icons: ["Preact", "React", "TypeScript", "PostCSS", "Webpack", "ESLint", "SCSS"],
  //     linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  //     linkLive: "https://maksershov.ru/",
  //     idImg: "img-Site",
  //     src: [siteImg, siteWebp],
  //     id: "This-Site",
  //     text: ["Framework: Preact", "Language: TypeScript", "Backend: Express.js", "L10n: i18next", "Styles: SASS, postCSS, Auto dark theme", "Linting: ESLint with Airbnb-TS config"]
  //   },
  //   {
  //     name: "TIME COUNTER",
  //     icons: ["Svelte", "Heroku", "Webpack"],
  //     linkHub: "https://github.com/maxershov/svelte-time-counter",
  //     linkLive: "https://development-counter.herokuapp.com/",
  //     idImg: "img-Counter",
  //     src: [counterImg, counterWebp],
  //     id: "Counter",
  //     text: ["Framework: Svelte", "Bundle: Webpack", "Backend: Express.js + helmet"]
  //   }, {
  //     name: "GITHUB DASHBOARD",
  //     icons: ["Preact", "React", "Github", "Heroku", "Webpack", "Babel", "PostCSS", "IE11", "React-router"],
  //     linkHub: "https://github.com/maxershov/gitHubDashboard",
  //     linkLive: "https://max-github-dashboard.herokuapp.com/",
  //     idImg: "img-GithubDashboard",
  //     src: [githubDashboardImg, githubDashboardWebp],
  //     id: "GithubDashboard",
  //     text: ["Framework: Preact", "State: react-router to save state between pages in URL", "Bundle: Webpack and Babel", "Browserslist: >1% (Internet Explorer 11)", "Backend: Express.js", "API: Github API"]
  //   },
  //   {
  //     name: "TELEGRAM MUSIC BOT",
  //     icons: ["Telegram", "Puppeteer"],
  //     linkHub: "https://github.com/maxershov/telegram-youtube-bot",
  //     linkLive: undefined,
  //     idImg: "img-Telegram",
  //     src: [telegramImg, telegramWebp],
  //     id: "Telegram",
  //     text: ["API: Node Telegram Bot API", "Backend: Puppeteer", "About: Control YouTubeMusic playback by multiple people", "Case: Used in crossfit club. Clips playing on TV in the gym, employees change track/volume/list with bot"]
  //   },
  //   {
  //     name: "KBTEAM PAGE",
  //     icons: ["Pug", "PostCSS", "Webpack", "ESLint", "SCSS"],
  //     linkHub: undefined,
  //     linkLive: "https://kbteam.ru/",
  //     idImg: "img-Baza",
  //     src: [bazaImg, bazaWebp],
  //     id: "Baza-page",
  //     text: ["Preprocessor: Pug", "Styles: SASS, postCSS", "Linting: Pug-lint", "Case: Lightweight landing page for crossfit club"]
  //   }
  // ]
};

const ruData = {
  "links": {
    "home": "ГЛАВНАЯ",
    "projects": "ПРОЕКТЫ",
    "contacts": "КОНТАКТЫ",
    "login": " ВХОД",
    "dark": "ТЕМНАЯ ТЕМА",
    "light": "СВЕТЛАЯ ТЕМА",
    "menu": "Открыть меню"
  },
  "modal": {
    "header": "Внимание",
    "text": "Страница на бесплатном сервере Heroku, и первая загрузка может занимать около 15 секунд",
    "wait": "Пожалуйста, подождите"
  },
  "title": {
    "a": "МАКСИМ ЕРШОВ",
    "b": "FRONTEND РАЗРАБОТЧИК",
    "c": "г.Москва",
    "d": ""
  },
  "textLinks": "Вы можете просмотреть мои <0>проекты</0> или связаться со мной <1>тут</1>",
  "projects": "МОИ ПРОЕКТЫ",
  "contacts": {
    "title": "КОНТАКТЫ",
    "placeholderMail": "E-mail адрес",
    "placeholderMsg": "Сообщение",
    "btn": "ОТПРАВИТЬ СООБЩЕНИЕ",
  }
  // projects: [
  //   {
  //     name: "CRM",
  //     icons: ["React", "Electron", "Redux", "Heroku", "Webpack", "ESLint", "Jest", "Knex.js", "PostCSS", "IE11", "React-router", "Redux-saga", "Babel"],
  //     linkHub: "https://github.com/maxershov/webcrm",
  //     linkLive: "https://react-crm-maxe.herokuapp.com/",
  //     src: [CRMimg, CRMwebp],
  //     id: "CRM",
  //     idImg: "img-CRM",
  //     text: [
  // "Фреймворк: React, Electron",
  // "Управление состоянием: Redux, Redux Saga",
  // "Сборка: Webpack(custom config) и Babel",
  // "Роутинг: react-router-dom",
  // "Стили: postCSS, тёмная тема",
  // "Линтер: ESLint с Airbnb конфигурацией",
  // "Тестирование: Jest, Puppeteer, Enzyme",
  // "Backend: Express.js + helmet, Knex.js, SQLite",
  // "Поддержка браузеров: >1% (Internet Explorer 11)",
  // "Кейс: Используется в кроссфит клубе (учёт авансов, посещений, сроков, сканер RFID карт, сортировка и поиск)"
  //     ]
  //   },
  //   {
  //     name: "ПОРТФОЛИО",
  //     icons: ["Preact", "React", "TypeScript", "PostCSS", "Webpack", "ESLint", "SCSS"],
  //     linkHub: "https://github.com/maxershov/Max-Ershov-Site",
  //     linkLive: "https://maksershov.ru/",
  //     idImg: "img-Site",
  //     src: [siteImg, siteWebp],
  //     id: "This-Site",
  //     text: ["Фреймворк: React(Preact)", "Язык: TypeScript", "Сервер: Express.js", "L10n: i18next", "Сборка: Webpack(custom config)", "Стили: postCSS, SASS + тёмная тема", "Линтер: ESLint с Airbnb-TS конфигурацией"]
  //   }, {
  //     name: "TIME COUNTER",
  //     icons: ["Svelte", "Heroku", "Webpack"],
  //     linkHub: "https://github.com/maxershov/svelte-time-counter",
  //     linkLive: "https://development-counter.herokuapp.com/",
  //     idImg: "img-Counter",
  //     src: [counterImg, counterWebp],
  //     id: "Counter",
  //     text: ["Фреймворк: Svelte", "Сборка: Webpack", "Сервер: Express.js + helmet"]
  //   },
  //   {
  //     name: "GITHUB DASHBOARD",
  //     icons: ["Preact", "React", "Github", "Heroku", "Webpack", "Babel", "PostCSS", "IE11", "React-router"],
  //     linkHub: "https://github.com/maxershov/gitHubDashboard",
  //     linkLive: "https://max-github-dashboard.herokuapp.com/",
  //     idImg: "img-GithubDashboard",
  //     src: [githubDashboardImg, githubDashboardWebp],
  //     id: "GithubDashboard",
  //     text: ["Фреймворк: Preact", "Управление состоянием: URL-параметры react-router", "Сервер: Express.js", "Сборка: Webpack и Babel", "Поддержка браузеров: >1% (Internet Explorer 11)", "API: GitHub API"]
  //   },
  //   {
  //     name: "TELEGRAM MUSIC BOT",
  //     icons: ["Telegram", "Puppeteer"],
  //     linkHub: "https://github.com/maxershov/telegram-youtube-bot",
  //     linkLive: undefined,
  //     idImg: "img-Telegram",
  //     src: [telegramImg, telegramWebp],
  //     id: "Telegram",
  //     text: ["API: Node Telegram Bot API", "Backend: Puppeteer", "О проекте: Telegram бот для контроля проигрываемой музыки", "Кейс: Используется в кроссфит клубе (вывод видео на ТВ в зал, сотрудники контролируют трек/плейлист/громкость через бот)"]
  //   },
  //   {
  //     name: "KBTEAM PAGE",
  //     icons: ["Pug", "PostCSS", "Webpack", "ESLint", "SCSS"],
  //     linkHub: undefined,
  //     linkLive: "https://kbteam.ru/",
  //     idImg: "img-Baza",
  //     src: [bazaImg, bazaWebp],
  //     id: "Baza-page",
  //     text: ["Препроцессор: Pug", "Стили: SASS, postCSS", "Линтер: Pug-lint", "Кейс: Быстрый лендинг для кроссфит клуба"]
  //   }
  // ]
};

export { updateL18n, ruData, enData };
