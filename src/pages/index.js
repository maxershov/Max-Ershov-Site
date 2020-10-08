import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import '../assets/App.scss';
import MainPage from '../components/MainPage';
import Header from '../components/Header';
import ProjectsPage from '../components/ProjectsPage';
import ContactsPage from "../components/ContactsPage";
import Context from '../components/Context';
import { updateL18n } from '../components/state';
import siteImg from '../images/site.jpg'


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
      <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="title" content="Max's Portfolio" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel='icon' href='favicon.ico' type='image/x-icon' />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <meta name="description" content="Hi! Check out my projects and contact me here" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://maksershov.ru/" />
      <meta property="og:title" content="Max's Portfolio" />
      <meta property="og:description" content="Hi! Check out my projects and contact me here" />
      <meta property="og:image" content={`https://maksershov.ru/${siteImg}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://maksershov.ru/" />
      <meta property="twitter:title" content="Max's Portfolio" />
      <meta property="twitter:description" content="Hi! Check out my projects and contact me here" />
      <meta property="twitter:image"  content={`https://maksershov.ru/${siteImg}`} />
      </Helmet>
      <Header setLng={setLng} />
      <MainPage></MainPage>
      {data.loading ? null : (<ProjectsPage />)}
      <ContactsPage />
    </Context.Provider>
  </div>
}
