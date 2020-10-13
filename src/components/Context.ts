import React, { createContext } from 'react';
import { IProject } from './Project';

interface ContextData {
  title: {
    a: string;
    b: string;
    c: string;
    d: string;
  },
  projectsName: string,
  links: {
    home: string;
    projects: string;
    contacts: string;
    login: string;
    dark: string;
    light: string;
    menu: string;
  },
  contacts: {
    title: string;
    placeholderMail: string;
    placeholderMsg: string;
    btn: string;
  },
  projects?: [IProject];
}

const Context: React.Context<ContextData> = createContext(
  {
    title: {
      a: "HI",
      b: "I'M MAX. I'M A FRONTEND DEVELOPER",
      c: "Live in Russia. Moscow",
      d: "Thanks for your visit!"
    },
    projectsName: "MY PROJECTS",
    links: {
      home: "HOME",
      projects: "PROJECTS",
      contacts: "CONTACTS",
      login: "LOG IN",
      dark: "DARK THEME",
      light: "LIGHT THEME",
      menu: "Open menu"
    },
    contacts: {
      title: "CONTACT ME",
      placeholderMail: "E-mail address",
      placeholderMsg: "Message",
      btn: "SEND MESSAGE"
    }
  });

export default Context;