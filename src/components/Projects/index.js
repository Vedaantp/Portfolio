import React from 'react';
import { Container, Wrapper, Title, CardContainer } from './styles';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';


const Projects = ({openModal,setOpenModal}) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <CardContainer>
          {projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects