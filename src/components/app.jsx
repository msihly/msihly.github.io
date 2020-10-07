import React, { Component } from "react";
import { Carousel, HeroImage } from "./media";
import { ProjectDesc, Section } from "./articles";
import * as Media from "../media";
import "../css/index.scss";

class App extends Component {
	render() {
		return (
            <div className="common home">
                <HeroImage heading="Mohamed Sihly" subheading="Full-Stack Web Developer" />
                <Section>
                    <Carousel autoplay="5000" hasIndicators>
                        <img src={Media.HeroImage} alt="" />
                        <video src={Media.SmallWebM} />
                        <img src={Media.IconApache} alt="" />
                        <video src={Media.LargeWebM} />
                        <img src={Media.HeroImage} alt="" />
                        <img src={Media.IconApache} alt="" />
                    </Carousel>
                    <ProjectDesc title="OneMark" skills={["React", "Redux", "Node", "Express", "MySQL", "SASS", "CSS", "HTML", "PHP"]}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </ProjectDesc>
                </Section>
                <Section>
                    <Carousel hasIndicators>
                        <img src={Media.HeroImage} alt="" />
                        <img src={Media.IconApache} alt="" />
                    </Carousel>
                    <ProjectDesc title="OneMark" skills={["React", "Redux", "Node", "Express", "MySQL", "SASS", "CSS", "HTML", "PHP"]}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </ProjectDesc>
                </Section>
                <Section>
                    <Carousel hasIndicators>
                        <img src={Media.HeroImage} alt="" />
                        <img src={Media.IconApache} alt="" />
                    </Carousel>
                    <ProjectDesc title="OneMark" skills={["React", "Redux", "Node", "Express", "MySQL", "SASS", "CSS", "HTML", "PHP"]}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </ProjectDesc>
                </Section>
            </div>
		);
	}
}

export default App;
