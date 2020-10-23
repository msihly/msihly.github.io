import React from "react";
import * as Media from "../../media";

const getIcon = type => {
    switch (type.toLowerCase()) {
        case "access": case "microsoft access": return Media.Skill.Access;
        case "apache": return Media.Skill.Apache;
        case "css": return Media.Skill.CSS;
        case "express": return Media.Skill.Express;
        case "html": return Media.Skill.HTML;
        case "javascript": return Media.Skill.JavaScript;
        case "mysql": return Media.Skill.MySQL;
        case "node": return Media.Skill.Node;
        case "php": return Media.Skill.PHP;
        case "r": return Media.Skill.R;
        case "react": return Media.Skill.React;
        case "redux": return Media.Skill.Redux;
        case "sass": return Media.Skill.SASS;
        case "sql": return Media.Skill.SQL;
        default: return null;
    }
};

const SkillIcon = ({ type }) => (
    <img className="skill-icon" src={getIcon(type)} title={type} alt={type} />
);

export default SkillIcon;