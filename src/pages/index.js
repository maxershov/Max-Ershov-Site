import React, { useEffect, useState } from "react";
import '../assets/App.scss';
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import ProjectsPage from '../components/ProjectsPage';
import ContactsPage from "../components/ContactsPage";

import Context from '../components/Context';

import { updateL18n } from '../components/state';


export default function Home() {
  const [data, setData] = useState({ loading: true });
  const [lng, setLng] = useState('en');

  useEffect(() => {
    const fetchData = async () => {
      const data = await updateL18n(lng);
      setData({ ...data, loading: false });
    }
    fetchData()
    document.getElementsByTagName('html')[0].setAttribute('lang', lng);
    lng === 'ru' ? document.title = "Макс Ершов" : document.title = "Max Ershov"
  }, [lng])


  useEffect(() => {
    // Check for language
    if (window.navigator.language === "ru" || window.navigator.language === "ru-RU") {
      setLng("ru")
    } else {
      setLng("en")
    }
  }, [])

  return <div>
    <Context.Provider value={data}>
      <Header setLng={setLng} />
      <MainPage></MainPage>
      {data.loading ? null : (<ProjectsPage />)}
      <ContactsPage />
    </Context.Provider>
  </div>
}
