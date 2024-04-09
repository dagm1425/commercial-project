/* eslint-disable react/prop-types */
import Hero from '../components/projects/hero/Index.jsx';
import ProjectsOverview from '../components/projects/projects-overview/Index.jsx';
import Contact from '../components/home/contact/Index.jsx';

export default function Projects({ projects }) {
    return (
        <>
            <Hero />
            <ProjectsOverview projects={projects} />
            <Contact />
        </>
    )
}