import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "links": {
        "home": "HOME",
        "projects": "PROJECTS",
        "contacts": "CONTACTS",
        "login": "LOG IN",
        "dark": "DARK THEME",
        "light": "LIGHT THEME",
        "menu": "Open menu"
      },
      "modal": {
        "header": "Hey",
        "text": "The page hosted on Heroku free plan and first loading can take up to 15 seconds",
        "wait": "Thanks for your waiting"
      },
      "title": {
        "a": "HI",
        "b": "I'M MAX. I'M A FRONTEND DEVELOPER",
        "c": "Live in Russia. Moscow",
        "d": "Thanks for your visit!"
      },
      "textLinks": "You can read about my <0>projects</0> or contact me <1>here</1>",
      "projects": "MY PROJECTS",
      "contacts": {
        "title": "CONTACT ME",
        "placeholderMail": "E-mail address",
        "placeholderMsg": "Message",
        "btn": "SEND MESSAGE"
      },
    }
  },
  ru: {
    translation: {
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
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    whitelist: ["en", "ru"],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;