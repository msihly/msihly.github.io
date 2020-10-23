import React from "react";

const RepoLink = ({ link, title }) => (
    <a className="repo-link" href={link} title={link} target="_blank" rel="noopener noreferrer">{title}</a>
);

export default RepoLink;