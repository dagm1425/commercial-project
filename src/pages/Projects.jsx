/* eslint-disable react/prop-types */
import Hero from '../components/projects/hero/Index.jsx';
import ProjectsOverview from '../components/projects/projects-overview/Index.jsx';

export default function Projects({ projects }) {
    return (
        <>
            <Hero />
            <ProjectsOverview projects={projects} />
        </>
    )
}