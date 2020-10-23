import React from "react";
import { Carousel, HeroImage } from "./media";
import { ProjectDesc, Section, RepoLink } from "./articles";
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
                <RepoLink link={`${GITHUB_URL}OneMark`} title="OneMark"/>
                <RepoLink link={`${GITHUB_URL}OneMark-Original-Public`} title="OneMark-Original"/>
                <ul>
                    <li>A responsive, image-based bookmark oragnizer featuring a gallery view, comprehensive search engine, and tagging system</li>
                    <li>Originally developed using vanilla HTML, CSS, JavaScript (ES6+), PHP, Apache, and MySQL to thoroughly practice fundamentals</li>
                    <li>Refactored (version 2.0) to use React, Redux, Node, Express, JSX, SASS, and MySQL to practice industry standard frameworks and libraries
                        and improve future development workflows</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="OneMark-Ext">
            <Carousel autoplay="3000" hasIndicators hasLightbox>
                <img src={Media.OneMark.Splash} alt="Splash art for OneMark" />
                <video src={Media.OneMark.MultiTags} />
            </Carousel>
            <ProjectDesc title="OneMark Add-On" link="https://chrome.google.com/webstore/detail/onemark/cjklnajnighcegajggjfmjecfidllinm"
                skills={["JavaScript", "Node", "Express", "CSS", "HTML", "PHP", "MySQL"]}>
                <RepoLink link={`${GITHUB_URL}OneMark-Ext`} title="OneMark Add-On"/>
                <ul>
                    <li>A companion Google Chrome extension for <a href={`${GITHUB_URL}OneMark`} base="_target" rel="noopener noreferrer">OneMark</a>, which
                        provides the ability to quickly create bookmarks of any page, including a screenshot of the active tab, using a convenient context menu or the
                        more robust popup UI</li>
                    <li>Supports the usage of 2 separate accounts or 1 shared account between standard and incognito browsing for seamless browsing and convenience</li>
                    <li>Developed using vanilla HTML, CSS, JavaScript (ES6+), Chrome Extension API, and MySQL</li>
                    <li>Server components originally written in PHP and Apache and later refactored to Node and Express with the OneMark refactoring (version 2.0)</li>
                </ul>
            </ProjectDesc>
        </Section>
        <Section id="ABC-Bank-Support">
            <Carousel>
                <video src={Media.ABCBankDemo} />
            </Carousel>
            <ProjectDesc title="ABC Bank - Customer Support System" link="https://abcbank-support.herokuapp.com/"
                skills={["JavaScript", "PHP", "MySQL", "CSS", "HTML", "Apache"]}>
                <RepoLink link={`${GITHUB_URL}ABC-Bank-Support`} title="ABC Bank - Customer Support System"/>
                <ul>
                    <li>A prototype system created for the fictional ABC Bank as part of a two-semester IT Project Management capstone course</li>
                    <li>Led a team of 5 in creating a business case for a fictional bank, analyzing business and stakeholder requirements, and designing a new secure and
                        robust customer support system using UML 2.0, project management software, and agile methodologies</li>
                    <li>Managed a new team of 4 in refining the system analysis & design; developing a functional prototype using vanilla JavaScript (ES6+), PHP, MySQL
                        HTML, and CSS; and creating a product demo video as well as comprehensive documentation for each sprint</li>
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
                <RepoLink link={`${GITHUB_URL}VSCO-Imitation`} title="VSCO Imitation"/>
                <ul>
                    <li>A partially functional imitation of the desktop version of VSCO created in 1 week for a Web Application Development final project</li>
                    <li>Features and pages implemented: homepage / feed, login page and functionality, and account details page and functionality</li>
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
                <RepoLink link={`${GITHUB_URL}MEPS-Health-Expenditures`} title="MEPS Health Expenditures"/>
                <ul>
                    <li>Led a team of 6 in data-mining a subset of the MEPS 2003 survey to analyze relationships between health expenditures and related demographic and questionnare data</li>
                    <li>Developed codebase in 1 week using R to exhaustively test multi-linear and multiple-logistic regression models</li>
                    <li>Preliminary analysis included as comments at each step of the code, and an abridged edition of the formal report included in the
                        <a href={`${GITHUB_URL}MEPS-Health-Expenditures#data-mining-health-expenditures`} target="_blank" rel="noopener noreferrer"> repository README</a></li>
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
                <RepoLink link={`${GITHUB_URL}Robotniks-Database`} title="Robotniks Database"/>
                <ul>
                    <li>A database design project written in Jet SQL and designed in Microsoft Access</li>
                    <li>Business scenario, entity-relationship model, normalization process, and final set of relations included in the
                        <a href={`${GITHUB_URL}Robotniks-Database#robotniks-inc-access-database`} target="_blank" rel="noopener noreferrer"> repository README</a></li>
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
                <RepoLink link={`${GITHUB_URL}Luigis-Pizza`} title="Luigi's Pizza"/>
                <ul>
                    <li>A simple, static page for a fictional pizza restaurant created in a few days for a web design project with a focus on vanilla HTML5 and CSS3</li>
                </ul>
            </ProjectDesc>
        </Section>
    </div>
);

export default App;
