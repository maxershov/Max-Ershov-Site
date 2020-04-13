import * as React from "react";
import { useTranslation, Trans } from 'react-i18next';


const MainPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mainPage">
      <div className="mainPage__text _shadow">
        <h3>{t("title.a")}</h3>
        <h3>{t("title.b")}</h3>
        <p>{t("title.c")}</p>
        <p>{t("title.d")}</p>
      </div>

    </div>
  );
}

export default MainPage;