/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { t } = useTranslation();

  function handleOutsideClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.modal')) props.setShowModal(false);
  }


  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [])

  return (
    <div className="modal">
      <h3>{t("modal.header")}</h3>
      <p>{t("modal.text")}</p>
      <p>{t("modal.wait")}</p>
    </div>
  );
};

export default Modal;
