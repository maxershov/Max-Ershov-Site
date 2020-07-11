/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from "react";
import ProjectContent from "./ProjectContent";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { objCRM, objThis, ruCRM, ruThis, objCounter, ruCounter, objGithub, ruGithub, objTelegram, ruTelegram } from "./projectData";
import i18next from "i18next";




const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const currLanguage = i18next.language;
  const enObj = [objCRM, objTelegram, objGithub, objCounter, objThis];
  const ruObj = [ruCRM, ruTelegram, ruGithub, ruCounter, ruThis];

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let odd = true;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (odd) {
          entry.target.classList.add("slideLeft");
          odd = false;
        } else {
          entry.target.classList.add("slideRight");
          odd = true;
        }
        observer.unobserve(entry.target);
      }
    }, { threshold: 0 });

    enObj.forEach(obj => {
      observer.observe(document.getElementById(obj.id));
    })

    return () => { observer.disconnect(); }
  }, []);

  return (
    <section id="projects" className="projectsPage">
      {showModal && <Modal setShowModal={setShowModal} />}
      <h2>{t("projects")}</h2>
      <div className="projects">
        {currLanguage === "ru"
          ? ruObj.map(obj => <ProjectContent {...obj} setShowModal={setShowModal} />)
          : enObj.map(obj => <ProjectContent {...obj} setShowModal={setShowModal} />)}
      </div>
    </section>
  );
};


export default ProjectsPage;