import PropTypes from "prop-types";
import { ProjectPropType } from "../components/common/PropTypes.js";
import Hero from "../components/projects/hero/Index.jsx";
import ProjectsOverview from "../components/projects/projects-overview/Index.jsx";

export default function Projects({ projects }) {
  return (
    <>
      <Hero />
      <ProjectsOverview projects={projects} />
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(ProjectPropType).isRequired,
};
