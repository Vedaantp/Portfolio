import React from "react";
import { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import {FaBars } from "react-icons/fa";
import { Nav, NavContainer, NavLogo, MobileIcon, MobileMenu, MobileMenuLink, NavItems, NavLink, ButtonContainer, GitHubButton, LinkedInButton, Span } from "./styles";
import { Bio } from "../../data/constants";

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    return(
        <Nav>

            <NavContainer>

                <NavLogo to="/">
                    <a href="/" style={{display:"flex", alignItems: "center", color: "white", marginBottom: "20", cursor: "pointer", textDecoration: "None"}}>
                        <DiCssdeck size="3rem" />
                        <Span>Vedaant Patel</Span>
                    </a>
                </NavLogo>

                <MobileIcon>
                    <FaBars
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                </MobileIcon>

                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                </NavItems>

                <ButtonContainer>
                    <LinkedInButton href={Bio.linkedin} target="_blank">
                        LinkedIn
                    </LinkedInButton>

                    <GitHubButton href={Bio.github} target="_blank">
                        GitHub
                    </GitHubButton>
                </ButtonContainer>

        {open && (
                <MobileMenu open={open}>
                    <MobileMenuLink href="#about" onClick={() => {setOpen(!open)}}>
                        About
                    </MobileMenuLink>

                    <MobileMenuLink href="#experience" onClick={() => {setOpen(!open)}}>
                        Experience
                    </MobileMenuLink>

                    <MobileMenuLink href="#projects" onClick={() => {setOpen(!open)}}>
                        Projects
                    </MobileMenuLink>

                    <MobileMenuLink href="#skills" onClick={() => {setOpen(!open)}}>
                        Skills
                    </MobileMenuLink>

                    <MobileMenuLink href="#education" onClick={() => {setOpen(!open)}}>
                        Education
                    </MobileMenuLink>

                    <LinkedInButton style={{padding: "10px 16px", background: `${theme.primary}`, color: "white", width: "max-content",}} href={Bio.linkedin} target="_blank">
                        LinkedIn
                    </LinkedInButton>

                    <GitHubButton style={{padding: "10px 16px", background: `${theme.primary}`, color: "white", width: "max-content",}} href={Bio.github} target="_blank">
                        GitHub
                    </GitHubButton>
                </MobileMenu>
        )}    
            </NavContainer>
        </Nav>
    );
}

export default Navbar