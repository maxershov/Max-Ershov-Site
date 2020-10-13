
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
};

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

  
  const raw = await fetch(`https://maksershov.ru/dt/graphql/`, options)
  const res = await raw.json();
  const data = await res.data[projectDir].nodes.map((value) => value.projectsFields);
  return data;
}

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


export { updateL18n, ruData, enData };
