import React from "react";
import * as Media from "../../media";

const getIcon = type => {
    switch (type.toLowerCase()) {
        case "apache": return Media.IconApache;
        case "css": return Media.IconCSS;
        case "express": return Media.IconExpress;
        case "html": return Media.IconHTML;
        case "mysql": return Media.IconMySQL;
        case "node": return Media.IconNode;
        case "php": return Media.IconPHP;
        case "react": return Media.IconReact;
        case "redux": return Media.IconRedux;
        case "sass": return Media.IconSASS;
        default: return null;
    }
};

const SkillIcon = ({ type }) => (
    <img className="skill-icon" src={getIcon(type)} title={type} alt={type} />
);

export default SkillIcon;