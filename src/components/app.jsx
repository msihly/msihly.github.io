import React from "react";
import { Carousel, HeroImage } from "./media";
import { Link, ProjectDesc, Section } from "./articles";
import * as Media from "../media";
import "../css/index.scss";

const GITHUB_URL = "https://github.com/msihly/";

const App = () => (
    <div className="common home">
        <HeroImage heading="Mohamed Sihly" subheading="Full-Stack Web Developer" />
        <Section id="OneMark">
            <Carousel autoplay="3000" hasIndicators hasLightbox>
                <img src={Media.OneMark.Splash} alt="Splash art for OneMark" />
                <video src={Media.OneMark.Bookmark} />
                <video src={Media.OneMark.MultiTags} />
                <video src={Media.OneMark.Search} />
                <video src={Media.OneMark.DeleteAndSort} />
            </Carousel>
            <ProjectDesc title="OneMark" link="https://onemark.herokuapp.com/"
                skills={["React", "Redux", "Node", "Express", "SASS", "JavaScript", "CSS", "HTML", "PHP", "MySQL", "Apache"]}>
                <Link className="repo-link" url={`${GITHUB_URL}OneMark`}>OneMark</Link>
                <Link className="repo-link" url={`${GITHUB_URL}OneMark-Original-Public`}>OneMark-Original</Link>
                <ul>
                    <li>A responsive, image-based bookmark oragnizer featuring a gallery view, comprehensive search engine, and tagging system</li>
                    <li>Originally developed using vanilla HTML, CSS, JavaScript (ES6+), PHP, Apache, and MySQL to hone fundamentals</li>
                    <li>Refactored to use React, Redux, Express, Node, and SASS in order to learn contemporary front-end and back-end frameworks and libraries while improving future workflows</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="OneMark-Ext">
            <Carousel autoplay="6000" hasIndicators hasLightbox>
                <img src={Media.OneMark.Splash} alt="Splash art for OneMark" />
                <img src={Media.OneMarkExtOptions} alt="OneMark Add-On Extension - Options Page" />
            </Carousel>
            <ProjectDesc title="OneMark Add-On" link="https://chrome.google.com/webstore/detail/onemark/cjklnajnighcegajggjfmjecfidllinm"
                skills={["JavaScript", "Node", "Express", "CSS", "HTML", "PHP", "MySQL"]}>
                <Link className="repo-link" url={`${GITHUB_URL}OneMark-Ext`}>OneMark Add-On</Link>
                <ul>
                    <li>A companion Google Chrome extension for <Link url={`${GITHUB_URL}OneMark`} isNewTab>OneMark</Link>, which provides the ability to quickly create bookmarks of any page, including a screenshot of the active tab, using a convenient context menu or the more robust popup UI</li>
                    <li>Supports the usage of 2 separate accounts or 1 shared account between standard and incognito browsing for seamless browsing and convenience</li>
                    <li>Developed using vanilla HTML, CSS, JavaScript (ES6+), Chrome APIs, and MySQL</li>
                    <li>Server components originally written in PHP and Apache and later refactored to Node and Express with the refactoring of OneMark</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="Letter-Tiles">
            <Carousel autoplay="5000">
                <video src={Media.LetterTiles.Colors} />
                <video src={Media.LetterTiles.SnapAndDelete} />
                <video src={Media.LetterTiles.Elkonin} />
                <video src={Media.LetterTiles.Mobile} />
            </Carousel>
            <ProjectDesc title="Letter Tiles" link="https://msihly.github.io/letter-tiles" skills={["React", "Redux", "SASS", "JavaScript"]}>
                <Link className="repo-link" url={`${GITHUB_URL}letter-tiles`}>Letter Tiles</Link>
                <ul>
                    <li>A drag-and-drop letter tile board commissioned by a senior instructional specialist for use with educators and parents of children studying phonics</li>
                    <li>Customize page and tile colors using preset themes or custom-built HSL sliders for finer control of individual elements</li>
                    <li>Fully responsive from the drag-and-drop tile container to the tabbed grapheme selections, including seamless mouse and touch support</li>
                    <li>Built with React Hooks, Redux, SASS, and a custom implementation of the React-DnD library</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="ABC-Bank-Support">
            <Carousel>
                <video src={Media.ABCBankDemo} />
            </Carousel>
            <ProjectDesc title="ABC Bank - Customer Support System" link="https://abcbank-support.herokuapp.com/"
                skills={["JavaScript", "PHP", "MySQL", "CSS", "HTML", "Apache"]}>
                <Link className="repo-link" url={`${GITHUB_URL}ABC-Bank-Support`}>ABC Bank - Customer Support System</Link>
                <ul>
                    <li>Led two separate teams in creating a business case for a fictional bank, analyzing stakeholder requirements, and designing a customer support system using UML 2.0, project management software, and agile methodologies to create comprehensive documentation for each sprint</li>
                    <li>Developed a functional prototype using vanilla JavaScript (ES6+), HTML, and CSS for the front-end and PHP & MySQL for the back-end</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="VSCO-Imitation">
            <Carousel autoplay="5000" hasIndicators hasLightbox>
                <img src={Media.VSCO.Home} alt="VSCO Imitation - Homepage / feed" />
                <img src={Media.VSCO.Login} alt="VSCO Imitation - Login page" />
                <img src={Media.VSCO.Account} alt="VSCO Imitation - Account page" />
            </Carousel>
            <ProjectDesc title="VSCO Imitation" link="https://vsco-imitation.herokuapp.com/" skills={["JavaScript", "CSS", "HTML", "PHP", "MySQL", "Apache"]}>
                <Link className="repo-link" url={`${GITHUB_URL}VSCO-Imitation`}>VSCO Imitation</Link>
                <ul>
                    <li>A functional replica of the main UI components of the VSCO desktop website as well as selected back-end functionality</li>
                    <li>Features and pages implemented: homepage / feed, login page, and account details page</li>
                    <li>Any feature not implemented will notify as such with a toast when clicked</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="MEPS-Health-Expenditures">
            <Carousel autoplay="5000" hasIndicators hasLightbox>
                <img src={Media.MEPS.Code} alt="MEPS Health Expenditures - Code" />
                <img src={Media.MEPS.Graph1} alt="MEPS Health Expenditures - Probability Graph of Gender vs. Age" />
                <img src={Media.MEPS.Graph2} alt="MEPS Health Expenditures - Graph of Marriage Status vs. Age" />
            </Carousel>
            <ProjectDesc title="MEPS Health Expenditures" skills={["R"]}>
                <Link className="repo-link" url={`${GITHUB_URL}MEPS-Health-Expenditures`}>MEPS Health Expenditures</Link>
                <ul>
                    <li>Led a team of 6 in data-mining a subset of the MEPS 2003 survey to analyze relationships between health expenditures and related demographic & questionnare data</li>
                    <li>Developed codebase in R to generate and exhaustively test multi-linear and multiple-logistic regression models as well as automatically generate graphs for cursory visual inspection</li>
                    <li>Preliminary analysis included as comments at each step of the code, and an abridged edition of the formal report included in the <Link url={`${GITHUB_URL}MEPS-Health-Expenditures#data-mining-health-expenditures`} isNewTab>repository README</Link></li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="Robotniks">
            <Carousel autoplay="5000" hasIndicators hasLightbox>
                <img src={Media.Robotniks.ERModel} alt="Robotniks Database - Entity-Relationship Model" />
                <img src={Media.Robotniks.Order} alt="Robotniks Database - Order Form" />
                <img src={Media.Robotniks.Employee} alt="Robotniks Database - Employee Form" />
                <img src={Media.Robotniks.Manufacturer} alt="Robotniks Database - Manufacturer Form" />
            </Carousel>
            <ProjectDesc title="Robotniks Database" skills={["SQL", "Microsoft Access"]}>
                <Link className="repo-link" url={`${GITHUB_URL}Robotniks-Database`}>Robotniks Database</Link>
                <ul>
                    <li>A database design project written in Jet SQL and designed in Microsoft Access</li>
                    <li>Business scenario, entity-relationship model, normalization process, and final set of relations included in the <Link url={`${GITHUB_URL}Robotniks-Database#robotniks-inc-access-database`} isNewTab>repository README</Link></li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="Luigis-Pizza">
            <Carousel autoplay="4000" hasIndicators hasLightbox>
                <img src={Media.Luigis.View1} alt="Luigi's Pizza - 1" />
                <img src={Media.Luigis.View2} alt="Luigi's Pizza - 2" />
                <img src={Media.Luigis.View3} alt="Luigi's Pizza - 3" />
                <img src={Media.Luigis.View4} alt="Luigi's Pizza - 4" />
            </Carousel>
            <ProjectDesc title="Luigi's Pizza" skills={["CSS", "HTML", "JavaScript"]}>
                <Link className="repo-link" url={`${GITHUB_URL}Luigis-Pizza`}>Luigi's Pizza</Link>
                <ul>
                    <li>A simple, static page for a fictional pizza restaurant created in a few days for a web design project with a focus on vanilla HTML5 and CSS3</li>
                </ul>
            </ProjectDesc>
        </Section>
    </div>
);

export default App;
