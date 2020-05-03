import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "links": {
        "home": "HOME",
        "projects": "PROJECTS",
        "contacts": "CONTACTS",
        "dark": "DARK THEME",
        "light": "LIGHT THEME"
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
        "placeholderMail": "E-mail adress",
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
        "dark": "ТЕМНАЯ ТЕМА",
        "light": "СВЕТЛАЯ ТЕМА"
      },
      "title": {
        "a": "МАКСИМ ЕРШОВ",
        "b": "FRONTEND РАЗРАБОТЧИК",
        "c": "г.Москва",
        "d": "Спасибо за ваш визит!"
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