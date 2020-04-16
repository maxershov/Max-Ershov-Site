import * as React from "react";
import { useTranslation, Trans } from 'react-i18next';


const MainPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="mainPage">
      <div className="mainPage__text _shadow">
        <h1>{t("title.a")}</h1>
        <h1>{t("title.b")}</h1>
        <p>{t("title.c")}</p>
        <p>{t("title.d")}</p>
      </div>
    </section>
  );
}

export default MainPage;