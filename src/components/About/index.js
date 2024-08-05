import React from "react";
import { AboutContainer, AboutBg, AboutInnerContainer, AboutLeftContainer, AboutRightContainer, Img, Title, TextLoop, Span, ResumeButton, SubTitle } from "./styles";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import AboutImg from "../../images/about.jpeg";
import Resume from "../../images/VedaantPatelResume.pdf";

const About = () => {
    return (
        <div id="about">
            <AboutContainer>
                <AboutBg>

                </AboutBg>

                <AboutInnerContainer>
                    <AboutLeftContainer>
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Resume} target='_blank'>Check Resume</ResumeButton>
                    </AboutLeftContainer>

                    <AboutRightContainer>
                        <Img src={AboutImg} />
                    </AboutRightContainer>
                </AboutInnerContainer>
            </AboutContainer>
        </div>
    )
}

export default About