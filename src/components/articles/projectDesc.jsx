import React from "react";
import SkillIcon from "../media/skillIcon";

const ProjectDesc = ({ children, title, skills, isInView }) => (
    <div className="project">
        <h3 className="project-title">{title}</h3>
        <div className="project-desc">{children}</div>
        { skills ? (<div className={`project-skills${isInView ? " in-view" : ""}`}>
            {skills.map(icon => <SkillIcon key={`${title}-${icon}`} type={icon} />)}
        </div>) : null}
    </div>
);

export default ProjectDesc;