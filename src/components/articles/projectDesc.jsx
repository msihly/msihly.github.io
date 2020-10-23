import React, { Children } from "react";
import { SkillIcon } from "../media";

const ProjectDesc = ({ children, title, link, skills, isInView }) => (
    <div className="project">
        <ConditionalLinkWrap condition={link} link={link}><h3 className="project-title">{title}</h3></ConditionalLinkWrap>
        { Children.map(children, child => child.type === "RepoLink" && child) }
        <div className="project-desc">{ Children.map(children, child => child.type !== "RepoLink" && child) }</div>
        { skills ? (
            <div className={`project-skills${isInView ? " in-view" : ""}`}>
                {skills.map(icon => <SkillIcon key={icon} type={icon} />)}
            </div>
        ) : null }
    </div>
);

const ConditionalLinkWrap = ({ condition, link, children }) => (
    condition ? <a className="project-link" href={link} title={link} target="_blank" rel="noopener noreferrer">{children}</a> : children
);

export default ProjectDesc;