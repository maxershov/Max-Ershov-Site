import React, { useEffect, useState, useContext } from "react";
import { Project } from "./Project";
import Context from './Context';

require(`intersection-observer`);


const ProjectsPage: React.FC = () => {
    const t = useContext(Context);

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

        t.projects.forEach(obj => {
            observer.observe(document.getElementById(obj.id));
        })

        return () => { observer.disconnect(); }
    }, [t]);

    return (
        <section id="projects" className="projectsPage">
            <h2>{t?.projectsName}</h2>
            <div className="projects">
                {
                    t.projects.map(obj => (<Project {...obj} key={obj?.name} />))
                }
            </div>
        </section>
    );
};


export default ProjectsPage;
