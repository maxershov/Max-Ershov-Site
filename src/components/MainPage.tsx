import React, { useContext } from "react";
import Context from './Context';

const MainPage: React.FC = () => {
  const t = useContext(Context);
  return (
    <section className="mainPage">
      <div className="fixedImg" />
      <div className="mainPage__text">
        <h1>{t?.title?.a}</h1>
        <h1>{t?.title?.b}</h1>
        <p>{t?.title?.c}</p>
        <p>{t?.title?.d}</p>
      </div>
    </section>
  );
}

export default MainPage;