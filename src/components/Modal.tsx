import React from "react";
import { useTranslation } from "react-i18next";

const Modal: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="modal">
      <h3>{t("modal.header")}</h3>
      <p>{t("modal.text")}</p>
      <p>{t("modal.wait")}</p>
    </div>
  );
};

export default Modal;
