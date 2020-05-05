/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import ProjectContent from "./ProjectContent";
import { useTranslation } from "react-i18next";
import { objCRM, objThis, ruCRM, ruThis, objCounter, ruCounter, objCovid, ruCovid } from "./projectData";
import i18next from "i18next";


const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const currLanguage = i18next.language;
  const enObj = [objThis, objCRM, objCounter, objCovid];
  const ruObj = [ruThis, ruCRM, ruCounter, ruCovid];
  let cardElements: HTMLElement[] = [];


  function getElements() {
    cardElements = enObj.map(obj => document.getElementById(obj.id));
  }

  function onScroll(event: MouseEvent) {
    /* add animation to cards */
    let odd = true;

    if (window.pageYOffset > cardElements[cardElements.length - 1].offsetTop) {
      window.removeEventListener('scroll', onScroll);
    }
    
    cardElements.forEach(element => {
      if (window.pageYOffset + window.innerHeight >= element.offsetTop) {
        if (odd) {
          element.classList.add("slideLeft");
          odd = false;
        } else {
          element.classList.add("slideRight");
          odd = true;
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    getElements();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <section id="projects" className="projectsPage">
      <h2>{t("projects")}</h2>
      <div className="projects">
        {currLanguage === "ru"
          ? ruObj.map(obj => <ProjectContent {...obj} />)
          : enObj.map(obj => <ProjectContent {...obj} />)}
      </div>
    </section>
  );
};

export default ProjectsPage;
